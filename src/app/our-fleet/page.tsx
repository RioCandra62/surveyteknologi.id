"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Database, Settings, Shield, HardDrive, Filter, ArrowUpRight, CheckCircle2, Search, Zap } from "lucide-react";

interface FleetItem {
  id: string;
  name: string;
  category: "drone" | "gps" | "payload" | "slam" | "totalstation" | "bathymetry";
  categoryLabel: string;
  filename: string;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
}

export default function OurFleetPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { value: "all", label: "All Fleet" },
    { value: "drone", label: "Drones (UAV)" },
    { value: "gps", label: "GPS & GNSS" },
    { value: "payload", label: "Sensors & Payloads" },
    { value: "slam", label: "SLAM Scanners" },
    { value: "totalstation", label: "Total Stations" },
    { value: "bathymetry", label: "Bathymetry" },
  ];

  const fleetItems: FleetItem[] = [
    // Drones
    {
      id: "fleet-01",
      name: "DJI Matrice 4 Enterprise",
      category: "drone",
      categoryLabel: "Drones (UAV)",
      filename: "matrice_4e.png",
      image: "https://images.squarespace-cdn.com/content/v1/56833a8d57eb8d0dbae7fd43/1736836239407-QFBIJQQE4FWXTOBDVEU5/M4E+Side+Top+web.png",
      specs: [
        { label: "Flight Time", value: "Up to 45 mins" },
        { label: "Camera Shutter", value: "Mechanical 20MP" },
        { label: "RTK Positioning", value: "Built-in / GNSS" },
        { label: "Weight Class", value: "Lightweight Mapping" },
      ],
      description: "Compact drone platform for rapid aerial surveys, equipped with a mechanical global shutter to eliminate motion distortions at high cruise speeds.",
    },
    {
      id: "fleet-02",
      name: "DJI Matrice 4 Thermal",
      category: "drone",
      categoryLabel: "Drones (UAV)",
      filename: "matrice_4t.png",
      image: "https://images.squarespace-cdn.com/content/v1/56833a8d57eb8d0dbae7fd43/1736694238586-4V3G4VVSZK791ML8HDT5/M4T+Side+Top+da.png",
      specs: [
        { label: "Flight Time", value: "Up to 45 mins" },
        { label: "Thermal Sensor", value: "640x512 Radiometric" },
        { label: "Zoom Range", value: "56x Hybrid Zoom" },
        { label: "Deployment", value: "Inspections / Search" },
      ],
      description: "Equipped with thermal and high-zoom sensors, this enterprise platform is specialized for asset inspections, solar farm grading, and industrial monitoring.",
    },
    {
      id: "fleet-03",
      name: "DJI Matrice 400 RTK",
      category: "drone",
      categoryLabel: "Drones (UAV)",
      filename: "matrice_400.png",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKNESa3LaY6kzvKtkkFXnj_ZoX3NRZKUeWhe-HyhsZQ&s=10",
      specs: [
        { label: "Flight Time", value: "Up to 60 mins" },
        { label: "IP Rating", value: "IP56 Weatherproof" },
        { label: "Payload Capacity", value: "Up to 6 kg" },
        { label: "Lidar Obstacle Sensing", value: "Omnidirectional" },
      ],
      description: "Our next-gen heavy-lift workhorse mapping drone. Delivers extended air times and high wind resistance for large forestry and pipeline mapping runs.",
    },
    {
      id: "fleet-04",
      name: "DJI Matrice 350 RTK",
      category: "drone",
      categoryLabel: "Drones (UAV)",
      filename: "matrice_350.png",
      image: "https://halorobotics.com/wp-content/uploads/2024/03/M350RTK-H20T-1.png",
      specs: [
        { label: "Flight Time", value: "Up to 45 mins" },
        { label: "IP Rating", value: "IP55 Weatherproof" },
        { label: "Max Payloads", value: "3 Payloads concurrently" },
        { label: "Data Transmission", value: "O3 Enterprise" },
      ],
      description: "Flagship industrial UAV platform supporting multi-sensor hot-swaps. Extremely resilient to weather and electromagnetic disturbances.",
    },
    // GPS & GNSS
    {
      id: "fleet-05",
      name: "EFIX F7+ GNSS Receiver",
      category: "gps",
      categoryLabel: "GPS & GNSS",
      filename: "efix_f7.png",
      image: "https://ueeshop.ly200-cdn.com/u_file/UPBH/UPBH030/2403/products/11/f5a3253dfe.png",
      specs: [
        { label: "Channels", value: "1408 Channels" },
        { label: "Tilt Survey", value: "IMU Compensation (60°)" },
        { label: "RTK Accuracy", value: "H: 8mm / V: 15mm" },
        { label: "Battery Life", value: "Up to 15 hours" },
      ],
      description: "Heavy-duty geodetic GNSS RTK base and rover system. Features tilt-compensation for mapping coordinate locations without needing a leveled pole.",
    },
    {
      id: "fleet-06",
      name: "EFIX F8 GNSS Receiver",
      category: "gps",
      categoryLabel: "GPS & GNSS",
      filename: "efix_f8.png",
      image: "https://ueeshop.ly200-cdn.com/u_file/UPBH/UPBH030/2601/21/products/f44dc6c692.png?x-oss-process=image/quality,q_100",
      specs: [
        { label: "Visual Staking", value: "Integrated AR Cameras" },
        { label: "Tilt Survey", value: "IMU Tilt Compensation" },
        { label: "Weight", value: "Superlight 0.75 kg" },
        { label: "Constellations", value: "Full GPS / GLONASS / BeiDou" },
      ],
      description: "Next-gen receiver featuring dual-camera AR visual overlay. Allows surveyors to locate coordinate staking marks graphically in real-time.",
    },
    // Payloads
    {
      id: "fleet-07",
      name: "DJI Zenmuse L3 LiDAR",
      category: "payload",
      categoryLabel: "Sensors & Payloads",
      filename: "zenmuse_l3.png",
      image: "https://indosurta.co.id/wp-content/uploads/2026/07/sensor-payload-dji-zenmuse-L3.webp",
      specs: [
        { label: "Sensor Type", value: "High-density Laser Scanner" },
        { label: "Vertical Accuracy", value: "3 cm RMSE" },
        { label: "Target Range", value: "300m @ 10% Reflectivity" },
        { label: "Returns Supported", value: "Up to 5 returns" },
      ],
      description: "High-accuracy airborne laser scanner incorporating a high-grade IMU and mapping sensor for forest canopy filtering and bare-earth elevations.",
    },
    {
      id: "fleet-08",
      name: "DJI Zenmuse L2 LiDAR",
      category: "payload",
      categoryLabel: "Sensors & Payloads",
      filename: "zenmuse_l2.png",
      image: "https://shop.quadrocopter.com/assets/images/b04c4847e982b2d28973794021bd7543origin.jpg",
      specs: [
        { label: "Sensor Type", value: "Laser Scanner payload" },
        { label: "Vertical Accuracy", value: "5 cm RMSE" },
        { label: "Visual Camera", value: "20 MP 4/3 CMOS" },
        { label: "Returns Supported", value: "Up to 5 returns" },
      ],
      description: "State-of-the-art lidar payload combining scanner unit, IMU calibrator, and camera, providing centimeter-level engineering point clouds.",
    },
    {
      id: "fleet-09",
      name: "DJI Zenmuse P1 Payload",
      category: "payload",
      categoryLabel: "Sensors & Payloads",
      filename: "zenmuse_p1.png",
      image: "https://admin.focusnusantara.com/media/catalog/product/cache/6ed58d7bcc92d46b5b7dc5fc5ce62a7b/images/detailed/83/VDR37015_DJI_Zenmuse_P1_-web_D1.png",
      specs: [
        { label: "Sensor", value: "45 MP Full-Frame CMOS" },
        { label: "Shutter", value: "Mechanical Global Shutter" },
        { label: "Gimbal Stabilization", value: "3-axis Stabilized" },
        { label: "Lenses Available", value: "24mm / 35mm / 50mm" },
      ],
      description: "High-resolution full-frame photogrammetry camera, built specifically for orthomosaic mapping, digital twins, and cadastral datasets.",
    },
    // SLAM
    {
      id: "fleet-10",
      name: "CHCNAV RS10 Handheld SLAM",
      category: "slam",
      categoryLabel: "SLAM Scanners",
      filename: "chcnav_rs10.png",
      image: "https://geospatial.chcnav.com/dam/jcr:f1906a22-19ed-40fe-985e-0280f5ded1d0/handheld-laser-scanners-chcnav-rs10.png",
      specs: [
        { label: "Scanning Range", value: "Up to 120m" },
        { label: "Positioning Link", value: "Integrated RTK GNSS" },
        { label: "Optical Cameras", value: "Dual panoramic system" },
        { label: "Accuracy", value: "1-2 cm (Local SLAM)" },
      ],
      description: "Revolutionary handheld SLAM scanner. Integrates visual cameras, laser profiling, and RTK GNSS for surveying GPS-deprived indoor or underground spaces.",
    },
    {
      id: "fleet-11",
      name: "Share S10 SLAM Scanner",
      category: "slam",
      categoryLabel: "SLAM Scanners",
      filename: "share_s10.png",
      image: "https://www.poi.com.hk/cdn/shop/files/SHARESLAMS10.jpg?v=1720763616",
      specs: [
        { label: "Scanning Speed", value: "650,000 pts/sec" },
        { label: "Range Class", value: "80m Range" },
        { label: "Handling", value: "Ultra-compact handheld" },
        { label: "Processing", value: "Real-time edge SLAM" },
      ],
      description: "Portable 3D SLAM mapping scanner, ideal for rapid warehouse measurements, structural surveys, and volume stockpiles computations.",
    },
    {
      id: "fleet-12",
      name: "XGrids Lidar Scanner / Portal Cam",
      category: "slam",
      categoryLabel: "SLAM Scanners",
      filename: "xgrids_portal.png",
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/81794270/5511893020.webp",
      specs: [
        { label: "Mesh Quality", value: "Photorealistic 3D Mesh" },
        { label: "Laser Class", value: "Eye-safe LiDAR scan" },
        { label: "Display Link", value: "Live Mobile Viewport" },
        { label: "Applications", value: "Digital Twins / BIM" },
      ],
      description: "Handheld spatial mapping tool generating realistic 3D models. Transforms indoor locations into textured meshes with automated boundary lines.",
    },
    // Total Station
    {
      id: "fleet-13",
      name: "EFIX Total Station",
      category: "totalstation",
      categoryLabel: "Total Stations",
      filename: "efix_ts.png",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/5/306325129/GD/UU/UF/77731760/total-station-efix-etsr4.jpeg",
      specs: [
        { label: "Angular Accuracy", value: "2 Arc Seconds" },
        { label: "Reflectorless Range", value: "Up to 1000m" },
        { label: "Prism Range", value: "Up to 5000m" },
        { label: "Display Panel", value: "Dual Graphic Keyboards" },
      ],
      description: "Reflectorless electronic optical total station for absolute boundary setups, civil layouts, and engineering validation grids.",
    },
    // Bathymetry
    {
      id: "fleet-14",
      name: "Satlab Hydroboat 990",
      category: "bathymetry",
      categoryLabel: "Bathymetry",
      filename: "echo_sounder_asv.png",
      image: "https://pusatdrone.com/wp-content/uploads/Satlab-HydroBoat-990-angled.webp",
      specs: [
        { label: "Measurement Class", value: "Bathymetric Sounding" },
        { label: "Transducer Freq.", value: "Dual Frequency (50/200 kHz)" },
        { label: "Target Platform", value: "ASV / Survey Vessel" },
        { label: "Depth Range", value: "0.3m to 150m" },
      ],
      description: "Precision echo sounder payload designed to measure sub-surface water topography. Plugs into autonomous surface survey vessels.",
    },
  ];

  const filteredItems = fleetItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Telemetry Header/Hero */}
      <section className="relative py-20 border-b border-white/5 light:border-slate-200 overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        
        {/* Cyan blur glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[150px] bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> Back to Home
            </Link>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-brand-cyan font-bold tracking-wider uppercase">Our Fleet</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Enterprise Fleet
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Our Survey Instruments <br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                & Mapping Fleet
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 light:text-slate-600 leading-relaxed font-light">
              We operate LiDAR sensor, geodetic GNSS sensors, high-payload heavy-lift drones, optical/thermal cameras, total stations, and hydrographic sonar instruments.
            </p>
          </div>

        </div>
      </section>

      {/* Fleet Catalog Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-white/5 light:border-slate-200 pb-8 mb-12">
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.value
                      ? "bg-brand-cyan border-brand-cyan text-white shadow-[0_0_15px_rgba(0,163,224,0.3)]"
                      : "border-white/5 light:border-slate-200 bg-white/5 light:bg-white text-gray-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-white px-4 py-3.5 pl-10 text-xs text-white light:text-slate-900 placeholder-gray-500 focus:border-brand-cyan focus:outline-none transition-colors"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

          </div>

          {/* Grid Layout */}
          {filteredItems.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-white/10 light:border-slate-200 rounded-2xl">
              <p className="text-gray-500">No equipment found matching the filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white p-6 shadow-xl hover:border-brand-cyan/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,163,224,0.03)]"
                >
                  {/* Top highlight line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Placeholder */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10 light:border-slate-200 bg-[#06090f] light:bg-slate-50 flex flex-col items-center justify-center p-4 text-center group/placeholder">
                    <Image
                      src={item.image}
                      fill
                      alt={item.name}
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  {/* Card Info */}
                  <div className="mt-6 flex-grow flex flex-col">
                    <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest block">
                      {item.categoryLabel}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors duration-300">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="mt-6 grid grid-cols-2 gap-3 p-3.5 rounded-xl border border-white/5 light:border-slate-100 bg-white/[0.01] light:bg-slate-50/50">
                      {item.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="text-[10px]">
                          <span className="text-gray-500 block uppercase tracking-wider text-[8px]">{spec.label}</span>
                          <span className="font-semibold text-white light:text-slate-800 mt-0.5 block">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer link */}
                    <div className="mt-6 pt-3.5 border-t border-white/5 light:border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="text-gray-500 font-mono text-[8px] flex items-center gap-1">
                        <Database className="h-2.5 w-2.5" /> ID: {item.id}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-cyan/80 cursor-pointer">
                        Get Scoping Details <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Corporate Technical Standard Specs Banner */}
      <section className="py-16 relative overflow-hidden border-t border-white/5 light:border-slate-200 bg-gradient-to-b from-transparent to-[#05080e] light:to-slate-100 transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <Settings className="h-8 w-8 text-brand-cyan mx-auto animate-spin-slow" />
          <h3 className="text-xl font-bold text-white light:text-slate-900">Technical Calibration & Standards</h3>
          <p className="text-xs sm:text-sm text-gray-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Semua peralatan dalam armada kami dikalibrasi secara rutin oleh laboratorium terakreditasi sebelum dan sesudah deployment proyek. Penggunaan sensor RTK GNSS dikalibrasi secara langsung terhadap stasiun referensi CORS BIG (Badan Informasi Geospasial) untuk kepatuhan absolut standar pemetaan nasional Indonesia.
          </p>
          <div className="pt-4 flex justify-center gap-6 text-[10px] text-gray-500 font-mono">
            <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-brand-cyan" /> ISO 9001:2015</span>
            <span className="flex items-center gap-1"><HardDrive className="h-3.5 w-3.5 text-brand-cyan" /> BIG CORS LINK</span>
          </div>
        </div>
      </section>

    </div>
  );
}
