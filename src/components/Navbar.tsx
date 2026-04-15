"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/timeline", label: "Timeline" },
  { href: "/organizers", label: "Organizers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] md:w-[85%] max-w-6xl px-6 md:px-10 py-1 md:py-1.5 bg-[var(--color-vanta)]/40 backdrop-blur-md rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Trajectory Logo"
            width={120}
            height={120}
            className="w-12 h-12 md:w-18 md:h-18 object-contain"
          />
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <motion.div key={link.href} variants={itemVariants} className="relative group">
            <Link
              href={link.href}
              className={`relative z-10 px-4 py-2 text-lg font-medium transition-colors duration-300 group-hover:text-[var(--color-primary)] ${
                isActive(link.href) ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
              }`}
            >
              {link.label}
              <motion.div
                className={`absolute inset-0 bg-white/5 rounded-full -z-10 transition-opacity duration-300 ${
                  isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                layoutId="nav-hover"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="relative md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-[var(--color-accent)] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[var(--color-accent)] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[var(--color-accent)] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-14 right-0 w-44 rounded-sm border border-white/10 bg-[var(--color-vanta)]/90 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-3 text-sm font-medium transition-colors duration-200 border-b border-white/5 last:border-b-0 ${
                    isActive(link.href)
                      ? "text-[var(--color-primary)] bg-white/5"
                      : "text-[var(--color-accent)] hover:text-[var(--color-primary)] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
