import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

// Metadata (title, description, etc.)
export const metadata = {
  title: "Café sa Bukid",
  description:
    "A cafe located in Malaybalay, Bukidnon, Philippines, offering a cozy atmosphere and delicious coffee made from locally sourced beans.",
};

// Viewport configuration (separate export)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-body bg-background  custom-scroll">
      <body className="flex min-h-screen max-w-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
        <Footer></Footer>
      </body>
    </html>
  );
}
