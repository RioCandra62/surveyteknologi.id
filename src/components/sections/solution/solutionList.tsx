import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "LiDAR Survey",
    category: "Aerial Laser",
    description:
      "High-density point cloud data for terrain modeling, deformation analysis, and vegetation penetration.",
    image:
      "https://halorobotics.com/wp-content/uploads/2025/11/dji-zenmuse-l3-halo-robotics-1-915x686.jpg",
    href: "/solutions/lidar",
  },
  {
    title: "Photogrammetry",
    category: "3D Reconstruction",
    description:
      "High-resolution orthomosaic and 3D surface models for mapping, inspection, and asset monitoring.",
    image: "/assets/image/photogrammetry.png",
    href: "/solutions/photogrammetry",
  },
  {
    title: "Bathymetry",
    category: "Hydrographic Survey",
    description:
      "Accurate shallow-water and coastal bathymetric survey for marine and infrastructure projects.",
    image: "/assets/image/bathymetry.png",
    href: "/solutions/bathymetry",
  },
  {
    title: "Spatial Camera",
    category: "Digital Twin",
    description:
      "Digital twin creation and spatial mapping using advanced spatial camera technology.",
    image:
      "https://www.laserscanning-europe.com/sites/default/files/images/hardware/PortalCam_1.jpg",
    href: "/solutions/spatial-camera",
  },
  {
    title: "Simultaneous Localization and Mapping (SLAM)",
    category: "GPS-Denied Mapping",
    description:
      "Real-time 3D mapping and localization in GPS-denied environments using SLAM technology.",
    image:
      "https://www.laserscanning-europe.com/sites/default/files/images/content/SLAM_Visualisierung_01.jpg",
    href: "/solutions/slam",
  },
  {
    title: "Terrestrial Mapping",
    category: "Land Survey",
    description:
      "High-precision terrestrial mapping for construction, mining, and infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/solutions/terrastrial-mapping",
  },
];

export default function SolutionsList() {
  return (
    <section className="bg-[#090d16] light:bg-slate-50 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-white/[0.03] light:hover:bg-white transition-all duration-300 hover:border-amber-500/20 hover:-translate-y-1 shadow-lg light:shadow-sm"
          >
            {/* Top border decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Wrapper */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] light:from-white to-transparent opacity-60" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 rounded-full bg-[#090d16]/80 light:bg-white/90 backdrop-blur-md border border-white/10 light:border-slate-200 px-3 py-1 text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                {item.category}
              </span>
            </div>

            {/* Card Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold tracking-tight text-white light:text-slate-900 transition-colors group-hover:text-amber-400">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {item.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-100">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Explore Solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
