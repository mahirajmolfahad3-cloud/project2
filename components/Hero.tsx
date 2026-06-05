"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      
      {/* Subtle background glow (controlled, not flashy) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">

        {/* Small badge / positioning */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1 text-xs text-zinc-400">
          Built for modern teams
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build faster products with
          <span className="block text-zinc-400">
            structured SaaS workflows
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base leading-7 text-zinc-400 max-w-2xl mx-auto">
          NEONE helps teams design, ship, and scale SaaS products with clarity.
          From idea to production-ready UI systems in days, not weeks.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-4">

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
          >
            Start building
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/features"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            View features
          </Link>

        </div>

        {/* Product mock / visual anchor */}
        <div className="mt-16">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-2 shadow-2xl">
            <div className="rounded-lg bg-[#0A0A0B] p-6"> 
              {/* Fake dashboard preview */}
              <Image
                src="/images/dashboard-preview-1.png"
                alt="Dashboard Preview 1"
                width={900}
                height={200}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}