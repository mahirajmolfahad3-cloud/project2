import Link from "next/link";
import {
  Activity,
  BarChart3,
  Users,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Database,
  Workflow,
} from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Real-time analytics",
    desc: "Monitor product activity, user engagement, and business metrics as events happen.",
  },
  {
    icon: BarChart3,
    title: "Custom dashboards",
    desc: "Build focused views for product, growth, revenue, and leadership teams.",
  },
  {
    icon: Workflow,
    title: "Conversion funnels",
    desc: "Identify where users drop off and uncover opportunities for growth.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    desc: "Share dashboards and reports across teams with a single source of truth.",
  },
];

const security = [
  "Role-based permissions",
  "Single sign-on",
  "Audit logs",
  "Encryption at rest",
  "Encryption in transit",
  "99.9% uptime SLA",
];

export default function FeaturesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="border-b border-white/[0.06] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Features
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Analytics built for modern product teams
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Understand user behavior, measure product performance,
            and make better decisions with a unified analytics platform.
          </p>

        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-5 md:grid-cols-2">

            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.015]
                  p-8
                "
              >
                <div className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                ">
                  <Icon className="h-5 w-5 text-zinc-300" />
                </div>

                <h3 className="mt-5 text-lg font-medium text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DASHBOARD SHOWCASE */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Analytics Workspace
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-white">
                A single source of truth for every team
              </h2>

              <p className="mt-5 text-zinc-400 leading-7">
                Bring together product metrics, customer behavior,
                revenue insights, and growth reporting into a
                centralized analytics workspace.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Live KPI monitoring",
                  "Custom dashboards",
                  "Shared reporting",
                  "Cross-team visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span className="text-sm text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Dashboard Mockup */}
            <div className="
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              p-6
            ">
              <div className="h-[420px] rounded-xl bg-white/[0.03]" />
            </div>

          </div>

        </div>
      </section>

      {/* REPORTING */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="
              order-2
              lg:order-1
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              p-6
            ">
              <div className="h-[420px] rounded-xl bg-white/[0.03]" />
            </div>

            <div className="order-1 lg:order-2">

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Real-time Reporting
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-white">
                See performance as it happens
              </h2>

              <p className="mt-5 text-zinc-400 leading-7">
                Monitor adoption trends, engagement, retention,
                and growth metrics through continuously updated reports.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* FUNNELS */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Growth Insights
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-white">
              Find where growth is won or lost
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/[0.06] p-8">
              <h3 className="text-lg font-medium text-white">
                Funnel Analysis
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Track user journeys from acquisition to conversion.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] p-8">
              <h3 className="text-lg font-medium text-white">
                Cohort Retention
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Understand long-term engagement and retention behavior.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] p-8">
              <h3 className="text-lg font-medium text-white">
                Revenue Attribution
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Discover which channels drive sustainable growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECURITY */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Security & Reliability
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-white">
              Built for teams that take data seriously
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400 leading-7">
              Enterprise-grade security and operational reliability
              designed for modern organizations.
            </p>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">

            {security.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-white/[0.06]
                  p-5
                "
              >
                <ShieldCheck className="h-5 w-5 text-zinc-300" />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-semibold text-white">
            Ready to understand your product better?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400 leading-7">
            Join teams using NEONE to make faster,
            more confident decisions through real-time analytics.
          </p>

          <div className="mt-10">

            <Link
              href="/signup"
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
              "
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}