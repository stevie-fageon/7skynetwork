"use client";

import Image from "next/image";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { navLinks, siteConfig } from "@/lib/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <a
              href="/#top"
              className="inline-flex items-center"
              aria-label={siteConfig.name}
            >
              <Image
                src="/logo-7sky.png"
                alt={`${siteConfig.name} logo`}
                width={178}
                height={100}
                className="h-[100px] w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Influencer representation, advertising campaigns &amp; brand
              negotiation. We turn creators into global brands.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — right column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Connect
            </h4>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p className="font-semibold text-white">{siteConfig.legalName}</p>
              <p className="flex items-start gap-2">
                <HiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-magenta" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                  <br />
                  {siteConfig.address.country}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <HiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-magenta" />
                <span>
                  {siteConfig.addressFrance.street}
                  <br />
                  {siteConfig.addressFrance.zip} {siteConfig.addressFrance.city}
                  <br />
                  {siteConfig.addressFrance.country}
                </span>
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <HiEnvelope className="h-4 w-4 shrink-0 text-brand-magenta" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-sm text-white/45">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
