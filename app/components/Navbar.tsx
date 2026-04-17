"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On inner pages, always show solid navbar
  const solid = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        solid
          ? "bg-brand-bg/95 backdrop-blur-lg shadow-md border-b border-brand-contrast/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-start group"
            >
              <span
                className={`font-serif text-2xl sm:text-3xl font-normal tracking-wide transition-colors ${
                  solid
                    ? "text-brand-contrast group-hover:text-brand-gold"
                    : "text-white group-hover:text-brand-gold drop-shadow-sm"
                }`}
              >
                Pallavi | Artist
              </span>
              <span
                className={`text-[0.6rem] uppercase tracking-[0.25em] mt-0.5 font-light transition-colors ${
                  solid ? "text-brand-contrast/80" : "text-white/80"
                }`}
              >
                Art Gallery
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7">
            <Link
              href="/"
              className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                solid
                  ? "text-brand-contrast hover:text-brand-gold"
                  : "text-white hover:text-brand-gold drop-shadow-sm"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                solid
                  ? "text-brand-contrast hover:text-brand-gold"
                  : "text-white hover:text-brand-gold drop-shadow-sm"
              }`}
            >
              Services
            </Link>
            <Link
              href="/packages"
              className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                solid
                  ? "text-brand-contrast hover:text-brand-gold"
                  : "text-white hover:text-brand-gold drop-shadow-sm"
              }`}
            >
              Packages
            </Link>
            <Link
              href="/portfolio"
              className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                solid
                  ? "text-brand-contrast hover:text-brand-gold"
                  : "text-white hover:text-brand-gold drop-shadow-sm"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                solid
                  ? "text-brand-contrast hover:text-brand-gold"
                  : "text-white hover:text-brand-gold drop-shadow-sm"
              }`}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className={`px-6 py-2 uppercase text-xs tracking-widest font-medium rounded-full transition-all ${
                solid
                  ? "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-bg"
                  : "bg-gradient-to-r from-brand-gold to-brand-light-gold text-brand-bg hover:opacity-90"
              }`}
            >
              Prebook Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2 bg-brand-contrast" : "bg-white"
              }`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "opacity-0" : "bg-white"
              }`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 bg-brand-contrast" : "bg-white"
              }`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-brand-bg absolute w-full border-b border-brand-contrast/10 shadow-xl overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ transition: "max-height 0.2s ease-out, opacity 0.15s ease-out" }}
      >
        <div className="px-6 pt-4 pb-8 space-y-1 flex flex-col">
          <Link href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm uppercase tracking-widest text-brand-contrast hover:text-brand-gold hover:bg-brand-contrast/5 rounded-md transition-colors">Services</Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm uppercase tracking-widest text-brand-contrast hover:text-brand-gold hover:bg-brand-contrast/5 rounded-md transition-colors">Packages</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm uppercase tracking-widest text-brand-contrast hover:text-brand-gold hover:bg-brand-contrast/5 rounded-md transition-colors">Portfolio</Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm uppercase tracking-widest text-brand-contrast hover:text-brand-gold hover:bg-brand-contrast/5 rounded-md transition-colors">Reviews</Link>
          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-3 bg-gradient-to-r from-brand-gold to-brand-light-gold text-brand-bg text-center uppercase text-sm tracking-widest font-medium rounded-full">
              Prebook Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
