"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const benefits = [
  "Access your analytics dashboard",
  "Manage your team and projects",
  "View real-time reports",
  "Secure account protection",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formValid = isValidEmail(form.email) && form.password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) return;

    setLoading(true);
    setError("");

    try {
      // Check if user exists in localStorage
      const storedUser = localStorage.getItem("user");
      
      if (!storedUser) {
        throw new Error("User not found. Please sign up first.");
      }

      const userData = JSON.parse(storedUser);

      // Simple validation - in real app, would validate against backend
      if (userData.email !== form.email) {
        throw new Error("Email not found. Please sign up first.");
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Store login session
      const sessionData = {
        ...userData,
        loggedInAt: new Date().toISOString(),
        rememberMe: form.rememberMe,
      };
      localStorage.setItem("session", JSON.stringify(sessionData));

      setSuccess(true);

      // Redirect after success animation
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0B] via-[#0F0F10] to-[#0A0A0B] flex overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* Left panel */}
      <motion.div
        className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 border-r border-white/[0.06] px-12 py-14 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <Link href="/" className="flex items-center gap-2.5 group w-fit">
          <div className="flex h-8 w-8 items-center justify-center rounded-[7px] border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-white/[0.14]">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.85" />
              <rect x="9" y="2" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.3" />
              <rect x="2" y="9" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.3" />
              <rect x="9" y="9" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.6" />
            </svg>
          </div>
          <span className="font-mono text-[13px] font-medium tracking-[0.04em] text-slate-100">
            NEONE
          </span>
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600 mb-5"
            variants={itemVariants}
          >
            Welcome back
          </motion.p>
          <ul className="flex flex-col gap-4">
            {benefits.map((benefit, index) => (
              <motion.li key={`benefit-${index}`} className="flex items-start gap-3" variants={itemVariants}>
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04]">
                  <Check className="h-2.5 w-2.5 text-slate-400" strokeWidth={2.5} />
                </span>
                <span className="text-[13px] leading-snug text-slate-400">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-12 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <p className="text-[13px] leading-6 text-slate-400">
              "Logging in to NEONE saves me hours every week. The dashboard loads instantly with all my data ready."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-slate-800 border border-white/[0.08] flex items-center justify-center">
                <span className="font-mono text-[10px] text-slate-400">MJ</span>
              </div>
              <div>
                <p className="text-[12px] font-medium text-slate-300">Maria J.</p>
                <p className="text-[11px] text-slate-600">Operations Manager, TechCorp</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="font-mono text-[11px] text-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © {new Date().getFullYear()} NEONE, Inc.
        </motion.p>
      </motion.div>

      {/* Right panel */}
      <motion.div
        className="flex flex-1 flex-col justify-center px-6 py-16 lg:px-16 xl:px-24 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2.5 mb-12 lg:hidden w-fit">
            <div className="flex h-8 w-8 items-center justify-center rounded-[7px] border border-white/[0.08] bg-white/[0.03]">
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.85" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.3" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.3" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="#fff" fillOpacity="0.6" />
              </svg>
            </div>
            <span className="font-mono text-[13px] font-medium tracking-[0.04em] text-slate-100">NEONE</span>
          </Link>
        </motion.div>

        <motion.div
          className="w-full max-w-[400px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-[26px] font-semibold tracking-tight text-slate-100 leading-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-[13px] text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-slate-300 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-all"
              >
                Sign up
              </Link>
            </p>
          </motion.div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-[13px] text-red-400">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* OAuth */}
          <motion.div className="mt-8 grid grid-cols-2 gap-3" variants={itemVariants}>
            {[
              {
                label: "Google",
                id: "oauth-google",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                id: "oauth-github",
                icon: (
                  <svg className="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                ),
              },
            ].map(({ label, id, icon }) => (
              <motion.button
                key={id}
                type="button"
                disabled={loading || success}
                className="flex items-center justify-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-[13px] font-medium text-slate-300 transition-all hover:border-white/[0.14] hover:bg-white/[0.04] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {icon}
                {label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="my-7 flex items-center gap-4" variants={itemVariants}>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="font-mono text-[11px] text-slate-700">or</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Email */}
            <motion.div className="flex flex-col gap-1.5" variants={itemVariants}>
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-600">
                Email address
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={loading || success}
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="h-[42px] w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 text-[13px] text-slate-200 placeholder:text-slate-700 outline-none transition-all focus:border-white/[0.20] focus:bg-white/[0.05] hover:border-white/[0.12] disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            {/* Password */}
            <motion.div className="flex flex-col gap-1.5" variants={itemVariants}>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-600">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="font-mono text-[11px] text-slate-600 hover:text-slate-400 transition-colors underline underline-offset-2 decoration-white/20"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <motion.input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  disabled={loading || success}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="h-[42px] w-full rounded-lg border border-white/[0.08] bg-white/[0.03] pl-3.5 pr-10 text-[13px] text-slate-200 placeholder:text-slate-700 outline-none transition-all focus:border-white/[0.20] focus:bg-white/[0.05] hover:border-white/[0.12] disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading || success}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </motion.button>
              </div>
            </motion.div>

            {/* Remember Me */}
            <motion.div className="flex items-center gap-2.5" variants={itemVariants}>
              <motion.input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                disabled={loading || success}
                checked={form.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border border-white/[0.2] bg-white/[0.05] accent-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="rememberMe" className="text-[13px] text-slate-400 cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading || !formValid || success}
              className="relative mt-2 h-[42px] w-full rounded-lg font-semibold text-[13px] overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              variants={itemVariants}
              whileHover={{ scale: formValid && !loading && !success ? 1.02 : 1 }}
              whileTap={{ scale: formValid && !loading && !success ? 0.98 : 1 }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content */}
              <div className="relative flex h-full w-full items-center justify-center gap-2 text-white">
                {loading ? (
                  <motion.svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </motion.svg>
                ) : success ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                    <span>Logged in!</span>
                  </>
                ) : (
                  <>
                    <span>Sign in</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.div>
                  </>
                )}
              </div>
            </motion.button>

            {/* Divider */}
            <div className="h-px bg-white/[0.06] my-2" />

            {/* Legal */}
            <motion.p
              className="text-center text-[11px] leading-5 text-slate-700"
              variants={itemVariants}
            >
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2 decoration-white/20">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2 decoration-white/20">
                Privacy Policy
              </Link>
              .
            </motion.p>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}