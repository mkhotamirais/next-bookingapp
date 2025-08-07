import React from "react";
import LoginGoogle from "./LoginGoogle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
};

export default async function Signin({ searchParams }: { searchParams: Promise<{ redirect_url: string }> }) {
  const params = (await searchParams)?.redirect_url;
  let redirectUrl;
  if (!params) {
    redirectUrl = "/";
  } else {
    redirectUrl = `/${params}`;
  }
  return (
    <section className="bg-gray-100">
      <div className="container py-12">
        <div className="p-4 max-w-sm mx-auto w-full rounded bg-white shadow">
          <h1 className="h1">Sign in</h1>
          <p>Sign in to your account</p>
          <LoginGoogle redirectUrl={redirectUrl} />
        </div>
      </div>
    </section>
  );
}
