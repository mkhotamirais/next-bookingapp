import { Suspense } from "react";
import Main from "../(components)/Main";
import { Metadata } from "next";
import SkeletonRoom from "../(components)/SkeletonRoom";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description: "Choose your best room today",
};

export default function Room() {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container text-center">
          <h1 className="h1">Rooms & Rates</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <Suspense fallback={<SkeletonRoom />}>
            <Main />
          </Suspense>
        </div>
      </section>
    </>
  );
}
