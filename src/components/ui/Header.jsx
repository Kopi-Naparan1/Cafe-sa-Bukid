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
    <header className="sticky top-0 z-50 border-b-2 border-dark bg-background/95 text-dark shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 rounded-full">
          <Image
            className="rounded-full ring-2 ring-dark transition-all group-hover:ring-dark/70"
            width={52}
            height={52}
            loading="eager"
            src="/CafesaBukidLogo.png"
            alt="Cafe sa Bukid Logo"
          />
          <span>
            <span className="block font-heading text-sm tracking-tight sm:text-base">
              Cafe sa Bukid
            </span>
            <span className="block text-xs tracking-tight text-dark/60 sm:text-sm">
              Malaybalay, Bukidnon
            </span>
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`inline-flex rounded-xl border-2 px-4 py-2 transition-all ${
                      isActive
                        ? "border-primary bg-primary/10"
                        : "border-transparent hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="cursor-pointer rounded-full p-2 ring-2 ring-dark transition-all duration-150 hover:ring-dark/70 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-dark/15 bg-background md:hidden"
        >
          <nav className="mx-auto w-full max-w-6xl px-4 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl border-2 px-4 py-3 transition-all ${
                        isActive
                          ? "border-primary bg-primary/10"
                          : "border-transparent hover:border-primary/30 hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
