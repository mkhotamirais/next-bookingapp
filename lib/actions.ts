"use server";

import z from "zod";
import { ContactSchema, ReserveSchema, RoomSchema } from "./zod";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { differenceInCalendarDays } from "date-fns";

export const createReserve = async (
  roomId: string,
  price: number,
  startDate: Date | null,
  endDate: Date | null,
  prevState: unknown,
  formData: FormData
) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) redirect(`/signin?redirect_url=room/${roomId}`);

  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };

  const validatedFields = ReserveSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { error: z.treeifyError(validatedFields.error) };
  }

  const { name, phone } = validatedFields.data;
  const night = differenceInCalendarDays(endDate as Date, startDate as Date);
  if (night < 0) return { messageDate: "Date must be at least 1 night" };
  const total = night * price;

  let reservationId;

  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        data: { name, phone },
        where: { id: session.user.id },
      });

      const reservation = await tx.reservation.create({
        data: {
          startDate: startDate as Date,
          endDate: endDate as Date,
          price,
          roomId,
          userId: session.user.id as string,
          Payment: { create: { amount: total } },
        },
      });
      reservationId = reservation.id;
    });
  } catch (error) {
    console.log(error);
  }
  redirect(`/checkout/${reservationId}`);
};

export const updateRoom = async (image: string, roomId: string, prevState: unknown, formData: FormData) => {
  if (!image) return { message: "Image is required" };
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const vlidatedFields = RoomSchema.safeParse(rawData);
  if (!vlidatedFields.success) {
    return { error: z.treeifyError(vlidatedFields.error), values: rawData };
  }

  const { name, description, capacity, price, amenities } = vlidatedFields.data;
  try {
    await prisma.$transaction([
      prisma.room.update({
        where: { id: roomId },
        data: { name, description, capacity, price, image, RoomAmenities: { deleteMany: {} } },
      }),
      prisma.roomAmenities.createMany({
        data: amenities.map((amenity) => ({ amenitiesId: amenity, roomId: roomId })),
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/room");
  redirect("/admin/room");
};

export const deleteRoom = async (id: string, image: string) => {
  try {
    await del(image);
    await prisma.room.delete({ where: { id } });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/room");
};

export const saveRoom = async (image: string, prevState: unknown, formData: FormData) => {
  if (!image) return { message: "Image is required" };
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  console.log(rawData);
  console.log(image);

  const vlidatedFields = RoomSchema.safeParse(rawData);
  if (!vlidatedFields.success) {
    return { error: z.treeifyError(vlidatedFields.error), values: rawData };
  }

  const { name, description, capacity, price, amenities } = vlidatedFields.data;
  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        price,
        capacity,
        RoomAmenities: { createMany: { data: amenities.map((amenity) => ({ amenitiesId: amenity })) } },
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/admin/room");
};

export const contactMessage = async (prevState: unknown, formData: FormData) => {
  const rawData = Object.fromEntries(formData.entries());

  const validatedFields = ContactSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { error: z.treeifyError(validatedFields.error), values: rawData };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({ data: { name, email, subject, message } });
    return { message: "Thanks for contact us" };
  } catch (error) {
    console.log(error);
  }
};
