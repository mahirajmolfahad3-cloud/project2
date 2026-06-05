import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 border-t border-white/[0.06] overflow-hidden">

      {/* Subtle background glow (closure feeling, not hype) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">

        {/* Small trust hint */}
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          Ready to build
        </p>

        {/* Headline */}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start building structured SaaS products in minutes
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-sm text-zinc-400 max-w-2xl mx-auto leading-6">
          Join teams building faster, cleaner, and more scalable SaaS systems.
          No setup complexity. No friction. Just a clear product foundation.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            View pricing
          </Link>

        </div>

        {/* subtle reassurance line */}
        <p className="mt-10 text-xs text-zinc-500">
          No credit card required. Cancel anytime.
        </p>

      </div>
    </section>
  );
}