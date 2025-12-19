import { Open_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "SafeSpace",
    template: "%s | SafeSpace",
  },
  description: "Platforma pentru prevenirea și reducerea violenței domestice.",
  metadataBase: new URL("https://safespace.ong"),
  openGraph: {
    title: "SafeSpace",
    description: "Platforma pentru prevenirea și reducerea violenței domestice.",
    url: "https://safespace.ong",
    siteName: "SafeSpace",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/fdhvrhNS/safespace-banner.jpg",
        width: 1200,
        height: 630,
        alt: "SafeSpace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeSpace",
    description: "Platforma pentru prevenirea și reducerea violenței domestice.",
    images: ["https://i.ibb.co/fdhvrhNS/safespace-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${openSans.className} ${openSans.variable} ${unbounded.variable}`}>
        <AuthDialogProvider>
          <SessionProviderComp session={null}>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
              <Script
                src="https://t.contentsquare.net/uxa/6d8aaabe42282.js"
                strategy="afterInteractive"
              />
              <Script
                src="https://cdn.counter.dev/script.js"
                data-id="03bd5925-48e2-4d33-ae59-d66aaf6acba0"
                data-utcoffset="2"
                strategy="afterInteractive"
              />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
