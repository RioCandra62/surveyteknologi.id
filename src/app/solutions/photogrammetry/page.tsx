"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Camera, Layers, Focus, Maximize2 } from "lucide-react";

export default function PhotogrammetrySolutionPage() {
  const specs = [
    { label: "Resolution (GSD)", value: "Sub-1.0 cm / pixel" },
    { label: "Camera Sensor", value: "45 MP Full-Frame" },
    { label: "Horizontal Accuracy", value: "1.5 cm RMSE" },
    { label: "Vertical Accuracy", value: "3.0 cm RMSE" },
  ];

  const conceptualPillars = [
    {
      icon: <Camera className="h-6 w-6 text-brand-cyan" />,
      title: "High-Overlap Image Acquisition",
      desc: "Missions are planned using automated flight control software, capturing continuous nadir or oblique frames with 80% frontal and 75% lateral overlaps to prevent visual gaps.",
    },
    {
      icon: <Focus className="h-6 w-6 text-brand-cyan" />,
      title: "Ground Control Points (GCPs)",
      desc: "High-contrast visual targets are surveyed on the ground using geodetic RTK GNSS receivers. These coordinates anchor the photogrammetric pixel grids to absolute global coordinates.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Structure-from-Motion (SfM)",
      desc: "Photogrammetry software matches hundreds of common keypoints across overlapping photos. Triangulation calculations reconstruct the exact camera geometry and 3D shapes.",
    },
  ];

  const deliverables = [
    {
      id: "del-01",
      title: "2D High-Resolution Orthomosaic Map",
      desc: "A georeferenced, orthorectified two-dimensional visual map compiled from thousands of high-overlap aerial photographs. Corrects lens distortions and topographic reliefs to yield absolute mapping precision at sub-centimeter resolutions.",
      image: "/assets/image/photogrammetry/ortho.png",
      tags: ["GeoTIFF / TIF", "GIS-Ready"],
      hudCode: "GSD: 0.6 cm/px // FILE: .TIF // PROJ: UTM_50S",
      specs: [
        { name: "Ground Resolution", value: "Sub-1 cm / pixel (GSD)" },
        { name: "Coordinate System", value: "UTM / WGS 84 (Georeferenced)" },
        { name: "Precision Level", value: "± 2 cm Horizontal Accuracy" },
        { name: "Software Formats", value: "GeoTIFF, KML/KMZ, ECW" },
      ],
    },
    {
      id: "del-02",
      title: "Digital Elevation Models (DEM/DTM/DSM)",
      desc: "Digital elevation representations detailing terrain profiles and contours. Post-processing software filters out canopy and man-made structures to construct bare-earth models (DTM) or keeps them to analyze top-surface profiles (DSM) for hydrology and drainage planning.",
      image: "/assets/image/bathymetry.png",
      tags: ["DEM Raster", "Contour Ready"],
      hudCode: "GRID: 1m x 1m // CONTOUR: 0.5m // VERT_ACC: 3cm",
      specs: [
        { name: "Contour Interval", value: "0.25m to 1.0m (CAD Ready)" },
        { name: "Elevation Model", value: "DSM (Top Surface) & DTM (Bare Earth)" },
        { name: "Data Format", value: "GeoTIFF Raster, XYZ ASCII, DWG/DXF" },
        { name: "Applications", value: "Civil Engineering, Cut & Fill, Drainage" },
      ],
    },
    {
      id: "del-03",
      title: "3D Textured Mesh Models",
      desc: "High-fidelity photorealistic 3D mesh models detailing terrain conditions and vertical structural features. Ideal for interactive spatial visual reviews, mine site digital twins, and BIM (Building Information Modeling) pipelines.",
      image: "/assets/image/photogrammetry.png",
      tags: ["OBJ / FBX", "3D Tiles"],
      hudCode: "POLY_COUNT: 12.8M // TEXTURE: 8K // COMPAT: CAD/BIM",
      specs: [
        { name: "Visual Quality", value: "Photorealistic 8K Textures" },
        { name: "Polygon Density", value: "High-Density Triangulated Mesh" },
        { name: "Industry Standard", value: "OBJ, FBX, 3D Tiles, Cesium" },
        { name: "Applications", value: "Digital Twins, Virtual Walkthroughs" },
      ],
    },
    {
      id: "del-04",
      title: "Volumetric Stockpile Calculations",
      desc: "High-precision bulk material stockpile volume computations (coal, ore, aggregates, earthworks) measured directly from 3D textured mesh surfaces. Delivers absolute inventory metrics and volumetric audits within hours.",
      image: "/assets/image/bathymetry.png",
      tags: ["CSV / PDF", "Volumetrics"],
      hudCode: "VOL_ACCURACY: >98.5% // DATUM: BASEPLANE // COMP: 3D",
      specs: [
        { name: "Volume Accuracy", value: ">98.5% Volumetric Precision" },
        { name: "Calculation Method", value: "Base-plane Triangulated Volume" },
        { name: "Output Reports", value: "PDF Report, CSV coordinates, Cross-sections" },
        { name: "Turnaround Time", value: "Fast post-processing (Sub-24 hours)" },
      ],
    },
  ];

  const useCases = [
    {
      sector: "Open-Cut Mining",
      use: "Stockpile volume calculations, boundaries layout, and mapping of quarry faces for structural geology reviews.",
    },
    {
      sector: "Precision Agriculture",
      use: "Tree crop counts, crop health mapping using NDVI sensors, and plantation boundary management.",
    },
    {
      sector: "Civil & Construction",
      use: "Land grading layout, road design reviews, volume calculations of cut-and-fill soil mass.",
    },
    {
      sector: "Cadastral & Land Planning",
      use: "Detailed visual boundaries layout for land ownership validation and cadastral mapping databases.",
    },
  ];

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Telemetry Header/Hero */}
      <section className="relative py-24 border-b border-white/5 light:border-slate-200 overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
        
        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Navigation Back */}
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
            <span className="text-xs text-gray-400 light:text-slate-500">Photogrammetry</span>
          </div>

          {/* Telemetry HUD display line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: PHOTO_ACQUISITION // STATUS: NOMINAL</span>
            <span>HDG: 090° E // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Optical Remote Sensing
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Drone Photogrammetry <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                & Orthomosaic Mapping
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              Survey Teknologi Indonesia captures sub-centimeter resolution aerial photos and converts them into georeferenced orthomosaics, digital elevation models, and high-fidelity 3D meshes for civil engineering and mining.
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
            
            {/* Description (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                Technology Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                How Drone Photogrammetry Works
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Photogrammetry is the science of extracting geometric measurements from overlapping photographs. By flying a drone along structured grid flight lines and capturing hundreds of high-resolution visual frames, we compile datasets where each pixel is georeferenced. Using triangulation calculations and camera calibration parameters, photogrammetry software reconstructs detailed 3D models.
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  Unlike LiDAR which maps elevations beneath vegetation, photogrammetry captures color-realistic visual maps (orthomosaics) and textured surfaces, rendering highly detailed visible features.
                </p>
              </div>
            </div>

            {/* Concept cards (Right) */}
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

      {/* Overlap & Ground Sampling Distance (GSD) highlights */}
      <section className="py-20 bg-gradient-to-r from-brand-blue/10 via-[#070b12] light:via-slate-100/50 to-brand-blue/10 border-y border-white/5 light:border-slate-200 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Graphic Representation (Left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] p-6 rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white backdrop-blur-sm shadow-2xl light:shadow-sm">
                {/* Tech brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-cyan/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-cyan/40" />
                
                <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">
                  GSD & FLIGHT SPECIFICATIONS
                </h4>

                <div className="space-y-4">
                  {/* Altitude 50m */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#10b981]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">ALTITUDE // 50m AGL</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">Ground Resolution (GSD)</p>
                    </div>
                    <span className="text-[10px] bg-[#10b981]/15 text-[#10b981] px-2 py-0.5 rounded font-mono">0.6 cm/px</span>
                  </div>

                  {/* Altitude 100m */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#3b82f6]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">ALTITUDE // 100m AGL</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">Ground Resolution (GSD)</p>
                    </div>
                    <span className="text-[10px] bg-[#3b82f6]/15 text-[#3b82f6] px-2 py-0.5 rounded font-mono">1.2 cm/px</span>
                  </div>

                  {/* Overlap */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-brand-cyan">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">IMAGE OVERLAP RATES</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">Frontal / Side overlap ratios</p>
                    </div>
                    <span className="text-[10px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded font-mono">80% / 75%</span>
                  </div>
                </div>

                <p className="mt-6 text-[10px] text-gray-500 text-center leading-relaxed">
                  Higher overlaps and lower altitudes yield ultra-dense pixel maps with sub-centimeter GSD resolutions.
                </p>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                Core Competency
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                Resolving Features with Sub-Centimeter GSD
              </h3>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Ground Sampling Distance (GSD) defines the physical size of one image pixel on the ground. A GSD of 1 cm/pixel means that one pixel in our map represents 1 square centimeter of actual space. This high resolution lets us capture minute cracking on asphalt, structural features in mining, and pipeline layouts that satellite imagery cannot resolve.
              </p>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                By pairing high-resolution full-frame cameras with geodetic RTK GPS systems, we coordinate each image shutter release. This provides highly accurate geospatial databases that integrate into engineering CAD designs and GIS layers.
              </p>
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
              Enterprise Mapping Fleet
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate specialized, high-resolution enterprise drones equipped with mechanical global shutter cameras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Drone Platform Card 1 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 4 Enterprise</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our primary compact enterprise mapping drone. Designed for rapid deployment, it features a built-in mechanical shutter camera to completely prevent motion distortion when flying at high speeds. Equipped with an RTK module, it links to geodetic ground stations for centimeter-level coordinate accuracy.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Flight Time</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 45 minutes</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Camera Shutter</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Mechanical Global Shutter</span>
                </div>
              </div>
            </div>

            {/* Drone Platform Card 2 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 350 / 400 RTK + Zenmuse P1</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our heavy-lift workhorse setup for large-scale operations. The Zenmuse P1 payload integrates a 45-megapixel full-frame sensor on a 3-axis stabilized gimbal. Supporting multiple lens profiles (24mm, 35mm, 50mm), it delivers ultra-dense pixel maps for complex topographies.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Camera Sensor</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">45 MP Full-Frame CMOS</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Smart Oblique Capture</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Supported (Multi-Angle)</span>
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
              Photogrammetry Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data foto udara tumpang-tindih (overlap) tinggi menjadi produk pemetaan spasial yang detail, presisi, dan siap diintegrasikan.
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
                  {/* Left Side: Image Visual with Tech HUD styling */}
                  <div className="w-full lg:w-1/2">
                    <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl light:shadow-md">
                      
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 light:from-white/70 via-transparent to-transparent pointer-events-none" />

                      {/* Tech Bracket HUD overlay */}
                      <div className="absolute inset-3 border border-white/5 light:border-slate-900/5 pointer-events-none" />
                      <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-brand-cyan/60 pointer-events-none" />
                      <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-brand-cyan/60 pointer-events-none" />
                      
                      {/* Floating tag pills */}
                      <div className="absolute top-5 right-5 flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="bg-dark-bg/85 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-bold tracking-wider text-gray-300 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* HUD Metadata Spec Label */}
                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center bg-[#090d16]/80 backdrop-blur-sm border border-white/5 px-3 py-2 rounded-lg text-[9px] font-mono text-gray-400">
                        <span>{item.hudCode}</span>
                        <span className="text-brand-cyan font-bold">READY</span>
                      </div>

                    </div>
                  </div>

                  {/* Right Side: Detailed Descriptions & Param Grid */}
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

                    {/* Specification list */}
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

                    {/* Button link */}
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
              Photogrammetry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying high-resolution drone mapping to solve critical inspection and volume computation tasks.
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

      {/* Call to Action Banner */}
      <section className="py-20 relative overflow-hidden border-t border-white/5 light:border-slate-200 transition-colors">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        
        {/* Glow */}
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
            Project Planning
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
            Ready to Map Your Project Site?
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
