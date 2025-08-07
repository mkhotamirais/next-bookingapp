import React from "react";
import { LuChartArea, LuShoppingCart, LuUsers } from "react-icons/lu";
import { getRevenueAndReserve, getTotalCustomer } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function DashboardCard() {
  const [data, customer] = await Promise.all([getRevenueAndReserve(), getTotalCustomer()]);
  if (!data || !customer) return notFound();

  return (
    <div className="grid grid-cols-3 gap-5">
      <div>
        <LuChartArea />
        <span>Total Revenue</span>
        <span>{formatCurrency(data.revenue)}</span>
      </div>
      <div>
        <LuShoppingCart />
        <span>Total Reservation</span>
        <span>{data.reserve}</span>
      </div>
      <div>
        <LuUsers />
        <span>Total Customers</span>
        <span>{customer.length}</span>
      </div>
    </div>
  );
}
