import { useState } from "react";
import {
  Heart,
  Search,
  Sparkles,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfe5]/70 bg-white/75 shadow-[0_8px_30px_rgba(30,20,30,0.04)] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17131f] shadow-lg shadow-slate-900/10 transition duration-300 group-hover:-rotate-3">
            <Heart
              size={20}
              strokeWidth={2.4}
              className="fill-[#f5d7df] text-[#f5d7df]"
            />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#c79a55] ring-4 ring-[#fffaf7]" />
          </div>

          <div>
            <div className="text-[19px] font-black tracking-[-0.04em] text-[#17131f]">
              Rishta<span className="text-[#b83b67]">One</span>
            </div>

            <div className="hidden text-[9px] font-bold uppercase tracking-[0.22em] text-[#8b818b] sm:block">
              Meaningful connections
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-semibold text-[#17131f] transition hover:text-[#b83b67]"
          >
            Home
          </Link>

          <a
            href="#discover"
            className="text-sm font-semibold text-[#716b78] transition hover:text-[#b83b67]"
          >
            Discover
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-semibold text-[#716b78] transition hover:text-[#b83b67]"
          >
            How it works
          </a>

          <a
            href="#stories"
            className="text-sm font-semibold text-[#716b78] transition hover:text-[#b83b67]"
          >
            Success stories
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eee5e9] bg-white text-[#716b78] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e4c4d0] hover:text-[#b83b67]"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={2} />
          </button>

          <Link
            to="/login"
            className="px-3 text-sm font-bold text-[#17131f] transition hover:text-[#b83b67]"
          >
            Log in
          </Link>

          <Link
            to="/login"
            className="group flex items-center gap-2 rounded-full bg-[#b83b67] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#b83b67]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#8f234b]"
          >
            <Sparkles size={16} />
            Join free
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eee5e9] bg-white text-[#17131f] shadow-sm sm:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-[#eee5e9] bg-[#fffaf7] px-5 pb-5 sm:hidden">
          <nav className="flex flex-col gap-1 pt-3">

            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#17131f] hover:bg-[#f9e8ef]"
            >
              Home
            </Link>

            <a
              href="#discover"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#716b78] hover:bg-[#f9e8ef]"
            >
              Discover
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#716b78] hover:bg-[#f9e8ef]"
            >
              How it works
            </a>

            <a
              href="#stories"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#716b78] hover:bg-[#f9e8ef]"
            >
              Success stories
            </a>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#eee5e9] pt-4">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-[#eee5e9] bg-white py-3 text-center text-sm font-bold text-[#17131f]"
              >
                Log in
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#b83b67] py-3 text-center text-sm font-bold text-white shadow-lg shadow-[#b83b67]/20"
              >
                Join free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;