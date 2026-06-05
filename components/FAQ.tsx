"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What does NEONE help teams understand?",
    answer:
      "NEONE gives teams a complete view of product performance, user behavior, revenue trends, retention, and conversion metrics from a single analytics workspace.",
  },
  {
    question: "How quickly does data appear in dashboards?",
    answer:
      "Most events are processed within seconds. Teams can monitor product activity, campaign performance, and business metrics in near real-time.",
  },
  {
    question: "Which metrics can I track?",
    answer:
      "Track active users, retention, activation, revenue, engagement, feature adoption, conversion funnels, and custom business metrics tailored to your workflow.",
  },
  {
    question: "Can I connect existing tools and data sources?",
    answer:
      "Yes. NEONE integrates with analytics platforms, CRMs, data warehouses, and marketing tools so teams can work from a single source of truth.",
  },
  {
    question: "Is NEONE suitable for non-technical teams?",
    answer:
      "Absolutely. Dashboards and reports are designed for product managers, founders, marketers, and operators without requiring SQL or technical expertise.",
  },
  {
    question: "How is customer data protected?",
    answer:
      "Data is encrypted in transit and at rest, with role-based permissions, audit controls, and enterprise-grade security practices built into the platform.",
  },
  {
    question: "What is included in the free plan?",
    answer:
      "The Starter plan includes core analytics, dashboard creation, basic reporting, and team collaboration features for smaller organizations.",
  },
  {
    question: "Can we upgrade as our company grows?",
    answer:
      "Yes. Teams can move between plans at any time without losing historical data, dashboards, reports, or workspace settings.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative border-t border-white/[0.06] py-28">

      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Frequently asked questions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            Learn how NEONE helps teams measure product performance,
            understand user behavior, and make better decisions with data.
          </p>

        </div>

        {/* FAQ */}
        <div className="mt-16">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/[0.06]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left
                  "
                >
                  <span
                    className={`
                      text-base
                      font-medium
                      transition-colors
                      ${
                        isOpen
                          ? "text-white"
                          : "text-zinc-300 group-hover:text-white"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "border-white/[0.15] bg-white/[0.05]"
                          : "border-white/[0.08]"
                      }
                    `}
                  >
                    <Plus
                      className={`
                        h-4
                        w-4
                        text-zinc-400
                        transition-transform
                        duration-300
                        ${
                          isOpen ? "rotate-45" : ""
                        }
                      `}
                    />
                  </div>
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-sm leading-7 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}