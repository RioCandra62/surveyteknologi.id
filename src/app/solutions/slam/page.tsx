"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Scan, Layers, Compass, Zap } from "lucide-react";

export default function SlamSolutionPage() {
  const specs = [
    { label: "Local Accuracy", value: "1 - 2 cm (Survey Grade)" },
    { label: "Scanning Range", value: "Up to 120m Range" },
    { label: "Point Speed", value: "650,000 pts / sec" },
    { label: "Positioning Link", value: "RTK GNSS + Visual SLAM" },
  ];

  const conceptualPillars = [
    {
      icon: <Scan className="h-6 w-6 text-brand-cyan" />,
      title: "Simultaneous Mapping",
      desc: "LiDAR scanners measure surrounding shapes in real time while tracking motion profiles, compiling 3D coordinates without needing GPS signals.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Loop Closure Calibration",
      desc: "Re-visiting previously scanned positions automatically calibrates path drift parameters, adjusting coordinate data accuracy.",
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "RTK & Visual SLAM Integration",
      desc: "Combines visual frame tracking, IMU records, and geodetic RTK GPS targets to tie indoor point clouds to absolute coordinate positions.",
    },
  ];

  const deliverables = [
    {
      id: "del-01",
      title: "3D Georeferenced Point Cloud",
      desc: "Detailed 3D laser coordinates mapping indoor rooms, tunnels, or stockpile silos. Essential for digital twins and architectural reviews.",
      image: "/assets/image/photogrammetry.png",
      tags: ["LAS / LAZ Format", "XYZ Cloud"],
      hudCode: "POINTS: 650k/s // CLASSIFIED: TRUE // REF: UTM_50S",
      specs: [
        { name: "Density Class", value: "High-density local scans" },
        { name: "Local Precision", value: "1-2 cm relative accuracy" },
        { name: "Coverage Limits", value: "GPS-Denied indoor & underground" },
        { name: "File Formats", value: "LAS, E57, PLY, XYZ ASCII" },
      ],
    },
    {
      id: "del-02",
      title: "CAD Floor Plans & Layouts",
      desc: "CAD drawings mapping structural columns, walls, and boundary layouts, compiled directly from the SLAM scan coordinates.",
      image: "/assets/image/bathymetry.png",
      tags: ["CAD Drawing", "DXF / DWG Format"],
      hudCode: "SCALE: 1:100 // FILE: .DWG // TARGET: AS-BUILT",
      specs: [
        { name: "Drawing Formats", value: "AutoCAD DWG, DXF, PDF charts" },
        { name: "Feature Mapping", value: "Structural walls, columns, doors, stairs" },
        { name: "Visual Scale", value: "Detailed floor profiles and sections" },
        { name: "Turnaround Time", value: "Rapid drafting within 48 hours" },
      ],
    },
    {
      id: "del-03",
      title: "3D BIM Models (Revit)",
      desc: "Parametric 3D Revit models built directly from the SLAM scan coordinates. Speeds up building inspections and facility management.",
      image: "/assets/image/photogrammetry.png",
      tags: ["Revit RVT", "BIM-Ready"],
      hudCode: "BIM_LOD: LOD 300 // FILE: .RVT // MODEL: 3D",
      specs: [
        { name: "BIM Level", value: "Up to LOD 300 specifications" },
        { name: "Structural Classes", value: "Structural pillars, conduits, HVAC pipelines" },
        { name: "Compatibility", value: "Autodesk Revit, ArchiCAD, SketchUp" },
        { name: "Scan-to-BIM Check", value: "Quality checked against scan meshes" },
      ],
    },
    {
      id: "del-04",
      title: "Volumetric Stockpiles Survey (Sheds)",
      desc: " stock calculations of bulk materials (ore, minerals, grain) stored inside closed sheds and warehouses where drones cannot operate.",
      image: "/assets/image/bathymetry.png",
      tags: ["CSV / PDF", "Volumetrics"],
      hudCode: "STOCK_VOLUME: 15,200 m³ // ERROR: <1.5% // BAS",
      specs: [
        { name: "Volume Precision", value: ">98.5% Volumetric Precision" },
        { name: "Survey Environment", value: "Industrial closed sheds, storage silos" },
        { name: "Processing speed", value: "Volume reports compiled in 12 hours" },
        { name: "Output Reports", value: "PDF Report, 3D Mesh contour, Excel CSV" },
      ],
    },
  ];

  const useCases = [
    {
      sector: "Underground Mining",
      use: "Mapping tunnels, shafts, and stockpiles where GPS signals cannot penetrate.",
    },
    {
      sector: "Building BIM Audits",
      use: "Rapid scanning of indoor layouts to map structural dimensions and compile BIM databases.",
    },
    {
      sector: "Stockpile Sheds",
      use: "Measuring stockpile volumes inside industrial warehouses and silos.",
    },
    {
      sector: "Forestry Biomass",
      use: "Walking scans measuring tree trunk heights, branch volumes, and forestry inventories.",
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
            <span className="text-xs text-gray-400 light:text-slate-500">SLAM</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: SLAM_MAPPING // STATUS: NOMINAL</span>
            <span>LINK: RTK_BASE // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              GPS-Denied Mapping
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              SLAM Mapping Solutions <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                & Indoor 3D Laser Scanning
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              Mapping complex structures, tunnels, and warehouses using handheld SLAM scanners, generating centimeter-accurate 3D coordinate point clouds where GPS is unavailable.
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
                Indoor & Underground 3D Mapping
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Simultaneous Localization and Mapping (SLAM) is an algorithmic system that allows scanners to track their motion trajectory while building a 3D laser profile of the environment. Unlike standard aerial drones that depend on GPS, handheld SLAM instruments utilize laser sensors and IMUs to maintain positioning, mapping enclosed spaces with high local precision.
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  By matching overlapping features and implementing loop closure loops, SLAM algorithms filter out trajectory drift, delivering clean 3D coordinate grids.
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
              SLAM Handheld Fleet
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate visual SLAM scanners and real-time edge processing units to map complex environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Scanner Card 1 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">CHCNAV RS10 Handheld SLAM</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                A professional visual SLAM scanner. Features integrated RTK GNSS targets, dual panoramic visual cameras, and active laser rangefinders. Links global coordinates with indoor spatial scans seamlessly.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Scanning Speed</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">650,000 pts/sec</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Camera Resolution</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Panoramic Visuals</span>
                </div>
              </div>
            </div>

            {/* Scanner Card 2 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Share S10 SLAM Scanner</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                An ultra-portable handheld mapping system. Processes scans in real-time on local edge processors, enabling rapid stockpile calculations inside warehouses and structural inspections of vertical assets.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Scanning Range</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 80 meters</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Processing Link</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Edge SLAM processor</span>
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
              SLAM Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data point cloud SLAM menjadi model CAD dan BIM berformat standar industri.
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
              SLAM Industry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying handheld spatial laser scans to map coordinate locations in enclosed environments.
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
            Ready to Map Enclosed Sites?
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
