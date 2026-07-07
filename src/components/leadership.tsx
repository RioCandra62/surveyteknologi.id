import Image from "next/image";
import { Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section className="relative bg-gradient-to-br from-[#090d16] via-[#0c1221] to-[#090d16] light:from-slate-50 light:via-slate-100/50 light:to-slate-50 py-28 px-6 overflow-hidden transition-colors duration-300">
      {/* Subtle tech grid background just for this section */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Decorative Blob */}
      <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
        {/* Quote Block (Left) */}
        <div className="lg:col-span-7 relative text-center lg:text-left">
          {/* Decorative quotes background icon */}
          <div className="absolute -top-12 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-[0.03] light:opacity-[0.08] pointer-events-none">
            <Quote className="h-28 w-28 text-white light:text-slate-400" />
          </div>

          {/* Sub-badge */}
          <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full">
            Executive Vision
          </span>

          <h3 className="mt-6 text-2xl md:text-3xl font-medium text-gray-100 light:text-slate-800 italic leading-relaxed relative">
            "Kualitas data dan inovasi adalah kunci kesuksesan dalam setiap
            proyek survei dan pemetaan yang kami lakukan."
          </h3>

          <div className="mt-8">
            <p className="text-xl font-bold tracking-wide text-white light:text-slate-900">
              Hindrawan HM
            </p>
            <p className="text-sm font-semibold text-amber-500 tracking-wider uppercase mt-1">
              Direktur Utama, Survey Teknologi Indonesia
            </p>
          </div>
        </div>

        {/* Image Card (Right) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Tech bracket accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/40 pointer-events-none group-hover:border-amber-500 transition-colors duration-300" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/40 pointer-events-none group-hover:border-amber-500 transition-colors duration-300" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-amber-500/10 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Picture Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 light:border-slate-200 bg-white/5 light:bg-white p-2 backdrop-blur-sm shadow-2xl transition-all duration-300 group-hover:border-amber-500/20 group-hover:scale-[1.01]">
              <Image
                src="/assets/image/dirut.jpg"
                alt="Bapak Hindrawan HM - Direktur Utama"
                width={320}
                height={400}
                className="rounded-xl object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 max-h-[380px]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
