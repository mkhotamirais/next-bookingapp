import Image from "next/image";
import { formatCurrency, formatDate } from "@/lib/utils";
import { getReservationByUserId } from "@/lib/data";
import { notFound } from "next/navigation";
import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";

export default async function MyReserveList() {
  const reservation = await getReservationByUserId();
  if (!reservation) return notFound();
  return (
    <div className="grid grid-cols-3 gap-3">
      {reservation.map((item) => (
        <div key={item.id} className="border p-3">
          <div>Reservation ID: {item.id}</div>
          <div>Status: {item.Payment?.status}</div>
          <div>
            <Image src={item.Room.image} width={500} height={500} alt="mimbar" />
          </div>
          <div>Price: {formatCurrency(item.Room.price)}</div>
          <div>Arrival: {formatDate(item.startDate.toISOString())}</div>
          <div>Departure: {formatDate(item.endDate.toISOString())}</div>
          <div>Duration: {differenceInCalendarDays(item.endDate, item.startDate)}</div>
          <div>Sub Total: {item.Payment && formatCurrency(item.Payment.amount)}</div>
          <div>
            {item.Payment?.status === "unpaid" ? (
              <Link href={`/checkout/${item.id}`} className="btn block w-fit">
                Pay Now
              </Link>
            ) : (
              <Link href={`/myreservation/${item.id}`} className="btn block w-fit">
                View Detail
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
