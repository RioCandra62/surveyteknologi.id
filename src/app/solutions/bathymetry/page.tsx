"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Anchor, Waves, Layers, Compass } from "lucide-react";

export default function BathymetrySolutionPage() {
  const specs = [
    { label: "Depth Accuracy", value: "Sub-5 cm RMSE" },
    { label: "Transducer Freq.", value: "Dual (50 / 200 kHz)" },
    { label: "Depth Range", value: "0.3m to 150m Range" },
    { label: "Platform System", value: "Autonomous Surface Vehicle (ASV)" },
  ];

  const conceptualPillars = [
    {
      icon: <Waves className="h-6 w-6 text-brand-cyan" />,
      title: "Acoustic Echo Sounding",
      desc: "High-frequency transducers emit acoustic pulses downward, mapping the water depth based on the return signal timing reflected from the seabed.",
    },
    {
      icon: <Anchor className="h-6 w-6 text-brand-cyan" />,
      title: "Sound Velocity Profile (SVP)",
      desc: "Water temperature and salinity columns are measured to calculate acoustic velocity variations, ensuring exact depth calculations across varying densities.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "RTK Tide Corrections",
      desc: "Active base receivers track real-time tidal height elevations, dynamically subtracting astronomical tide shifts to yield absolute bottom elevations.",
    },
  ];

  const deliverables = [
    {
      id: "del-01",
      title: "3D Seabed & Riverbed Surface",
      desc: "High-density 3D digital surfaces detailing the shape and topography of riverbeds, lakes, or coastal seabeds. Crucial for engineering construction and structural layouts.",
      image: "/assets/image/bathymmetry/result.jpeg",
      tags: ["GeoTIFF Raster", "3D Surface"],
      hudCode: "FREQ: 200kHz // DEPTH: 14.8m // VERT_ACC: 3.2cm",
      specs: [
        { name: "Grid Spacing", value: "0.5m to 2.0m resolution grids" },
        { name: "Coordinate Reference", value: "UTM Zone / WGS 84 Datum" },
        { name: "Precision Level", value: "Sub-5 cm Vertical Precision" },
        { name: "Output Format", value: "GeoTIFF, ASCII Grid, XYZ Data" },
      ],
    },
    {
      id: "del-02",
      title: "Bathymetric Contour Maps",
      desc: "High-precision elevation contours detailing underwater depths. Essential for harbor dredging verification and navigation charts compilation.",
      image: "https://www.whiteclouds.com/wp-content/uploads/2023/04/Lake-Huron-Bathymetric-Maps.jpg",
      tags: ["CAD Contours", "DXF / DWG Format"],
      hudCode: "INTERVAL: 0.5m // FILE: .DWG // REF: MSL (MEAN)",
      specs: [
        { name: "Contour Interval", value: "0.2m, 0.5m, 1.0m intervals" },
        { name: "Height Datum", value: "Mean Sea Level (MSL) / Chart Datum" },
        { name: "Drawing Formats", value: "AutoCAD DWG, DXF, SHP Shapefile" },
        { name: "Validation", value: "Calibrated with manual leadlines" },
      ],
    },
    {
      id: "del-03",
      title: "Riverbed Cross-Section Profiles",
      desc: "Detailed cross-sectional profiles visualizing depth offsets at specific engineering stations. Ideal for scour analysis around bridge pillars and dam structural monitoring.",
      image: "/assets/image/bathymmetry/result2.jpeg",
      tags: ["PDF Report", "Cross-sections"],
      hudCode: "STATION: KM 12+400 // WIDTH: 80m // SCALE: 1:200",
      specs: [
        { name: "Cross-section Width", value: "Up to 500 meters wide profiles" },
        { name: "Sampling Interval", value: "10m, 20m, 50m intervals along chainage" },
        { name: "Profiles Formats", value: "AutoCAD DWG, Excel CSV, PDF Charts" },
        { name: "Scour Detection", value: "Compares scour profiles over time" },
      ],
    },
    // {
    //   id: "del-04",
    //   title: "Volumetric Siltation Analysis",
    //   desc: "Quantifies underwater siltation accumulation over time, calculating exact dredging cut-and-fill soil mass volumes for port channels and dams.",
    //   image: "/assets/image/bathymetry.png",
    //   tags: ["CSV / PDF", "Volumetrics"],
    //   hudCode: "SILT_VOLUME: 42,400 m³ // ACCURACY: >98% // GRID",
    //   specs: [
    //     { name: "Volume Precision", value: "Engineering-grade cubic calculations" },
    //     { name: "Reference Datum", value: "Design Dredging Depth (Baseplane)" },
    //     { name: "Silt Thickness Map", value: "Isopach thickness raster files" },
    //     { name: "Turnaround Time", value: "Completed within 48 hours" },
    //   ],
    // },
  ];

  const useCases = [
    {
      sector: "Port Dredging",
      use: "Pre-dredge and post-dredge surveys to verify navigation channel depths and compute siltation volumes.",
    },
    {
      sector: "Bridge Scour Analysis",
      use: "Mapping scour holes around bridge piers and foundations to monitor structural erosion risks.",
    },
    {
      sector: "Reservoir Capacity",
      use: "Volumetric mapping of dam reservoirs to calculate water storage capacity changes due to silt buildup.",
    },
    {
      sector: "Marine Pipelines",
      use: "Detailed seabed mapping along proposed underwater pipeline routes to identify obstructions.",
    },
  ];

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Telemetry Header/Hero */}
      <section className="relative py-24 border-b border-white/5 light:border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> Back to Home
            </Link>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-brand-cyan font-bold tracking-wider uppercase">Solutions</span>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-gray-400 light:text-slate-500">Bathymetry</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: AC_SOUNDING // STATUS: NOMINAL</span>
            <span>FREQ: 50/200 kHz // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Hydrographic Surveying
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Bathymetric Survey <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                & Underwater Mapping
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              Mapping sub-surface terrain topography with dual-frequency echo sounders and autonomous survey vessels, delivering high-accuracy underwater contours for ports, dams, and bridges.
            </p>
          </div>

          {/* Quick specs banner */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 light:border-slate-200 pt-8">
            {specs.map((item, idx) => (
              <div key={idx} className="border-l border-brand-cyan/30 pl-4">
                <p className="text-xs text-gray-500 light:text-slate-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-lg font-bold text-white light:text-slate-900 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Concept Breakdown Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                Technology Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                Underwater Acoustic Profiling
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Bathymetry mappings rely on acoustic remote sensing. Echo sounders emit calibrated audio pulses downward, registering the time offsets of the echoes returning from the bed floor. Pairing these depth soundings with geodetic RTK GPS positions yields high-precision coordinate elevation profiles of the sub-surface topography.
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  Deploying unmanned autonomous surface vehicles (ASVs) allows us to survey shallow-water areas and hazardous tailing dams safely, avoiding risks to human crews.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {conceptualPillars.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 p-6 rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-slate-100 hover:border-brand-cyan/20 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 transition-colors group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-[#090d16] light:bg-slate-50 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Industrial Hardware
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Hydrographic Survey Fleet
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate robotic autonomous surface vessels and dual-frequency transducers to capture accurate shallow water profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* ASV Platform Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Autonomous Surface Vehicle (ASV)</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our unmanned hydrographic surveying vessel. Features autonomous waypoint navigation mapping grids, a dual-thruster power train, and up to 4 hours of active operation. Ideal for environmental surveying in shallow tailing ponds, river estuaries, and dams.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Operation Time</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 4 hours</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Navigation Link</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Autopilot / RTK Route</span>
                </div>
              </div>
            </div>

            {/* Echo Sounder Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Dual-Frequency Echo Sounder</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                A high-precision acoustic depth sensor operating simultaneously at 50 kHz and 200 kHz frequencies. The high frequency tracks the upper silt boundaries, while the low frequency penetrates soft mud to capture the hard bottom surface layer.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Frequencies</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">50 kHz & 200 kHz</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sensor Depth Range</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">0.3m to 150m soundings</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-gradient-to-b from-[#090d16] light:from-slate-50 to-[#05080e] light:to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Output Products
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Bathymetry Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data transduser sonar menjadi model permukaan dasar laut/sungai berformat GIS dan CAD.
            </p>
          </div>

          <div className="space-y-32">
            {deliverables.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl light:shadow-md">
                      
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 light:from-white/70 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute inset-3 border border-white/5 light:border-slate-900/5 pointer-events-none" />
                      <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-brand-cyan/60 pointer-events-none" />
                      <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-brand-cyan/60 pointer-events-none" />
                      
                      <div className="absolute top-5 right-5 flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="bg-dark-bg/85 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-bold tracking-wider text-gray-300 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center bg-[#090d16]/80 backdrop-blur-sm border border-white/5 px-3 py-2 rounded-lg text-[9px] font-mono text-gray-400">
                        <span>{item.hudCode}</span>
                        <span className="text-brand-cyan font-bold">READY</span>
                      </div>

                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase">
                        DELIVERABLE 0{idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white light:text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 light:border-slate-200">
                      {item.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex gap-2.5 items-start">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan mt-0.5">
                            <span className="text-[8px] font-bold">✓</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase tracking-wider block">
                              {spec.name}
                            </span>
                            <span className="text-xs font-bold text-white light:text-slate-800 mt-0.5 block">
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                      >
                        Request Sample Data <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Industrial Use Cases Section */}
      <section className="py-24 bg-[#090d16] light:bg-slate-50 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Sectors served
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Bathymetry Industry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying underwater sonar mapping to solve navigation and engineering problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-slate-100/50 hover:border-brand-cyan/20 transition-all duration-300 group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors">
                    {item.sector}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-400 light:text-slate-600 leading-relaxed">
                    {item.use}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <CheckCircle2 className="h-4 w-4 text-brand-cyan opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden border-t border-white/5 light:border-slate-200 transition-colors">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
            Project Planning
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
            Ready to Map Your Water Bodies?
          </h2>

          <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Discuss your surveying needs with our technical team. We provide tailored solutions and accurate estimations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-cyan text-white hover:bg-brand-cyan/90 font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,224,0.25)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border border-white/10 light:border-slate-200 hover:border-white/20 light:hover:border-slate-300 bg-white/5 light:bg-white hover:bg-white/10 text-white light:text-slate-800 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-sm uppercase tracking-wider"
            >
              Return Home
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
