import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  ChevronDown,
  Filter,
  GraduationCap,
  Heart,
  Lock,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AUTH_KEY = "hamsafarsathiLoggedIn";
const PROFILE_KEY = "rishtaOneProfile";
const LIKES_KEY = "hamsafarsathiLikes";
const MEMBERSHIP_KEY = "hamsafarsathiMembership";

const images = {
  hero:
    "https://images.pexels.com/photos/16800908/pexels-photo-16800908.jpeg?auto=compress&cs=tinysrgb&w=1800",

  nikah:
    "https://images.pexels.com/photos/7122168/pexels-photo-7122168.jpeg?auto=compress&cs=tinysrgb&w=1400",

  couple:
    "https://images.pexels.com/photos/15865926/pexels-photo-15865926.jpeg?auto=compress&cs=tinysrgb&w=1400",

  wedding:
    "https://images.pexels.com/photos/31619525/pexels-photo-31619525.jpeg?auto=compress&cs=tinysrgb&w=1400",

  family:
    "https://images.pexels.com/photos/30548502/pexels-photo-30548502.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

/* =========================================================
   BRAND
   HTML based logo — NO SVG TEXT OVERLAP
========================================================= */

function BrandLogo() {
  return (
    <div className="flex h-[72px] items-center gap-3">
      <div className="relative h-[66px] w-[64px] shrink-0">
        <svg
          viewBox="0 0 64 70"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <path
            d="M32 15C26 8 15 10 11 18C6 28 11 39 17 47L32 65L47 47C53 39 58 28 53 18C49 10 38 8 32 15Z"
            stroke="#C89A4D"
            strokeWidth="2.5"
          />

          <path
            d="M32 17C35 12 41 11 45 14"
            stroke="#C89A4D"
            strokeWidth="1.5"
          />
        </svg>

        <span className="absolute left-[43px] top-[7px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#C84F78] text-[8px] text-white">
          ♥
        </span>

        <span className="absolute -bottom-[1px] left-[0px] text-[25px] leading-none text-[#2D7568]">
          ◜
        </span>
      </div>

      <div className="flex flex-col leading-none">
        <div className="whitespace-nowrap font-serif text-[28px] font-bold tracking-[-1px]">
          <span className="text-[#174B51]">
            Hamsafar
          </span>
          <span className="ml-[5px] text-[#B7833F]">
            Sathi
          </span>
        </div>

        <div className="mt-[8px] ml-[2px] whitespace-nowrap text-[8px] font-bold uppercase tracking-[3px] text-[#C84F78]">
          Rishtey for Mewati
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MEMBER DATA
========================================================= */

const members = [
  {
    id: 1,
    name: "Aarohi Khan",
    age: 24,
    city: "Bhopal",
    profession: "Software Engineer",
    education: "B.Tech",
    gender: "Woman",
    match: 96,
    image: images.hero,
    interests: ["Travel", "Reading", "Family"],
  },
  {
    id: 2,
    name: "Ananya Sheikh",
    age: 23,
    city: "Indore",
    profession: "Teacher",
    education: "M.A. English",
    gender: "Woman",
    match: 92,
    image: images.nikah,
    interests: ["Books", "Cooking", "Travel"],
  },
  {
    id: 3,
    name: "Mehak Fatima",
    age: 25,
    city: "Bhopal",
    profession: "Doctor",
    education: "MBBS",
    gender: "Woman",
    match: 89,
    image: images.couple,
    interests: ["Health", "Art", "Nature"],
  },
  {
    id: 4,
    name: "Sara Noor",
    age: 22,
    city: "Indore",
    profession: "UX Designer",
    education: "B.Des",
    gender: "Woman",
    match: 87,
    image: images.wedding,
    interests: ["Design", "Photography", "Music"],
  },
  {
    id: 5,
    name: "Rahul Khan",
    age: 27,
    city: "Bhopal",
    profession: "Business Owner",
    education: "BBA",
    gender: "Man",
    match: 94,
    image: images.family,
    interests: ["Business", "Fitness", "Travel"],
  },
  {
    id: 6,
    name: "Arjun Siddiqui",
    age: 26,
    city: "Indore",
    profession: "Product Manager",
    education: "MBA",
    gender: "Man",
    match: 91,
    image: images.couple,
    interests: ["Technology", "Cricket", "Travel"],
  },
  {
    id: 7,
    name: "Kabir Ahmed",
    age: 28,
    city: "Bhopal",
    profession: "Civil Engineer",
    education: "B.Tech Civil",
    gender: "Man",
    match: 88,
    image: images.wedding,
    interests: ["Architecture", "Fitness", "Family"],
  },
  {
    id: 8,
    name: "Aditya Khan",
    age: 25,
    city: "Indore",
    profession: "Entrepreneur",
    education: "B.Com",
    gender: "Man",
    match: 85,
    image: images.hero,
    interests: ["Business", "Cars", "Travel"],
  },
];

/* =========================================================
   PROFILE CARD
========================================================= */

function ProfileCard({
  member,
  liked,
  onLike,
  onView,
  onMessage,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-[26px] border border-[#e6ddcf] bg-white shadow-[0_20px_60px_rgba(25,55,47,.07)]"
    >
      <div className="relative h-[340px] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03251f] via-transparent to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#06382f]/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em] text-white backdrop-blur">
          <ShieldCheck
            size={12}
            className="text-[#dfbd76]"
          />
          Verified
        </div>

        <button
          type="button"
          onClick={() => onLike(member.id)}
          className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 backdrop-blur transition ${
            liked
              ? "bg-[#c89b54] text-white"
              : "bg-black/20 text-white hover:bg-white hover:text-[#073d35]"
          }`}
        >
          <Heart
            size={17}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        <div className="absolute bottom-6 left-5 right-5 text-white">
          <div className="mb-3 flex items-center gap-2">
            <span className="bg-[#d9b76d] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#17372f]">
              {member.match}% compatibility
            </span>
          </div>

          <h3 className="font-serif text-[27px]">
            {member.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
            <MapPin size={13} />
            {member.city} · {member.age} years
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="space-y-2 text-xs text-[#68756f]">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness
              size={14}
              className="text-[#a77d42]"
            />
            {member.profession}
          </div>

          <div className="flex items-center gap-2">
            <GraduationCap
              size={14}
              className="text-[#a77d42]"
            />
            {member.education}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.interests.map(
            (interest) => (
              <span
                key={interest}
                className="border border-[#e7dfd2] px-3 py-1.5 text-[9px] text-[#65726c]"
              >
                {interest}
              </span>
            )
          )}
        </div>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => onView(member)}
            className="flex-1 bg-[#073d35] py-3 text-[10px] font-bold uppercase tracking-[.13em] text-white transition hover:bg-[#0b5147]"
          >
            View profile
          </button>

          <button
            type="button"
            onClick={() => onMessage(member)}
            className="flex h-11 w-11 items-center justify-center border border-[#ddd4c6] text-[#073d35] transition hover:bg-[#f4eee3]"
          >
            <MessageCircle size={17} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MEMBERSHIP
========================================================= */

function MembershipModal({ onClose }) {
  const plans = [
    {
      name: "Silver",
      description:
        "Explore profiles and express your interest.",
      features: [
        "Browse profiles",
        "Send interests",
        "Basic matching",
      ],
    },
    {
      name: "Gold",
      description:
        "Start conversations with members you like.",
      features: [
        "Everything in Silver",
        "Private messaging",
        "More discovery",
      ],
      popular: true,
    },
    {
      name: "Premium",
      description:
        "A complete experience for serious connections.",
      features: [
        "Everything in Gold",
        "Advanced discovery",
        "Priority features",
      ],
    },
  ];

  const choosePlan = (name) => {
    localStorage.setItem(
      MEMBERSHIP_KEY,
      "active"
    );

    onClose();

    setTimeout(() => {
      alert(
        `${name} membership selected. Payment gateway can be connected here.`
      );
    }, 100);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-[#031c17]/75 backdrop-blur-md"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        className="fixed left-1/2 top-1/2 z-[110] max-h-[90vh] w-[calc(100%-24px)] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[30px] bg-[#fbf8f1] p-6 shadow-2xl md:p-9"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.3em] text-[#a77d42]">
              <Sparkles size={13} />
              Membership
            </div>

            <h2 className="mt-3 font-serif text-4xl text-[#123e36]">
              Continue the conversation.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#738079]">
              Explore profiles freely. Membership
              unlocks private conversations.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd4c6] bg-white"
          >
            <X size={17} />
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border p-6 ${
                plan.popular
                  ? "border-[#b38b4c] bg-[#073d35]"
                  : "border-[#e2d9ca] bg-white"
              }`}
            >
              {plan.popular && (
                <span className="bg-[#d8b66a] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#17372f]">
                  Popular
                </span>
              )}

              <div
                className={`mt-5 text-[10px] font-bold uppercase tracking-[.25em] ${
                  plan.popular
                    ? "text-[#dfbd76]"
                    : "text-[#a77d42]"
                }`}
              >
                {plan.name}
              </div>

              <h3
                className={`mt-3 font-serif text-2xl ${
                  plan.popular
                    ? "text-white"
                    : "text-[#173f37]"
                }`}
              >
                Membership
              </h3>

              <p
                className={`mt-3 text-xs leading-6 ${
                  plan.popular
                    ? "text-white/60"
                    : "text-[#75807b]"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 space-y-3">
                {plan.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-2 text-xs ${
                        plan.popular
                          ? "text-white/75"
                          : "text-[#53635c]"
                      }`}
                    >
                      <Check size={14} />
                      {feature}
                    </div>
                  )
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  choosePlan(plan.name)
                }
                className={`mt-7 w-full py-3 text-xs font-bold ${
                  plan.popular
                    ? "bg-[#d8b66a] text-[#17372f]"
                    : "bg-[#073d35] text-white"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-[10px] text-[#89928e]">
          <Lock size={12} />
          Final pricing and payment can be connected later.
        </div>
      </motion.div>
    </>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

export default function Dashboard() {
  const navigate = useNavigate();

  const [profile, setProfile] =
    useState({});

  const [likes, setLikes] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [gender, setGender] =
    useState("All");

  const [city, setCity] =
    useState("All");

  const [filterOpen, setFilterOpen] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [panel, setPanel] =
    useState(null);

  const [membershipOpen, setMembershipOpen] =
    useState(false);

  const [selectedMember, setSelectedMember] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const [toast, setToast] =
    useState("");

  /* =======================================================
     AUTH GUARD
  ======================================================= */

  useEffect(() => {
    const loggedIn =
      localStorage.getItem(
        AUTH_KEY
      ) === "true";

    if (!loggedIn) {
      navigate("/login", {
        replace: true,
      });
      return;
    }

    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            PROFILE_KEY
          ) || "{}"
        );

      const savedLikes =
        JSON.parse(
          localStorage.getItem(
            LIKES_KEY
          ) || "[]"
        );

      setProfile(saved);

      if (Array.isArray(savedLikes)) {
        setLikes(savedLikes);
      }
    } catch {
      setProfile({});
      setLikes([]);
    }
  }, [navigate]);

  /* =======================================================
     DATA
  ======================================================= */

  const firstName =
    profile.fullName
      ?.trim()
      ?.split(" ")[0] ||
    "Friend";

  const completion = useMemo(() => {
    const fields = [
      profile.fullName,
      profile.age,
      profile.city,
      profile.profession,
      profile.education,
      profile.about,
      profile.photo,
    ];

    const filled =
      fields.filter(
        (value) =>
          value !== undefined &&
          value !== null &&
          String(value).trim() !== ""
      ).length;

    return Math.round(
      (filled / fields.length) * 100
    );
  }, [profile]);

  const cities = useMemo(
    () => [
      "All",
      ...new Set(
        members.map(
          (item) => item.city
        )
      ),
    ],
    []
  );

  const filteredMembers =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return members.filter(
        (member) => {
          const searchMatch =
            !query ||
            member.name
              .toLowerCase()
              .includes(query) ||
            member.city
              .toLowerCase()
              .includes(query) ||
            member.profession
              .toLowerCase()
              .includes(query);

          const genderMatch =
            gender === "All" ||
            member.gender === gender;

          const cityMatch =
            city === "All" ||
            member.city === city;

          return (
            searchMatch &&
            genderMatch &&
            cityMatch
          );
        }
      );
    }, [search, gender, city]);

  const highMatches =
    members.filter(
      (member) => member.match >= 90
    );

  /* =======================================================
     ACTIONS
  ======================================================= */

  const showToast = (text) => {
    setToast(text);

    setTimeout(() => {
      setToast("");
    }, 2300);
  };

  const toggleLike = (id) => {
    const exists =
      likes.includes(id);

    const updated = exists
      ? likes.filter(
          (item) => item !== id
        )
      : [...likes, id];

    setLikes(updated);

    localStorage.setItem(
      LIKES_KEY,
      JSON.stringify(updated)
    );

    showToast(
      exists
        ? "Removed from your interests"
        : "Added to your interests"
    );
  };

  const openProfile = (member) => {
    navigate(
      `/member/${member.id}`
    );
  };

  const openMessage = (member) => {
    const membership =
      localStorage.getItem(
        MEMBERSHIP_KEY
      ) === "active";

    if (!membership) {
      setMembershipOpen(true);
      return;
    }

    setSelectedMember(member);
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    showToast(
      `Message sent to ${selectedMember.name}`
    );

    setMessage("");
    setSelectedMember(null);
  };

  const logout = () => {
    localStorage.removeItem(
      AUTH_KEY
    );

    navigate("/login", {
      replace: true,
    });
  };

  const goDiscover = () => {
    document
      .getElementById("discover")
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMobileMenu(false);
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#173f37]">

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#e5dccf] bg-[#faf7f0]/95 backdrop-blur-xl">

        <div className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-5 md:px-9">

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <BrandLogo />
          </button>

          <nav className="hidden items-center gap-11 lg:flex">
            <button
              type="button"
              onClick={goDiscover}
              className="text-[13px] font-semibold text-[#073d35]"
            >
              Discover
            </button>

            <button
              type="button"
              onClick={() =>
                setPanel("matches")
              }
              className="text-[13px] text-[#737e79] hover:text-[#073d35]"
            >
              Matches
            </button>

            <button
              type="button"
              onClick={() =>
                setPanel("messages")
              }
              className="text-[13px] text-[#737e79] hover:text-[#073d35]"
            >
              Messages
            </button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">

            <div className="relative hidden xl:block">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a09c]"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search profiles"
                className="h-11 w-[230px] rounded-full border border-[#ddd4c6] bg-white pl-11 pr-4 text-xs outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setNotificationOpen(
                  (v) => !v
                )
              }
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd4c6] bg-white"
            >
              <Bell size={17} />

              <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-[#c58f43]" />
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/profile")
              }
              className="flex items-center gap-2 rounded-full border border-[#ddd4c6] bg-white py-1.5 pl-1.5 pr-4"
            >
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#073d35] text-xs font-bold text-white">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  firstName
                    .charAt(0)
                    .toUpperCase()
                )}
              </div>

              <span className="text-xs font-semibold">
                {firstName}
              </span>

              <ChevronDown size={13} />
            </button>
          </div>

          <button
            type="button"
            onClick={() =>
              setMobileMenu(
                (v) => !v
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd4c6] bg-white md:hidden"
          >
            {mobileMenu ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>

        {/* mobile */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="border-t border-[#e5dccf] px-5 py-4 md:hidden"
            >
              <div className="space-y-1">
                <button
                  onClick={goDiscover}
                  className="w-full bg-[#073d35] px-4 py-3 text-left text-xs font-semibold text-white"
                >
                  Discover
                </button>

                <button
                  onClick={() => {
                    setPanel("matches");
                    setMobileMenu(false);
                  }}
                  className="w-full px-4 py-3 text-left text-xs"
                >
                  Matches
                </button>

                <button
                  onClick={() => {
                    setPanel("messages");
                    setMobileMenu(false);
                  }}
                  className="w-full px-4 py-3 text-left text-xs"
                >
                  Messages
                </button>

                <button
                  onClick={() =>
                    navigate("/profile")
                  }
                  className="w-full px-4 py-3 text-left text-xs"
                >
                  My Profile
                </button>

                <button
                  onClick={logout}
                  className="w-full px-4 py-3 text-left text-xs text-red-700"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================================================
          HERO
      ================================================== */}

      <main>

        <section className="mx-auto max-w-[1440px] px-5 pt-7 md:px-9">

          <div className="relative min-h-[610px] overflow-hidden rounded-[34px] bg-[#073d35]">

            <img
              src={images.hero}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#032c25] via-[#073d35]/75 to-[#073d35]/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#03251f]/80 via-transparent to-transparent" />

            {/* decorative line */}
            <div className="absolute right-[-120px] top-[80px] hidden h-[400px] w-[400px] rounded-full border border-[#d9b76d]/20 lg:block" />

            <div className="relative flex min-h-[610px] items-center px-8 py-20 md:px-16 lg:px-20">

              <div className="max-w-[700px] text-white">

                <div className="mb-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.3em] text-[#dfbd76]">
                  <span className="h-px w-10 bg-[#dfbd76]" />
                  Welcome to Hamsafarsathi
                </div>

                <h1 className="font-serif text-[52px] leading-[.94] tracking-[-.05em] sm:text-6xl lg:text-[78px]">
                  Meet someone
                  <br />
                  who feels like
                  <br />
                  <span className="text-[#dfbd76]">
                    home.
                  </span>
                </h1>

                <p className="mt-8 max-w-[590px] text-sm leading-7 text-white/70 md:text-[15px]">
                  Discover thoughtful profiles,
                  shared values and people looking
                  for a meaningful future.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={goDiscover}
                    className="flex items-center gap-2 bg-[#d8b66a] px-7 py-3.5 text-xs font-bold text-[#17372f] transition hover:bg-[#e8ca83]"
                  >
                    Explore profiles
                    <ArrowRight size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/profile")
                    }
                    className="border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-semibold text-white backdrop-blur"
                  >
                    My profile
                  </button>

                </div>

              </div>
            </div>

            {/* floating profile */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="absolute bottom-7 right-7 hidden w-[285px] border border-white/15 bg-[#06362d]/85 p-4 backdrop-blur-xl lg:block"
            >
              <div className="flex gap-3">
                <img
                  src={members[1].image}
                  alt=""
                  className="h-16 w-16 object-cover"
                />

                <div>
                  <div className="text-[9px] uppercase tracking-[.2em] text-[#dfbd76]">
                    Suggested for you
                  </div>

                  <div className="mt-1 font-serif text-lg text-white">
                    {members[1].name}
                  </div>

                  <div className="mt-1 text-[10px] text-white/50">
                    {members[1].city} ·{" "}
                    {members[1].match}% match
                  </div>
                </div>
              </div>

              <div className="mt-4 h-px bg-white/10" />

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[9px] text-white/45">
                  Based on your profile
                </span>

                <ArrowRight
                  size={14}
                  className="text-[#dfbd76]"
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* ==================================================
            INTRO
        ================================================== */}

        <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-9">

          <div className="grid gap-0 border-y border-[#e4dbce] md:grid-cols-3">

            <div className="border-b border-[#e4dbce] py-7 md:border-b-0 md:border-r md:pr-10">
              <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#a77d42]">
                01
              </div>

              <h3 className="mt-3 font-serif text-2xl">
                Look beyond a photograph.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#78827d]">
                Discover education, profession,
                interests and family outlook.
              </p>
            </div>

            <div className="border-b border-[#e4dbce] py-7 md:border-b-0 md:border-r md:px-10">
              <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#a77d42]">
                02
              </div>

              <h3 className="mt-3 font-serif text-2xl">
                Take your time.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#78827d]">
                Explore profiles before deciding
                whether you want to connect.
              </p>
            </div>

            <div className="py-7 md:pl-10">
              <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#a77d42]">
                03
              </div>

              <h3 className="mt-3 font-serif text-2xl">
                Connect with intention.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#78827d]">
                Conversations are there when
                you're ready for them.
              </p>
            </div>

          </div>
        </section>

        {/* ==================================================
            DISCOVER
        ================================================== */}

        <section
          id="discover"
          className="mx-auto max-w-[1440px] scroll-mt-24 px-5 pb-24 pt-20 md:px-9"
        >

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>
              <div className="mb-4 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.3em] text-[#a77d42]">
                <span className="h-px w-9 bg-[#a77d42]" />
                Discover
              </div>

              <h2 className="font-serif text-4xl leading-[1] tracking-[-.045em] md:text-6xl">
                People worth
                <br />
                knowing.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#707b76]">
                Explore profiles based on the things
                that actually matter.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setFilterOpen(
                  (v) => !v
                )
              }
              className={`flex items-center gap-2 self-start border px-5 py-3 text-xs font-semibold ${
                filterOpen
                  ? "bg-[#073d35] text-white"
                  : "border-[#ddd4c6] bg-white"
              }`}
            >
              <Filter size={14} />
              Refine search
            </button>
          </div>

          <div className="mt-10 border-y border-[#e4dbce] py-4">

            <div className="grid gap-3 md:grid-cols-[1.6fr_1fr_1fr_auto]">

              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#929b96]"
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search by name, city or profession"
                  className="h-12 w-full border border-[#e0d8cb] bg-white pl-11 pr-4 text-xs outline-none"
                />
              </div>

              <select
                value={gender}
                onChange={(e) =>
                  setGender(
                    e.target.value
                  )
                }
                className="h-12 border border-[#e0d8cb] bg-white px-4 text-xs outline-none"
              >
                <option value="All">
                  Everyone
                </option>
                <option value="Woman">
                  Women
                </option>
                <option value="Man">
                  Men
                </option>
              </select>

              <select
                value={city}
                onChange={(e) =>
                  setCity(
                    e.target.value
                  )
                }
                className="h-12 border border-[#e0d8cb] bg-white px-4 text-xs outline-none"
              >
                {cities.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setGender("All");
                  setCity("All");
                }}
                className="h-12 border border-[#d8cfbf] bg-[#f4eee4] px-5 text-xs font-semibold"
              >
                Reset
              </button>
            </div>

            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#eee7dc] pt-4 mt-4">
                    <div className="flex gap-2">
                      {[
                        "All",
                        "Woman",
                        "Man",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() =>
                            setGender(item)
                          }
                          className={`px-4 py-2 text-[10px] font-bold ${
                            gender === item
                              ? "bg-[#073d35] text-white"
                              : "bg-[#f2ece2]"
                          }`}
                        >
                          {item === "All"
                            ? "Everyone"
                            : item === "Woman"
                            ? "Women"
                            : "Men"}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-between text-xs text-[#7c8681]">
            <span>
              <b className="text-[#173f37]">
                {filteredMembers.length}
              </b>{" "}
              profiles
            </span>

            <span className="hidden items-center gap-2 sm:flex">
              <ShieldCheck
                size={13}
                className="text-[#a77d42]"
              />
              Thoughtful discovery
            </span>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredMembers.map(
              (member) => (
                <ProfileCard
                  key={member.id}
                  member={member}
                  liked={likes.includes(
                    member.id
                  )}
                  onLike={toggleLike}
                  onView={openProfile}
                  onMessage={openMessage}
                />
              )
            )}
          </div>
        </section>

        {/* ==================================================
            CINEMATIC FEATURE
        ================================================== */}

        <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-9">

          <div className="grid overflow-hidden bg-[#073d35] md:grid-cols-[.92fr_1.08fr]">

            <div className="relative min-h-[540px]">

              <img
                src={images.nikah}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#073d35]" />

              <div className="absolute bottom-7 left-7">
                <div className="border border-white/20 bg-[#073d35]/70 px-4 py-2 text-[9px] font-bold uppercase tracking-[.25em] text-[#dfbd76] backdrop-blur">
                  Meaningful by design
                </div>
              </div>
            </div>

            <div className="flex items-center px-8 py-14 md:px-14 lg:px-20">

              <div className="max-w-xl text-white">

                <div className="mb-5 text-[9px] font-bold uppercase tracking-[.3em] text-[#dfbd76]">
                  A different kind of discovery
                </div>

                <h2 className="font-serif text-4xl leading-tight tracking-[-.035em] md:text-6xl">
                  Because finding
                  <br />
                  the right person
                  <br />
                  takes more than
                  <span className="text-[#dfbd76]">
                    {" "}a swipe.
                  </span>
                </h2>

                <p className="mt-7 text-sm leading-7 text-white/60">
                  Hamsafarsathi gives you room
                  to understand someone before
                  beginning a conversation.
                </p>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">

                  <div className="border-t border-white/15 pt-4">
                    <Heart
                      size={18}
                      className="text-[#dfbd76]"
                    />

                    <div className="mt-3 text-sm font-bold">
                      Compatibility
                    </div>

                    <p className="mt-1 text-[11px] leading-5 text-white/45">
                      Values, interests and outlook.
                    </p>
                  </div>

                  <div className="border-t border-white/15 pt-4">
                    <ShieldCheck
                      size={18}
                      className="text-[#dfbd76]"
                    />

                    <div className="mt-3 text-sm font-bold">
                      Respect
                    </div>

                    <p className="mt-1 text-[11px] leading-5 text-white/45">
                      Connect at your own pace.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            MATCHES BENTO
        ================================================== */}

        <section className="mx-auto max-w-[1440px] px-5 pb-28 md:px-9">

          <div className="flex items-end justify-between">

            <div>
              <div className="mb-4 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.3em] text-[#a77d42]">
                <span className="h-px w-9 bg-[#a77d42]" />
                For you
              </div>

              <h2 className="font-serif text-4xl leading-none tracking-[-.04em] md:text-6xl">
                Your strongest
                <br />
                possibilities.
              </h2>
            </div>

            <button
              type="button"
              onClick={goDiscover}
              className="hidden items-center gap-2 text-xs font-bold text-[#073d35] sm:flex"
            >
              Explore all
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-[1.35fr_.65fr]">

            {/* large */}
            {highMatches[0] && (
              <motion.button
                type="button"
                whileHover={{
                  y: -5,
                }}
                onClick={() =>
                  openProfile(
                    highMatches[0]
                  )
                }
                className="group relative min-h-[560px] overflow-hidden text-left"
              >
                <img
                  src={highMatches[0].image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03251f] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">

                  <span className="bg-[#d8b66a] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#17372f]">
                    {highMatches[0].match}% compatibility
                  </span>

                  <h3 className="mt-4 font-serif text-4xl md:text-5xl">
                    {highMatches[0].name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-white/65">
                    <MapPin size={13} />
                    {highMatches[0].city}
                  </div>
                </div>
              </motion.button>
            )}

            {/* side */}
            <div className="grid gap-5">

              {highMatches
                .slice(1, 3)
                .map((member) => (
                  <motion.button
                    type="button"
                    key={member.id}
                    whileHover={{
                      y: -5,
                    }}
                    onClick={() =>
                      openProfile(member)
                    }
                    className="group relative min-h-[267px] overflow-hidden text-left"
                  >
                    <img
                      src={member.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#03251f] via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                      <span className="bg-[#d8b66a] px-2.5 py-1 text-[8px] font-bold text-[#17372f]">
                        {member.match}% MATCH
                      </span>

                      <h3 className="mt-3 font-serif text-2xl">
                        {member.name}
                      </h3>

                      <div className="mt-1 text-[10px] text-white/60">
                        {member.city} ·{" "}
                        {member.profession}
                      </div>

                    </div>
                  </motion.button>
                ))}

            </div>
          </div>
        </section>

        {/* ==================================================
            PROFILE CTA
        ================================================== */}

        <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-9">

          <div className="relative overflow-hidden bg-[#eee7db]">

            <div className="absolute right-0 top-0 hidden h-full w-[48%] md:block">

              <img
                src={images.wedding}
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#eee7db] via-[#eee7db]/35 to-transparent" />
            </div>

            <div className="relative px-8 py-16 md:px-14 lg:px-20">

              <div className="max-w-xl">

                <div className="text-[9px] font-bold uppercase tracking-[.3em] text-[#a77d42]">
                  Your profile
                </div>

                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-6xl">
                  Let your profile
                  <br />
                  tell your story.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-[#707a75]">
                  Add the details that help someone
                  understand the person behind
                  the photograph.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/profile")
                  }
                  className="mt-8 flex items-center gap-2 bg-[#073d35] px-7 py-3.5 text-xs font-bold text-white"
                >
                  Complete profile
                  <ArrowRight size={15} />
                </button>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-[#e5dccf] bg-[#f4eee4]">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-9">

          <BrandLogo />

          <div className="text-xs text-[#89938e]">
            Rishtey for Mewati
          </div>

          <button
            type="button"
            onClick={logout}
            className="text-xs font-semibold text-[#735039] hover:text-red-700"
          >
            Logout
          </button>

        </div>
      </footer>

      {/* ==================================================
          SIDE PANEL
      ================================================== */}

      <AnimatePresence>
        {panel && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setPanel(null)
              }
              className="fixed inset-0 z-[60] bg-[#061f1a]/60 backdrop-blur-sm"
            />

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              className="fixed right-0 top-0 z-[70] h-full w-full max-w-[430px] overflow-y-auto bg-[#fbf8f1] shadow-2xl"
            >

              <div className="flex items-center justify-between border-b border-[#e5dccf] p-6">

                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[.25em] text-[#a77d42]">
                    Hamsafarsathi
                  </div>

                  <h3 className="mt-1 font-serif text-2xl">
                    {panel === "matches"
                      ? "Your matches"
                      : "Messages"}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setPanel(null)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd4c6] bg-white"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="p-6">

                {panel === "matches" && (
                  <div className="space-y-3">
                    {highMatches.map(
                      (member) => (
                        <button
                          type="button"
                          key={member.id}
                          onClick={() =>
                            openProfile(member)
                          }
                          className="flex w-full gap-3 border border-[#e2d9cb] bg-white p-3 text-left"
                        >
                          <img
                            src={member.image}
                            alt=""
                            className="h-20 w-20 object-cover"
                          />

                          <div>
                            <div className="text-sm font-bold">
                              {member.name}
                            </div>

                            <div className="mt-1 text-[11px] text-[#7c8782]">
                              {member.age} ·{" "}
                              {member.city}
                            </div>

                            <div className="mt-2 text-[10px] font-bold text-[#a17a42]">
                              {member.match}%
                              compatibility
                            </div>
                          </div>
                        </button>
                      )
                    )}
                  </div>
                )}

                {panel === "messages" && (
                  <div className="border border-[#ded5c7] bg-white p-9 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f4eee3] text-[#a77d42]">
                      <MessageCircle size={23} />
                    </div>

                    <h4 className="mt-5 font-serif text-2xl">
                      Private conversations
                    </h4>

                    <p className="mt-3 text-xs leading-6 text-[#7b8681]">
                      Membership unlocks conversations
                      with members.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setPanel(null);
                        setMembershipOpen(
                          true
                        );
                      }}
                      className="mt-6 bg-[#073d35] px-6 py-3 text-xs font-bold text-white"
                    >
                      View membership
                    </button>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ==================================================
          MESSAGE MODAL
      ================================================== */}

      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setSelectedMember(null)
              }
              className="fixed inset-0 z-[80] bg-[#061e19]/65 backdrop-blur-sm"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              className="fixed left-1/2 top-1/2 z-[90] w-[calc(100%-28px)] max-w-[470px] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#fbf8f1] shadow-2xl"
            >

              <div className="relative h-36">
                <img
                  src={selectedMember.image}
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#073d35] to-transparent" />

                <button
                  type="button"
                  onClick={() =>
                    setSelectedMember(null)
                  }
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur"
                >
                  <X size={16} />
                </button>

                <div className="absolute bottom-4 left-5 text-white">
                  <div className="font-serif text-2xl">
                    {selectedMember.name}
                  </div>

                  <div className="mt-1 text-xs text-white/65">
                    {selectedMember.city} ·{" "}
                    {selectedMember.age}
                  </div>
                </div>
              </div>

              <div className="p-5">

                <textarea
                  value={message}
                  onChange={(e) =>
                    setMessage(
                      e.target.value
                    )
                  }
                  placeholder="Write a respectful message..."
                  rows={4}
                  className="w-full resize-none border border-[#ded5c6] bg-white p-4 text-sm outline-none"
                />

                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedMember(null)
                    }
                    className="flex-1 border border-[#ddd4c6] py-3 text-xs font-semibold"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="flex-1 bg-[#073d35] py-3 text-xs font-semibold text-white disabled:opacity-40"
                  >
                    Send message
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==================================================
          MEMBERSHIP
      ================================================== */}

      <AnimatePresence>
        {membershipOpen && (
          <MembershipModal
            onClose={() =>
              setMembershipOpen(false)
            }
          />
        )}
      </AnimatePresence>

      {/* ==================================================
          TOAST
      ================================================== */}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              x: "-50%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: "-50%",
            }}
            exit={{
              opacity: 0,
              y: 15,
              x: "-50%",
            }}
            className="fixed bottom-6 left-1/2 z-[150] rounded-full bg-[#073d35] px-5 py-3 text-xs font-semibold text-white shadow-xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}