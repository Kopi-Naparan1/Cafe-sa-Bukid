"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-50 mb-8 rounded-card border border-white/70 bg-white/80 px-4 py-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur-md sm:px-container-md">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
            <Image
              src="/CafesaBukidLogo.jpg"
              alt="Cafe sa Bukid logo"
              fill
              sizes="50px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-heading text-lg text-dark">
              Cafe sa Bukid
            </span>
            <span className="text-xs uppercase tracking-[0.28em] text-muted">
              Malaybalay, Bukidnon
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-surface p-3 text-dark transition hover:border-primary/30 hover:bg-primary/50 hover:text-dark focus:outline-none focus:ring-2 focus:ring-primary sm:hidden"
        >
          <span className="relative block h-5 w-5">
            <Menu
              aria-hidden="true"
              className={`absolute inset-0 h-5 w-5 transition-all duration-150 motion-reduce:transition-none ${
                isMenuOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <X
              aria-hidden="true"
              className={`absolute inset-0 h-5 w-5 transition-all duration-150 motion-reduce:transition-none ${
                isMenuOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            />
          </span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`absolute left-0 top-full mt-3 w-full rounded-card border border-white/70 bg-white/95 p-3 shadow-elevated backdrop-blur-md sm:static sm:mt-0 sm:w-auto sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none ${
            isMenuOpen ? "block" : "hidden"
          } sm:block`}
        >
          {/* The mobile menu uses the same nav links as desktop, just stacked vertically. */}
          <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
            {navItems.map((item) => {
              // Keep the current route highlighted, including nested pages like /about/team.
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-dark hover:bg-primary/50 hover:text-dark/80 focus-visible:bg-primary/50 focus-visible:text-dark/80"
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
