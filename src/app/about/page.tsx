"use client";
import About from "@/components/aboutgrid";
import Footer from "@/components/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import Hyperspeed from "@/components/Hyperspeed";

gsap.registerPlugin(ScrollTrigger);

const AbtPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2
    });

    // Background remains fixed for performance (removed parallax)

    // Vision Section Reveal
    gsap.fromTo(visionRef.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    // Refresh triggers to ensure correct positions
    ScrollTrigger.refresh();
  }, { scope: containerRef });

    

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-vanta">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Hyperspeed/>
        <div className="absolute inset-0 bg-linear-to-b from-vanta via-transparent to-vanta" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div ref={headerRef} className="text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-9xl font-black tracking-tighter text-primary drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] mb-4 glitch"
                data-text="TRAJECTORY"
              >
                TRAJECTORY <span className="text-accent underline decoration-primary/30 underline-offset-8">2K26</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-2xl text-accent/60 font-medium tracking-[0.2em] uppercase"
              >
                The Convergence of Motion and Mind
              </motion.p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </div>
          </div>
        </section>

        {/* Vision Section - Redesigned for Premium Aesthetic */}
        <section ref={visionRef} className="relative max-w-5xl mx-auto px-6 py-40">
          <div className="tech-border p-8 md:p-16 rounded-sm overflow-hidden group">
            {/* Technical Corner Accents */}
            <div className="tech-corner tech-corner-tl" />
            <div className="tech-corner tech-corner-tr" />
            <div className="tech-corner tech-corner-bl" />
            <div className="tech-corner tech-corner-br" />

            {/* Scanning Line Effect (CSS Driven) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <div className="w-full h-[1px] bg-primary animate-scan shadow-[0_0_15px_var(--color-primary)]" />
            </div>

            {/* Static Metadata Labels */}
            <div className="absolute top-4 left-4 mono-label hidden md:block">
              SYSTEM_PROTOCOL: <span className="text-white">VISION_SYNC_01</span>
            </div>
            <div className="absolute top-4 right-4 mono-label hidden md:block">
              LAT: 22.5726"N | LONG: 88.3639"E
            </div>
            <div className="absolute bottom-4 left-4 mono-label hidden md:block">
              STATUS: <span className="animate-pulse-soft">ACTIVE_REVOLUTION</span>
            </div>

            <div className="relative z-10 text-center">
              <span className="inline-block px-3 py-1 mb-6 text-[10px] font-mono tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase">
                The Mission Statement
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight leading-none">
                Pioneering the <span className="text-primary italic">Future</span> <br className="hidden md:block" /> of Engineering
              </h2>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-accent/60 leading-relaxed font-light">
                Trajectory is more than just a college fest; it's a testament to the relentless spirit of innovation that defines mechanical engineering. Born from the desire to <span className="text-white font-medium italic">bridge theory and practice</span>, we bring together the brightest minds to solve the challenges of tomorrow.
              </p>
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/10 blur-[100px] pointer-events-none" />
          </div>
        </section>

        {/* The Grid Section */}
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              LIMITLESS <span className="text-primary">AVENUES</span>
            </h2>
          </div>
          <About />
        </section>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AbtPage;
