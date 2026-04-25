"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Produk", href: "#products" },
  { label: "Spesifikasi", href: "#specs" },
  { label: "Kontak", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1B4332] shadow-xl py-2" : "bg-[#1B4332]/90 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#D4A373] flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#e8c99a] transition-colors">
              <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
                <path d="M20 4 C12 10 8 18 10 26 C12 32 16 36 20 38 C24 36 28 32 30 26 C32 18 28 10 20 4Z" fill="#1B4332" />
                <path d="M20 8 C20 8 14 16 14 22 C14 28 17 33 20 36" stroke="#D4A373" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 14 C20 14 24 18 25 23" stroke="#1B4332" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 20 C20 20 15 22 13 27" stroke="#1B4332" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-white font-heading font-bold text-base tracking-wide">
                Indo Blitz
              </span>
              <span className="block text-[#D4A373] font-heading font-semibold text-xs tracking-widest uppercase">
                Agriculture
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[#D4A373] font-body font-medium text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="bg-[#D4A373] hover:bg-[#b8834a] text-[#1B4332] font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Catalog
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-[#2d6a4f] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0f2a1e] rounded-xl mt-2 p-4 flex flex-col gap-3 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-[#D4A373] font-body font-medium text-sm py-2 px-3 rounded-lg hover:bg-[#1B4332] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#D4A373] hover:bg-[#b8834a] text-[#1B4332] font-heading font-bold text-sm px-5 py-3 rounded-full transition-all text-center mt-1"
            >
              Download Catalog
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
