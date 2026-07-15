"use client";

import Reveal from "./Reveal";

const values = [
  {
    title: "Creators first",
    body: "We represent people, not inventory. Every decision is made to protect and grow the creator's career — not just this quarter's revenue.",
  },
  {
    title: "Deal-driven",
    body: "Negotiation is our craft. We know what a campaign is worth, and we won't let a brand undervalue your reach and work.",
  },
  {
    title: "Built to scale",
    body: "From first deal to long-term partnerships, we build structures that compound — turning one-off posts into lasting brand equity.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: intro */}
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title mt-5">
              An agency built for the{" "}
              <span className="text-gradient">creator economy.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              7skynetwork is a creator and brand agency. We manage influencer
              careers, design advertising campaigns that perform, and
              negotiate the brand deals that define them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              We sit between creators and brands — translating audience into
              value, and value into long-term partnerships. Our job is simple:
              make sure the creators we represent are paid what they're worth,
              and positioned to last.
            </p>
          </Reveal>

          {/* Right: values */}
          <div className="flex flex-col gap-5">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl glass p-6">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-white/65">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
