import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Studios", href: "/studios" },
  { name: "Services", href: "/service" },
  { name: "Booking", href: "/booking" },
  { name: "About Us", href: "/aboutus" },
];

const services = [
  { name: "Photography Studio", href: "/services" },
  { name: "Music Studio", href: "/services" },
  { name: "Podcast Studio", href: "/services" },
  { name: "Video Production", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#09090f] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="brand-gradient text-2xl font-extrabold ">
               Studio<span className="text-indigo-600">Space.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              Discover, explore, and book the perfect studio space
              for your creative projects. Bring your ideas to life
              with StudioSpace.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white"
                  >
                    <Icon />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={"/service"}
                    className="text-sm transition hover:text-violet-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-1 shrink-0 text-xl text-violet-400" />
                <span>Chattogram, Bangladesh</span>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineEnvelope className="shrink-0 text-xl text-violet-400" />
                <span>support@studiospace.com</span>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone className="shrink-0 text-xl text-violet-400" />
                <span>+880 1234-567890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row">

          <p className="text-xs">
            © {new Date().getFullYear()} StudioSpace. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}