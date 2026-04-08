"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] text-dark justify-between min-h-12.5 px-4 md:px-6 items-center border-dark border-b-2 rounded-b-2xl lg:px-8 flex flex-row py-2 w-full h-6">
      <div className="flex flex-row">
        {" "}
        <Link
          key={navItems[0].label}
          href={navItems[0].href}
          className=" group inline-flex items-center justify-center  rounded-full"
        >
          <Image
            className="ring-2  ring-dark group-hover:ring-dark/70 rounded-full transition-all"
            width={50}
            height={50}
            loading="eager"
            src="/CafesaBukidLogo.png"
            alt="Cafe sa Bukid Logo"
          />
        </Link>
        <span className="pl-2  ">
          <h3 className="text-sm tracking-tight">Cafe sa Bukid</h3>{" "}
          <p className="text-dark/50 text-xs  tracking-tight">
            Malaybalay, Bukidnon
          </p>
        </span>
      </div>

      <nav className=" md:block hidden">
        <ul className="flex gap-4 ">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`p-2 rounded-xl border-2 transition-all ${isActive ? "border-primary" : "border-transparent hover:border-primary/30"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </ul>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ring-2  ring-dark hover:ring-dark/70 rounded-full duration-150 transition-all p-2 cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full  border-dark border-b-1 rounded-b-2xl bg-background shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] md:hidden transition-all duration-150">
          {" "}
          <ul className="flex flex-col gap-4 py-4 ">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`mx-4  p-2 rounded-xl border-2 transition-all ${isActive ? "border-primary" : "border-transparent hover:border-primary/30"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
