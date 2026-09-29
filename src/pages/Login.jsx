import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Heart,
  Lock,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";

const PROFILE_KEY = "rishtaOneProfile";

const loginImage =
  "https://images.pexels.com/photos/16800908/pexels-photo-16800908.jpeg?auto=compress&cs=tinysrgb&w=1600";

const nikahImage =
  "https://images.pexels.com/photos/7122168/pexels-photo-7122168.jpeg?auto=compress&cs=tinysrgb&w=1200";


function Logo({ dark = false }) {
  return (
    <svg
      viewBox="0 0 560 135"
      className="h-auto w-[235px] sm:w-[275px]"
      role="img"
      aria-label="Hamsafar Sathi — Rishtey for Mewati"
    >
      <defs>
        <linearGradient id="loginGold" x1="0" x2="1">
          <stop offset="0%" stopColor="#C79A55" />
          <stop offset="100%" stopColor="#E8CC8B" />
        </linearGradient>
        <linearGradient id="loginGreen" x1="0" x2="1">
          <stop offset="0%" stopColor="#075E58" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
        <linearGradient id="loginRose" x1="0" x2="1">
          <stop offset="0%" stopColor="#D9466F" />
          <stop offset="100%" stopColor="#F2A6B8" />
        </linearGradient>
      </defs>

      <path d="M57 47C44 32 20 35 18 54C16 74 34 94 57 118C80 94 98 74 96 54C94 35 70 32 57 47Z" fill="none" stroke="url(#loginGold)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M57 47C64 39 74 41 81 50C88 41 98 39 105 47" fill="none" stroke="url(#loginGold)" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M42 103C27 104 18 115 17 128C30 125 39 118 46 106Z" fill="url(#loginGreen)" />
      <path d="M94 30C98 17 108 11 118 13C114 24 105 30 94 30Z" fill="url(#loginRose)" />
      <path d="M101 36C109 25 119 24 128 29C121 39 111 41 101 36Z" fill="url(#loginRose)" />
      <path d="M92 31C85 21 86 12 92 6C99 15 99 24 92 31Z" fill="url(#loginGold)" />
      <circle cx="119" cy="17" r="3" fill="#F2A6B8" />
      <circle cx="126" cy="26" r="2.5" fill="#F2A6B8" />
      <circle cx="110" cy="10" r="2.4" fill="#F2A6B8" />

      <text x="150" y="70" fontFamily="Georgia, serif" fontSize="43" fontWeight="500" letterSpacing="-1.8" fill={dark ? "#FFFFFF" : "#075E58"}>
        Hamsafar
      </text>
      <text x="322" y="70" fontFamily="Georgia, serif" fontSize="43" fontStyle="italic" fontWeight="500" letterSpacing="-1.8" fill="url(#loginGold)">
        Sathi
      </text>
      <text x="151" y="101" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" letterSpacing="3.8" fill={dark ? "#F3A5B9" : "#D9466F"}>
        RISHtey FOR MEWATI
      </text>
      <line x1="151" y1="119" x2="407" y2="119" stroke={dark ? "#E8CE91" : "#C8A45D"} strokeWidth="1" opacity=".55" />
      <circle cx="280" cy="119" r="3" fill={dark ? "#E8CE91" : "#C8A45D"} />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  // -----------------------------
  // FIXED LOGIN
  // -----------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const enteredId = userId.trim().toLowerCase();
    const enteredPassword = password;

    if (!enteredId || !enteredPassword) {
      setError("Please enter your User ID and password.");
      return;
    }

    if (
      enteredId === "hamsafarsathi" &&
      enteredPassword === "hamsafarsathi"
    ) {
      navigate("/profile");
      return;
    }

    setError("Incorrect User ID or password.");
  };

  // -----------------------------
  // CREATE NEW ACCOUNT
  // -----------------------------
  const handleCreateProfile = () => {
    localStorage.removeItem(PROFILE_KEY);
    localStorage.setItem("hamsafarsathiLoggedIn", "true");
    navigate("/profile");
  };

  // -----------------------------
  // GOOGLE LOGIN
  // -----------------------------
  const handleGoogleSuccess = () => {
    setGoogleLoading(true);
    setError("");

    setTimeout(() => {
      setGoogleLoading(false);
      localStorage.setItem("hamsafarsathiLoggedIn", "true");
      navigate("/profile");
    }, 500);
  };

  const handleGoogleError = () => {
    setGoogleLoading(false);
    setError("Google sign-in could not be completed. Please try again.");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3eb] text-[#173f35]">
      {/* =========================================================
          TOP NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#d8c7a0]/60 bg-[#fffdf8]/90 px-4 py-3 shadow-[0_15px_50px_rgba(30,65,55,0.10)] backdrop-blur-xl sm:px-6">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2 rounded-full border border-[#d9c89f] bg-white/70 px-4 py-2 text-sm font-semibold text-[#174c3e] transition duration-300 hover:bg-[#174c3e] hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-0.5"
            />

            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      {/* =========================================================
          MAIN
      ========================================================= */}
      <main className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 pb-10 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        {/* =====================================================
            LEFT VISUAL PANEL
        ===================================================== */}
        <motion.section
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative hidden min-h-[690px] overflow-hidden rounded-[38px] lg:block"
        >
          <img
            src={loginImage}
            alt="Muslim wedding couple"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* layered overlays */}
          <div className="absolute inset-0 bg-[#092d25]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082d25] via-[#174c3e]/30 to-transparent" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,211,138,0.22),transparent_32%)]" />

          {/* top badge */}
          <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur-md">
            <Sparkles size={14} className="text-[#efd38a]" />
            A MEANINGFUL BEGINNING
          </div>

          {/* decorative line */}
          <div className="absolute right-8 top-28 hidden h-32 w-px bg-gradient-to-b from-[#efd38a]/0 via-[#efd38a]/60 to-[#efd38a]/0 xl:block" />

          {/* content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 xl:p-10">
            <div className="mb-5 flex items-center gap-2 text-[#efd38a]">
              <div className="h-px w-8 bg-[#efd38a]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Hamsafarsathi
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white xl:text-5xl">
              Some journeys
              <br />
              are meant to be shared.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 xl:text-base">
              Discover meaningful connections built around family, faith,
              compatibility and the intention of a beautiful future together.
            </p>

            {/* trust pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Meaningful connections",
                "Family values",
                "Privacy first",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md"
                >
                  <CheckCircle2 size={14} className="text-[#efd38a]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            RIGHT LOGIN AREA
        ===================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mx-auto w-full max-w-xl"
        >
          {/* Mobile visual */}
          <div className="relative mb-6 h-48 overflow-hidden rounded-[30px] lg:hidden">
            <img
              src={nikahImage}
              alt="Nikah ceremony"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#092d25]/90 via-[#174c3e]/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#efd38a]">
                Hamsafarsathi
              </p>

              <p className="mt-1 text-xl font-semibold text-white">
                Rishtey with intention.
              </p>
            </div>
          </div>

          {/* =================================================
              LOGIN CARD
          ================================================= */}
          <div className="relative overflow-hidden rounded-[34px] border border-[#dfd1b4] bg-[#fffdf8] p-6 shadow-[0_25px_80px_rgba(31,67,56,0.13)] sm:p-9">
            {/* subtle decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#e7c878]/10 blur-3xl" />

            <div className="relative">
              {/* heading */}
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ddc98f] bg-[#fbf3dc] px-3 py-1.5 text-xs font-bold text-[#8a6725]">
                  <Lock size={13} />
                  PRIVATE & SECURE
                </div>

                <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#173f35] sm:text-4xl">
                  Welcome back
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#6c746f]">
                  Your journey towards a meaningful rishta continues here.
                </p>
              </div>

              {/* error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {error}
                </motion.div>
              )}

              {/* =================================================
                  LOGIN FORM
              ================================================= */}
              <form onSubmit={handleLogin} className="space-y-5">
                {/* USER ID */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#294b42]">
                    User ID
                  </label>

                  <div className="relative">
                    <Users
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8c70]"
                    />

                    <input
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="Enter your User ID"
                      autoComplete="username"
                      className="h-14 w-full rounded-2xl border border-[#dcd1bc] bg-[#faf8f2] pl-12 pr-4 text-sm font-medium text-[#173f35] outline-none transition duration-300 placeholder:text-[#aaa394] focus:border-[#b28a3c] focus:bg-white focus:ring-4 focus:ring-[#b28a3c]/10"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-[#294b42]">
                      Password
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        setError(
                          "Please contact Hamsafarsathi support to reset your password."
                        )
                      }
                      className="text-xs font-semibold text-[#9a742e] transition hover:text-[#174c3e]"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8c70]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="h-14 w-full rounded-2xl border border-[#dcd1bc] bg-[#faf8f2] pl-12 pr-12 text-sm font-medium text-[#173f35] outline-none transition duration-300 placeholder:text-[#aaa394] focus:border-[#b28a3c] focus:bg-white focus:ring-4 focus:ring-[#b28a3c]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e8a7f] transition hover:text-[#174c3e]"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* LOGIN BUTTON */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#174c3e] text-sm font-bold text-white shadow-[0_14px_30px_rgba(23,76,62,0.22)] transition duration-300 hover:bg-[#0f3c31]"
                >
                  Login to Hamsafarsathi

                  <ArrowRight
                    size={17}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </form>

              {/* =================================================
                  DIVIDER
              ================================================= */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#e5ddce]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a29a8b]">
                  or continue with
                </span>

                <div className="h-px flex-1 bg-[#e5ddce]" />
              </div>

              {/* =================================================
                  GOOGLE LOGIN
              ================================================= */}
              <div className="relative flex min-h-[54px] items-center justify-center overflow-hidden rounded-2xl border border-[#d8d0c2] bg-white">
                {googleLoading ? (
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#174c3e]">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#174c3e]/20 border-t-[#174c3e]" />
                    Signing you in...
                  </div>
                ) : (
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    useOneTap={false}
                    theme="outline"
                    shape="pill"
                    size="large"
                    width="100%"
                    text="continue_with"
                  />
                )}
              </div>

              {/* =================================================
                  CREATE ACCOUNT
              ================================================= */}
              <div className="mt-7 overflow-hidden rounded-[28px] border border-[#dbc68e] bg-gradient-to-br from-[#fbf5e4] via-[#fffaf0] to-[#f4ead2] p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#174c3e] text-[#efd38a] shadow-md">
                    <UserPlus size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a742e]">
                      New to Hamsafarsathi?
                    </p>

                    <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#173f35]">
                      Create your account
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#68746e]">
                      Start your profile and take the first step towards a
                      meaningful connection.
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  type="button"
                  onClick={handleCreateProfile}
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#174c3e] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(23,76,62,0.18)] transition duration-300 hover:bg-[#0f3c31]"
                >
                  Create New Account

                  <ArrowRight
                    size={17}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </div>

              {/* =================================================
                  TRUST STRIP
              ================================================= */}
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-[#e8dfcf] pt-6">
                <TrustItem icon={ShieldCheck} text="Privacy" />
                <TrustItem icon={Lock} text="Secure" />
                <TrustItem icon={Heart} text="Meaningful" />
              </div>
            </div>
          </div>

          {/* bottom note */}
          <p className="mt-6 text-center text-xs leading-5 text-[#8b8a82]">
            By continuing, you agree to use Hamsafarsathi respectfully and
            responsibly.
          </p>
        </motion.section>
      </main>
    </div>
  );
}

/* =============================================================
   TRUST ITEM
============================================================= */

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <Icon size={17} className="text-[#a17a2b]" />

      <span className="text-[11px] font-semibold text-[#6f756f]">
        {text}
      </span>
    </div>
  );
}