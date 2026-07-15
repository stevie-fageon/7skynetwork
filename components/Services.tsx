"use client";

import {
  HiArrowTrendingUp,
  HiMegaphone,
  HiHandshake,
  type HiOutlineIconType,
} from "./icons";

import Reveal from "./Reveal";

type Service = {
  icon: HiOutlineIconType;
  title: string;
  description: string;
  points: string[];
};

const services: Service[] = [
  {
    icon: HiArrowTrendingUp,
    title: "Career Representation",
    description:
      "Long-term management that treats your career like a business. We build the roadmap, you build the audience.",
    points: [
      "Personal brand & positioning",
      "Content & growth strategy",
      "Platform & monetization roadmap",
    ],
  },
  {
    icon: HiMegaphone,
    title: "Advertising Campaigns",
    description:
      "End-to-end campaigns that pair the right creators with the right brands — from concept to performance reporting.",
    points: [
      "Creative concept & briefing",
      "Creator-brand matchmaking",
      "Production & performance tracking",
    ],
  },
  {
    icon: HiHandshake,
    title: "Brand Negotiation",
    description:
      "We close the deals you can't close alone. Maximised fees, protected rights, contracts that actually work for you.",
    points: [
      "Rate & deal structuring",
      "Contract review & rights",
      "Long-term brand partnerships",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title mt-5">
            Three ways we move your career{" "}
            <span className="text-gradient">forward.</span>
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Representation, campaigns, and negotiation — the full stack of
            what a modern creator needs to scale.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl glass p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  {/* hover gradient glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient-soft text-white">
                      <Icon className="h-7 w-7 text-brand-magenta" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-white/65">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/75"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
