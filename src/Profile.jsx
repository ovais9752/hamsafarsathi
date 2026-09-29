import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Heart,
  Home,
  ImagePlus,
  Lock,
  MapPin,
  Pencil,
  RotateCcw,
  Save,
  ShieldCheck,
  Sparkles,
  Trash2,
  User,
  UserCheck,
  UserRound,
  Users,
  X,
} from "lucide-react";

const PROFILE_KEY = "rishtaOneProfile";

/* =========================================================
   Hamsafarsathi Logo
========================================================= */

function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center">
      <svg
        viewBox="0 0 78 82"
        className={compact ? "h-11 w-11" : "h-14 w-14 sm:h-16 sm:w-16"}
      >
        <path
          d="M39 70C34 62 12 48 12 28C12 17 20 11 29 12C35 13 39 18 39 23C40 18 45 13 51 12C61 11 68 18 67 28C67 47 45 61 39 70Z"
          fill="none"
          stroke="#c79b55"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39 68C34 58 17 47 17 29C17 21 22 17 29 17"
          fill="none"
          stroke="#d2a760"
          strokeWidth="1.2"
        />
        <path
          d="M49 15C45 10 48 5 53 7C56 2 62 5 61 10C66 10 68 14 64 17C60 20 54 18 49 15Z"
          fill="#c94d7c"
        />
        <path
          d="M15 61C7 63 4 70 5 76C13 75 19 70 20 62C18 61 17 61 15 61Z"
          fill="#27736d"
        />
      </svg>

      {!compact && (
        <div className="ml-1 leading-none">
          <div className="whitespace-nowrap font-serif text-[25px] font-semibold tracking-[-0.04em] sm:text-[29px]">
            <span className="text-[#174c55]">Hamsafar</span>
            <span className="text-[#bd9250]">Sathi</span>
          </div>

          <div className="mt-1 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.25em] text-[#bd4770] sm:text-[9px]">
            Rishtey for Mewati
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   Images
========================================================= */

const profileImages = {
  hero:
    "https://images.pexels.com/photos/16800908/pexels-photo-16800908.jpeg?auto=compress&cs=tinysrgb&w=1500",

  nikah:
    "https://images.pexels.com/photos/7122168/pexels-photo-7122168.jpeg?auto=compress&cs=tinysrgb&w=1000",

  couple:
    "https://images.pexels.com/photos/15865926/pexels-photo-15865926.jpeg?auto=compress&cs=tinysrgb&w=1000",

  traditional:
    "https://images.pexels.com/photos/31619525/pexels-photo-31619525.jpeg?auto=compress&cs=tinysrgb&w=1000",
};

const demoPhotos = [
  profileImages.hero,
  profileImages.nikah,
  profileImages.couple,
];

const interestOptions = [
  "Family",
  "Travel",
  "Reading",
  "Fitness",
  "Business",
  "Technology",
  "Cooking",
  "Cricket",
  "Learning",
  "Photography",
  "Nature",
  "Community",
];

const defaultProfile = {
  fullName: "",
  age: "",
  city: "",
  profession: "",
  gender: "",
  lookingFor: "",
  education: "",
  qualification: "",
  about: "",
  photo: "",
  interests: [],
  familyType: "",
  maritalStatus: "",
  religion: "Muslim",
};

/* =========================================================
   PROFILE
========================================================= */

export default function Profile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    try {
      const data = localStorage.getItem(PROFILE_KEY);

      if (data) {
        const parsed = JSON.parse(data);

        setProfile({
          ...defaultProfile,
          ...parsed,
          interests: Array.isArray(parsed.interests)
            ? parsed.interests
            : [],
        });
      }
    } catch {
      setProfile(defaultProfile);
    }
  }, []);

  const updateField = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSaved(false);
    setMessage("");
  };

  const toggleInterest = (interest) => {
    setProfile((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((x) => x !== interest)
        : [...prev.interests, interest],
    }));

    setSaved(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Please select an image smaller than 5 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      updateField("photo", reader.result);
      setMessage("Profile photo selected.");
    };

    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const removePhoto = () => {
    updateField("photo", "");
    setMessage("Profile photo removed.");
  };

  const selectDemoPhoto = (url) => {
    updateField("photo", url);
    setMessage("Profile photo selected.");
  };

  const completion = useMemo(() => {
    const fields = [
      profile.fullName,
      profile.age,
      profile.city,
      profile.profession,
      profile.gender,
      profile.lookingFor,
      profile.education,
      profile.qualification,
      profile.about,
      profile.photo,
      profile.familyType,
      profile.maritalStatus,
    ];

    const completed = fields.filter(
      (x) => String(x || "").trim()
    ).length;

    const interest = profile.interests.length > 0 ? 1 : 0;

    return Math.min(
      100,
      Math.round(((completed + interest) / 13) * 100)
    );
  }, [profile]);

  const saveProfile = () => {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

      setSaved(true);
      setMessage("Your profile has been saved successfully.");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch {
      setMessage("Could not save profile. Try a smaller photo.");
    }
  };

  const saveAndContinue = () => {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
      navigate("/dashboard");
    } catch {
      setMessage("Could not save profile. Try a smaller photo.");
    }
  };

  const resetProfile = () => {
    if (!window.confirm("Are you sure you want to clear this profile?")) {
      return;
    }

    localStorage.removeItem(PROFILE_KEY);
    setProfile(defaultProfile);
    setSaved(false);
    setMessage("Profile has been cleared.");
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#173f55]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#eadfd7] bg-[#fffaf7]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <Link to="/">
            <BrandLogo />
          </Link>

          <div className="flex items-center gap-2">

            <Link
              to="/dashboard"
              className="hidden items-center gap-2 rounded-full border border-[#d9c9a7] bg-white px-4 py-2.5 text-sm font-semibold text-[#174c55] transition hover:bg-[#174c55] hover:text-white sm:flex"
            >
              <Home size={16} />
              Dashboard
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 rounded-full border border-[#d9c9a7] bg-white px-4 py-2.5 text-sm font-semibold text-[#174c55] transition hover:bg-[#174c55] hover:text-white"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Home</span>
            </Link>

          </div>
        </div>
      </header>

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fffdf9]">

        <div className="absolute inset-0">
          <img
            src={profileImages.traditional}
            alt=""
            className="h-full w-full object-cover opacity-[0.055]"
          />
        </div>

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e7c878]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_390px]">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e4cf9b] bg-[#fff8e8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#98742d]">
                <Sparkles size={13} />
                Build Your Story
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#173f55] sm:text-5xl lg:text-[56px]">
                Tell your story.
                <br />
                <span className="text-[#bd9250]">
                  Let the right person discover it.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6d777b] sm:text-base">
                Your profile is more than a few details. Share your
                personality, values and aspirations in a way that feels
                natural and genuine.
              </p>

            </motion.div>

            {/* HERO IMAGE CARD */}

            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative hidden h-[245px] overflow-hidden rounded-[30px] shadow-[0_22px_60px_rgba(31,57,70,0.13)] sm:block"
            >
              <img
                src={profileImages.hero}
                alt="Meaningful wedding"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102f45]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">

                <div className="flex items-center gap-2 text-[#efd38a]">
                  <Heart size={15} fill="currentColor" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    A meaningful beginning
                  </span>
                </div>

                <p className="mt-2 text-xl font-semibold text-white">
                  Your introduction matters.
                </p>

              </div>
            </motion.div>

          </div>

          {/* COMPLETION */}

          <div className="mt-8 rounded-[25px] border border-[#e4d9cd] bg-white p-5 shadow-[0_15px_50px_rgba(39,63,78,0.06)]">

            <div className="flex items-center justify-between gap-5">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a0782d]">
                  Profile strength
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-semibold text-[#173f55]">
                    {completion}%
                  </span>

                  <span className="pb-1 text-xs text-[#7c8588]">
                    complete
                  </span>
                </div>
              </div>

              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-[#173f55]">
                  {completion >= 80
                    ? "Your profile is looking strong."
                    : "A little more detail makes it better."}
                </p>

                <p className="mt-1 text-xs text-[#858b8c]">
                  Add details that represent you naturally.
                </p>
              </div>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#eee7df]">
              <motion.div
                animate={{ width: `${completion}%` }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full bg-[#b9914d]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium ${
              saved
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-[#e3d4bb] bg-[#fff9ec] text-[#856528]"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} />
              {message}
            </div>

            <button
              onClick={() => setMessage("")}
              className="rounded-lg p-1 hover:bg-black/5"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}

        <div className="grid gap-7 lg:grid-cols-[350px_1fr]">

          {/* =================================================
              LEFT PHOTO PROFILE
          ================================================= */}

          <aside className="lg:sticky lg:top-24 lg:self-start">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[30px] border border-[#e3d8ce] bg-white shadow-[0_20px_65px_rgba(39,63,78,0.08)]"
            >

              {/* MAIN PHOTO */}

              <div className="relative aspect-[0.90] overflow-hidden bg-[#f2ede6]">

                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={profileImages.nikah}
                      alt=""
                      className="h-full w-full object-cover opacity-[0.20]"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fffaf7]/55 px-8 text-center backdrop-blur-[2px]">

                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#d8c8ae] bg-white/90 shadow-lg">
                        <UserRound
                          size={40}
                          strokeWidth={1.4}
                          className="text-[#b9914d]"
                        />
                      </div>

                      <p className="mt-5 text-lg font-semibold text-[#173f55]">
                        Add your photo
                      </p>

                      <p className="mt-2 max-w-[240px] text-xs leading-5 text-[#69777c]">
                        A clear and respectful photo helps create a genuine first impression.
                      </p>

                    </div>
                  </>
                )}

                {profile.photo && (
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#102f45]/80 to-transparent" />
                )}

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/95 text-[#173f55] shadow-xl transition hover:-translate-y-1"
                >
                  <Camera size={18} />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />

              </div>

              {/* INFO */}

              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h2 className="text-xl font-semibold text-[#173f55]">
                      {profile.fullName || "Your Name"}
                    </h2>

                    <p className="mt-1 text-sm text-[#788185]">
                      {profile.age
                        ? `${profile.age} years`
                        : "Age not added"}
                      {profile.city ? ` • ${profile.city}` : ""}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff6df] text-[#a67c31]">
                    <Heart size={17} />
                  </div>

                </div>

                {profile.profession && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#59676d]">
                    <BriefcaseBusiness
                      size={15}
                      className="text-[#b9914d]"
                    />
                    {profile.profession}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">

                  {profile.gender && (
                    <MiniTag>{profile.gender}</MiniTag>
                  )}

                  {profile.lookingFor && (
                    <MiniTag>
                      Looking for {profile.lookingFor}
                    </MiniTag>
                  )}

                  <MiniTag>Muslim</MiniTag>

                </div>

                {/* PHOTO BUTTONS */}

                <div className="mt-5 grid grid-cols-2 gap-2">

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#d9cec0] bg-white px-3 py-2.5 text-xs font-semibold text-[#4d626b] transition hover:border-[#b9914d]"
                  >
                    <ImagePlus size={15} />
                    Change
                  </button>

                  <button
                    type="button"
                    onClick={removePhoto}
                    disabled={!profile.photo}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#ead9d5] px-3 py-2.5 text-xs font-semibold text-[#9a6e68] transition hover:bg-[#fff6f4] disabled:opacity-40"
                  >
                    <Trash2 size={15} />
                    Remove
                  </button>

                </div>

                {/* PHOTO CHOICES */}

                <div className="mt-6 border-t border-[#eee6dd] pt-5">

                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a742e]">
                    Choose a visual style
                  </p>

                  <div className="grid grid-cols-3 gap-2">

                    {demoPhotos.map((url, index) => (
                      <button
                        type="button"
                        key={url}
                        onClick={() => selectDemoPhoto(url)}
                        className={`group relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                          profile.photo === url
                            ? "border-[#b9914d]"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={url}
                          alt={`Style ${index + 1}`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />

                        {profile.photo === url && (
                          <div className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#173f55] text-white">
                            <Check size={13} />
                          </div>
                        )}
                      </button>
                    ))}

                  </div>

                </div>

              </div>
            </motion.div>

            {/* SIDE VISUAL */}

            <div className="relative mt-4 h-[190px] overflow-hidden rounded-[27px]">

              <img
                src={profileImages.traditional}
                alt="Traditional wedding"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102f45]/90 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">

                <div className="flex items-center gap-2 text-[#efd38a]">
                  <Heart size={14} fill="currentColor" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Meaningful connections
                  </span>
                </div>

                <p className="mt-1 text-lg font-semibold text-white">
                  A profile that feels like you.
                </p>

              </div>

            </div>

            {/* PRIVACY */}

            <div className="mt-4 rounded-[25px] border border-[#e3d8ce] bg-[#fffdf9] p-5">

              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f7efdf] text-[#a57c36]">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#173f55]">
                    Your information stays yours
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#7a8385]">
                    Profile details are stored locally in this prototype.
                  </p>
                </div>

              </div>

            </div>

          </aside>

          {/* =================================================
              FORM
          ================================================= */}

          <section className="space-y-6">

            <FormSection
              icon={User}
              eyebrow="01 • About you"
              title="Basic information"
              description="Start with the details that introduce you naturally."
            >
              <div className="grid gap-5 sm:grid-cols-2">

                <InputField
                  label="Full Name"
                  value={profile.fullName}
                  onChange={(v) => updateField("fullName", v)}
                  placeholder="Your full name"
                  icon={UserRound}
                />

                <InputField
                  label="Age"
                  value={profile.age}
                  onChange={(v) =>
                    updateField(
                      "age",
                      v.replace(/\D/g, "").slice(0, 2)
                    )
                  }
                  placeholder="Your age"
                  icon={User}
                />

                <InputField
                  label="City"
                  value={profile.city}
                  onChange={(v) => updateField("city", v)}
                  placeholder="e.g. Nuh, Alwar, Delhi"
                  icon={MapPin}
                />

                <InputField
                  label="Profession"
                  value={profile.profession}
                  onChange={(v) =>
                    updateField("profession", v)
                  }
                  placeholder="e.g. Software Engineer"
                  icon={BriefcaseBusiness}
                />

              </div>
            </FormSection>

            {/* IMAGE BREAK */}

            <div className="grid gap-4 sm:grid-cols-2">

              <ImageBreak
                image={profileImages.nikah}
                title="Family & faith"
                text="Connections built with intention."
              />

              <ImageBreak
                image={profileImages.couple}
                title="A beautiful journey"
                text="Let your values speak for you."
              />

            </div>

            <FormSection
              icon={Users}
              eyebrow="02 • Preferences"
              title="Personal details"
              description="Tell us what kind of connection you are looking for."
            >
              <div className="grid gap-5 sm:grid-cols-2">

                <SelectField
                  label="I am"
                  value={profile.gender}
                  onChange={(v) => updateField("gender", v)}
                  options={["Male", "Female"]}
                  placeholder="Select gender"
                />

                <SelectField
                  label="Looking for"
                  value={profile.lookingFor}
                  onChange={(v) =>
                    updateField("lookingFor", v)
                  }
                  options={["Male", "Female"]}
                  placeholder="Select preference"
                />

                <SelectField
                  label="Marital Status"
                  value={profile.maritalStatus}
                  onChange={(v) =>
                    updateField("maritalStatus", v)
                  }
                  options={[
                    "Never Married",
                    "Divorced",
                    "Widowed",
                  ]}
                  placeholder="Select status"
                />

                <SelectField
                  label="Family Type"
                  value={profile.familyType}
                  onChange={(v) =>
                    updateField("familyType", v)
                  }
                  options={[
                    "Nuclear",
                    "Joint",
                    "Extended",
                  ]}
                  placeholder="Select family type"
                />

              </div>
            </FormSection>

            <FormSection
              icon={GraduationCap}
              eyebrow="03 • Education & career"
              title="Education & qualification"
              description="A little more context about your academic journey."
            >
              <div className="grid gap-5 sm:grid-cols-2">

                <InputField
                  label="Education"
                  value={profile.education}
                  onChange={(v) =>
                    updateField("education", v)
                  }
                  placeholder="e.g. B.Tech, B.Com, MBA"
                  icon={GraduationCap}
                />

                <InputField
                  label="Qualification / Specialization"
                  value={profile.qualification}
                  onChange={(v) =>
                    updateField("qualification", v)
                  }
                  placeholder="e.g. Computer Science"
                  icon={BookOpen}
                />

              </div>
            </FormSection>

            <FormSection
              icon={Heart}
              eyebrow="04 • Your story"
              title="About you"
              description="Write a short introduction in your own words."
            >
              <label className="mb-2.5 block text-sm font-semibold text-[#294b5a]">
                Tell us about yourself
              </label>

              <textarea
                value={profile.about}
                onChange={(e) =>
                  updateField("about", e.target.value)
                }
                maxLength={500}
                rows={6}
                placeholder="Share a little about your personality, values, family, interests and what you hope to build together..."
                className="w-full resize-none rounded-2xl border border-[#ddd4c8] bg-[#fcfaf7] px-4 py-3.5 text-sm leading-6 text-[#173f55] outline-none transition placeholder:text-[#aaa69e] focus:border-[#b9914d] focus:bg-white focus:ring-4 focus:ring-[#b9914d]/10"
              />

              <div className="mt-2 flex justify-end">
                <span className="text-[11px] text-[#96958e]">
                  {profile.about.length}/500
                </span>
              </div>
            </FormSection>

            {/* INTERESTS */}

            <FormSection
              icon={Sparkles}
              eyebrow="05 • Interests"
              title="What matters to you?"
              description="Choose a few interests that naturally describe your lifestyle."
            >

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">

                {interestOptions.map((interest) => {
                  const active =
                    profile.interests.includes(interest);

                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() =>
                        toggleInterest(interest)
                      }
                      className={`group flex items-center gap-2.5 rounded-2xl border px-3.5 py-3 text-left text-sm font-medium transition ${
                        active
                          ? "border-[#b9914d] bg-[#fff7e6] text-[#173f55]"
                          : "border-[#e1d8cf] bg-white text-[#667277] hover:border-[#cdb98e] hover:bg-[#fffdf8]"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                          active
                            ? "border-[#173f55] bg-[#173f55] text-white"
                            : "border-[#cfc5b9] bg-white text-transparent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>

                      {interest}
                    </button>
                  );
                })}

              </div>

              <p className="mt-4 text-xs text-[#858b8c]">
                Selected:{" "}
                <span className="font-semibold text-[#173f55]">
                  {profile.interests.length}
                </span>
              </p>

            </FormSection>

            {/* FINAL VISUAL */}

            <div className="relative h-[240px] overflow-hidden rounded-[30px]">

              <img
                src={profileImages.hero}
                alt="Muslim wedding"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#102f45]/90 via-[#102f45]/40 to-transparent" />

              <div className="absolute left-6 top-1/2 max-w-md -translate-y-1/2 sm:left-9">

                <div className="flex items-center gap-2 text-[#efd38a]">
                  <Sparkles size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Hamsafarsathi
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  A meaningful profile
                  <br />
                  starts with honesty.
                </h3>

                <p className="mt-3 text-xs leading-5 text-white/70 sm:text-sm">
                  Share the things that make you, you.
                </p>

              </div>

            </div>

            {/* NOTE */}

            <div className="rounded-[28px] border border-[#e3d8ce] bg-[#fffdf9] p-5 sm:p-6">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#173f55] text-[#efd38a]">
                  <Lock size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a0782d]">
                    Profile note
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#173f55]">
                    Keep it genuine and respectful
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#717a7d]">
                    A thoughtful profile helps create better conversations.
                    Share what feels comfortable and keep your introduction honest.
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                ACTION BAR
            ================================================= */}

            <div className="sticky bottom-3 z-30 rounded-[25px] border border-[#ded4c9] bg-white/95 p-3 shadow-[0_18px_55px_rgba(30,55,70,0.13)] backdrop-blur-xl">

              <div className="flex flex-col gap-2 sm:flex-row">

                <button
                  type="button"
                  onClick={resetProfile}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-[#ddd3c8] bg-white px-5 py-3.5 text-sm font-semibold text-[#697478] transition hover:bg-[#faf8f4]"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-[#d8c39a] bg-[#fffaf0] px-5 py-3.5 text-sm font-semibold text-[#856528] transition hover:bg-[#fff4da]"
                >
                  <EyeIcon />
                  Preview
                </button>

                <button
                  type="button"
                  onClick={saveProfile}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#173f55] bg-white px-5 py-3.5 text-sm font-bold text-[#173f55] transition hover:bg-[#f5f8f9]"
                >
                  <Save size={17} />
                  Save Profile
                </button>

                <button
                  type="button"
                  onClick={saveAndContinue}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#173f55] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(23,63,85,0.18)] transition hover:bg-[#102f45]"
                >
                  Save & Continue
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

              </div>

            </div>

          </section>
        </div>
      </main>

      {/* =====================================================
          PREVIEW MODAL
      ===================================================== */}

      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102f45]/60 p-4 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowPreview(false);
            }
          }}
        >

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-[#fffdf9] shadow-2xl"
          >

            <div className="flex items-center justify-between border-b border-[#e9dfd5] px-5 py-4 sm:px-7">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a0782d]">
                  Profile Preview
                </p>

                <h2 className="mt-1 text-xl font-semibold text-[#173f55]">
                  How your profile looks
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ddd3c8]"
              >
                <X size={17} />
              </button>

            </div>

            <div className="p-5 sm:p-7">

              <div className="grid gap-6 sm:grid-cols-[180px_1fr]">

                <div className="aspect-[0.85] overflow-hidden rounded-[23px] bg-[#f0ebe3]">

                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <UserRound
                        size={45}
                        className="text-[#b9914d]"
                      />
                    </div>
                  )}

                </div>

                <div>

                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-semibold text-[#173f55]">
                      {profile.fullName || "Your Name"}
                    </h3>

                    <CheckCircle2
                      size={18}
                      className="text-[#b9914d]"
                    />
                  </div>

                  <p className="mt-2 text-sm text-[#707b80]">
                    {profile.age
                      ? `${profile.age} years`
                      : "Age not added"}
                    {profile.city ? ` • ${profile.city}` : ""}
                  </p>

                  {profile.profession && (
                    <p className="mt-4 flex items-center gap-2 text-sm font-medium">
                      <BriefcaseBusiness
                        size={15}
                        className="text-[#b9914d]"
                      />
                      {profile.profession}
                    </p>
                  )}

                  {profile.education && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-[#667479]">
                      <GraduationCap
                        size={15}
                        className="text-[#b9914d]"
                      />
                      {profile.education}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <MiniTag key={interest}>
                        {interest}
                      </MiniTag>
                    ))}
                  </div>

                </div>

              </div>

              {profile.about && (
                <div className="mt-6 rounded-2xl border border-[#e7ddd3] bg-white p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a0782d]">
                    About
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#5f6c71]">
                    {profile.about}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#173f55] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#102f45]"
              >
                <Pencil size={16} />
                Continue Editing
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="rounded-[30px] border border-[#e3d8ce] bg-white p-5 shadow-[0_15px_50px_rgba(39,63,78,0.05)] sm:p-7"
    >

      <div className="mb-6 flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f8f0e1] text-[#a47a34]">
          <Icon size={20} />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a0782d]">
            {eyebrow}
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#173f55] sm:text-2xl">
            {title}
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[#7a8385]">
            {description}
          </p>
        </div>

      </div>

      {children}
    </motion.div>
  );
}

/* =========================================================
   IMAGE BREAK
========================================================= */

function ImageBreak({ image, title, text }) {
  return (
    <div className="group relative h-[185px] overflow-hidden rounded-[27px]">

      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#102f45]/90 via-[#102f45]/20 to-transparent" />

      <div className="absolute bottom-5 left-5">

        <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#efd38a]">
          Hamsafarsathi
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-white/70">
          {text}
        </p>

      </div>
    </div>
  );
}

/* =========================================================
   INPUT
========================================================= */

function InputField({
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) {
  return (
    <div>
      <label className="mb-2.5 block text-sm font-semibold text-[#294b5a]">
        {label}
      </label>

      <div className="relative">

        <Icon
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a68c5c]"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-14 w-full rounded-2xl border border-[#ddd4c8] bg-[#fcfaf7] pl-11 pr-4 text-sm font-medium text-[#173f55] outline-none transition placeholder:text-[#aaa69e] focus:border-[#b9914d] focus:bg-white focus:ring-4 focus:ring-[#b9914d]/10"
        />

      </div>
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}) {
  return (
    <div>

      <label className="mb-2.5 block text-sm font-semibold text-[#294b5a]">
        {label}
      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-14 w-full appearance-none rounded-2xl border border-[#ddd4c8] bg-[#fcfaf7] px-4 pr-11 text-sm font-medium outline-none transition focus:border-[#b9914d] focus:bg-white focus:ring-4 focus:ring-[#b9914d]/10 ${
            value ? "text-[#173f55]" : "text-[#aaa69e]"
          }`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9b8a6c]"
        />

      </div>
    </div>
  );
}

/* =========================================================
   TAG
========================================================= */

function MiniTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#e1d3bb] bg-[#fff8e9] px-3 py-1.5 text-[11px] font-semibold text-[#87662c]">
      {children}
    </span>
  );
}

/* =========================================================
   EYE ICON
========================================================= */

function EyeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.06 12.35a1 1 0 0 1 0-.7C3.96 7.56 7.66 5 12 5s8.04 2.56 9.94 6.65a1 1 0 0 1 0 .7C20.04 16.44 16.34 19 12 19s-8.04-2.56-9.94-6.65Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}