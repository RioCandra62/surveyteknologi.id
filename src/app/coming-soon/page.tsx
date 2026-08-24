"use client";

import Link from "next/link";
import { Home, PhoneCall, Clock, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Locale } from "@/locales/dictionary";

const simpleComingSoonTranslations: Record<Locale, any> = {
  en: {
    badge: "UNDER CONSTRUCTION",
    title: "This Page is Coming Soon",
    subtitle:
      "We are currently preparing the best content, documentation, and geospatial data for this section. Please check back with us soon.",
    status: "STATUS: ACTIVE DEVELOPMENT",
    homeBtn: "Return to Homepage",
    contactBtn: "Contact Support",
  },
  id: {
    badge: "DALAM PENGEMBANGAN",
    title: "Halaman Ini Segera Hadir",
    subtitle:
      "Kami sedang menyiapkan konten, dokumentasi, dan data geospasial terbaik untuk halaman ini. Silakan kunjungi kembali dalam waktu dekat.",
    status: "STATUS: DALAM PROSES PENGEMBANGAN",
    homeBtn: "Kembali ke Beranda",
    contactBtn: "Hubungi Kontak",
  },
  ch: {
    badge: "正在建设中",
    title: "该页面即将上线",
    subtitle:
      "我们正全力为该页面准备最优质的内容、项目文档及空间地理数据，敬请期待，欢迎您不久后再次访问。",
    status: "状态: 积极开发中",
    homeBtn: "返回首页",
    contactBtn: "联系技术支持",
  },
};

export default function ComingSoonPage() {
  const { lang } = useTranslation();
  const currentLang = (lang || "en") as Locale;
  const content =
    simpleComingSoonTranslations[currentLang] || simpleComingSoonTranslations.en;

  return (
    <div className="relative min-h-[78vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-[#090d16] light:bg-slate-50 overflow-hidden transition-colors duration-300 py-16">
      {/* Subtle Grid & Glowing Background Orbs */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,163,224,0.12)_0%,transparent_70%)] light:bg-[radial-gradient(circle,rgba(0,163,224,0.18)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,75,135,0.1)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Glowing Icon Container */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-cyan to-brand-blue opacity-30 blur-lg animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#121826] light:bg-white border border-brand-cyan/30 light:border-slate-200 flex items-center justify-center shadow-2xl">
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-brand-cyan animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 p-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
          </div>
        </div>

        {/* Badge Pill */}
        <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-amber-500 uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span>{content.badge}</span>
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
          {content.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 light:text-slate-600 max-w-lg mx-auto font-light leading-relaxed">
          {content.subtitle}
        </p>

        {/* Status Pill */}
        <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] light:bg-white/90 border border-white/10 light:border-slate-200 text-xs font-mono text-gray-400 light:text-slate-600 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{content.status}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:brightness-110 shadow-lg shadow-brand-cyan/25 flex items-center justify-center gap-2.5 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>{content.homeBtn}</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-gray-200 light:text-slate-700 bg-white/5 light:bg-white border border-white/10 light:border-slate-300 hover:bg-white/10 light:hover:bg-slate-100 hover:border-brand-cyan/40 flex items-center justify-center gap-2.5 transition-all duration-200 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-brand-cyan" />
            <span>{content.contactBtn}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
