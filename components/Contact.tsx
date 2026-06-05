import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s talk about NEONE
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400 leading-7">
            Have questions, feedback, or want to see how NEONE fits your team?
            We usually respond within 24 hours.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2">

          {/* FORM */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">

            <h2 className="text-lg font-medium text-white">
              Send a message
            </h2>

            <form className="mt-6 space-y-4">

              <div>
                <label className="text-sm text-zinc-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-white/[0.08] bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-white/[0.2]"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-lg border border-white/[0.08] bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-white/[0.2]"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you're building..."
                  className="mt-2 w-full rounded-lg border border-white/[0.08] bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-white/[0.2]"
                />
              </div>

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  hover:bg-zinc-200
                  transition-colors
                "
              >
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>

          </div>

          {/* SIDE INFO */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-white/[0.06] p-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-300" />
                <h3 className="text-sm font-medium text-white">
                  Email support
                </h3>
              </div>

              <p className="mt-3 text-sm text-zinc-400">
                support@neone.io
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] p-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-zinc-300" />
                <h3 className="text-sm font-medium text-white">
                  Product inquiries
                </h3>
              </div>

              <p className="mt-3 text-sm text-zinc-400">
                For demos, integrations, or enterprise plans.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] p-6">
              <h3 className="text-sm font-medium text-white">
                Response time
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                We typically respond within 24 hours on weekdays.
                Enterprise requests are prioritized.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOT NOTE */}
      <section className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

          <p>NEONE © 2026</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300">
              Terms
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}