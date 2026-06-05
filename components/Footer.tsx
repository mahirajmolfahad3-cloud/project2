import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Customers", href: "/customers" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Footer */}
        <div className="py-16">

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

            {/* Brand */}
            <div>

              <div className="flex items-center gap-3">

                <div className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                ">
                  <span className="text-sm font-semibold text-white">
                    N
                  </span>
                </div>

                <span className="text-sm font-semibold text-white">
                  NEONE
                </span>

              </div>

              <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
                Understand product performance, user behavior,
                and growth metrics through a modern analytics
                platform built for fast-moving teams.
              </p>

            </div>

            {/* Product */}
            <div>

              <h3 className="text-sm font-medium text-white">
                Product
              </h3>

              <ul className="mt-4 space-y-3">
                {footerLinks.Product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-white
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* Resources */}
            <div>

              <h3 className="text-sm font-medium text-white">
                Resources
              </h3>

              <ul className="mt-4 space-y-3">
                {footerLinks.Resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-white
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* Company */}
            <div>

              <h3 className="text-sm font-medium text-white">
                Company
              </h3>

              <ul className="mt-4 space-y-3">
                {footerLinks.Company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-white
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            py-6
            text-sm
            text-zinc-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 NEONE. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms
            </Link>

            <Link
              href="/security"
              className="hover:text-zinc-300 transition-colors"
            >
              Security
            </Link>
          </div>
        </div>

      </div>

    </footer>
  );
}