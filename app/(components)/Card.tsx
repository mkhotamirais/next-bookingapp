import Image from "next/image";
import React from "react";
import { IoPeople } from "react-icons/io5";

export default function Card() {
  return (
    <div className="shadow-md">
      <Image src="/mimbar-lg.jpg" alt="mimbar" width={500} height={500} className="h-72 object-cover object-center" />
      <div className="p-3 space-y-2">
        <h3 className="h3">Luxury Room</h3>
        <p>
          Rp2.100.000 <span>/night</span>
        </p>
        <div className="flex items-center justify-between">
          <p className="flex gap-2">
            <IoPeople className="size-6" /> <span>2 Peoples</span>
          </p>
          <button type="button" className="btn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
