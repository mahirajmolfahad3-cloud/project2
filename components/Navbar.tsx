"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handler);
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      {/* Background */}
      <div
        className={[
          "absolute inset-0 backdrop-blur-xl transition-all duration-300",
          "bg-[#0A0A0B]/85",
          scrolled
            ? "border-b border-white/[0.08]"
            : "border-b border-white/[0.04]",
        ].join(" ")}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <Image
                src="/icons/logo.png"
                alt="NEONE"
                width={24}
                height={24}
                priority
              />
            </div>

            <span className="text-sm font-semibold tracking-tight text-white">
              NEONE
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">

            <Link
              href="/login"
              className="
                px-3
                py-2
                text-sm
                text-zinc-400
                transition-colors
                hover:text-white
              "
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-white
                px-4
                py-2.5
                text-sm
                font-medium
                text-black
                transition-colors
                hover:bg-zinc-200
              "
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="
              lg:hidden
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.03]
              text-zinc-400
              hover:text-white
              transition-colors
            "
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

        </nav>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={[
          "fixed inset-x-4 top-24 z-50 lg:hidden",
          "rounded-2xl border border-white/[0.08]",
          "bg-[#0A0A0B]",
          "transition-all duration-200",
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="p-5">

          <div className="space-y-1">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  text-zinc-400
                  transition-colors
                  hover:bg-white/[0.03]
                  hover:text-white
                "
              >
                {item.name}
                <span className="text-zinc-700">›</span>
              </Link>
            ))}

          </div>

          <div className="mt-5 border-t border-white/[0.06] pt-5">

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="
                block
                py-2
                text-sm
                text-zinc-400
                hover:text-white
                transition-colors
              "
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-white
                py-3
                text-sm
                font-medium
                text-black
                hover:bg-zinc-200
                transition-colors
              "
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>
      </div>

    </header>
  );
}