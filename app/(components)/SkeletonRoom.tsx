import React from "react";
import SkeletonCard from "./SkeletonCard";

export default function SkeletonRoom() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
