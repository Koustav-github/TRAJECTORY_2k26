"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────── Types ──────────────────────────── */

interface TimelineEvent {
  name: string;
  time: string;
  image?: string;
  description: string;
}

interface DayData {
  day: string;
  date: string;
  tagline: string;
  events: TimelineEvent[];
}

/* ──────────────────────────── Data ──────────────────────────── */

const timelineData: DayData[] = [
  {
    day: "Day 1",
    date: "16th April, 2026",
    tagline: "The Genesis Protocol",
    events: [
      {
        name: "Inauguration Ceremony",
        time: "11:00 AM — 12:45 PM",
        image: "/12.webp",
        description:
          "The grand opening of Trajectory 2k26. Experience the ignition of three days of mechanical brilliance.",
      },
      {
        name: "Linde Innovation Challenge",
        time: "1:00 PM — 2:30 PM",
        image: "/lindeinnovation.webp",
        description:
          "Push the boundaries of engineering innovation in this challenge sponsored by Linde.",
      },
      {
        name: "Model Matrix Prelims",
        time: "2:30 PM — 4:00 PM",
        image: "/modelmatrix.webp",
        description:
          "The preliminary round of the flagship 3D modeling competition. Precision meets creativity.",
      },
      {
        name: "Model Matrix Finals",
        time: "4:30 PM — 5:30 PM",
        image: "/modelmatrix.webp",
        description:
          "The ultimate CAD showdown. Top qualifiers battle for the Model Matrix championship.",
      },
      {
        name: "Torko Bitorko",
        time: "5:30 PM — 7:00 PM",
        image: "/torkobitorko.webp",
        description:
          "The great debate arena. Logic, rhetoric, and engineering wit collide.",
      },
    ],
  },
  {
    day: "Day 2",
    date: "17th April, 2026",
    tagline: "The Forge Sequence",
    events: [
      {
        name: "Eggs Cage",
        time: "11:00 AM — 1:00 PM",
        image: "/eggscage.webp",
        description:
          "Design the ultimate protective structure. Can your cage save the egg from a fatal drop?",
      },
      {
        name: "Treasure Hunt",
        time: "1:00 PM — 2:30 PM",
        image: "/treasurehunt.webp",
        description:
          "Decode cryptic clues and navigate the campus to unearth the hidden treasure.",
      },
      {
        name: "Gyan Yudh Prelims",
        time: "2:30 PM — 3:00 PM",
        image: "/gyanyudh.webp",
        description:
          "The preliminary quiz round. Test your engineering knowledge across disciplines.",
      },
      {
        name: "RoboLeague",
        time: "3:00 PM — 6:00 PM",
        image: "/roboleague.webp",
        description:
          "Bots battle in the arena of mechanical supremacy. Build. Drive. Conquer.",
      },
      {
        name: "Mazecraft",
        time: "3:00 PM — 6:00 PM",
        image: "/mazecraft.webp",
        description:
          "Navigate your machine through an intricate maze. Precision and strategy are key.",
      },
      {
        name: "Exhibition Match",
        time: "4:00 PM — 5:00 PM",
        image: "/cricket.webp",
        description:
          "A showcase sporting match to energize the crowd between events.",
      },
      {
        name: "Standup Comedy",
        time: "5:00 PM — 7:00 PM",
        image: "/standup.webp",
        description:
          "Unwind with an evening of laughs. Comedy that hits different after a day of engineering.",
      },
    ],
  },
  {
    day: "Day 3",
    date: "18th April, 2026",
    tagline: "The Final Reckoning",
    events: [
      {
        name: "Hydroblaster",
        time: "11:00 AM — 1:00 PM",
        image: "/hydroblasters.webp",
        description:
          "Harness the power of hydraulics. Build a water-powered system that outperforms the rest.",
      },
      {
        name: "Mechapult",
        time: "11:00 AM — 1:00 PM",
        image: "/mechapult.webp",
        description:
          "Medieval engineering meets modern minds. Catapult your way to mechanical glory.",
      },
      {
        name: "Gyan Yudh Finals",
        time: "1:00 PM — 3:00 PM",
        image: "/gyanyudh.webp",
        description:
          "The final quiz battle. Champions are crowned in this intellectual showdown.",
      },
      {
        name: "Closing Ceremony",
        time: "3:00 PM — 5:30 PM",
        image: "/15.webp",
        description:
          "The culmination of Trajectory 2k26. Awards, recognition, and farewell to an epic fest.",
      },
      {
        name: "Band Performance",
        time: "6:00 PM — 8:00 PM",
        // image: "/4.webp",
        description:
          "Close the fest with electrifying live music. Three days of brilliance, one final celebration.",
      },
    ],
  },
];

/* ──────────────────────────── Helpers ──────────────────────────── */

const getGlobalIndex = (dayIndex: number, eventIndex: number): number => {
  let count = 0;
  for (let d = 0; d < dayIndex; d++) {
    count += timelineData[d].events.length;
  }
  return count + eventIndex;
};

const generatePath = (): string => {
  const segments = 30;
  let d = "M 50 0";
  for (let i = 0; i < segments; i++) {
    const y1 = ((i + 1 / 3) / segments) * 100;
    const y2 = ((i + 2 / 3) / segments) * 100;
    const yEnd = ((i + 1) / segments) * 100;
    const amplitude = 18 + Math.sin(i * 0.7) * 10;
    const offset = i % 2 === 0 ? amplitude : -amplitude;
    d += ` C ${(50 + offset).toFixed(2)} ${y1.toFixed(2)}, ${(50 - offset).toFixed(2)} ${y2.toFixed(2)}, 50 ${yEnd.toFixed(2)}`;
  }
  return d;
};

const svgPath = generatePath();

/* ──────────────────────────── Component ──────────────────────────── */

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathWrapperRef = useRef<HTMLDivElement>(null);
  const leaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* ═══ 1. Hero entrance ═══ */
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl
        .from(".hero-subtitle", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero-title-word",
          {
            y: 80,
            opacity: 0,
            rotateX: -40,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-line",
          { scaleX: 0, duration: 1, ease: "power2.inOut" },
          "-=0.6"
        )
        .from(
          ".hero-date-item",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-scroll",
          { opacity: 0, y: -10, duration: 0.5 },
          "-=0.2"
        );

      /* ═══ 2. SVG path reveal (clip-path) ═══ */
      if (pathWrapperRef.current) {
        gsap.fromTo(
          pathWrapperRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-track",
              start: "top 40%",
              end: "bottom 60%",
              scrub: 1.5,
            },
          }
        );
      }

      /* ═══ 3. Leader dot ═══ */
      if (leaderRef.current) {
        gsap.fromTo(
          leaderRef.current,
          { top: "0%" },
          {
            top: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-track",
              start: "top 40%",
              end: "bottom 60%",
              scrub: 1.5,
            },
          }
        );
      }

      /* ═══ 4. Day headers ═══ */
      gsap.utils.toArray<HTMLElement>(".day-header").forEach((header) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
        tl.from(header, {
          opacity: 0,
          scale: 0.85,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        }).from(
          header.querySelectorAll(".day-corner"),
          {
            scale: 0,
            opacity: 0,
            stagger: 0.05,
            duration: 0.4,
            ease: "back.out(2)",
          },
          "-=0.3"
        );
      });

      /* ═══ 5. Event cards ═══ */
      gsap.utils.toArray<HTMLElement>(".timeline-event").forEach((card) => {
        const isLeft = card.classList.contains("event-left");
        gsap.from(card, {
          x: isLeft ? -100 : 100,
          opacity: 0,
          scale: 0.9,
          filter: "blur(6px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 55%",
            scrub: 1,
          },
        });
      });

      /* ═══ 6. Timeline nodes ═══ */
      gsap.utils.toArray<HTMLElement>(".timeline-node").forEach((node) => {
        gsap.from(node, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* ═══ 7. Image clip-path reveals ═══ */
      gsap.utils.toArray<HTMLElement>(".event-image-wrap").forEach((wrap) => {
        gsap.from(wrap, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      /* ═══ 8. Image parallax ═══ */
      gsap.utils.toArray<HTMLElement>(".event-image-inner").forEach((img) => {
        gsap.to(img, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".timeline-event") || img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      /* ═══ 9. Staggered inner content ═══ */
      gsap.utils.toArray<HTMLElement>(".event-content").forEach((content) => {
        gsap.from(content.children, {
          y: 15,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  /* ──────────────────────────── JSX ──────────────────────────── */

  return (
    <div ref={containerRef} className="min-h-screen bg-vanta">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-24">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-full bg-[linear-gradient(rgba(0,229,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div
          className="relative z-10 text-center px-4"
          style={{ perspective: "800px" }}
        >
          <p className="hero-subtitle text-primary font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase mb-6 opacity-70">
            // System Timeline Initialized
          </p>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter overflow-hidden">
            <span className="hero-title-word inline-block text-white">
              Event
            </span>{" "}
            <span className="hero-title-word inline-block text-primary drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              Timeline
            </span>
          </h1>

          <div className="hero-line w-32 md:w-64 h-[2px] mx-auto mt-8 bg-[linear-gradient(90deg,transparent,var(--color-primary),transparent)]" />

          <div className="flex items-center justify-center gap-3 md:gap-6 mt-8 flex-wrap">
            {["APR 16", "APR 17", "APR 18"].map((date, i) => (
              <div
                key={i}
                className="hero-date-item flex items-center gap-3 md:gap-6"
              >
                <span className="text-white/40 font-mono text-xs md:text-sm tracking-[0.3em]">
                  {date}
                </span>
                {i < 2 && (
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                )}
              </div>
            ))}
          </div>

          <p className="hero-scroll text-white/20 font-mono text-[10px] mt-10 tracking-[0.4em] uppercase">
            Scroll to explore the sequence
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="timeline-track relative py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          {/* ── Background path track (always visible, faint) ── */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[120px] hidden md:block pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d={svgPath}
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
            </svg>
          </div>

          {/* ── Animated path (revealed via clip-path) ── */}
          <div
            ref={pathWrapperRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[120px] hidden md:block pointer-events-none"
            style={{ clipPath: "inset(0 0 100% 0)" }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="timelineGrad"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#007CF0" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.9" />
                </linearGradient>
                <filter id="pathGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Wide glow layer */}
              <path
                d={svgPath}
                stroke="#00E5FF"
                strokeWidth="10"
                strokeOpacity="0.06"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
              {/* Main cyan path */}
              <path
                d={svgPath}
                stroke="url(#timelineGrad)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                fill="none"
                filter="url(#pathGlow)"
              />
            </svg>
          </div>

          {/* ── Leader dot ── */}
          <div
            ref={leaderRef}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 z-20 hidden md:block pointer-events-none"
          >
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary),0_0_40px_rgba(0,229,255,0.3)]" />
              <div className="absolute inset-[-6px] rounded-full bg-primary/20 animate-ping" />
            </div>
          </div>

          {/* ── Mobile line ── */}
          <div className="absolute left-6 md:hidden top-0 bottom-0 w-[2px] z-0">
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary via-primary/30 to-primary/60 opacity-40" />
          </div>

          {/* ── Timeline content ── */}
          <div className="relative z-10 max-w-6xl mx-auto">
            {timelineData.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={dayIndex > 0 ? "mt-16 md:mt-28" : ""}
              >
                {/* ▸ Day Header */}
                <div className="day-header relative flex items-center justify-center mb-12 md:mb-20">
                  {/* Day node — desktop */}
                  <div className="timeline-node hidden md:block absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 bg-primary rounded-full shadow-[0_0_20px_var(--color-primary),0_0_40px_rgba(0,229,255,0.3)]" />
                      <div className="absolute inset-[-4px] rounded-full border border-primary/30" />
                    </div>
                  </div>

                  {/* Day node — mobile */}
                  <div className="timeline-node absolute left-[18px] z-20 md:hidden">
                    <div className="w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]" />
                  </div>

                  {/* Day card */}
                  <div className="ml-12 md:ml-0 relative bg-vanta/95 border border-primary/25 px-6 md:px-14 py-5 md:py-7 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-primary/[0.03]" />
                    <div className="day-corner absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50" />
                    <div className="day-corner absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
                    <div className="day-corner absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
                    <div className="day-corner absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50" />
                    <div className="relative z-10 text-center">
                      <span className="text-primary font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-1.5 opacity-70">
                        {day.day} // {day.tagline}
                      </span>
                      <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
                        {day.date}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* ▸ Events */}
                <div className="flex flex-col gap-10 md:gap-16">
                  {day.events.map((event, eventIndex) => {
                    const globalIdx = getGlobalIndex(dayIndex, eventIndex);
                    const isLeft = globalIdx % 2 === 0;
                    const eventNum = String(eventIndex + 1).padStart(2, "0");

                    return (
                      <div
                        key={eventIndex}
                        className={`timeline-event ${isLeft ? "event-left" : "event-right"} relative flex items-start md:justify-between w-full ${
                          isLeft ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Node — desktop */}
                        <div className="timeline-node absolute left-1/2 -translate-x-1/2 top-6 z-20 hidden md:block">
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-vanta shadow-[0_0_10px_var(--color-primary)]" />
                        </div>

                        {/* Node — mobile */}
                        <div className="timeline-node absolute left-[19px] top-6 z-20 md:hidden">
                          <div className="w-3 h-3 rounded-full border-2 border-primary bg-vanta shadow-[0_0_8px_var(--color-primary)]" />
                        </div>

                        {/* Card */}
                        <div className="w-full md:w-[45%] ml-12 md:ml-0">
                          <div className="group relative bg-[#0d1117] border border-white/[0.06] rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,229,255,0.06)]">
                            {/* Image */}
                            {event.image && (
                              <div className="event-image-wrap relative h-40 md:h-48 overflow-hidden">
                                <Image
                                  src={event.image}
                                  alt={event.name}
                                  fill
                                  className="event-image-inner object-cover scale-110 group-hover:scale-[1.18] transition-transform duration-[1.2s]"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent" />
                                {/* Time badge */}
                                <div className="absolute top-3 right-3 bg-vanta/80 backdrop-blur-sm border border-primary/15 px-2.5 py-1 rounded-sm">
                                  <span className="text-primary font-mono text-[9px] md:text-[10px] tracking-wider flex items-center gap-1.5">
                                    <Clock className="w-2.5 h-2.5" />
                                    {event.time}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Content */}
                            <div className="event-content p-5 md:p-6">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-primary/30 font-mono text-[9px] tracking-[0.3em] uppercase">
                                  EVT_{eventNum}
                                </span>
                                {!event.image && (
                                  <span className="text-primary/50 font-mono text-[9px] md:text-[10px] tracking-wider flex items-center gap-1.5">
                                    <Clock className="w-2.5 h-2.5" />
                                    {event.time}
                                  </span>
                                )}
                              </div>

                              <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                                {event.name}
                              </h3>

                              <p className="text-white/40 text-xs md:text-sm mt-2.5 leading-relaxed font-light">
                                {event.description}
                              </p>
                            </div>

                            {/* Hover scan line */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 overflow-hidden">
                              <div className="w-full h-[2px] bg-primary absolute top-0 animate-[scanline_3s_linear_infinite]" />
                            </div>

                            {/* Background number watermark */}
                            <div className="absolute -right-1 -bottom-3 text-[4.5rem] font-black text-white/[0.015] select-none pointer-events-none leading-none">
                              {eventNum}
                            </div>

                            {/* Top accent line on hover */}
                            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-linear-to-r from-primary to-transparent transition-all duration-700" />
                          </div>
                        </div>

                        {/* Spacer for desktop layout */}
                        <div className="hidden md:block w-[45%]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ── End marker ── */}
          <div className="relative flex flex-col items-center mt-20 md:mt-32 z-10">
            <div className="timeline-node">
              <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]" />
            </div>
            <div className="w-[1px] h-16 bg-linear-to-b from-primary/50 to-transparent mt-2" />
            <span className="text-[10px] font-mono text-primary/30 tracking-[0.5em] uppercase mt-4">
              End of Timeline
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
