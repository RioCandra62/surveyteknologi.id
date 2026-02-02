import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "LiDAR Survey",
    description:
      "High-density point cloud data for terrain modeling, deformation analysis, and vegetation penetration.",
    image: "https://halorobotics.com/wp-content/uploads/2025/11/dji-zenmuse-l3-halo-robotics-1-915x686.jpg",
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
    title: "Bathymetry",
    description:
      "Accurate shallow-water and coastal bathymetric survey for marine and infrastructure projects.",
    image: "/assets/image/bathymetry.png",
    href: "/solutions/bathymetry",
  },
  {
    title: "Spatial Camera",
    description:
      "digital twin creation and spatial mapping using advanced spatial camera technology.",
    image: "https://www.laserscanning-europe.com/sites/default/files/images/hardware/PortalCam_1.jpg",
    href: "/solutions/spatial-camera",
  },
];

export default function SolutionsList() {
  return (
    <section className="bg-zinc-900">
      <div className="max-w-7xl mx-auto divide-y divide-white/5">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="grid md:grid-cols-2 gap-16 items-center py-24 px-6"
          >
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {item.title}
              </h2>

              <p className="mt-6 text-zinc-400 max-w-xl">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="inline-flex items-center gap-2 mt-8 text-amber-500 font-semibold uppercase tracking-wide text-sm hover:text-amber-400"
              >
                Explore solution
                <span>→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-[360px] border border-white/10 rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
