import {
  Search,
  Bell,
  Home,
  BarChart3,
  Workflow,
  FileText,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    label: "Monthly Revenue",
    value: "$84,920",
    change: "+12.4%",
    positive: true,
  },
  {
    label: "Active Users",
    value: "18,247",
    change: "+8.1%",
    positive: true,
  },
  {
    label: "Conversion Rate",
    value: "4.82%",
    change: "+0.7%",
    positive: true,
  },
  {
    label: "Churn Rate",
    value: "1.2%",
    change: "-0.3%",
    positive: true,
  },
];

const trafficSources = [
  { source: "Organic Search", value: "42%" },
  { source: "Direct", value: "28%" },
  { source: "Referral", value: "16%" },
  { source: "Social", value: "14%" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden w-64 border-r border-white/[0.06] lg:block">

          <div className="p-6">

            <div className="flex items-center gap-3">
              <div className="
                h-9
                w-9
                rounded-lg
                border
                border-white/[0.08]
                bg-white/[0.03]
              " />

              <span className="font-semibold">
                NEONE
              </span>
            </div>

            <nav className="mt-10 space-y-1">

              {[
                {
                  icon: Home,
                  label: "Dashboard",
                  active: true,
                },
                {
                  icon: BarChart3,
                  label: "Analytics",
                },
                {
                  icon: Workflow,
                  label: "Funnels",
                },
                {
                  icon: FileText,
                  label: "Reports",
                },
                {
                  icon: Settings,
                  label: "Settings",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      transition-colors
                      ${
                        item.active
                          ? "bg-white/[0.05] text-white"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}

            </nav>

          </div>

        </aside>

        {/* MAIN */}
        <main className="flex-1">

          {/* TOPBAR */}
          <div className="
            border-b
            border-white/[0.06]
            px-6
            py-4
          ">

            <div className="flex items-center justify-between">

              <div className="
                flex
                items-center
                gap-3
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-4
                py-2
                w-[320px]
              ">
                <Search className="h-4 w-4 text-zinc-500" />
                <input
                  placeholder="Search..."
                  className="
                    w-full
                    bg-transparent
                    text-sm
                    outline-none
                    placeholder:text-zinc-600
                  "
                />
              </div>

              <div className="flex items-center gap-4">

                <button className="
                  h-9
                  w-9
                  rounded-lg
                  border
                  border-white/[0.06]
                  flex
                  items-center
                  justify-center
                ">
                  <Bell className="h-4 w-4 text-zinc-400" />
                </button>

                <div className="
                  h-9
                  w-9
                  rounded-full
                  bg-white/[0.08]
                " />

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-6">

            {/* Header */}
            <div>

              <h1 className="text-3xl font-semibold">
                Overview
              </h1>

              <p className="mt-2 text-zinc-400">
                Product performance across the last 30 days.
              </p>

            </div>

            {/* KPI CARDS */}
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-5
                  "
                >
                  <p className="text-sm text-zinc-500">
                    {stat.label}
                  </p>

                  <div className="mt-3 flex items-center justify-between">

                    <h3 className="text-2xl font-semibold">
                      {stat.value}
                    </h3>

                    <div className="
                      flex
                      items-center
                      gap-1
                      text-sm
                      text-zinc-300
                    ">
                      {stat.positive ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}

                      {stat.change}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* CHART + TRAFFIC */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">

              {/* Chart */}
              <div className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-6
              ">
                <h3 className="font-medium">
                  Revenue Growth
                </h3>

                <div className="
                  mt-6
                  h-[320px]
                  rounded-lg
                  bg-white/[0.03]
                ">
                  {/* Replace with Recharts */}
                </div>
              </div>

              {/* Traffic */}
              <div className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-6
              ">
                <h3 className="font-medium">
                  Traffic Sources
                </h3>

                <div className="mt-6 space-y-5">

                  {trafficSources.map((item) => (
                    <div key={item.source}>

                      <div className="
                        mb-2
                        flex
                        justify-between
                        text-sm
                      ">
                        <span className="text-zinc-400">
                          {item.source}
                        </span>

                        <span>
                          {item.value}
                        </span>
                      </div>

                      <div className="
                        h-2
                        rounded-full
                        bg-white/[0.05]
                      ">
                        <div
                          className="
                            h-full
                            rounded-full
                            bg-white
                          "
                          style={{
                            width: item.value,
                          }}
                        />
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* BOTTOM */}
            <div className="mt-6 grid gap-6 xl:grid-cols-2">

              <div className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-6
              ">
                <h3 className="font-medium">
                  Conversion Funnel
                </h3>

                <div className="
                  mt-6
                  h-[260px]
                  rounded-lg
                  bg-white/[0.03]
                " />
              </div>

              <div className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-6
              ">
                <h3 className="font-medium">
                  Recent Activity
                </h3>

                <div className="mt-6 space-y-4">

                  {[
                    "New subscription created",
                    "Dashboard shared",
                    "Weekly report generated",
                    "Retention alert triggered",
                  ].map((event) => (
                    <div
                      key={event}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                      "
                    >
                      <div className="
                        h-2
                        w-2
                        rounded-full
                        bg-white
                      " />

                      <span className="text-zinc-400">
                        {event}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}