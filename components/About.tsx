import {
  LayoutGrid,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Capture every meaningful event",
    desc: "Track product usage, conversions, revenue, and engagement across your entire customer journey with a single analytics pipeline.",
  },
  {
    num: "02",
    title: "Turn data into clear insights",
    desc: "Build dashboards, funnels, and retention reports that update automatically as your product evolves.",
    active: true,
  },
  {
    num: "03",
    title: "Make decisions with confidence",
    desc: "Give teams instant visibility into performance so every roadmap discussion starts with evidence instead of assumptions.",
  },
];

const features = [
  {
    icon: LayoutGrid,
    title: "Flexible analytics workspace",
    desc: "Create dashboards tailored to your team with reusable metrics, charts, and reporting components.",
  },
  {
    icon: TrendingUp,
    title: "Conversion & retention tracking",
    desc: "Understand what drives activation, engagement, and long-term customer growth across every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade reliability",
    desc: "Built with secure infrastructure, role-based permissions, and audit-ready data practices.",
  },
  {
    icon: Clock,
    title: "Real-time visibility",
    desc: "Monitor product performance as it happens with live metrics and continuously updated reporting.",
  },
];

export default function ProductSection() {
  return (
    <section className="relative border-t border-white/[0.06] py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From product activity to business clarity
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            NEONE helps teams understand what users are doing,
            why growth is happening, and where opportunities exist —
            all from a single analytics platform.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3">

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={[
                "relative p-7 border border-white/[0.06]",
                "first:rounded-t-xl lg:first:rounded-l-xl lg:first:rounded-tr-none",
                "last:rounded-b-xl lg:last:rounded-r-xl lg:last:rounded-bl-none",
                "border-t-0 first:border-t lg:border-t lg:border-l-0 lg:first:border-l",
                step.active
                  ? "bg-white/[0.03] border-white/[0.12] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                  : "bg-white/[0.015]",
              ].join(" ")}
            >
              <p className="text-[11px] font-mono tracking-[0.15em] text-zinc-500">
                {step.num}
              </p>

              <div
                className={[
                  "my-4 h-2 w-2 rounded-full",
                  step.active ? "bg-white" : "bg-zinc-700",
                ].join(" ")}
              />

              <h3 className="text-sm font-medium text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {step.desc}
              </p>

              {i < steps.length - 1 && (
                <span className="absolute -right-[9px] top-[42px] z-10 hidden text-zinc-700 lg:block">
                  ›
                </span>
              )}
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/[0.06]" />

        {/* Features Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Platform capabilities
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2">

          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="
                group
                rounded-xl
                border border-white/[0.06]
                bg-white/[0.015]
                p-6
                transition-all
                duration-200
                hover:border-white/[0.10]
                hover:bg-white/[0.025]
              "
            >
              <div className="flex gap-4">

                <div className="
                  flex
                  h-9
                  w-9
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                ">
                  <Icon
                    className="h-4 w-4 text-zinc-300"
                    strokeWidth={1.75}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}