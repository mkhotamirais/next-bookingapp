import RoomTable from "@/app/(components)/RoomTable";
import Link from "next/link";
import React, { Suspense } from "react";

export default function AdminRoom() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h1 className="h1 !mb-0">Room List</h1>
          <Link href="/admin/room/create" className="btn">
            Create Room
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <RoomTable />
        </Suspense>
      </div>
    </section>
  );
}
