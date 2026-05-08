"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 rounded-b-2xl border-b-2 border-primary/80 bg-secondary-light  text-background/60 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 rounded-xl p-1 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Image
            className="rounded-full ring-2 bg-background/50 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] ring-background/70 transition-all group-hover:ring-accent/50"
            width={44}
            height={44}
            loading="eager"
            src="/CafesaBukidLogo.png"
            alt="Cafe sa Bukid Logo"
          />
          <span className="leading-tight">
            <span className="block font-heading text-sm font-semibold tracking-tight sm:text-base">
              Cafe sa Bukid
            </span>
            <span className="block text-xs tracking-tight text-background/60 /55 sm:text-sm">
              Malaybalay, Bukidnon
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex rounded-xl border-2 px-4 py-1.5 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "border-accent bg-accent/40 text-background/70"
                        : "border-transparent text-background/60 hover:border-primary/20 hover:bg-accent/20 hover:text-background/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="cursor-pointer rounded-full p-2 ring-2 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] ring-dark/70 transition-all duration-150 hover:bg-dark/5 hover:ring-dark/50 focus-visible:outline-none focus-visible:ring-primary md:hidden"
        >
          {isOpen ? (
            <X size={18} strokeWidth={2.5} />
          ) : (
            <Menu size={18} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100  " : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto w-full max-w-6xl border-t border-dark/10 px-4 py-3"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "border-accent bg-accent/50 text-background/70"
                        : "border-transparent text-background/60 hover:border-primary/25 hover:bg-accent/30 hover:text-background/40"
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
    </header>
  );
}
