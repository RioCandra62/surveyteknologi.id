import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "LiDAR Survey",
    description:
      "High-density point cloud data for terrain modeling, deformation analysis, and vegetation penetration.",
    image:
      "https://halorobotics.com/wp-content/uploads/2025/11/dji-zenmuse-l3-halo-robotics-1-915x686.jpg",
    href: "/solutions/lidar",
  },
  {
    title: "Photogrammetry",
    description:
      "High-resolution orthomosaic and 3D surface models for mapping, inspection, and asset monitoring.",
    image: "/assets/image/photogrammetry.png",
    href: "/solutions/photogrammetry",
  },
  {
    title: "Bathymmetry",
    description:
      "Accurate shallow-water and coastal bathymetric survey for marine and infrastructure projects.",
    image: "/assets/image/bathymetry.png",
    href: "/solutions/bathymetry",
  },
  {
    title: "Spatial Camera",
    description:
      "digital twin creation and spatial mapping using advanced spatial camera technology.",
    image:
      "https://www.laserscanning-europe.com/sites/default/files/images/hardware/PortalCam_1.jpg",
    href: "/solutions/spatial-camera",
  },
  {
    title: "Simultaneous Localization and Mapping (SLAM)",
    description:
      "real-time 3D mapping and localization in GPS-denied environments using SLAM technology.",
    image:
      "https://www.laserscanning-europe.com/sites/default/files/images/content/SLAM_Visualisierung_01.jpg",
    href: "/solutions/slam",
  },
  {
    title: "Terrastrial Mapping",
    description:
      "high-precision terrestrial mapping for construction, mining, and infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/solutions/terrastrial-mapping",
  },
];

export default function SolutionsList() {
  return (
    <section className="bg-zinc-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-800 rounded-xl overflow-hidden border border-white/5 hover:bg-zinc-700 transition-colors duration-300 shadow-lg flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-amber-400">
                {item.title}
              </h3>
              <p className="mt-4 text-zinc-300 flex-1">{item.description}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-amber-500 font-semibold uppercase tracking-wide text-sm hover:text-amber-400"
              >
                Explore solution <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
