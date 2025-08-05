import React from "react";
import LoginGoogle from "./LoginGoogle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
};

export default function Signin() {
  return (
    <section className="bg-gray-100">
      <div className="container py-12">
        <div className="p-4 max-w-sm mx-auto w-full rounded bg-white shadow">
          <h1 className="h1">Sign in</h1>
          <p>Sign in to your account</p>
          <LoginGoogle />
        </div>
      </div>
    </section>
  );
}
