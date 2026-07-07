import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Vale", logo: "/assets/image/partner_logo/vale.png" },
  { name: "PLN ES", logo: "/assets/image/partner_logo/plnes.png" },
  { name: "Antam", logo: "/assets/image/partner_logo/antam.png" },
  { name: "Surveyor Indonesia", logo: "/assets/image/partner_logo/si.png" },
  {
    name: "Bintang Raya Inti Bumi",
    logo: "/assets/image/partner_logo/brib.png",
  },
  { name: "Mining One", logo: "/assets/image/partner_logo/one.png" },
  { name: "Geo", logo: "/assets/image/partner_logo/geo.png" },
];

export default function OurPartnerMarquee() {
  return (
    <section className="relative py-28 bg-[#090d16] light:bg-white overflow-hidden transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Sub-badge */}
        <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full">
          Trusted Collaborations
        </span>

        {/* Section Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
          Our Partners & Clients
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-400 light:text-slate-600 max-w-xl mx-auto leading-relaxed">
          Collaborating with industry leaders in mining, energy, and
          infrastructure to map the future.
        </p>

        {/* Marquee Wrapper with fading edges */}
        <div className="mt-16 overflow-hidden relative w-full py-4">
          {/* Gradient Masks (Fade edges) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[#090d16] light:from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[#090d16] light:from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex animate-marquee space-x-12 select-none w-max">
            {partners
              .concat(partners)
              .concat(partners)
              .map((partner, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center justify-center h-24 w-44 rounded-xl border border-white/5 light:border-slate-200/80 bg-white/[0.01] light:bg-slate-50 hover:bg-white/[0.03] light:hover:bg-slate-100 hover:border-white/10 light:hover:border-slate-350 p-4 transition-all duration-300 group"
                >
                  <div className="relative h-12 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain object-center filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* CSS Keyframes for infinite scroll */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
