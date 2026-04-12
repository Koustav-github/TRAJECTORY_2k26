"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { organizerCategories } from "@/app/data/organizers";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Hyperspeed from "@/components/Hyperspeed";

gsap.registerPlugin(ScrollTrigger);

export default function OrganizersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const underlineRef1 = useRef<HTMLDivElement>(null);
  const underlineRef2 = useRef<HTMLDivElement>(null);
  const underlineRef3 = useRef<HTMLDivElement>(null);
  const headingfooterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title slide up
    gsap.to(titleRef.current, {
      y: -15,
      opacity: 1,
      delay: 0.3,
      duration: 0.8,
      ease: "power3.out",
    });

    // Underline animations (matching event/slug)
    gsap.from(underlineRef1.current, {
      opacity: 0,
      x: -100,
      delay: 0.5,
      duration: 0.8,
    });
    gsap.from(underlineRef3.current, {
      opacity: 0,
      x: 100,
      delay: 0.5,
      duration: 0.8,
    });
    gsap.to(underlineRef2.current, {
      opacity: 1,
      scale: 0.1,
      rotate: 675,
      delay: 1.2,
      duration: 1.5,
      ease: "power1.out",
    });

    // Heading footer
    gsap.to(headingfooterRef.current, {
      opacity: 1,
      y: 20,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });

    // Corner borders (matching event/slug)
    gsap.from(".border1", {
      x: 500,
      y: 60,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".border1",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".border2", {
      x: -500,
      y: -60,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".border2",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Staggered card entrance with ScrollTrigger
    gsap.from(".org-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".org-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-vanta">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
        <div className="absolute inset-0 bg-linear-to-b from-vanta via-transparent to-vanta" />
      </div>

      <div className="relative z-10">
      {/* Hero Header - inspired by event/slug top section */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-30 pb-10">
        <div
          className="rounded-sm border-2 min-h-[160px] relative overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.15)]"
          style={{
            background: "#0f172a",
            border: "2px solid rgba(56,189,248,0.3)",
          }}
        >
          <div className="h-full w-full flex justify-center items-center relative py-10">
            {/* Top Left Corner */}
            <div className="border1 absolute top-3 left-3 w-10 h-7 border-l-4 border-t-4 border-primary/60 shadow-[-8px_-8px_10px_rgba(0,200,255,0.3)]" />
            {/* Bottom Right Corner */}
            <div className="border2 absolute bottom-3 right-3 w-10 h-7 border-r-4 border-b-4 border-primary/60 shadow-[8px_8px_10px_rgba(0,200,255,0.3)]" />

            <div className="flex flex-col items-center justify-center">
              <div
                ref={titleRef}
                className="opacity-0 relative capitalize font-extrabold text-cyan-100 text-3xl lg:text-4xl text-center"
              >
                <h1>The Organizers</h1>
              </div>
              <div className="absolute mt-2 mb-2 translate-y-4 flex justify-center items-center">
                <div
                  ref={underlineRef1}
                  className="h-[2px] w-40 bg-gradient-to-r translate-x-12 from-transparent via-cyan-400 to-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.7)]"
                />
                <div
                  ref={underlineRef2}
                  className="mx-3 w-30 h-30 bg-cyan-400 opacity-0 shadow-[0_0_12px_rgba(0,255,255,0.9)]"
                />
                <div
                  ref={underlineRef3}
                  className="h-[2px] w-40 bg-gradient-to-l -translate-x-12 from-transparent via-cyan-400 to-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.7)]"
                />
              </div>
              <div
                ref={headingfooterRef}
                className="opacity-0 text-sm text-pink-200/80 font-semibold"
              >
                <h3>The people behind Trajectory 2K26</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid - 2 per row */}
      <div className="org-grid w-full max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {organizerCategories.map((category) => (
            <div
              key={category.id}
              className={`org-card group relative rounded-sm overflow-hidden border border-cyan-400/30 bg-[#0f172a] shadow-[0_0_15px_rgba(0,255,255,0.08)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-shadow duration-500 ${category.id === organizerCategories.length ? "md:col-span-2" : ""}`}
            >
              {/* Top Left Corner */}
              <div className="absolute top-2 left-2 w-6 h-4 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {/* Bottom Right Corner */}
              <div className="absolute bottom-2 right-2 w-6 h-4 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Card top accent bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

              {/* Category header */}
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <h2 className="text-lg font-bold text-cyan-100 tracking-tight group-hover:text-cyan-50 transition-colors duration-300">
                    {category.title}
                  </h2>
                  <p className="text-[10px] text-cyan-300/50 font-mono tracking-wider uppercase">
                    {category.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400/50 uppercase">
                    Unit_{String(category.id).padStart(2, "0")}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400/60 shadow-[0_0_6px_rgba(0,255,0,0.4)] group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(0,255,0,0.6)] transition-all duration-300" />
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 mt-3 h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

              {/* Members row */}
              <div className="flex flex-wrap justify-center gap-6 px-5 py-6">
                {category.members.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 min-w-[130px]">
                    {/* Large centered profile picture */}
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/30 to-cyan-600/10 blur-sm group-hover:from-cyan-400/50 group-hover:to-cyan-500/20 transition-all duration-500" />
                      <div className="relative w-28 h-28 rounded-full border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500 overflow-hidden bg-[#020617] shadow-[0_0_20px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:-translate-y-1 hover:scale-105">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                    </div>

                    {/* Details below */}
                    <div className="flex flex-col items-center gap-0.5 text-center">
                      <span className="text-sm font-bold text-cyan-100 tracking-tight">
                        {member.name}
                      </span>
                      <span className="text-[10px] text-cyan-400/40 font-mono">
                        {member.role}
                      </span>
                      {member.year && (
                        <span className="text-[10px] text-cyan-400/30 font-mono">
                          {member.year}
                        </span>
                      )}
                    </div>

                    {/* LinkedIn button - Tech Team only */}
                    {category.id === 4 && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 rounded-sm border border-cyan-400/20 bg-[#020617]/60 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group/link"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-cyan-400/60 group-hover/link:text-cyan-300 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="text-[11px] text-cyan-400/60 font-mono group-hover/link:text-cyan-300 transition-colors duration-300">
                          LinkedIn
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Card bottom accent bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:via-emerald-400/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
      </div>
    </div>
  );
}
