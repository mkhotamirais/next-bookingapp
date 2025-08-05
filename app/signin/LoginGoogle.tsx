import React from "react";
import { FaG } from "react-icons/fa6";
import { signIn } from "@/auth";

export default function LoginGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="btn mt-4 w-full flex items-center justify-center gap-2">
        <FaG /> Login With Google
      </button>
    </form>
  );
}
