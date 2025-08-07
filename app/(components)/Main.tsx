import React from "react";
import Card from "./Card";
import { getRooms } from "@/lib/data";

export default async function Main() {
  const rooms = await getRooms();
  if (!rooms?.length) return <p>No Rooms</p>;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {rooms.map((room) => (
        <Card key={room.id} room={room} />
      ))}
    </div>
  );
}
