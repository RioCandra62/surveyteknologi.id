"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Eye, Layers, Compass, Maximize2 } from "lucide-react";

export default function SpatialCameraSolutionPage() {
  const specs = [
    { label: "Mesh Resolution", value: "Photorealistic 3D Mesh" },
    { label: "Panoramic View", value: "360° Field of View (FOV)" },
    { label: "Processing Speed", value: "Fast Cloud Processing" },
    { label: "Primary Application", value: "Digital Twins & BIM Audits" },
  ];

  const conceptualPillars = [
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "HDR Panoramic Stitching",
      desc: "Multi-lens arrays capture high-dynamic-range photos, stitching them into seamless 360° panoramic spheres with true color representation.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Photogrammetric Mesh Link",
      desc: "Aligns structural geometries across visual data to compile dense 3D meshes of room interiors and asset details.",
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "Interactive Spatial Reviews",
      desc: "Compiles georeferenced visual walkthroughs, allowing stakeholders to inspect facility dimensions remotely via standard web browsers.",
    },
  ];

  const deliverables = [
    {
      id: "del-01",
      title: "3D Virtual Walkthrough",
      desc: "Interactive spatial walk paths, allowing users to visit any scanned indoor environment online. Crucial for real estate visual tours and remote property scoping.",
      image: "/assets/image/portalcam/walkthrough.jpeg",
      tags: ["Web-Link", "HTML5 Layout"],
      hudCode: "WALK_NODES: 42 // RESOLUTION: 8K // COMPAT: MOBILE",
      specs: [
        { name: "Visual Quality", value: "High-definition 8K panoramas" },
        { name: "Scoping Link", value: "Interactive waypoint navigation" },
        { name: "Platform Support", value: "Desktop, Tablet, and Mobile Web" },
        { name: "Tagging", value: "Add notes on vertical structural elements" },
      ],
    },
    {
      id: "del-02",
      title: "Photorealistic 3D Mesh",
      desc: "High-density 3D textured mesh capturing shapes and dimensions of assets. Plugs directly into BIM architectures and CAD twins.",
      image: "/assets/image/portalcam/detail.jpeg",
      tags: ["OBJ / FBX", "3D Tiles"],
      hudCode: "POLY_COUNT: 8.4M // FORMAT: OBJ/FBX // TEXTURE: 4K",
      specs: [
        { name: "Texture Quality", value: "Photorealistic 4K/8K visual maps" },
        { name: "Mesh Density", value: "High-resolution triangulated surface" },
        { name: "Industry Formats", value: "OBJ, FBX, 3D Tiles, Cesium link" },
        { name: "Compatibility", value: "Autodesk Revit, Unity, Unreal Engine" },
      ],
    },
    {
      id: "del-03",
      title: "Visual Asset Inventory",
      desc: "Detailed layouts and lists identifying structural assets, structural columns, electrical conduits, and facilities layouts, mapped directly from 3D models.",
      image: "/assets/image/portalcam/visual_asset.jpeg",
      tags: ["PDF Report", "CSV Inventory"],
      hudCode: "ITEMS: 120+ // TARGET: AUDIT // REF: DESIGN_GRID",
      specs: [
        { name: "Feature Mapping", value: "Identifies HVAC outlets, columns, panels" },
        { name: "Database Format", value: "Excel CSV, PDF reports, coordinate files" },
        { name: "Accuracy Class", value: "Centimeter-level location estimates" },
        { name: "Processing", value: "Manual audit and AI validation" },
      ],
    },
  ];

  const useCases = [
    {
      sector: "Real Estate Scoping",
      use: "Virtual walk paths and floorplans of properties and luxury retail showrooms for online listings.",
    },
    {
      sector: "BIM & Reconstruction",
      use: "Auditing interior layouts to model structural walls, columns, and verify conduits distribution.",
    },
    {
      sector: "Factory Inspections",
      use: "Visual asset directories allowing plant managers to inspect factory layouts and monitor setups remotely.",
    },
    {
      sector: "Exhibition Centers",
      use: "Virtual interactive guides for museums, convention centers, and digital gallery walkthroughs.",
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
            <span className="text-xs text-gray-400 light:text-slate-500">Spatial Camera</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: SPATIAL_ACQ // STATUS: NOMINAL</span>
            <span>GRID: CLOUD_LINK // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Digital Twin Capture
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Spatial Camera <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                & Digital Twin Mapping
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              Capturing detailed interior spaces with high-end panoramic camera platforms, compiling photorealistic digital twins, 3D meshes, and interactive walkthrough links.
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
                Stitching Reality into 3D Models
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Spatial camera mapping utilizes multi-sensor visual systems to document interior environments. By capturing high-definition HDR panoramic spheres across multiple target points, our software constructs a georeferenced coordinate grid. Photogrammetry adjustments process these visual relationships, compiling detailed 3D models and digital twins.
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  Ideal for real estate listings, asset management, and construction audits, this visual solution links remote stakeholders to physical sites instantly.
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
              Spatial Camera Fleet
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate specialized, high-resolution panoramic scanning cameras to document interior environments.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            
            {/* Camera Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm text-center items-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">XGrids Portal Cam</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our primary high-resolution panoramic mapping camera. Designed for quick room documentation, it features dual panoramic lens systems and integrated laser triangulation, compiling digital twins directly to cloud processing nodes.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-8 text-xs w-full">
                <div>
                  <span className="text-gray-500 block">Capture FOV</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">360° Spherical Panoramic</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Model Export</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">OBJ Mesh / 3D Tiles</span>
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
              Spatial Camera Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data kamera spasial menjadi virtual tour interaktif dan model 3D berformat standar industri.
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

      {/* Interactive 3D Asset Preview Section */}
      <section className="py-24 bg-[#05080e] light:bg-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Interactive 3D Demo
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Explore Our 3DGS Asset Live
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Through the link shared by LCC Cloud, you will enter a new three-dimensional world and explore the ultra-high-precision 3DGS model. Open the 'Web viewer' to browse and interact easily. Experience it now!
            </p>
          </div>

          {/* Iframe Viewport Wrapper */}
          <div className="relative w-full aspect-video md:max-h-[600px] rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl light:shadow-md bg-[#02050a]">
            {/* Tech bracket corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-cyan/60 z-20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-cyan/60 z-20 pointer-events-none" />
            
            {/* Real 3D Iframe */}
            <iframe
              src="https://lcc-viewer.xgrids.com/pub/26ce53ab-c8df-4ca7-8e1b-2563838dc548"
              className="w-full h-full border-none relative z-10"
              allow="xr-spatial-tracking; autoplay; fullscreen"
              title="LCC 3DGS Web Viewer"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://lcc-viewer.xgrids.com/pub/26ce53ab-c8df-4ca7-8e1b-2563838dc548"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-cyan text-white hover:bg-brand-cyan/90 font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,224,0.25)] text-xs uppercase tracking-wider"
            >
              Open Web Viewer in Fullscreen <ArrowUpRight className="h-4 w-4" />
            </a>
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
              Spatial Camera Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying photorealistic digital twins to facilitate facility inspections and listings.
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
            Ready to Capture Your Facility Twin?
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
