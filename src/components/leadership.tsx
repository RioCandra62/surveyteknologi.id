import Image from "next/image";
export default function Leadership() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Quote */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-2xl text-white italic">
            "Kualitas data dan inovasi adalah kunci kesuksesan dalam setiap
            proyek survei dan pemetaan yang kami lakukan."
          </p>
          <p className="mt-6 text-amber-400 font-semibold text-lg">
            Hindrawan HM
          </p>
          <p className="text-slate-400 mt-1">
            Direktur Utama Survey Teknologi Indonesia
          </p>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/image/dirut.jpg"
            alt="Foto Bapak Dirut"
            width={300}
            height={400}
            className="rounded-xl object-cover shadow-lg"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
