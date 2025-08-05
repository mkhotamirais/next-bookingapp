"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { adminMenu, mainMenu, userMenu } from "@/lib/content";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  let menu = mainMenu;
  if (session) {
    if (session.user.role === "admin") {
      menu = [...mainMenu, ...userMenu, ...adminMenu];
    } else {
      menu = [...mainMenu, ...userMenu];
    }
  }
  return (
    <header className="h-16 border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="container flex items-center justify-between">
        <Logo />

        {/* mobile nav */}
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setOpen(!open)} className="p-1.5 rounded border border-gray-500">
            {open ? <IoClose className="size-6" /> : <IoMenu className="size-6" />}
          </button>
          <div
            onClick={() => setOpen(false)}
            className={clsx("fixed inset-0 transition-all", open ? "visible opacity-100" : "invisible opacity-0")}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={clsx(
                "absolute top-16 bg-white w-full transition-all origin-top",
                open ? "scale-y-100" : "scale-y-0"
              )}
            >
              <div className="border-b border-gray-200 p-3">
                {menu.map((item, i) => (
                  <Link
                    onClick={() => setOpen(false)}
                    key={i}
                    href={item.url}
                    className="w-full block py-2 px-3 text-gray-600 hover:bg-gray-200 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
                {session ? (
                  <button type="button" onClick={() => signOut()} className="btn block mt-2">
                    Signout
                  </button>
                ) : (
                  <Link href="/signin" onClick={() => setOpen(false)} className="btn block mt-2 ">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* desktop nav */}
        <div className="hidden lg:flex items-center">
          {menu.map((item, i) => (
            <Link key={i} href={item.url} className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
              {item.label}
            </Link>
          ))}
          {session ? (
            <>
              <div className="ml-4">
                <Image
                  src={session.user.image as string}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <button
                type="button"
                onClick={() => signOut()}
                className="text-sm ml-4 bg-gray-100 py-2 px-3 hover:bg-gray-200"
              >
                Signout
              </button>
            </>
          ) : (
            <Link href="/signin" onClick={() => setOpen(false)} className="btn text-sm ml-4">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
