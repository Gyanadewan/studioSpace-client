
"use client";

import { useState } from "react";
import Link from "next/link";
import UserMenu from "../user-menu/UserMenu";
import { HiOutlineBars3, HiOutlineBuildingOffice2, 
   HiOutlineCalendarDays, 
   HiOutlineHome,
   HiOutlineInformationCircle,
   HiOutlinePhone, 
  HiOutlinePlusCircle, 
  HiOutlineWrenchScrewdriver,
  HiOutlineXMark,
 
 } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "/", icon: <HiOutlineHome /> },
  { name: "Studios", href: "/studios", icon: <HiOutlineBuildingOffice2 /> },
  { name: "Add Studio", href: "/add-studio", icon:  <HiOutlinePlusCircle/>},
  { name: "Services", href: "/service", icon: <HiOutlineWrenchScrewdriver /> },
  { name: "Booking", href: "/mybooking", icon: <HiOutlineCalendarDays /> },
  { name: "About Us", href: "/aboutus", icon: <HiOutlineInformationCircle /> },
  { name: "Contact", href: "/contact", icon: <HiOutlinePhone /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          Studio<span className="text-indigo-600">Space.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-indigo-600"
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ?  <HiOutlineXMark /> : <HiOutlineBars3/> }
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-gray-700 transition hover:text-indigo-600"
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
