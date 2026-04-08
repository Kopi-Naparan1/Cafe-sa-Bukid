// import Link from "next/link";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/menu", label: "Menu" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="border-t border-primary/15 bg-surface">
//       <div className="mx-auto grid w-full max-w-content gap-6 px-4 py-8 sm:px-container-md md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
//         <div className="space-y-3">
//           <p className="font-heading text-2xl text-dark">Cafe sa Bukid</p>
//           <p className="max-w-xl text-sm leading-7 text-muted">
//             A relaxed cafe stop in Malaybalay, Bukidnon for coffee, comfort
//             food, and unhurried conversations.
//           </p>
//         </div>

//         <nav aria-label="Footer">
//           <ul className="flex flex-wrap gap-2">
//             {links.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium text-dark transition hover:bg-primary/10"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </footer>
//   );
// }
