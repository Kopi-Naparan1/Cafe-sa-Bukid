import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {
  defaultSeo,
  localBusinessJsonLd,
  metadataForRoute,
  siteUrl,
} from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...metadataForRoute("/"),
  title: {
    default: defaultSeo.title,
    template: `%s | ${defaultSeo.title}`,
  },
  applicationName: defaultSeo.title,
  authors: [{ name: defaultSeo.title }],
  creator: defaultSeo.title,
  publisher: defaultSeo.title,
  category: "restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html lang="en" className="font-body bg-background  custom-scroll">
      <body className="flex min-h-screen max-w-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
