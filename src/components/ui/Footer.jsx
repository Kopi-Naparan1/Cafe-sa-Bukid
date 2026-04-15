import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 pt-[clamp(2rem,6vh,3rem)]  font-sans bg-secondary/50 rounded-t-2xl">
      <div className="mx-auto w-full max-w-content px-4 sm:px-container-md grid gap-8 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* BRAND */}
        <div className="text-center sm:text-left">
          <p className="text-[17px] font-medium text-dark tracking-tight mb-2">
            Cafe sa Bukid
          </p>
          <p className="text-[13px] leading-relaxed text-muted max-w-55 mx-auto sm:mx-0 mb-4">
            A relaxed stop in Bukidnon for coffee, comfort food, and unhurried
            conversations.
          </p>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:inline-flex hidden  items-center gap-1.5 text-xs font-medium text-dark/60 border border-primary/20 rounded-md px-2.5 py-1.5 hover:bg-secondary-light transition"
          >
            Message us
          </a>
        </div>

        {/* NAV */}
        <nav aria-label="Footer pages" className="text-center sm:text-left">
          <p className="text-[10px] uppercase tracking-widest text-muted/60 mb-3">
            Pages
          </p>
          <ul className="flex flex-col gap-2">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-dark/60 hover:text-dark transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* HOURS */}
        <div className="text-center sm:text-left">
          <p className="text-[10px] uppercase tracking-widest text-muted/60 mb-3">
            Hours
          </p>

          <p className="text-[13px] text-dark/60">8 AM – 6 PM daily</p>
          <p className="text-[13px] text-dark/60 mt-2">
            No reservations needed
          </p>
        </div>

        {/* VISIT */}
        <div className="text-center sm:text-left">
          <p className="hidden md:block text-[10px] uppercase tracking-widest text-muted/60 mb-3">
            Visit
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=8.05238,124.9021849"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-dark bg-primary/10 border border-primary/25 rounded-md px-3 py-1.5 hover:bg-primary/20 transition"
          >
            Get directions
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mx-auto max-w-content px-4 sm:px-container-md mt-8 border-t border-primary/10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-muted/60">
          © {new Date().getFullYear()} Cafe sa Bukid. All rights reserved.
        </p>
        <span className="text-[11px] text-muted/50">Bukidnon, PH</span>
      </div>
    </footer>
  );
}
