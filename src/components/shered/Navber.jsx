"use client";

import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineCalendarDays,
  HiOutlineInformationCircle,
  HiOutlinePhone,
} from "react-icons/hi2";
import { FaArrowRight, FaUser } from "react-icons/fa";
import UserMenu from "../user-menu/UserMenu";

const navLinks = [
  { name: "Home", href: "/", icon: <HiOutlineHome /> },
  { name: "Studios", href: "/studios", icon: <HiOutlineBuildingOffice2 /> },
  { name: "Services", href: "/services", icon: <HiOutlineWrenchScrewdriver /> },
  { name: "Booking", href: "/booking", icon: <HiOutlineCalendarDays /> },
  { name: "About Us", href: "/about", icon: <HiOutlineInformationCircle /> },
  { name: "Contact", href: "/contact", icon: <HiOutlinePhone /> },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          Studio<span className="text-indigo-600">Space.</span>
        </Link>

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

        <div className="flex items-center gap-3">
          <UserMenu></UserMenu>
        </div>

      </nav>
    </header>
  );
}