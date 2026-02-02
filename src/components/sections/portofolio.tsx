import Counter from "../ui/counter";


export default function PortfolioStats() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Impact in Numbers
        </h2>

        <p className="mt-4 text-slate-400">
          Delivering measurable results across Indonesia
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat label="Total Area Mapped" value={125000} suffix="+ Ha" />

          <Stat label="Projects Completed" value={320} suffix="+" />

          <Stat label="Partner Companies" value={45} suffix="+" />

          <Stat label="Years of Experience" value={7} suffix="+" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold">
        <Counter end={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm text-slate-400 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
