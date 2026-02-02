// src/components/sections/Services.tsx
const services = [
  {
    title: "LiDAR Survey",
    description:
      "High-density point clouds for terrain modeling, volume calculation, and vegetation penetration.",
  },
  {
    title: "Photogrammetry",
    description:
      "High-resolution orthomosaic, DSM, and 3D models for mapping and asset documentation.",
  },
  {
    title: "Bathymetry",
    description:
      "Shallow-water and coastal bathymetric survey using drone-based sensors.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Our Survey Services
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-xl bg-slate-800 border border-white/5"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
