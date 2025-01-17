import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qtcc.co.nz'),
  title: "QT Coders - Queenstown Coder's Connect",
  description:
    "A community of developers, data scientists, and tech enthusiasts in Queenstown. Share knowledge, build connections, and grow together in New Zealand's most beautiful backdrop.",
  keywords: "Queenstown, developers, data scientists, tech enthusiasts, community, New Zealand",
  authors: [{ name: "QT Coders", url: "https://qtcoders.dev" }],
  openGraph: {
    title: "QT Coders - Queenstown Coder's Connect",
    description:
      "A community of developers, data scientists, and tech enthusiasts in Queenstown. Share knowledge, build connections, and grow together in New Zealand's most beautiful backdrop.",
    url: "https://qtcc.co.nz",
    siteName: "QT Coders",
    images: [
      {
        url: "https://qtcc.co.nz/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
