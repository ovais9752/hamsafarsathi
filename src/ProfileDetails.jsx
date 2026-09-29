import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  MoreHorizontal,
  Phone,
} from "lucide-react";

/* =========================================================
   PROFILE DATA
========================================================= */

const profiles = {
  aarohi: {
    name: "Aarohi",
    age: 24,
    city: "Indore",
    role: "Software Engineer",
    education: "B.Tech",
    gender: "Female",
    match: 94,
    image:
      "https://images.pexels.com/photos/16800908/pexels-photo-16800908.jpeg?auto=compress&cs=tinysrgb&w=1400",
    about:
      "Aarohi is a software engineer who enjoys meaningful conversations, travelling and spending quality time with family. She values kindness, ambition and emotional maturity.",
    interests: [
      "Family oriented",
      "Career focused",
      "Kind",
      "Travel",
    ],
  },

  rahul: {
    name: "Rahul",
    age: 27,
    city: "Bhopal",
    role: "Business Consultant",
    education: "MBA",
    gender: "Male",
    match: 92,
    image:
      "https://images.pexels.com/photos/7122168/pexels-photo-7122168.jpeg?auto=compress&cs=tinysrgb&w=1400",
    about:
      "Rahul works as a business consultant and believes in keeping life balanced between career, family and personal growth. He appreciates honesty and a simple lifestyle.",
    interests: [
      "Ambitious",
      "Family oriented",
      "Mature",
      "Simple lifestyle",
    ],
  },

  ananya: {
    name: "Ananya",
    age: 25,
    city: "Bhopal",
    role: "Product Designer",
    education: "MBA",
    gender: "Female",
    match: 91,
    image:
      "https://images.pexels.com/photos/15865926/pexels-photo-15865926.jpeg?auto=compress&cs=tinysrgb&w=1400",
    about:
      "Ananya is a product designer with a creative personality. She enjoys exploring new places, thoughtful conversations and building a balanced life.",
    interests: [
      "Creative",
      "Open minded",
      "Career focused",
      "Travel",
    ],
  },

  arjun: {
    name: "Arjun",
    age: 26,
    city: "Indore",
    role: "Civil Engineer",
    education: "M.Tech",
    gender: "Male",
    match: 90,
    image:
      "https://images.pexels.com/photos/31261200/pexels-photo-31261200.jpeg?auto=compress&cs=tinysrgb&w=1200",
    about:
      "Arjun is a civil engineer who values family, stability and personal growth. He likes fitness, travelling and spending time with close friends.",
    interests: [
      "Family oriented",
      "Fitness",
      "Career focused",
      "Simple lifestyle",
    ],
  },

  mehak: {
    name: "Mehak",
    age: 23,
    city: "Delhi",
    role: "Doctor",
    education: "MBBS",
    gender: "Female",
    match: 88,
    image:
      "https://images.pexels.com/photos/31619525/pexels-photo-31619525.jpeg?auto=compress&cs=tinysrgb&w=1200",
    about:
      "Mehak is a doctor who values empathy, family and meaningful relationships. Outside work, she enjoys reading, travelling and discovering new places.",
    interests: [
      "Kind",
      "Career focused",
      "Family oriented",
      "Good communicator",
    ],
  },

  kabir: {
    name: "Kabir",
    age: 28,
    city: "Mumbai",
    role: "Finance Manager",
    education: "CA",
    gender: "Male",
    match: 87,
    image:
      "https://images.pexels.com/photos/30548502/pexels-photo-30548502.jpeg?auto=compress&cs=tinysrgb&w=1200",
    about:
      "Kabir works in finance and enjoys maintaining a calm, balanced lifestyle. He believes trust, communication and mutual respect are the foundation of a strong relationship.",
    interests: [
      "Emotionally mature",
      "Ambitious",
      "Good communicator",
      "Open minded",
    ],
  },

  sara: {
    name: "Sara",
    age: 26,
    city: "Mumbai",
    role: "Business Analyst",
    education: "M.Com",
    gender: "Female",
    match: 86,
    image:
      "https://images.pexels.com/photos/7122168/pexels-photo-7122168.jpeg?auto=compress&cs=tinysrgb&w=1400",
    about:
      "Sara is a business analyst who enjoys meaningful conversations, family gatherings and exploring new experiences.",
    interests: [
      "Open minded",
      "Family oriented",
      "Career focused",
      "Travel",
    ],
  },

  aditya: {
    name: "Aditya",
    age: 25,
    city: "Pune",
    role: "Product Manager",
    education: "BBA",
    gender: "Male",
    match: 85,
    image:
      "https://images.pexels.com/photos/16800908/pexels-photo-16800908.jpeg?auto=compress&cs=tinysrgb&w=1400",
    about:
      "Aditya is a product manager who likes technology, travelling and building meaningful relationships. He values honesty and mutual understanding.",
    interests: [
      "Ambitious",
      "Open minded",
      "Travel",
      "Good communicator",
    ],
  },
};

/* =========================================================
   BRAND LOGO
========================================================= */

function Logo({ dark = false }) {
  return (
    <svg
      viewBox="0 0 560 135"
      className="h-auto w-[250px] sm:w-[285px]"
      role="img"
      aria-label="Hamsafar Sathi — Rishtey for Mewati"
    >
      <defs>
        <linearGradient id="pdGold" x1="0" x2="1">
          <stop offset="0%" stopColor="#C79A55" />
          <stop offset="100%" stopColor="#E8CC8B" />
        </linearGradient>
        <linearGradient id="pdGreen" x1="0" x2="1">
          <stop offset="0%" stopColor="#075E58" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
        <linearGradient id="pdRose" x1="0" x2="1">
          <stop offset="0%" stopColor="#D9466F" />
          <stop offset="100%" stopColor="#F2A6B8" />
        </linearGradient>
      </defs>

      <path d="M57 47C44 32 20 35 18 54C16 74 34 94 57 118C80 94 98 74 96 54C94 35 70 32 57 47Z" fill="none" stroke="url(#pdGold)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M57 47C64 39 74 41 81 50C88 41 98 39 105 47" fill="none" stroke="url(#pdGold)" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M42 103C27 104 18 115 17 128C30 125 39 118 46 106Z" fill="url(#pdGreen)" />
      <path d="M94 30C98 17 108 11 118 13C114 24 105 30 94 30Z" fill="url(#pdRose)" />
      <path d="M101 36C109 25 119 24 128 29C121 39 111 41 101 36Z" fill="url(#pdRose)" />
      <path d="M92 31C85 21 86 12 92 6C99 15 99 24 92 31Z" fill="url(#pdGold)" />
      <circle cx="119" cy="17" r="3" fill="#F2A6B8" />
      <circle cx="126" cy="26" r="2.5" fill="#F2A6B8" />
      <circle cx="110" cy="10" r="2.4" fill="#F2A6B8" />

      <text x="150" y="70" fontFamily="Georgia, serif" fontSize="43" fontWeight="500" letterSpacing="-1.8" fill={dark ? "#FFFFFF" : "#075E58"}>
        Hamsafar
      </text>
      <text x="322" y="70" fontFamily="Georgia, serif" fontSize="43" fontStyle="italic" fontWeight="500" letterSpacing="-1.8" fill="url(#pdGold)">
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

/* =========================================================
   PROFILE DETAILS PAGE
========================================================= */

function ProfileDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const profile =
    profiles[id?.toLowerCase()] || profiles.aarohi;

  const [liked, setLiked] = useState(() => {
    return (
      localStorage.getItem(
        `rishtaOneInterest_${profile.name.toLowerCase()}`
      ) === "true"
    );
  });

  const [messageOpen, setMessageOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "them",
      text: `Hi! Nice to connect with you.`,
    },
  ]);

  /* =========================================================
     INTEREST
  ========================================================= */

  const handleInterest = () => {
    const next = !liked;

    setLiked(next);

    if (next) {
      localStorage.setItem(
        `rishtaOneInterest_${profile.name.toLowerCase()}`,
        "true"
      );
    } else {
      localStorage.removeItem(
        `rishtaOneInterest_${profile.name.toLowerCase()}`
      );
    }
  };

  /* =========================================================
     MESSAGE
  ========================================================= */

  const openMessage = () => {
    setMessageOpen(true);
  };

  const closeMessage = () => {
    setMessageOpen(false);
  };

  const sendMessage = () => {
    const cleanMessage = message.trim();

    if (!cleanMessage) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        from: "me",
        text: cleanMessage,
      },
    ]);

    setMessage("");
  };

  const handleMessageKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F4] text-[#082F2C]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#eadfe5]/70 bg-[#FCF9F4]/90 backdrop-blur-2xl">

        <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* BRAND */}

          <button
            onClick={() => navigate("/dashboard")}
            className="group flex items-center"
            aria-label="Hamsafar Sathi home"
          >
            <Logo />
          </button>

          {/* BACK */}

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 rounded-full border border-[#eadfe5] bg-white px-4 py-2.5 text-xs font-black transition hover:border-[#0F766E] hover:text-[#0F766E]"
          >
            <ArrowLeft size={14} />
            Back to discover
          </button>

        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#082F2C] px-4 py-5 sm:px-7 sm:py-8 lg:px-12 lg:py-12">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid overflow-hidden rounded-[35px] bg-[#103A36] shadow-[0_35px_100px_rgba(23,19,31,0.3)] lg:grid-cols-[1.08fr_0.92fr]">

            {/* =================================================
                PHOTO
            ================================================= */}

            <div className="relative min-h-[580px] overflow-hidden sm:min-h-[650px] lg:min-h-[720px]">

              <img
                src={profile.image}
                alt={profile.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#082F2C] via-transparent to-[#082F2C]/10" />

              {/* BADGES */}

              <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-8 sm:top-8">

                <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[9px] font-black text-[#0F766E] backdrop-blur-xl">
                  <BadgeCheck size={13} />
                  Verified profile
                </span>

                <span className="rounded-full bg-black/30 px-4 py-2 text-[9px] font-black text-white backdrop-blur-xl">
                  Active recently
                </span>

              </div>

              {/* PROFILE BOTTOM */}

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-9 sm:left-9 sm:right-9">

                <div className="mb-4 flex items-center gap-2">

                  <span className="rounded-full bg-[#0F766E] px-3 py-1.5 text-[9px] font-black text-white">
                    {profile.match}% MATCH
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-black text-white backdrop-blur-xl">
                    {profile.gender}
                  </span>

                </div>

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                  <div>

                    <div className="flex items-center gap-2">

                      <h1 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
                        {profile.name}
                      </h1>

                      <BadgeCheck
                        size={21}
                        className="fill-[#0F766E] text-white"
                      />

                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">

                      <span>
                        {profile.age} years old
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {profile.city}
                      </span>

                      <span>
                        {profile.role}
                      </span>

                    </div>

                  </div>

                  {/* MATCH SCORE */}

                  <div className="hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-right backdrop-blur-xl sm:block">

                    <div className="flex items-center justify-end gap-1 text-2xl font-black text-white">

                      <Star
                        size={17}
                        className="fill-[#c79a55] text-[#c79a55]"
                      />

                      {profile.match}%

                    </div>

                    <div className="mt-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/35">
                      Compatibility
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* =================================================
                INTRO
            ================================================= */}

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

              <div className="flex items-center gap-2 text-[#E8A7B9]">

                <Sparkles size={15} />

                <span className="text-[9px] font-black uppercase tracking-[0.25em]">
                  A little about {profile.name}
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl">

                Get to know the

                <span className="block text-[#F0C0CC]">
                  person behind the profile.
                </span>

              </h2>

              <p className="mt-7 text-sm leading-7 text-white/50">
                {profile.about}
              </p>

              {/* INFO */}

              <div className="mt-9 grid grid-cols-2 gap-3">

                <InfoBox
                  icon={<BriefcaseBusiness size={16} />}
                  label="Profession"
                  value={profile.role}
                />

                <InfoBox
                  icon={<GraduationCap size={16} />}
                  label="Education"
                  value={profile.education}
                />

                <InfoBox
                  icon={<MapPin size={16} />}
                  label="Location"
                  value={profile.city}
                />

                <InfoBox
                  icon={<Users size={16} />}
                  label="Looking for"
                  value="Meaningful connection"
                />

              </div>

              {/* ACTIONS */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                {/* INTEREST */}

                <button
                  type="button"
                  onClick={handleInterest}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-sm font-black transition ${
                    liked
                      ? "bg-[#0F766E] text-white shadow-lg shadow-[#0F766E]/20"
                      : "bg-white text-[#0F766E] hover:bg-[#E9F2EE]"
                  }`}
                >

                  <Heart
                    size={17}
                    className={liked ? "fill-current" : ""}
                  />

                  {liked
                    ? "Interested"
                    : "Show interest"}

                </button>

                {/* MESSAGE */}

                <button
                  type="button"
                  onClick={openMessage}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 py-4 text-sm font-black text-white transition hover:bg-white/15 hover:border-[#E8A7B9]/40"
                >

                  <MessageCircle size={17} />

                  Message

                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILS
      ===================================================== */}

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1100px]">

          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">

            {/* VALUES */}

            <div className="rounded-[32px] border border-[#eadfe5] bg-white p-7 sm:p-10">

              <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[#0F766E]">
                Personality & values
              </div>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                What matters to {profile.name}.
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">

                {profile.interests.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-[#E9F2EE] px-4 py-3 text-xs font-black text-[#0B625C]"
                  >
                    <Check size={13} />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* TRUST */}

            <div className="rounded-[32px] bg-[#E8EFEA] p-7 sm:p-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082F2C] text-[#F0C0CC]">
                <ShieldCheck size={21} />
              </div>

              <h3 className="mt-7 text-2xl font-black">
                A thoughtful connection starts with trust.
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#716b78]">
                Hamsafarsathi profiles are designed to help people
                understand each other before starting a conversation.
              </p>

              <div className="mt-7 flex items-center gap-2 text-xs font-black text-[#0B625C]">
                <BadgeCheck size={15} />
                Profile information verified
              </div>

            </div>
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div className="mt-6 rounded-[32px] bg-[#0F766E] p-7 shadow-[0_25px_70px_rgba(184,59,103,0.2)] sm:p-9">

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

              <div>

                <div className="text-[9px] font-black uppercase tracking-[0.22em] text-white/55">
                  Interested?
                </div>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Start a meaningful conversation.
                </h3>

              </div>

              <button
                type="button"
                onClick={openMessage}
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#0B625C]"
              >
                Message {profile.name}

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>

          {/* BACK */}

          <button
            onClick={() => navigate("/dashboard")}
            className="mx-auto mt-8 flex items-center gap-2 text-xs font-black text-[#716b78] transition hover:text-[#0F766E]"
          >
            <ArrowLeft size={14} />
            Back to all profiles
          </button>

        </div>
      </section>

      {/* =====================================================
          MESSAGE MODAL
      ===================================================== */}

      {messageOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#082F2C]/65 p-4 backdrop-blur-md">

          <div className="flex h-[min(680px,92vh)] w-full max-w-[480px] flex-col overflow-hidden rounded-[30px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]">

            {/* CHAT HEADER */}

            <div className="flex items-center justify-between border-b border-[#eee5e9] bg-[#FCF9F4] px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="relative">

                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#4caf78]" />

                </div>

                <div>

                  <div className="flex items-center gap-1.5">

                    <span className="text-sm font-black">
                      {profile.name}
                    </span>

                    <BadgeCheck
                      size={13}
                      className="fill-[#0F766E] text-white"
                    />

                  </div>

                  <div className="mt-0.5 text-[9px] font-bold text-[#4caf78]">
                    Active recently
                  </div>

                </div>

              </div>

              <div className="flex items-center gap-1">

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#8b818b] hover:bg-[#f8edf1]"
                >
                  <Phone size={15} />
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#8b818b] hover:bg-[#f8edf1]"
                >
                  <MoreHorizontal size={17} />
                </button>

                <button
                  type="button"
                  onClick={closeMessage}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9F2EE] text-[#0F766E]"
                >
                  <X size={16} />
                </button>

              </div>
            </div>

            {/* CHAT BODY */}

            <div className="flex-1 overflow-y-auto bg-[#fcf8f6] p-5">

              <div className="mb-6 text-center">

                <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#f5e8ed] px-3 py-1.5 text-[9px] font-black text-[#0B625C]">
                  <ShieldCheck size={11} />
                  Meaningful conversations
                </div>

              </div>

              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`mb-3 flex ${
                    item.from === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[78%] px-4 py-3 text-xs leading-5 ${
                      item.from === "me"
                        ? "rounded-2xl rounded-br-sm bg-[#0F766E] text-white"
                        : "rounded-2xl rounded-bl-sm border border-[#eee5e9] bg-white text-[#082F2C]"
                    }`}
                  >
                    {item.text}
                  </div>

                </div>
              ))}

              {/* FAKE REPLY */}

              {messages.length > 1 && (
                <div className="mt-4 flex justify-start">

                  <div className="rounded-2xl rounded-bl-sm border border-[#eee5e9] bg-white px-4 py-3 text-xs text-[#716b78]">
                    Thanks for reaching out 😊
                  </div>

                </div>
              )}

            </div>

            {/* COMPOSER */}

            <div className="border-t border-[#eee5e9] bg-white p-4">

              <div className="flex items-end gap-2 rounded-[22px] border border-[#eadfe5] bg-[#FCF9F4] p-2 focus-within:border-[#0F766E]">

                <textarea
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={handleMessageKeyDown}
                  placeholder={`Write a message to ${profile.name}...`}
                  rows={1}
                  className="max-h-24 min-h-[42px] flex-1 resize-none bg-transparent px-3 py-2 text-xs outline-none placeholder:text-[#aaa1aa]"
                />

                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                    message.trim()
                      ? "bg-[#0F766E] text-white shadow-lg shadow-[#0F766E]/20"
                      : "bg-[#eee8eb] text-[#aaa1aa]"
                  }`}
                >
                  <Send size={15} />
                </button>

              </div>

              <div className="mt-2 text-center text-[8px] font-bold text-[#aaa1aa]">
                Press Enter to send
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">

      <div className="flex items-center gap-2 text-[#E8A7B9]">
        {icon}

        <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/35">
          {label}
        </span>
      </div>

      <div className="mt-2 truncate text-xs font-black text-white">
        {value}
      </div>

    </div>
  );
}

export default ProfileDetails;