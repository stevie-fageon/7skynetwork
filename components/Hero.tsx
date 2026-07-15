"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-32 top-10 h-[32rem] w-[32rem] rounded-full bg-brand-violet/30 blur-[120px] animate-float-slow" />
        <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-magenta/25 blur-[120px] animate-float-slower" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" />
              Creator &amp; Brand Agency
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >
            We turn creators
            <br />
            into <span className="text-gradient-animated">global brands.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg text-white/70 sm:text-xl"
          >
            7skynetwork represents influencer careers, builds high-impact
            advertising campaigns, and negotiates the brand deals that move
            the needle — so creators can focus on creating.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#contact" className="btn-primary">
              Start working with us
              <HiArrowRight />
            </a>
            <a href="#services" className="btn-ghost">
              Explore services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
