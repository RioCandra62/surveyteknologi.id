// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          High-Precision Drone Survey & Mapping Solutions
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Survey Teknologi Indonesia delivers accurate geospatial data using
          LiDAR, photogrammetry, and bathymetric technologies.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-md font-medium">
            Explore Services
          </button>
          <button className="px-6 py-3 border border-white/20 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
