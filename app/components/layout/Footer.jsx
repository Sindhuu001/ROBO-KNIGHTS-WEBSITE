"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black border-t border-white/10"
    >
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

        {/* ===== Club Info + Follow Us ===== */}
        <div>
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo.png"   // update if needed
              alt="Robo-Knights Logo"
              width={46}
              height={46}
            />
            <h3 className="text-lg font-bold text-white tracking-wider">
              ROBO-KNIGHTS 9930
            </h3>
          </div>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Robo-Knights is a student robotics team focused on innovation,
            teamwork, and leadership through hands-on STEM learning.
          </p>

          {/* ===== Follow Us ===== */}
          <div className="mt-6">
            <h4 className="text-white text-lg font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaXTwitter, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaGithub, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-white/5
                    text-gray-300
                    hover:text-yellow-400
                    hover:bg-white/10
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="mt-4 px-15">
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase ">
            Quick Links
          </h4>

          <ul className="mt-4 space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Meet Our Team", href: "/team" },
              { name: "Our Robot", href: "/robot" },
              { name: "Awards", href: "/awards" },
              { name: "Join Us", href: "/join-us" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative inline-block text-gray-400 hover:text-yellow-400 transition group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Resources ===== */}
        <div className="mt-4 px-9">
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Resources
          </h4>

          <ul className="mt-4 space-y-3 text-sm">
            {[
              { name: "Events", href: "/events" },
              { name: "Pictures & Videos", href: "/media" },
              { name: "Newsletters", href: "/newsletters" },
              { name: "Sponsors", href: "/sponsors" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative inline-block text-gray-400 hover:text-yellow-400 transition group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Contact (Down & Friendly) ===== */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Contact Us
          </h4>

          <p className="mt-3 text-sm text-gray-400">
            📧 Email <br />
            <span className="text-gray-300">
              roboknightsftc9930@gmail.com
            </span>
          </p>

          <p className="mt-3 text-sm text-gray-400">
            📍 Location <br />
            <span className="text-gray-300">Orlando, USA</span>
          </p>

          <Link
            href="/contact"
            className="inline-block mt-4 px-4 py-2 text-xs font-bold tracking-widest bg-yellow-400 text-black rounded-md hover:scale-105 transition"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Robo-Knights 9930 · Built by students
      </div>
    </motion.footer>
  );
}
