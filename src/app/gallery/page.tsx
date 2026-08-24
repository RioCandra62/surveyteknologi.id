"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X, Calendar, ArrowUpRight, ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { dictionary } from "@/locales/dictionary";

interface NewsItem {
  id: string;
  src: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
}

export default function GalleryPage() {
  const { t, lang } = useTranslation();
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);

  // Fallback to English if lang is not found in dictionary somehow
  const currentDict = dictionary[lang] || dictionary["en"];
  const newsItems: NewsItem[] = currentDict.galleryNews;

  const featuredNews = newsItems[0];
  const remainingNews = newsItems.slice(1);

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Header/Hero Section */}
      <section className="relative pt-20 pb-12 border-b border-white/5 light:border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> {t("nav.home")}
            </Link>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-brand-cyan font-bold tracking-wider uppercase">{t("gallery.newsTitle")}</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("gallery.pageTitle")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 light:text-slate-600 leading-relaxed font-light border-l-2 border-brand-cyan pl-4">
              {t("gallery.pageSubtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured News (Top Item) */}
          <div 
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 light:border-slate-200 bg-[#0c121e] light:bg-white shadow-xl mb-16 transition-all duration-500 hover:shadow-2xl hover:border-brand-cyan/40"
            onClick={() => setSelectedItem(featuredNews)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-[450px] w-full overflow-hidden bg-black">
                <Image
                  src={featuredNews.src}
                  fill
                  alt={featuredNews.title}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-brand-cyan rounded-full">
                    {t("gallery.featuredBadge")}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-gray-400 light:text-slate-500 uppercase tracking-widest">
                    <Calendar className="h-3 w-3" /> {featuredNews.date}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white light:text-slate-900 leading-tight mb-4 group-hover:text-brand-cyan transition-colors duration-300">
                  {featuredNews.title}
                </h2>
                
                <p className="text-sm lg:text-base text-gray-400 light:text-slate-600 leading-relaxed mb-8">
                  {featuredNews.excerpt}
                </p>
                
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  {t("gallery.readFull")} <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Section Title for Grid */}
          <div className="flex items-center justify-between mb-8 border-b border-white/10 light:border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-white light:text-slate-900 uppercase tracking-wider">
              {t("gallery.recentActivities")}
            </h3>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingNews.map((item) => (
              <div 
                key={item.id}
                className="group relative cursor-pointer flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-56 w-full overflow-hidden bg-black/50">
                  <Image
                    src={item.src}
                    fill
                    alt={item.title}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-[#090d16]/80 light:bg-white/90 backdrop-blur px-2.5 py-1 rounded text-[9px] font-bold text-brand-cyan uppercase tracking-widest border border-brand-cyan/20">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Subtle top gradient line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-500 light:text-slate-400 uppercase tracking-widest mb-3">
                    <Calendar className="h-3 w-3" /> {item.date}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white light:text-slate-800 leading-snug mb-3 group-hover:text-brand-cyan transition-colors duration-300 line-clamp-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 light:text-slate-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {item.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 light:border-slate-100 flex items-center justify-between text-[10px] font-bold text-gray-400 light:text-slate-500 uppercase tracking-wider group-hover:text-brand-cyan transition-colors">
                    {t("gallery.readMore")}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Modal (News Reader) */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090d16]/95 light:bg-slate-900/80 p-4 sm:p-6 md:p-12 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#090d16] light:bg-white rounded-3xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl flex flex-col max-h-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-brand-cyan focus:outline-none transition-all duration-200 backdrop-blur"
              onClick={() => setSelectedItem(null)}
              aria-label={t("gallery.close")}
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="overflow-y-auto w-full custom-scrollbar">
              {/* Modal Image Header */}
              <div className="relative w-full h-64 sm:h-80 md:h-[400px] bg-black shrink-0">
                <Image
                  src={selectedItem.src}
                  fill
                  alt={selectedItem.title}
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] light:from-white to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 text-[9px] font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 rounded-md uppercase tracking-widest backdrop-blur-sm">
                      {selectedItem.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-gray-300 light:text-slate-600 uppercase tracking-widest drop-shadow-md">
                      <Calendar className="h-3 w-3" /> {selectedItem.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white light:text-slate-900 leading-tight drop-shadow-lg">
                    {selectedItem.title}
                  </h2>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 sm:p-8 md:p-10 text-gray-300 light:text-slate-700">
                <p className="text-lg font-medium text-white light:text-slate-800 leading-relaxed mb-6 border-l-4 border-brand-cyan pl-4">
                  {selectedItem.excerpt}
                </p>
                <div className="prose prose-invert prose-brand max-w-none text-sm md:text-base leading-loose">
                  <p>{selectedItem.content}</p>
                </div>
                
                <div className="mt-12 pt-6 border-t border-white/10 light:border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {t("gallery.reportId")} {selectedItem.id.toUpperCase()}
                  </span>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-cyan/90 transition-all duration-300"
                  >
                    {t("gallery.requestSimilar")} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
