"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ===== Club Info ===== */}
        <div>
          <h3 className="text-lg font-bold text-white tracking-wider">
            ROBO-KNIGHTS 9330
          </h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Robo-Knights is a student robotics team focused on innovation,
            teamwork, and leadership through hands-on STEM learning.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-400 hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-gray-400 hover:text-yellow-400 transition">
                Meet Our Team
              </Link>
            </li>
            <li>
              <Link href="/robot" className="text-gray-400 hover:text-yellow-400 transition">
                Our Robot
              </Link>
            </li>
            <li>
              <Link href="/awards" className="text-gray-400 hover:text-yellow-400 transition">
                Awards
              </Link>
            </li>
            <li>
              <Link href="/join-us" className="text-gray-400 hover:text-yellow-400 transition">
                Join Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Resources ===== */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Resources
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/events" className="text-gray-400 hover:text-yellow-400 transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/media" className="text-gray-400 hover:text-yellow-400 transition">
                Pictures & Videos
              </Link>
            </li>
            <li>
              <Link href="/newsletters" className="text-gray-400 hover:text-yellow-400 transition">
                Newsletters
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className="text-gray-400 hover:text-yellow-400 transition">
                Sponsors
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Contact
          </h4>
          <p className="mt-4 text-sm text-gray-400">
            Email: <br />
            <span className="text-gray-300">roboknights9330@gmail.com</span>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Location: <br />
            <span className="text-gray-300">India</span>
          </p>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Robo-Knights 9330. All rights reserved.
      </div>
    </footer>
  );
}
