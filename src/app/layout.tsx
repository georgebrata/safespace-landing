import { Open_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

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
  openGraph: {
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
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
