import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Vale", logo: "/assets/image/partner_logo/vale.png" },
  { name: "PLN ES", logo: "/assets/image/partner_logo/plnes.png" },
  { name: "Antam", logo: "/assets/image/partner_logo/antam.png" },
  // { name: "Billy Group", logo: "/assets/partners/.png" },
  { name: "Surveyor Indonesia", logo: "/assets/image/partner_logo/si.png" },
  { name: "Bintang Raya Inti Bumi", logo: "/assets/image/partner_logo/brib.png" },
  { name: "Mining One", logo: "/assets/image/partner_logo/one.png" },
];

export default function OurPartnerMarquee() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Our Partners
        </h2>
        <p className="mt-4 text-slate-400">
          Companies that have collaborated with Survey Teknologi Indonesia
        </p>

        {/* Marquee */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex animate-marquee space-x-16">
            {partners.concat(partners).map((partner, idx) => (
              <div key={idx} className="shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={190}
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
