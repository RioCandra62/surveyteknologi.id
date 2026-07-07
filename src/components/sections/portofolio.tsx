import Counter from "../ui/counter";
import { Map, CheckCircle2, Users2, Trophy } from "lucide-react";

export default function PortfolioStats() {
  return (
    <section className="relative py-28 px-6 bg-[#070b12] light:bg-white overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Sub-badge */}
        <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full">
          Proven Performance
        </span>

        {/* Section Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
          Our Impact in Numbers
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-400 light:text-slate-600 max-w-xl mx-auto leading-relaxed">
          Delivering high-accuracy data and reliable insights across the
          Indonesian archipelago.
        </p>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat
            icon={<Map className="h-6 w-6 text-amber-500" />}
            label="Total Area Mapped"
            value={125000}
            suffix="+ Ha"
          />

          <Stat
            icon={<CheckCircle2 className="h-6 w-6 text-amber-500" />}
            label="Projects Completed"
            value={320}
            suffix="+"
          />

          <Stat
            icon={<Users2 className="h-6 w-6 text-amber-500" />}
            label="Partner Companies"
            value={45}
            suffix="+"
          />

          <Stat
            icon={<Trophy className="h-6 w-6 text-amber-500" />}
            label="Years of Experience"
            value={7}
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
}

function Stat({ icon, label, value, suffix }: StatProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.04] light:hover:bg-slate-100/50 hover:-translate-y-1 light:shadow-sm">
      {/* Background card highlight line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Icon Box */}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 transition-colors group-hover:border-amber-500/20 group-hover:bg-amber-500/5">
        {icon}
      </div>

      {/* Numeric Value */}
      <div className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
        <Counter end={value} suffix={suffix} />
      </div>

      {/* Label */}
      <p className="mt-3 text-xs font-semibold text-gray-400 light:text-slate-500 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
