"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

const STORAGE_KEY = "7sky_cookie_consent";

/**
 * GDPR-compliant cookie banner.
 * Shows a banner on first visit; "Accept" and "Reject" are equally easy
 * to choose, as required by the ePrivacy Directive and GDPR.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no choice has been made yet
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so it doesn't clash with the hero animation
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl sm:inset-x-auto sm:left-1/2 sm:right-auto sm:-translate-x-1/2"
        >
          <div className="glass relative rounded-2xl p-5 shadow-2xl sm:p-6">
            <button
              type="button"
              onClick={() => choose("rejected")}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-white"
            >
              <HiXMark className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
              <p className="max-w-xl text-sm leading-relaxed text-white/75">
                We use cookies to improve your experience and analyze site
                traffic. You can accept or reject non-essential cookies — both
                choices are equally easy. See our{" "}
                <a
                  href="/legal/cookies"
                  className="text-brand-magenta underline-offset-2 hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>

              <div className="flex shrink-0 gap-3 sm:flex-col">
                <button
                  type="button"
                  onClick={() => choose("accepted")}
                  className="btn-primary !px-6 !py-2.5 !text-xs"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => choose("rejected")}
                  className="btn-ghost !px-6 !py-2.5 !text-xs"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
