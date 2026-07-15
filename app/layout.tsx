import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const siteUrl = "https://7skynetwork.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "7skynetwork — Influencer Representation, Campaigns & Brand Deals",
    template: "%s · 7skynetwork",
  },
  description:
    "7skynetwork is a creator and brand agency. We represent influencer careers, build advertising campaigns, and negotiate high-value brand partnerships.",
  keywords: [
    "influencer agency",
    "creator management",
    "talent representation",
    "advertising campaigns",
    "brand negotiation",
    "influencer marketing",
  ],
  authors: [{ name: "7skynetwork" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "7skynetwork — Influencer Representation, Campaigns & Brand Deals",
    description:
      "We represent influencer careers, build advertising campaigns, and negotiate high-value brand partnerships.",
    siteName: "7skynetwork",
  },
  twitter: {
    card: "summary_large_image",
    title: "7skynetwork",
    description:
      "Influencer representation, advertising campaigns & brand negotiation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06060A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
