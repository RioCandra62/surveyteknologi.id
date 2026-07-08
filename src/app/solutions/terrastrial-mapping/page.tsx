"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Compass, Layers, Zap } from "lucide-react";

export default function TerrestrialMappingSolutionPage() {
  const specs = [
    { label: "Angular Accuracy", value: '2" (Arc Seconds)' },
    { label: "Reflectorless Range", value: "Up to 1000m" },
    { label: "RTK Precision", value: "H: 8mm / V: 15mm" },
    { label: "Tilt Compensation", value: "IMU Tilt up to 60°" },
  ];

  const conceptualPillars = [
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Total Station Traverses",
      desc: "Measures precise horizontal and vertical angles along closed traverses to compute local benchmark positions with sub-millimeter relative accuracy.",
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "RTK GNSS Positioning",
      desc: "Links multi-constellation base and rover receivers to receive real-time positioning signals, defining absolute geodetic coordinates on site.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-cyan" />,
      title: "Precision Boundary Staking",
      desc: "Extracts coordinates directly from engineering CAD designs and places physical markers on site to define alignments and borders.",
    },
  ];

  const deliverables = [
    {
      id: "del-01",
      title: "Boundary Layout Survey",
      desc: "High-precision boundary lines and property stakes defining cadastral borders. Crucial for land acquisitions, zoning compliance, and legal property divisions.",
      image: "/assets/image/photogrammetry.png",
      tags: ["CAD Drawings", "DXF / DWG Format"],
      hudCode: "STAKES: 48 // ACCURACY: <1.5cm // REF: BPN_INDONESIA",
      specs: [
        { name: "Cadastral Standards", value: "BPN (Badan Pertanahan Nasional) Compliant" },
        { name: "Marker Material", value: "Iron pins, concrete pillars (patok)" },
        { name: "Output Format", value: "AutoCAD DWG, Shapefile SHP, PDF Maps" },
        { name: "Applications", value: "Zoning boundaries, legal land registries" },
      ],
    },
    {
      id: "del-02",
      title: "Topographic CAD Drawings",
      desc: "CAD engineering drawings detailing ground contours, terrain elevations, existing utilities, roads, structures, and trees. Plugs directly into civil grading designs.",
      image: "/assets/image/bathymetry.png",
      tags: ["CAD Contours", "DWG / DXF Format"],
      hudCode: "CONTOUR_INT: 0.5m // GRID: 5m // TARGET: SITE_CIVIL",
      specs: [
        { name: "Contour Interval", value: "0.2m, 0.5m, 1.0m intervals" },
        { name: "Feature Coding", value: "Full CAD coding for utilities and trees" },
        { name: "Data Format", value: "AutoCAD Civil 3D DWG, DXF, LandXML" },
        { name: "Elevation Reference", value: "CORS Reference / MSL (Mean Sea Level)" },
      ],
    },
    {
      id: "del-03",
      title: "As-Built Verification Surveys",
      desc: "Compares actual constructed positions (walls, columns, grids, pipelines) against architectural design blueprints to ensure layout and tolerance compliance.",
      image: "/assets/image/photogrammetry.png",
      tags: ["PDF Report", "CAD Deviations"],
      hudCode: "COLUMNS: 32 // MAX_DEV: 8mm // STATUS: COMPLIANT",
      specs: [
        { name: "Verification Type", value: "Concrete columns verticality, floor levels" },
        { name: "Tolerance Auditing", value: "Structural misalignment reporting" },
        { name: "Reports Format", value: "Excel coordinate lists, color-coded CAD files" },
        { name: "Turnaround Time", value: "Inspected and reported in 24 hours" },
      ],
    },
    {
      id: "del-04",
      title: "Coordinate Staking Report",
      desc: "Detailed report lists showing targeted stakes vs actual coordinates and structural deviations, validating layout compliance on site.",
      image: "/assets/image/bathymetry.png",
      tags: ["Excel CSV", "PDF Report"],
      hudCode: "POINTS: 120 // STATUS: VALIDATED // ERROR: <10mm",
      specs: [
        { name: "Staking Method", value: "Total Station reflectorless / GNSS rover" },
        { name: "Validation", value: "Double-tie measurements verified" },
        { name: "Output Reports", value: "Excel CSV coordinate table, PDF layout" },
        { name: "Accuracy Level", value: "Engineering layout grade" },
      ],
    },
  ];

  const useCases = [
    {
      sector: "Land Cadastral",
      use: "Defining legal property boundaries for registration, disputes resolution, and land subdivisions.",
    },
    {
      sector: "Foundation Layout",
      use: "Staking out concrete piles, structural grids, and columns coordinates on construction sites.",
    },
    {
      sector: "Road Construction",
      use: "Staking alignment centerline profiles, cross-sections, and grading slope markers.",
    },
    {
      sector: "Grading Progress",
      use: "Computing soil volume changes between survey intervals during land clearance and site grading.",
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
            <span className="text-xs text-gray-400 light:text-slate-500">Terrestrial Mapping</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: TERRESTRIAL_SURVEY // STATUS: NOMINAL</span>
            <span>GRID: CORS_BIG // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Geodetic Land Surveying
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Terrestrial Mapping <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                & Geodetic Survey Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              Delivering millimeter-level geodetic control and site layout coordinates using reflectorless electronic total stations and multi-constellation RTK GNSS receivers.
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
                Traditional & Modern Geodetic Surveys
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Terrestrial mapping is the foundation of civil construction and legal zoning audits. By deploying electronic total stations to measure precise optical vectors, and geodetic RTK GPS rovers to resolve multi-constellation satellites, we anchor physical boundaries with georeferenced benchmarks.
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  All benchmarks are referenced directly to the CORS BIG (Badan Informasi Geospasial) satellite stations link, ensuring compliance with legalPertanahan (BPN) standards.
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
              Geodetic Survey Instruments
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate geodetic total stations and visual tilt-compensated base/rover receiver stations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Total Station Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Efix TS Total Station</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our high-precision optical mapping total station. Offers reflectorless distance measurements up to 1000 meters and 2 arc-seconds angular accuracy, making it ideal for column grids layout and civil engineering audits.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Angular Accuracy</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">2 Arc Seconds</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Measuring Mode</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Reflectorless laser alignment</span>
                </div>
              </div>
            </div>

            {/* GNSS Receivers Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Efix F7+ / F8 GNSS Receivers</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Multi-constellation RTK base and rover sets. Equipped with IMU tilt compensation (up to 60° tilt) and camera AR visual staking (F8 model), enabling fast and precise topographic coordination in rugged environments.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">RTK Precision</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">H: 8mm / V: 15mm</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Tilt Sensor</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">IMU active tilt survey</span>
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
              Terrestrial Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami menyerahkan laporan koordinat, peta kontur AutoCAD, dan as-built drawing standar konstruksi.
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
              Terrestrial Industry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying optical and geodetic measurements to support construction, subdivisions, and civil setups.
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
            Ready to Layout Your Site Coordinates?
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
