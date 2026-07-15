"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { HiEnvelope, HiCheckCircle } from "react-icons/hi2";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] glass">
          <div className="grid lg:grid-cols-2">
            {/* Left: pitch */}
            <div className="relative flex flex-col justify-between gap-10 p-9 sm:p-12">
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(124,58,237,0.25), transparent 60%)",
                }}
              />
              <div>
                <span className="eyebrow">Let's talk</span>
                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                  Ready to work with{" "}
                  <span className="text-gradient">7skynetwork?</span>
                </h2>
                <p className="mt-5 text-lg text-white/70">
                  Whether you're a creator looking for representation or a
                  brand looking for the right partner — tell us what you need.
                  We reply to every serious enquiry.
                </p>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 transition-colors group-hover:bg-brand-gradient">
                  <HiEnvelope className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/40">
                    Email
                  </span>
                  {siteConfig.email}
                </span>
              </a>
            </div>

            {/* Right: form */}
            <div className="border-t border-white/10 bg-ink-900/40 p-9 sm:p-12 lg:border-l lg:border-t-0">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-12 text-center"
                >
                  <HiCheckCircle className="h-14 w-14 text-brand-magenta" />
                  <h3 className="mt-5 text-2xl font-semibold">
                    Message sent.
                  </h3>
                  <p className="mt-2 max-w-sm text-white/65">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-ghost mt-8"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Field label="Your name" error={errors.name?.message}>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="input"
                      {...register("name")}
                    />
                  </Field>

                  <Field label="Email address" error={errors.email?.message}>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className="input"
                      {...register("email")}
                    />
                  </Field>

                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your goals, your audience, or the deal you have in mind…"
                      className="input resize-none"
                      {...register("message")}
                    />
                  </Field>

                  {serverError && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small local primitives ---------- */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red-400">{error}</span>}
    </label>
  );
}
