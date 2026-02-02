"use client";

import PortfolioStats from "@/components/sections/portofolio";
import SolutionsHero from "@/components/sections/solution/solutionHero";
import SolutionsList from "@/components/sections/solution/solutionList";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center text-center px-6">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/video/hero_720p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay (biar teks kebaca) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            High-Precision Drone Survey & Mapping Solutions
          </h1>

          <p className="mt-6 text-lg text-slate-200">
            Survey Teknologi Indonesia delivers accurate geospatial data using
            LiDAR, photogrammetry, and bathymetric technologies.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-md font-medium">
              Explore Services
            </button>
            <button className="px-6 py-3 border border-white/30 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <PortfolioStats />
      <SolutionsHero />
      <SolutionsList />

      {/* <Services />
      <Technology />
      <Industries />
      <WhyUs />
      <CTA /> */}
    </>
  );
}
