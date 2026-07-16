import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { siteConfig } from "@/lib/site";

/**
 * Shared shell for legal pages (privacy, terms, cookies).
 * Renders the navbar, a hero header, the prose content, and the footer.
 */
export default function LegalLayout({
  title,
  description,
  lastUpdated,
  children,
}: {
  title: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-violet/20 blur-[120px]" />
            <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-brand-magenta/20 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-3xl px-5 pb-10 sm:px-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to site
            </Link>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient">{title}</span>
            </h1>
            <p className="mt-4 text-lg text-white/65">{description}</p>
            <p className="mt-3 text-sm text-white/40">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
          <div className="legal-prose">{children}</div>

          {/* Contact block */}
          <div className="mt-16 rounded-2xl glass p-7">
            <h2 className="text-xl font-semibold">Contact us</h2>
            <p className="mt-3 text-white/65">
              Questions about this policy? Reach out:
            </p>
            <div className="mt-5 space-y-1.5 text-sm text-white/75">
              <p className="font-semibold text-white">{siteConfig.legalName}</p>
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
              <p>{siteConfig.address.country}</p>
              <p className="pt-2">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-magenta hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
