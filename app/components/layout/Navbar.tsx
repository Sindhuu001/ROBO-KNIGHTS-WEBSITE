"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, Users, Cpu, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Team and Legacy", href: "/our-team" }, // NEW PAGE
  { label: "Our Robots", href: "/robots" },
  { label: "Our Awards", href: "/awards" },
  { label: "Our Outreach", href: "/outreach" },
  { label: "Team Media", href: "/team-media" }, // MERGED PAGE
  { label: "Sponsors", href: "/sponsors" },

  { label: "Why Join Us ?", href: "/join-us" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ================= TOP HUD BAR ================= */}
      <div
        className="relative border-b overflow-hidden"
        style={{
          backgroundColor: "#0a0a0a",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {/* scan line
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-0.5 bg-[#fffe00] opacity-30"
        /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            animate={{ y: [5, -2, 5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image src="/images/RK_logo.jpg" alt="Robo Knights 9930" width={48} height={48} />
            <span className="text-sm sm:text-lg font-bold tracking-[0.18em] text-white">
              ROBO-KNIGHTS 9930
            </span>
          </motion.div>

          {/* TOP ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-sm uppercase tracking-widest">


            <Link href="/events" className="flex items-center gap-2 text-white hover:text-[#fffe00]">
              <Cpu size={16} />
              <span className="hidden sm:inline">Events</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 px-3 py-1 font-bold tracking-wider bg-[#fffe00] text-black"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">Contact</span>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP BOTTOM HUD NAV ================= */}
      <nav className="hidden lg:block relative bg-[#0b0b0b] border-t border-white/10 overflow-hidden">
        {/* HUD grid */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,254,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,254,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,254,0,0.18),transparent_70%)] pointer-events-none" />

        <ul className="relative mx-auto px-10 xl:px-20 h-14 flex items-center justify-between">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.18, y: -3 }}
                className="relative group"
              >
                {/* glow (non-blocking) */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-[#fffe00]/30 pointer-events-none" />
                <Link
                  href={item.href}
                  className="text-[11px] font-bold tracking-[0.22em] uppercase"
                  style={{
                    color: isActive ? "#fffe00" : "#ffffff",
                    textShadow: isActive
                      ? "0 0 18px rgba(255,254,0,0.95)"
                      : "none",
                  }}
                >
                  {item.label}

                  {/* HUD underline */}
                  <span className="absolute left-1/2 -bottom-2 h-0.5 w-0 bg-[#fffe00] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* ================= MOBILE / TABLET MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-[#0b0b0b] border-t border-white/10"
          >
            <ul className="px-6 py-6 space-y-5">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-bold tracking-widest uppercase text-white hover:text-[#fffe00]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
