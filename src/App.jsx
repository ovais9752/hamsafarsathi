import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Heart,
  Lock,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   MUSLIM / NIKAH / TRADITIONAL WEDDING IMAGES
========================================================= */

const weddingImages = {
  hero:
    "https://images.pexels.com/photos/16800908/pexels-photo-16800908.jpeg?auto=compress&cs=tinysrgb&w=1400",

  nikah:
    "https://images.pexels.com/photos/7122168/pexels-photo-7122168.jpeg?auto=compress&cs=tinysrgb&w=1400",

  couple:
    "https://images.pexels.com/photos/15865926/pexels-photo-15865926.jpeg?auto=compress&cs=tinysrgb&w=1400",

  elegant:
    "https://images.pexels.com/photos/31261200/pexels-photo-31261200.jpeg?auto=compress&cs=tinysrgb&w=1200",

  traditional:
    "https://images.pexels.com/photos/31619525/pexels-photo-31619525.jpeg?auto=compress&cs=tinysrgb&w=1200",

  outdoor:
    "https://images.pexels.com/photos/30548502/pexels-photo-30548502.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

/* =========================================================
   DEMO DISCOVERY
   All images are Muslim / traditional wedding imagery.
========================================================= */

const discovery = [
  {
    title: "A Beautiful Beginning",
    subtitle: "Muslim Wedding",
    location: "Alwar",
    image: weddingImages.elegant,
    type: "Bride & Groom",
  },
  {
    title: "Traditional Nikah",
    subtitle: "Family & Faith",
    location: "Nuh",
    image: weddingImages.nikah,
    type: "Nikah",
  },
  {
    title: "Together With Intention",
    subtitle: "Traditional Attire",
    location: "Bharatpur",
    image: weddingImages.couple,
    type: "Hamsafar",
  },
  {
    title: "A Meaningful Rishta",
    subtitle: "Muslim Wedding",
    location: "Delhi",
    image: weddingImages.traditional,
    type: "Wedding",
  },
];

/* =========================================================
   LOGO
========================================================= */

function Logo({ dark = false, footer = false }) {
  return (
    <svg
      width={footer ? "245" : "205"}
      height={footer ? "82" : "68"}
      viewBox="0 0 470 155"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="hfGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A87832" />
          <stop offset="45%" stopColor="#E8CE91" />
          <stop offset="100%" stopColor="#B5853D" />
        </linearGradient>

        <linearGradient id="hfGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#075E58" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>

        <linearGradient id="hfRose" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E98BA4" />
          <stop offset="100%" stopColor="#C93661" />
        </linearGradient>
      </defs>

      <path
        d="M68 109C57 99 29 78 29 52C29 35 41 24 56 24C66 24 75 30 81 39C87 30 96 24 106 24C121 24 132 35 132 52C132 78 103 99 93 109L81 121Z"
        fill="none"
        stroke="url(#hfGold)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      <path
        d="M57 47C64 39 74 41 81 50C88 41 98 39 105 47"
        fill="none"
        stroke="url(#hfGold)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M42 103C27 104 18 115 17 128C30 125 39 118 46 106Z"
        fill="url(#hfGreen)"
      />

      <path
        d="M94 30C98 17 108 11 118 13C114 24 105 30 94 30Z"
        fill="url(#hfRose)"
      />

      <path
        d="M101 36C109 25 119 24 128 29C121 39 111 41 101 36Z"
        fill="url(#hfRose)"
      />

      <path
        d="M92 31C85 21 86 12 92 6C99 15 99 24 92 31Z"
        fill="url(#hfGold)"
      />

      <circle cx="119" cy="17" r="3" fill="#F2A6B8" />
      <circle cx="126" cy="26" r="2.5" fill="#F2A6B8" />
      <circle cx="110" cy="10" r="2.4" fill="#F2A6B8" />

      <text
        x="150"
        y="70"
        fontFamily="Georgia, serif"
        fontSize="43"
        fontWeight="500"
        letterSpacing="-1.8"
        fill={dark ? "#FFFFFF" : "#075E58"}
      >
        Hamsafar
      </text>

      <text
        x="322"
        y="70"
        fontFamily="Georgia, serif"
        fontSize="43"
        fontStyle="italic"
        fontWeight="500"
        letterSpacing="-1.8"
        fill="url(#hfGold)"
      >
        sathi
      </text>

      <text
        x="151"
        y="101"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="3.8"
        fill={dark ? "#F3A5B9" : "#D9466F"}
      >
        Rishtey for Mewati
      </text>

      <line
        x1="151"
        y1="119"
        x2="407"
        y2="119"
        stroke={dark ? "#E8CE91" : "#C8A45D"}
        strokeWidth="1"
        opacity=".55"
      />

      <circle
        cx="280"
        cy="119"
        r="3"
        fill={dark ? "#E8CE91" : "#C8A45D"}
      />
    </svg>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [membershipOpen, setMembershipOpen] = useState(false);

  const goLogin = () => {
    setMobileOpen(false);
    navigate("/login");
  };

  const scrollTo = (id) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openMembership = () => {
    setMobileOpen(false);
    setMembershipOpen(true);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let raf;

    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              once: true,
            },
          }
        );
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCF9F4] text-[#153E3A]">
      <style>{`
        .hf-pattern {
          background-image:
            radial-gradient(
              circle at 1px 1px,
              rgba(15,118,110,.055) 1px,
              transparent 0
            );
          background-size: 32px 32px;
        }

        .gold-text {
          background: linear-gradient(
            110deg,
            #a87832,
            #f0d99c,
            #b5853d,
            #a87832
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: goldMove 6s linear infinite;
        }

        @keyframes goldMove {
          to {
            background-position: 220% center;
          }
        }

        .hf-shadow {
          box-shadow:
            0 35px 90px rgba(8,55,51,.14),
            0 10px 30px rgba(0,0,0,.06);
        }
      `}</style>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#DCE5E1]/80 bg-[#FCF9F4]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <button
              onClick={() => scrollTo("discover")}
              className="text-sm font-bold text-[#5D726E] hover:text-[#0F766E]"
            >
              Discover
            </button>

            <button
              onClick={() => scrollTo("membership")}
              className="text-sm font-bold text-[#5D726E] hover:text-[#0F766E]"
            >
              Membership
            </button>

            <button
              onClick={() => scrollTo("journey")}
              className="text-sm font-bold text-[#5D726E] hover:text-[#0F766E]"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollTo("values")}
              className="text-sm font-bold text-[#5D726E] hover:text-[#0F766E]"
            >
              Why Us
            </button>

            <button
              onClick={() => scrollTo("faq")}
              className="text-sm font-bold text-[#5D726E] hover:text-[#0F766E]"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              to="/login"
              className="rounded-full px-5 py-3 text-sm font-bold text-[#174943]"
            >
              Log in
            </Link>

            <button
              onClick={goLogin}
              className="group flex items-center gap-2 rounded-full bg-[#0F766E] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-[#0F766E]/20 transition hover:-translate-y-0.5"
            >
              Join Free
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E3DF] bg-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-[#DCE5E1] bg-[#FCF9F4] lg:hidden"
            >
              <div className="space-y-1 px-5 pb-5 pt-3">
                {[
                  ["discover", "Discover"],
                  ["membership", "Membership"],
                  ["journey", "How It Works"],
                  ["values", "Why Us"],
                  ["faq", "FAQ"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="block w-full rounded-xl px-4 py-3 text-left text-sm font-bold hover:bg-white"
                  >
                    {label}
                  </button>
                ))}

                <div className="grid grid-cols-2 gap-3 border-t pt-4">
                  <Link
                    to="/login"
                    className="rounded-xl border bg-white py-3 text-center text-sm font-bold"
                  >
                    Log in
                  </Link>

                  <button
                    onClick={goLogin}
                    className="rounded-xl bg-[#0F766E] py-3 text-sm font-bold text-white"
                  >
                    Join Free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-[82px]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hf-pattern relative overflow-hidden">
          <div className="absolute -left-64 top-10 h-[650px] w-[650px] rounded-full bg-[#DCEFE9] blur-3xl" />

          <div className="absolute -right-64 top-0 h-[650px] w-[650px] rounded-full bg-[#F1DFC6] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1480px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:px-12 lg:py-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .7 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#D8E3DE] bg-white/85 px-4 py-2.5 shadow-sm"
              >
                <Sparkles size={14} className="text-[#B27D32]" />

                <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#60736F]">
                  Rishtey for Mewati
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, delay: .08 }}
                className="mt-7 max-w-3xl text-[51px] font-black leading-[.91] tracking-[-.065em] text-[#123B37] sm:text-6xl lg:text-[78px]"
              >
                Jahan rishta
                <span className="block text-[#0F766E]">
                  sirf profile nahi,
                </span>

                <span className="gold-text block">
                  ek niyyat hoti hai.
                </span>
              </motion.h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#6A7B77] sm:text-lg">
                A thoughtful Muslim matrimonial experience for meaningful
                connections, family values and respectful beginnings.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={goLogin}
                  className="group flex items-center justify-center gap-2 rounded-full bg-[#0F766E] px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#0F766E]/20 transition hover:-translate-y-1"
                >
                  Find My Hamsafar
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => scrollTo("discover")}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#D5E0DC] bg-white px-7 py-4 text-sm font-black text-[#174943]"
                >
                  <Search size={15} />
                  Explore Rishtey
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                <MiniTrust
                  icon={<ShieldCheck size={17} />}
                  title="Privacy"
                  text="Focused"
                />

                <MiniTrust
                  icon={<Users size={17} />}
                  title="Family"
                  text="Friendly"
                />

                <MiniTrust
                  icon={<Heart size={17} />}
                  title="Respect"
                  text="Always"
                />
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="relative mx-auto h-[650px] w-full max-w-[720px]">
              <div className="absolute left-[13%] top-[2%] h-[570px] w-[74%] rounded-t-[290px] border border-[#C79A55]/25 bg-[#E8F0EC]/80" />

              <div className="absolute left-[18%] top-[6%] h-[555px] w-[64%] rounded-t-[270px] border border-[#C79A55]/20" />

              <motion.div
                initial={{ opacity: 0, scale: .93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1 }}
                className="absolute right-[2%] top-[3%] z-10 h-[525px] w-[70%] overflow-hidden rounded-t-[240px] rounded-b-[40px] border-[9px] border-white hf-shadow"
              >
                <img
                  src={weddingImages.hero}
                  alt="Muslim wedding"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#073A36]/95 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-7 right-7">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-black uppercase tracking-[.18em] text-white backdrop-blur-md">
                    <Heart size={11} className="fill-[#F0A7B8]" />
                    Meaningful beginnings
                  </div>

                  <div className="text-2xl font-black leading-tight text-white">
                    Do dil. Do families.
                    <br />
                    Ek khoobsurat safar.
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute left-0 top-[13%] z-30 w-[245px] rounded-[28px] border border-white bg-white/95 p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5E8CF] text-[#A77731]">
                    <Heart size={21} className="fill-current" />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[#183F3A]">
                      Meaningful
                    </div>

                    <div className="mt-1 text-[10px] text-[#84918E]">
                      Rishtey begin with intention.
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, delay: .3 }}
                className="absolute bottom-0 left-[1%] z-30 h-[235px] w-[255px] overflow-hidden rounded-[32px] border-[8px] border-white shadow-2xl"
              >
                <img
                  src={weddingImages.nikah}
                  alt="Muslim Nikah"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#103A36]/95 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="text-sm font-black text-white">
                    Nikah. Family. Respect.
                  </div>

                  <div className="mt-1 text-[9px] text-white/60">
                    A beautiful beginning.
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-[100px] right-0 z-40 flex w-[185px] items-center gap-3 rounded-[22px] border border-white bg-white/95 p-4 shadow-2xl"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F2ED] text-[#0F766E]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <div className="text-xs font-black text-[#183F3A]">
                    Privacy First
                  </div>

                  <div className="mt-1 text-[9px] text-[#83908D]">
                    Your journey, your control.
                  </div>
                </div>
              </motion.div>

              <div className="absolute right-[2%] top-[45%] z-40 flex h-[78px] w-[78px] items-center justify-center rounded-full border-[7px] border-[#FCF9F4] bg-[#C79A55] text-white shadow-2xl">
                <Heart size={28} className="fill-current" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <section className="border-y border-[#DCE5E1] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#E7ECEA] md:grid-cols-4">
            <TrustStat
              icon={<ShieldCheck size={18} />}
              title="Privacy"
              text="Focused"
            />

            <TrustStat
              icon={<Users size={18} />}
              title="Family"
              text="Friendly"
            />

            <TrustStat
              icon={<Heart size={18} />}
              title="Respect"
              text="First"
            />

            <TrustStat
              icon={<Sparkles size={18} />}
              title="Premium"
              text="Experience"
            />
          </div>
        </section>

        {/* =====================================================
            DISCOVER — RICHER
        ===================================================== */}

        <section
          id="discover"
          className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-3 text-[#B27D32]">
                  <span className="h-px w-10 bg-[#C79A55]" />

                  <span className="text-[10px] font-black uppercase tracking-[.28em]">
                    Discover
                  </span>
                </div>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1] tracking-[-.055em] text-[#123B38] sm:text-5xl">
                  A matrimonial journey that
                  <span className="block text-[#0F766E]">
                    feels personal.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#71817E]">
                  Explore meaningful wedding stories, traditions and the kind
                  of connections that bring families together.
                </p>
              </div>

              <button
                onClick={goLogin}
                className="group inline-flex items-center gap-2 rounded-full border border-[#D5E0DC] bg-white px-6 py-3.5 text-sm font-black text-[#174943] shadow-sm"
              >
                Start Discovering
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {discovery.map((item, index) => (
                <DiscoveryCard
                  key={item.title}
                  item={item}
                  index={index}
                  onClick={goLogin}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MEMBERSHIP
        ===================================================== */}

        <section
          id="membership"
          className="scroll-mt-24 bg-[#103A36] px-5 py-24 text-white sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="reveal text-center">
              <div className="text-[10px] font-black uppercase tracking-[.28em] text-[#E8CC8B]">
                Membership
              </div>

              <h2 className="mt-4 text-4xl font-black tracking-[-.055em] sm:text-5xl">
                Start simple. Go further when ready.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">
                Begin your matrimonial journey without making it complicated.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <Membership
                title="Free Profile"
                label="START"
                description="Everything you need to begin your journey."
                items={[
                  "Create your profile",
                  "Add your preferences",
                  "Discover profiles",
                  "Express interest",
                ]}
                onClick={goLogin}
              />

              <Membership
                premium
                title="Premium Experience"
                label="PREMIUM"
                description="A richer experience for members ready to explore further."
                items={[
                  "Enhanced profile presence",
                  "Premium discovery",
                  "More ways to connect",
                  "Priority experience",
                ]}
                onClick={openMembership}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <section
          id="journey"
          className="scroll-mt-24 bg-[#F4EDE3] px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
              <div className="reveal">
                <div className="flex items-center gap-3 text-[#B27D32]">
                  <span className="h-px w-10 bg-[#C79A55]" />

                  <span className="text-[10px] font-black uppercase tracking-[.28em]">
                    How it works
                  </span>
                </div>

                <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-.055em] text-[#153D38] sm:text-5xl">
                  Simple to start.
                  <span className="block text-[#0F766E]">
                    Meaningful as it grows.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#70807C]">
                  Build your presence, discover people and start conversations
                  when the time feels right.
                </p>

                <button
                  onClick={goLogin}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-7 py-4 text-sm font-black text-white"
                >
                  Create My Profile
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Journey
                  number="01"
                  icon={<Users size={21} />}
                  title="Create"
                  text="Tell your story and add the details that matter."
                />

                <Journey
                  number="02"
                  icon={<Search size={21} />}
                  title="Discover"
                  text="Explore profiles and preferences with intention."
                />

                <Journey
                  number="03"
                  icon={<MessageCircle size={21} />}
                  title="Connect"
                  text="Begin a respectful conversation when interest is mutual."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAMILY + VALUES SECTION
        ===================================================== */}

        <section
          id="values"
          className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
              <div className="relative h-[590px] overflow-hidden rounded-[40px]">
                <img
                  src={weddingImages.traditional}
                  alt="Traditional Muslim wedding"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082F2C]/95 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-[10px] font-black uppercase tracking-[.25em] text-[#E8CC8B]">
                    Built with intention
                  </div>

                  <div className="mt-3 text-3xl font-black leading-tight text-white">
                    Family. Values.
                    <br />
                    A future together.
                  </div>
                </div>
              </div>

              <div className="reveal">
                <div className="flex items-center gap-3 text-[#B27D32]">
                  <span className="h-px w-10 bg-[#C79A55]" />

                  <span className="text-[10px] font-black uppercase tracking-[.28em]">
                    Why Hamsafarsathi
                  </span>
                </div>

                <h2 className="mt-5 text-4xl font-black leading-[1.03] tracking-[-.055em] text-[#153D38] sm:text-5xl">
                  Because a rishta is
                  <span className="block text-[#0F766E]">
                    bigger than a profile.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[#71817D]">
                  A matrimonial platform should make space for the things that
                  matter when thinking about a future together.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  <Value
                    icon={<ShieldCheck size={21} />}
                    title="Privacy"
                    text="Share information thoughtfully and stay in control."
                  />

                  <Value
                    icon={<Users size={21} />}
                    title="Family"
                    text="Designed with family participation in mind."
                  />

                  <Value
                    icon={<Heart size={21} />}
                    title="Respect"
                    text="Meaningful connections without unnecessary noise."
                  />

                  <Value
                    icon={<Lock size={21} />}
                    title="Safety"
                    text="A calmer environment for serious connections."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LARGE NIKAH STORY
        ===================================================== */}

        <section className="px-5 pb-24 sm:px-8 lg:px-10">
          <div className="relative mx-auto min-h-[650px] max-w-7xl overflow-hidden rounded-[44px]">
            <img
              src={weddingImages.nikah}
              alt="Muslim Nikah ceremony"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#062F2C]/95 via-[#062F2C]/60 to-transparent" />

            <div className="relative flex min-h-[650px] items-center px-8 py-16 sm:px-14 lg:px-20">
              <div className="reveal max-w-2xl text-white">
                <div className="flex items-center gap-3 text-[#E8CC8B]">
                  <span className="h-px w-10 bg-[#E8CC8B]" />

                  <span className="text-[10px] font-black uppercase tracking-[.28em]">
                    The beginning
                  </span>
                </div>

                <h2 className="mt-6 text-5xl font-black leading-[.98] tracking-[-.06em] sm:text-6xl">
                  Har khoobsurat rishta
                  <span className="block text-[#E8CC8B]">
                    ek niyyat se shuru hota hai.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Start with a profile. Discover a connection. Let the journey
                  unfold with respect.
                </p>

                <button
                  onClick={goLogin}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-[#0F766E]"
                >
                  Begin Your Journey
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            3 BIG PRINCIPLES
        ===================================================== */}

        <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="reveal text-center">
              <div className="text-[10px] font-black uppercase tracking-[.28em] text-[#B27D32]">
                Our approach
              </div>

              <h2 className="mt-4 text-4xl font-black tracking-[-.055em] text-[#153D38] sm:text-5xl">
                What makes a rishta meaningful?
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <Principle
                number="01"
                title="Intention"
                text="Know what you are looking for and why you are beginning this journey."
              />

              <Principle
                number="02"
                title="Understanding"
                text="Look beyond a photograph and discover the person behind the profile."
              />

              <Principle
                number="03"
                title="Respect"
                text="Let every conversation begin with dignity and consideration."
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          id="faq"
          className="scroll-mt-24 bg-[#F6EFE6] px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div className="reveal">
              <div className="text-[10px] font-black uppercase tracking-[.28em] text-[#B27D32]">
                FAQ
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.055em] text-[#153D38] sm:text-5xl">
                Before you
                <span className="block text-[#0F766E]">begin.</span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#71817D]">
                A few simple answers before you take your first step.
              </p>
            </div>

            <div>
              {[
                [
                  "Can I create my profile for free?",
                  "You can begin your journey by creating your profile and exploring the experience.",
                ],
                [
                  "Can I control what I share?",
                  "The experience is designed with privacy in mind, so you can be thoughtful about what information you provide.",
                ],
                [
                  "Is family involvement supported?",
                  "Yes. The product experience is designed with matrimonial and family involvement in mind.",
                ],
                [
                  "How do I start?",
                  "Create your profile, add your preferences and begin discovering meaningful connections.",
                ],
                [
                  "Can I edit my profile later?",
                  "Yes. Your profile can be updated as your information and preferences change.",
                ],
              ].map(([question, answer], index) => (
                <div
                  key={question}
                  className="border-b border-[#DCE4E0]"
                >
                  <button
                    onClick={() =>
                      setFaqOpen(faqOpen === index ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-sm font-black text-[#183F3A]">
                      {question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#0F766E] transition ${
                        faqOpen === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {faqOpen === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-8 text-xs leading-6 text-[#71817D]">
                          {answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[46px] bg-[#0F766E] px-7 py-20 text-center text-white">
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-48 -right-32 h-[560px] w-[560px] rounded-full bg-[#C79A55]/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Heart size={29} className="fill-white" />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black leading-tight tracking-[-.055em] sm:text-6xl">
                Shayad aapka
                <span className="text-[#F0D28D]"> hamsafar</span>
                <br />
                yahin se mile.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
                Your next chapter can begin with one simple step.
              </p>

              <button
                onClick={goLogin}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-[#0F766E] shadow-2xl transition hover:-translate-y-1"
              >
                Find My Hamsafar
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#082F2C] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.4fr_.6fr_.6fr]">
            <div>
              <Logo dark footer />

              <p className="mt-2 max-w-md text-xs leading-7 text-white/45">
                Hamsafarsathi — Rishtey for Mewati. A thoughtful matrimonial
                experience designed around meaningful connections, privacy and
                family values.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-[.25em] text-[#E8CC8B]">
                Explore
              </div>

              <div className="mt-5 space-y-3 text-sm text-white/45">
                <button
                  onClick={() => scrollTo("discover")}
                  className="block hover:text-white"
                >
                  Discover
                </button>

                <button
                  onClick={() => scrollTo("membership")}
                  className="block hover:text-white"
                >
                  Membership
                </button>

                <button
                  onClick={() => scrollTo("journey")}
                  className="block hover:text-white"
                >
                  How It Works
                </button>

                <button
                  onClick={() => scrollTo("values")}
                  className="block hover:text-white"
                >
                  Why Us
                </button>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-[.25em] text-[#E8CC8B]">
                Account
              </div>

              <div className="mt-5 space-y-3 text-sm text-white/45">
                <Link to="/login" className="block hover:text-white">
                  Login
                </Link>

                <Link to="/profile" className="block hover:text-white">
                  My Profile
                </Link>

                <Link to="/dashboard" className="block hover:text-white">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/30 sm:flex-row">
            <span>© 2026 Hamsafarsathi</span>
            <span>Rishtey for Mewati</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {membershipOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMembershipOpen(false)}
              className="fixed inset-0 z-[100] bg-[#062F2C]/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="fixed left-1/2 top-1/2 z-[110] max-h-[90vh] w-[calc(100%-24px)] max-w-[980px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[30px] bg-[#FCF9F4] p-6 shadow-2xl sm:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[.28em] text-[#B27D32]">
                    Hamsafarsathi Membership
                  </div>

                  <h3 className="mt-3 text-3xl font-black tracking-[-.04em] text-[#153D38] sm:text-4xl">
                    Choose how you want to connect.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#71817D]">
                    Create your profile for free, then unlock deeper
                    discovery and private conversations when you are ready.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setMembershipOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8E2DE] bg-white text-[#173F3A]"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <LandingPlan
                  label="START"
                  title="Free Profile"
                  description="Begin your matrimonial journey without payment."
                  items={[
                    "Create your profile",
                    "Add preferences",
                    "Discover profiles",
                    "Express interest",
                  ]}
                  button="Create Free Profile"
                  onClick={goLogin}
                />

                <LandingPlan
                  popular
                  label="POPULAR"
                  title="Gold"
                  description="For members ready to start meaningful conversations."
                  items={[
                    "Everything in Free",
                    "Private messaging",
                    "Enhanced discovery",
                    "More ways to connect",
                  ]}
                  button="Choose Gold"
                  onClick={goLogin}
                />

                <LandingPlan
                  label="PREMIUM"
                  title="Premium"
                  description="A richer experience for serious matrimonial connections."
                  items={[
                    "Everything in Gold",
                    "Priority experience",
                    "Advanced discovery",
                    "Premium profile presence",
                  ]}
                  button="Choose Premium"
                  onClick={goLogin}
                />
              </div>

              <div className="mt-6 flex items-center gap-2 text-[10px] text-[#8A9691]">
                <Lock size={12} />
                Payment gateway can be connected to the selected plan later.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function MiniTrust({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-[#DCE6E1] bg-white/85 p-3">
      <div className="text-[#0F766E]">{icon}</div>

      <div className="mt-2 text-[10px] font-black text-[#183F3A]">
        {title}
      </div>

      <div className="text-[9px] text-[#87938F]">{text}</div>
    </div>
  );
}

function TrustStat({ icon, title, text }) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F2EE] text-[#0F766E]">
        {icon}
      </div>

      <div>
        <div className="text-sm font-black text-[#183F3A]">
          {title}
        </div>

        <div className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A19D]">
          {text}
        </div>
      </div>
    </div>
  );
}

function DiscoveryCard({ item, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * .08 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[30px] border border-[#DCE5E1] bg-white shadow-sm transition hover:shadow-2xl"
    >
      <div className="relative h-[390px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#073A36]/95 via-[#073A36]/10 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-[9px] font-black uppercase tracking-[.17em] text-white backdrop-blur">
          Muslim Matrimony
        </div>

        <button
          onClick={onClick}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#D14C70] shadow-lg"
        >
          <Heart size={17} />
        </button>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-[9px] font-black uppercase tracking-[.18em] text-[#E8CC8B]">
            {item.type}
          </div>

          <div className="mt-2 text-xl font-black text-white">
            {item.title}
          </div>

          <div className="mt-1 text-xs text-white/65">
            {item.subtitle} · {item.location}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <div className="text-[9px] font-black uppercase tracking-[.16em] text-[#9AA7A4]">
            Explore
          </div>

          <div className="mt-1 text-sm font-bold text-[#183F3A]">
            View journey
          </div>
        </div>

        <button
          onClick={onClick}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3EF] text-[#0F766E] transition hover:bg-[#0F766E] hover:text-white"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function LandingPlan({
  label,
  title,
  description,
  items,
  popular = false,
  button,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-[26px] border p-6 sm:p-7 ${
        popular
          ? "border-[#C79A55] bg-[#103A36] text-white shadow-xl"
          : "border-[#DCE5E1] bg-white text-[#173F3A]"
      }`}
    >
      {popular && (
        <div className="absolute right-5 top-5 rounded-full bg-[#F1DDAF] px-3 py-1.5 text-[8px] font-black uppercase tracking-[.18em] text-[#173D38]">
          Popular
        </div>
      )}

      <div
        className={`text-[9px] font-black uppercase tracking-[.25em] ${
          popular ? "text-[#E8CC8B]" : "text-[#B27D32]"
        }`}
      >
        {label}
      </div>

      <h4 className="mt-3 text-2xl font-black">
        {title}
      </h4>

      <p
        className={`mt-3 min-h-[66px] text-xs leading-6 ${
          popular ? "text-white/55" : "text-[#71817D]"
        }`}
      >
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <Check
              size={14}
              className={`mt-0.5 shrink-0 ${
                popular ? "text-[#E8CC8B]" : "text-[#0F766E]"
              }`}
            />
            <span
              className={`text-xs font-semibold ${
                popular ? "text-white/70" : "text-[#53635F]"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onClick}
        className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-black ${
          popular
            ? "bg-[#F1DDAF] text-[#173D38]"
            : "bg-[#0F766E] text-white"
        }`}
      >
        {button}
        <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}

function Membership({
  title,
  label,
  description,
  items,
  premium,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative rounded-[34px] p-8 sm:p-10 ${
        premium
          ? "bg-[#F1DDAF] text-[#173D38] shadow-2xl"
          : "border border-white/10 bg-white/[.065]"
      }`}
    >
      {premium && (
        <div className="absolute right-7 top-7 rounded-full bg-[#0F766E] px-3 py-1.5 text-[8px] font-black uppercase tracking-[.18em] text-white">
          Premium
        </div>
      )}

      <div
        className={`text-[9px] font-black uppercase tracking-[.25em] ${
          premium ? "text-[#866226]" : "text-[#E8CC8B]"
        }`}
      >
        {label}
      </div>

      <h3 className="mt-4 text-3xl font-black">{title}</h3>

      <p
        className={`mt-3 text-sm ${
          premium ? "text-[#66726E]" : "text-white/50"
        }`}
      >
        {description}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Check
              size={14}
              className={premium ? "text-[#0F766E]" : "text-[#E8CC8B]"}
            />

            <span
              className={`text-xs font-semibold ${
                premium ? "text-[#53635F]" : "text-white/65"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        className={`mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-black ${
          premium
            ? "bg-[#0F766E] text-white"
            : "bg-white text-[#0F766E]"
        }`}
      >
        Get Started
        <ArrowRight size={15} />
      </button>
    </motion.div>
  );
}

function Journey({ number, icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      className="rounded-[30px] border border-[#D9E2DE] bg-white p-7 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-4xl font-black text-[#D9B66F]">
          {number}
        </span>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9F2EE] text-[#0F766E]">
          {icon}
        </div>
      </div>

      <h3 className="mt-8 text-xl font-black text-[#173F3A]">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-[#72817D]">
        {text}
      </p>
    </motion.div>
  );
}

function Value({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[26px] border border-[#DCE5E1] bg-white p-6 shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9F2EE] text-[#0F766E]">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-black text-[#173F3A]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-[#71817D]">
        {text}
      </p>
    </motion.div>
  );
}

function Principle({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      className="rounded-[32px] border border-[#DCE5E1] bg-[#FCF9F4] p-8"
    >
      <div className="text-5xl font-black text-[#D8B56B]">
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-black text-[#173F3A]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#71817D]">
        {text}
      </p>
    </motion.div>
  );
}