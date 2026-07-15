"use client";

import Image from "next/image";
import { HiEnvelope } from "react-icons/hi2";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
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

          {/* Navigate + Connect */}
          <div className="grid grid-cols-2 gap-8">
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

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Connect
              </h4>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <HiEnvelope className="h-4 w-4 shrink-0" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/45">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
