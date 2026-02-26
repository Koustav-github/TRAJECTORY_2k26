"use client";
import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Grid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = (card: HTMLDivElement) => {
    if (!containerRef.current) return;
    const siblings = Array.from(containerRef.current.children);
    
    gsap.to(siblings, {
      opacity: 0.4,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(card, {
      opacity: 1,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLeave = () => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    
    gsap.to(cards, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useGSAP(() => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.children) as HTMLDivElement[];
    
    // Entrance animation - staggered reveal
    gsap.from(cards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid w-full max-w-7xl mx-auto auto-rows-min md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6",
        className,
      )}
    >
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child as React.ReactElement<any>, {
          onHoverEntry: handleEnter,
          onHoverExit: handleLeave,
        })
      )}
    </div>
  );
};


const Card = ({
  name,
  className,
  background,
  Icon,
  description,
  onHoverEntry,
  onHoverExit,
  
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  onHoverEntry?: (e: HTMLDivElement) => void;
  onHoverExit?: () => void;
  
}) => (

  <div
    onMouseEnter={(e) => onHoverEntry?.(e.currentTarget as HTMLDivElement)}
    onMouseLeave={() => onHoverExit?.()}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // theme styles
      "from-[#0B0F1A] to-[#111827] bg-linear-to-tr border-x-2 border-y-2 border-primary/20 shadow-[15px_15px_20px_rgba(0,229,255,0.05)] hover:from-[#111827] hover:to-[#0B0F1A] hover:bg-linear-to-tr ease-in-out duration-300 transform-gpu transition-all hover:shadow-[15px_15px_30px_rgba(0,229,255,0.15)]",
      className,
    )}
  >
    <div >{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-3">

      <Icon className="h-12 w-12 origin-left transform-gpu text-primary group-hover:text-accent transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="max-w-lg text-white/70 group-hover:text-white transition-colors">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { Card, Grid };
