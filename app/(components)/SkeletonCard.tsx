import React from "react";

export default function SkeletonCard() {
  return (
    <div className="bg-white shadow-lg rounded-sm animate-pulse">
      <div className="h-[400px] w-auto bg-white shadow rounded-sm">
        <div className="h-[240px] w-full bg-gray-200"></div>
        <div className="p-8">
          <div className="h-8 w-56 bg-gray-100 rounded mb-2"></div>
          <div className="h-8 w-48 bg-gray-100 rounded"></div>
          <div className="flex justify-between items-center">
            <div className="h-8 w-24 bg-gray-100 rounded my-2"></div>
            <div className="h-8 w-12 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
