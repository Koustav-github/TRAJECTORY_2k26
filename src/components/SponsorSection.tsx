import React from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Zap, ChevronRight } from 'lucide-react';

export default function SponsorsSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4A4E52] to-transparent opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4A4E52] to-transparent opacity-50" />
      
      {/* Header */}
      <div className="relative z-10 text-center mb-16 sm:mb-24 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium tracking-wide mb-6 uppercase">
          <Sparkles className="w-4 h-4" />
           Industry Partners
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 uppercase">
          Powering the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-gray-400">Future</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Backed by industry leaders, Trajectory 2k26 is supported by the pioneers of modern technology and engineering.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        
        {/* PLATINUM SPONSOR */}
        <div className="w-full group relative h-full md:mt-0">
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-gray-400/0 via-[#E5E4E2]/50 to-gray-400/0 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
          
          <div className="relative flex flex-col items-center text-center p-8 md:p-12 rounded-[2rem] bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] h-full justify-between">
            {/* Inner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5E4E2]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col items-center z-10 w-full">
              <div className="flex items-center gap-2 mb-8">
                <Shield className="w-5 h-5 text-[#E5E4E2]" />
                <span className="text-[#E5E4E2] font-semibold tracking-widest uppercase text-sm">Platinum Sponsor</span>
              </div>
              
              <div className="relative bg-white/95 rounded-2xl p-6 mb-8 w-full max-w-[280px] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/20">
                <div className="relative h-24 sm:h-28 w-full scale-[1.15]">
                  <Image src="/linde.webp" alt="Linde Pipes" fill className="object-contain object-center" />
                </div>
              </div>
              
              <p className="text-gray-400 text-base max-w-sm mb-8 leading-relaxed">Pioneering piping technology and industrial solutions for the future of infrastructure.</p>
            </div>

            <div className="z-10 relative group/btn mt-auto">
              <div className="absolute -inset-2 bg-white/20 blur-lg rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <button className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* GOLD SPONSOR */}
        <div className="w-full group relative h-full md:mt-12">
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-gray-400/0 via-[#FFD700]/50 to-gray-400/0 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
          
          <div className="relative flex flex-col items-center text-center p-8 md:p-12 rounded-[2rem] bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/5 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] h-full justify-between">
            {/* Inner glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-[70px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            
            <div className="flex flex-col items-center z-10 w-full">
              <div className="flex items-center gap-2 mb-8">
                <Zap className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#FFD700] font-semibold tracking-widest uppercase text-xs">Gold Sponsor</span>
              </div>
              
              <div className="relative h-20 sm:h-24 w-full max-w-[240px] mb-8 mt-2">
                <Image src="/dkms.webp" alt="DKMS" fill className="object-contain object-center drop-shadow-[0_0_15px_rgba(255,215,0,0.2)] scale-105" />
              </div>

              <p className="text-gray-400 text-sm sm:text-base font-medium tracking-wide max-w-sm mb-8 leading-relaxed">DK Machine Service delivers top-tier machining and maintenance with precision, reliability, and craftsmanship you can truly count on.</p>
            </div>

            <div className="z-10 relative mt-auto">
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}