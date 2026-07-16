"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function SolutionsHero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-28 px-6 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark gradient overlay for extreme readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] light:from-slate-50 via-[#090d16]/75 light:via-slate-50/75 to-black/80 transition-colors duration-300" />

      {/* Subtle industrial grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.015)_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="relative max-w-7xl mx-auto text-left">
        {/* Sub-badge */}
        <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full">
          {t("solutions.badge")}
        </span>

        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight max-w-3xl">
          {t("solutions.title")}
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-300 light:text-slate-700 leading-relaxed font-light">
          {t("solutions.subtitle")}
        </p>
      </div>
    </section>
  );
}
