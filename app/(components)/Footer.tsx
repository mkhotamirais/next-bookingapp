import React from "react";
import Logo from "./Logo";
import { footerMenuLegal, footerMenuLinks } from "@/lib/content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container pt-12 pb-8 grid lg:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis blanditiis, nostrum quisquam eveniet
            corrupti mollitia!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="h3 mb-4">Links</h3>
            {footerMenuLinks.map((item, i) => (
              <Link key={i} href={item.url} className="block mt-2 text-sm text-gray-400 hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="h3 mb-4">Legal</h3>
            {footerMenuLegal.map((item, i) => (
              <Link key={i} href={item.url} className="block mt-2 text-sm text-gray-400 hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="h3">Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <form className="space-y-2 mt-4">
            <input
              type="text"
              className="py-2 px-3 rounded-md w-full bg-white placeholder:text-gray-300"
              placeholder="example@gmail.com"
            />
            <button type="submit" className="btn block text-center w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container py-4 text-sm text-center border-t border-gray-700">
        <p className="text-gray-400">&copy; Copyrigyt 2025 | Coder Medi | All rights reserved</p>
      </div>
    </footer>
  );
}
