"use client";

import Link from "next/link";
import Leadership from "@/components/leadership";
import OurPartner from "@/components/sections/ourpartner";
import PortfolioStats from "@/components/sections/portofolio";
import SolutionsHero from "@/components/sections/solution/solutionHero";
import SolutionsList from "@/components/sections/solution/solutionList";
import { useTranslation } from "@/hooks/useTranslation";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] overflow-hidden flex items-center justify-center text-center px-4 sm:px-6">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/video/hero_720p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dual Layer Overlay (Radial & Linear Gradient for optimal text visibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#090d16_95%)]" />

        {/* Technical HUD Overlays (Simulating a Drone Interface) */}
        <div className="absolute inset-x-8 top-28 bottom-8 pointer-events-none hidden lg:flex flex-col justify-between border border-white/5 p-4 select-none">
          {/* Top telemetry */}
          <div className="flex justify-between items-start text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYS: ACTIVE // SAT: 18 // D-LINK: 98%</span>
            </div>
            <div className="text-right">
              <span>POS: -6.2088° S, 106.8456° E</span>
            </div>
          </div>

          {/* Side markings */}
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-1 text-[9px] font-mono text-gray-600">
              <span>+ 150m</span>
              <span>+ 100m</span>
              <span className="text-amber-500 font-bold">- ALT 120m</span>
              <span>+ 50m</span>
              <span>+ 0m</span>
            </div>
            {/* Center target indicator */}
            <div className="relative w-16 h-16 opacity-20 flex items-center justify-center">
              <div className="absolute w-8 h-px bg-white" />
              <div className="absolute h-8 w-px bg-white" />
              <div className="w-10 h-10 border border-white rounded-full" />
            </div>
            <div className="flex flex-col items-end gap-1 text-[9px] font-mono text-gray-600">
              <span>SPD: 12.4 M/S</span>
              <span>HDG: 084° E</span>
              <span>WND: 3.2 M/S</span>
              <span>BAT: 82%</span>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="flex justify-between items-end text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <span>DRONE SCANNING ACTIVE...</span>
            <span>CAM: 8K LIDAR SENSOR // FOCAL: 35MM</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-white px-2 mt-8">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-8 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
            {t("hero.tagline")}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {t("hero.title1")}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>{" "}
            {t("hero.title3")}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            {t("hero.subtitle")}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <a
              href="#solutions"
              className="px-8 py-4 bg-amber-500 text-black hover:bg-amber-400 font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              {t("hero.exploreBtn")}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              {t("hero.contactBtn")}
            </Link>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
            {t("hero.scroll")}
          </span>
          <div className="w-6 h-10 border border-gray-600 rounded-full p-1 flex justify-center">
            <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <PortfolioStats />
      <div id="solutions">
        <SolutionsHero />
        <SolutionsList />
      </div>
      <div id="about">
        <Leadership />
      </div>
      <OurPartner />
    </>
  );
}
