import Image from "next/image";
import React from "react";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export default function About() {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container text-center">
          <h1 className="h1">About Us</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container space-y-4 grid lg:grid-cols-2 gap-8">
          <div>
            <Image
              src="/mimbar-lg.jpg"
              alt="mimbar"
              width={500}
              height={500}
              className="h-72 object-cover object-center"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="h2 flex gap-2 items-center">Who We Are</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dignissimos molestias dolorum.</p>
            </div>
            <div>
              <h3 className="h3 flex gap-2 items-center">
                <IoEyeOutline />
                Vision
              </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae repudiandae ullam.</p>
            </div>
            <div>
              <h3 className="h3 flex gap-2 items-center">
                <IoLocateOutline />
                Mission
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, assumenda.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
