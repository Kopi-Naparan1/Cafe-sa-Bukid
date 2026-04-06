import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata = {
  title: "Cafe sa Bukidnon",
  description:
    "A cafe located in Malaybalay, Bukidnon, Philippines, offering a cozy atmosphere and delicious coffee made from locally sourced beans.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-body bg-background text-dark">
      <body className="flex min-h-screen max-w-full  flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
