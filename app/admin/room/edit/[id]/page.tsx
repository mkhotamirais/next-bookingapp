import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import EditRoomForm from "./EditRoomForm";
import { getAmenities, getRoomById } from "@/lib/data";

export default async function EditRoomId({ params }: { params: Promise<{ id: string }> }) {
  const roomId = (await params).id;
  if (!roomId) return notFound();

  const [amenities, room] = await Promise.all([getAmenities(), getRoomById(roomId)]);
  if (!amenities || !room) return notFound();

  return (
    <section className="py-8">
      <div className="container">
        <h1 className="h1">Edit Room</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <EditRoomForm amenities={amenities} room={room} />
        </Suspense>
      </div>
    </section>
  );
}
