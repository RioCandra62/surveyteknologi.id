import Link from "next/link";
import Image from "next/image";
import { 
  Layers, 
  Cpu, 
  Navigation, 
  Eye, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight, 
  Compass, 
  Zap, 
  Settings, 
  ShieldAlert 
} from "lucide-react";

export default function LidarSolutionPage() {
  const conceptualPillars = [
    {
      icon: <Zap className="h-6 w-6 text-brand-cyan" />,
      title: "Active Laser Pulse",
      desc: "Emits up to 240,000 laser pulses per second, measuring the time-of-flight of reflected light to calculate distances with millimeter precision."
    },
    {
      icon: <Navigation className="h-6 w-6 text-brand-cyan" />,
      title: "RTK GNSS Positioning",
      desc: "Integrates with dual-antenna satellite receivers to establish georeferenced coordinates for every single data point in real-time."
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-cyan" />,
      title: "High-Accuracy IMU",
      desc: "A built-in Inertial Measurement Unit continuously monitors drone roll, pitch, and yaw, correcting laser vector directions during flight."
    }
  ];

  const specs = [
    { label: "System Accuracy", value: "Sub-5 cm Vertical" },
    { label: "Points Per Second", value: "240k (Single Return)" },
    { label: "Reflective Range", value: "250m @ 10% reflectivity" },
    { label: "Penetration Level", value: "Up to 5 Target Returns" },
  ];

  const deliverables = [
    {
      title: "3D Classified Point Cloud",
      desc: "A dense cloud of georeferenced 3D coordinates, color-coded and classified into ground, high vegetation, medium vegetation, and artificial structures.",
      image: "https://halorobotics.com/wp-content/uploads/2025/11/dji-zenmuse-l3-halo-robotics-1-915x686.jpg",
      tags: ["XYZ Coordinates", "LAS / LAZ Format"]
    },
    {
      title: "Digital Terrain Model (DTM)",
      desc: "A bare-earth elevation model showing the actual ground surface after software filters out all canopy, bushes, and man-made features.",
      image: "/assets/image/photogrammetry.png",
      tags: ["Bare-Earth", "GIS Raster / GeoTIFF"]
    },
    {
      title: "Digital Surface Model (DSM)",
      desc: "A model capturing the highest elevation points of all features on the surface, including canopy tops, power lines, and building roofs.",
      image: "/assets/image/bathymetry.png",
      tags: ["Top Surface", "Height Map"]
    },
    {
      title: "Topographic Contours",
      desc: "High-precision CAD-ready elevation contour lines generated at detailed intervals (e.g., 0.5m to 1m) for engineering design and drainage planning.",
      image: "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?q=80&w=2143&auto=format&fit=crop",
      tags: ["CAD Contours", "DXF / DWG Format"]
    }
  ];

  const useCases = [
    { sector: "Mining & Volumetrics", use: "Stockpile volume estimation, structural slope stability monitoring, and rapid pit excavation mapping." },
    { sector: "Infrastructure & Roads", use: "Corridor mapping for roads, railways, and bridges, providing structural cross-sections and terrain profiles." },
    { sector: "Forestry & Carbon", use: "Biomass estimation, canopy height metrics, forest inventory tracking, and environmental monitoring." },
    { sector: "Power Line Inspection", use: "Clearance analysis between power conductors and surrounding vegetation to identify immediate hazards." }
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
            <span className="text-xs text-gray-400 light:text-slate-500">LiDAR</span>
          </div>

          {/* Telemetry HUD display line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: ACQUISITION_STAGE // SENSOR_LINK: STANDBY</span>
            <span>HDG: 000° N // LAT: -6.2088 // LNG: 106.8456</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              LiDAR Remote Sensing
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Airborne LiDAR Survey <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                & Mapping Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              Survey Teknologi Indonesia delivers survey-grade, actionable geospatial datasets using drone-mounted LiDAR sensors, mapping dense canopies and bare-earth terrain models with high efficiency.
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
                How Drone LiDAR Works
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                LiDAR (Light Detection and Ranging) is an active remote sensing technology that projects rapid laser pulses toward the ground. By measuring the precise return times of these pulses, combined with GNSS (GPS) coordinate data and Inertial Measurement Unit (IMU) pitch and roll calculations, we generate high-density, centimeter-accurate 3D maps of both the ground and surface assets.
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  Unlike traditional photogrammetry, LiDAR does not rely on visual matching or daylight, meaning we can scan shadows, forested canopies, and narrow vertical assets with unmatched reliability.
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

      {/* Canopy Penetration Highlights */}
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
                  CANOPY RETURN METRICS
                </h4>

                <div className="space-y-4">
                  {/* Return 1 */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#10b981]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">RETURN #1 // 0.00μs</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">Top of Tree Canopy</p>
                    </div>
                    <span className="text-[10px] bg-[#10b981]/15 text-[#10b981] px-2 py-0.5 rounded font-mono">100%</span>
                  </div>

                  {/* Return 2 */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#3b82f6]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">RETURN #2 // 0.05μs</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">Understory & Branches</p>
                    </div>
                    <span className="text-[10px] bg-[#3b82f6]/15 text-[#3b82f6] px-2 py-0.5 rounded font-mono">42%</span>
                  </div>

                  {/* Return Last */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-brand-cyan">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">LAST RETURN // 0.12μs</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">Bare ground surface (DTM)</p>
                    </div>
                    <span className="text-[10px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded font-mono">12%</span>
                  </div>
                </div>

                <p className="mt-6 text-[10px] text-gray-500 text-center leading-relaxed">
                  Multiple returns filter vegetation cover, enabling the extraction of bare-earth contours.
                </p>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                Core Competency
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                Filtering Vegetation with Multi-Return Tech
              </h3>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                One of the greatest advantages of LiDAR is its ability to penetrate vegetation. When a laser beam is fired, it does not stop at the first leaf. A single pulse can return multiple reflections as it hits gaps in the canopy, filters down through the branches, and finally bounces off the actual ground. 
              </p>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                By processing these **multiple returns**, we strip away tree cover and bushes in post-processing, revealing the true ground level. This makes LiDAR the only viable surveying method for forested terrain, highway corridors, and mineral deposits covered in heavy foliage.
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
              Enterprise Survey Equipment
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate top-tier hardware to guarantee centimeter-level precision and data integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Drone Platform Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 350 RTK Platform</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our heavy-lift enterprise drone system. Designed for harsh surveying conditions, it features an IP55 weather rating, advanced obstacle avoidance sensors, and dual-battery hot-swapping for continuous operation. Equipped with integrated RTK GNSS systems, it ensures ultra-accurate aerial coordinates.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Flight Time</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 55 minutes</span>
                </div>
                <div>
                  <span className="text-gray-500 block">IP Rating</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">IP55 Weather Resistant</span>
                </div>
              </div>
            </div>

            {/* Sensor Payload Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Zenmuse L2 Sensor</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                A state-of-the-art LiDAR payload integrating an airborne scanner, high-precision self-developed IMU, and a 4/5-inch CMOS frame mapping camera. The L2 offers vertical accuracy of 5 cm, multiple target return returns (up to 5), and a scanning target range of 250 meters.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Vertical Accuracy</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">5 cm (Survey Grade)</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Target Detection Range</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">250m @ 10% Reflectivity</span>
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
              LiDAR Survey Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We process raw point cloud data using premium post-processing algorithms to deliver clean, CAD-ready engineering products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-white/[0.03] light:hover:bg-white transition-all duration-300 hover:border-brand-cyan/20 shadow-lg light:shadow-sm"
              >
                {/* Tech line top */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Visual Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 light:from-white/90 to-transparent" />
                  
                  {/* Tag Pills */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-white">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-dark-bg/85 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider text-gray-300 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white light:text-slate-900 transition-colors group-hover:text-brand-cyan">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
              LiDAR Industry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Serving various high-precision sectors in Indonesia with specialized geospatial workflows.
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
            <a
              href="/#contact"
              className="px-8 py-4 bg-brand-cyan text-white hover:bg-brand-cyan/90 font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,224,0.25)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </a>
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
