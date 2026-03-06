"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BiEnvelope, BiMap, BiPhone, BiUpArrowAlt } from "react-icons/bi";

const Contact = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="contact" className="px-4 pb-24 pt-20">
      <div className="theme-card theme-border mx-auto grid w-full max-w-6xl gap-10 rounded-3xl border p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Contact</p>
          <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s build your next project</h2>
          <p className="theme-text-muted mt-5">
            If you need a software developer
          </p>

          <div className="theme-text-soft mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <BiEnvelope className="theme-accent h-5 w-5" />
             adsajan2001@GMAIL.COM
            </p>
            <p className="flex items-center gap-3">
              <BiPhone className="theme-accent h-5 w-5" />
              +94 76 1234 260
            </p>
            <p className="flex items-center gap-3">
              <BiMap className="theme-accent h-5 w-5" />
              Srilanka  
            </p>
          </div>
        </div>

        <div className="theme-card-strong theme-border rounded-2xl border p-7">
          <h3 className="theme-text text-xl font-semibold">Ready to start?</h3>
          <p className="theme-text-muted mt-3 text-sm leading-6">
            Send a quick message and I will reply with timeline, approach, and estimated cost.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="mailto:adsajan@example.com"
              className="theme-accent-bg rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
            >
              Email Me
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`theme-accent-bg fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-lg shadow-lg transition hover:opacity-90 ${
          showBackToTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <BiUpArrowAlt className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Contact;
