import Image from "next/image";
import Link from "next/link";
import Main from "./(components)/Main";
import { Suspense } from "react";
import SkeletonRoom from "./(components)/SkeletonRoom";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-8rem)] relative flex items-center justify-center bg-black/40">
        <Image
          src="/mimbar-lg.jpg"
          alt="mimbar"
          width={1920}
          height={1080}
          className="absolute object-cover object-center -z-10 w-full h-full"
        />
        <div className="container text-left sm:text-center flex flex-col items-start sm:items-center text-white space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold">Book You Luxury Room</h1>
          <p className="text-lg">Get Special offer just for you toay.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/room"
              className="text-sm sm:text-base py-3 px-6 rounded bg-primary border border-primary hover:bg-primary/80"
            >
              Book Now
            </Link>
            <Link
              href="/room"
              className="text-ms sm:text-base py-3 px-6 rounded border border-primary hover:bg-primary/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h2 className="h2 mb-4">Room & Rates</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <Suspense fallback={<SkeletonRoom />}>
            <Main />
          </Suspense>
        </div>
      </section>
    </>
  );
}
