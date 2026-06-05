export default function SocialProof() {
  return (
    <section className="relative py-28 border-t border-white/[0.06]">

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Trusted by teams
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for teams that ship serious products
          </h2>

          <p className="mt-4 text-sm text-zinc-400 max-w-2xl mx-auto leading-6">
            From early-stage startups to scaling SaaS companies, teams use NEONE to
            bring structure and clarity to their product workflows.
          </p>
        </div>

        {/* Logo strip (fake but realistic SaaS pattern) */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60">
          <div className="h-5 w-24 bg-white/[0.06] rounded" />
          <div className="h-5 w-20 bg-white/[0.06] rounded" />
          <div className="h-5 w-28 bg-white/[0.06] rounded" />
          <div className="h-5 w-22 bg-white/[0.06] rounded" />
          <div className="h-5 w-26 bg-white/[0.06] rounded" />
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {/* Testimonial 1 */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <p className="text-sm text-zinc-300 leading-6">
              “We replaced three separate tools with NEONE. The structure alone
              made our product decisions faster and cleaner.”
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-white">
                Sarah Chen
              </p>
              <p className="text-xs text-zinc-500">
                Product Lead, SaaS Studio
              </p>
            </div>
          </div>

          {/* Testimonial 2 (slightly emphasized feel via density) */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <p className="text-sm text-zinc-300 leading-6">
              “It feels like a system designed by people who actually understand
              how SaaS products scale. Everything just fits together.”
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-white">
                Daniel Kim
              </p>
              <p className="text-xs text-zinc-500">
                Founder, Cloudbase
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <p className="text-sm text-zinc-300 leading-6">
              “Our onboarding time dropped significantly. The UI structure removes
              friction from every step.”
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-white">
                Ayesha Rahman
              </p>
              <p className="text-xs text-zinc-500">
                CTO, WorkflowOS
              </p>
            </div>
          </div>

        </div>

        {/* Metrics strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <p className="text-2xl font-semibold text-white">10k+</p>
            <p className="text-xs text-zinc-500 mt-1">Active users</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">99.9%</p>
            <p className="text-xs text-zinc-500 mt-1">Uptime reliability</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">3x</p>
            <p className="text-xs text-zinc-500 mt-1">Faster workflows</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">24/7</p>
            <p className="text-xs text-zinc-500 mt-1">Support coverage</p>
          </div>

        </div>

      </div>
    </section>
  );
}