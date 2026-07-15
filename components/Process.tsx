"use client";

import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We get to know you — your audience, your goals, and where you want to go. No templates, just a clear read on your career today.",
  },
  {
    n: "02",
    title: "Strategize",
    body: "We build the plan: positioning, target brands, content direction, and a monetization roadmap tailored to your platform mix.",
  },
  {
    n: "03",
    title: "Negotiate",
    body: "We take the deals off your plate. Outreach, rate structuring, contract terms — we fight for the fee and the rights.",
  },
  {
    n: "04",
    title: "Execute",
    body: "We run the campaigns end-to-end and report on results, then reinvest the learnings into your next, bigger deal.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How we work</span>
          <h2 className="section-title mt-5">
            A clear path from <span className="text-gradient">first call</span>{" "}
            to signed deal.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Four steps. No black box — you always know where your career
            stands and what we're doing about it.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on large screens */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl glass p-7">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-ink-800 text-base font-bold text-gradient">
                    {step.n}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="mt-4 text-white/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
