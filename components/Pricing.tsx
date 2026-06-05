export default function Pricing() {
  return (
    <section className="relative py-28 border-t border-white/[0.06]">

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple pricing that scales with you
          </h2>

          <p className="mt-4 text-sm text-zinc-400 max-w-2xl mx-auto leading-6">
            Start free. Upgrade when your product grows. No hidden fees or forced commitments.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {/* Free */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="mt-2 text-zinc-400 text-sm">
              For exploring and early-stage projects
            </p>

            <div className="mt-6">
              <span className="text-3xl font-semibold text-white">$0</span>
              <span className="text-zinc-500 text-sm"> / month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>Basic dashboard access</li>
              <li>Limited analytics</li>
              <li>Community support</li>
            </ul>

            <button className="mt-6 w-full rounded-md border border-white/[0.08] py-2 text-sm text-white hover:bg-white/[0.04] transition">
              Get started
            </button>
          </div>

          {/* Pro (highlighted) */}
          <div className="rounded-xl border border-white/20 bg-white/[0.04] p-6 relative">

            {/* subtle highlight ring */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />

            {/* badge */}
            <div className="inline-flex items-center rounded-full bg-white text-black px-3 py-1 text-xs font-medium">
              Most popular
            </div>

            <h3 className="mt-4 text-white font-medium">Pro</h3>
            <p className="mt-2 text-zinc-300 text-sm">
              For growing SaaS products and teams
            </p>

            <div className="mt-6">
              <span className="text-3xl font-semibold text-white">$29</span>
              <span className="text-zinc-500 text-sm"> / month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              <li>Full dashboard system</li>
              <li>Advanced analytics</li>
              <li>Custom workflows</li>
              <li>Priority support</li>
            </ul>

            <button className="mt-6 w-full rounded-md bg-white text-black py-2 text-sm font-medium hover:bg-zinc-200 transition">
              Start free trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-white font-medium">Enterprise</h3>
            <p className="mt-2 text-zinc-400 text-sm">
              For large teams and custom infrastructure
            </p>

            <div className="mt-6">
              <span className="text-2xl font-semibold text-white">Custom</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>Dedicated infrastructure</li>
              <li>Custom integrations</li>
              <li>Security & compliance</li>
              <li>Dedicated support</li>
            </ul>

            <button className="mt-6 w-full rounded-md border border-white/[0.08] py-2 text-sm text-white hover:bg-white/[0.04] transition">
              Contact sales
            </button>
          </div>

        </div>

        {/* subtle reassurance line */}
        <p className="mt-12 text-center text-xs text-zinc-500">
          Cancel anytime. Upgrade or downgrade with no friction.
        </p>

      </div>
    </section>
  );
}