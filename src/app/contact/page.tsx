"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft, CheckCircle2, Globe, ArrowUpRight, Building2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactPage() {
  const { t, lang } = useTranslation();

  const branchList = [
    {
      id: "makassar",
      type: lang === "id" ? "KANTOR PUSAT // MAKASSAR" : lang === "ch" ? "总部 // 望加锡" : "HEADQUARTERS // MAKASSAR",
      city: lang === "id" ? "Makassar, Sulawesi Selatan" : lang === "ch" ? "望加锡，南苏拉威西" : "Makassar, South Sulawesi",
      name: lang === "id" ? "Kantor Pusat Makassar" : lang === "ch" ? "望加锡总部" : "Makassar Headquarters",
      address: "Golden Galaxy Inn, Bangkala, Manggala, Kota Makassar, Sulawesi Selatan, Indonesia 90235",
      phone: "+62 811-5064-378",
      coords: "LAT: -5.1611° S // LNG: 119.4851° E",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.2750861999986!2d119.47544435294354!3d-5.168882313269339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3001ff9c41d%3A0x3b506d1b908d7351!2sPT%20SURVEY%20TEKNOLOGI%20INDONESIA!5e0!3m2!1sen!2sid!4v1787537279213!5m2!1sen!2sid",
      mapUrl: "https://maps.app.goo.gl/J2eka9vQyrEH8uxo7"
    },
    {
      id: "depok",
      type: lang === "id" ? "KANTOR CABANG // DEPOK" : lang === "ch" ? "代表处 // 德博" : "REPRESENTATIVE HUB // DEPOK",
      city: lang === "id" ? "Depok, Jawa Barat" : lang === "ch" ? "德博，西爪哇" : "Depok, West Java",
      name: lang === "id" ? "Kantor Cabang Depok" : lang === "ch" ? "德博业务代表处" : "Depok Representative Office",
      address: "PT. Survey Teknologi Indonesia Jalan Ir. H. Djuanda No. 3 Depok 16423",
      phone: "+62 21-7780-7890",
      coords: "LAT: -6.4025° S // LNG: 106.7942° E",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.110873370919!2d106.8331744555741!3d-6.379687112490628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec09f6863167%3A0xd50d17f8dcd076ea!2sJl.%20Ir%20H%20Juanda%20No.3%2C%20Mekar%20Jaya%2C%20Kec.%20Sukmajaya%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016423!5e0!3m2!1sen!2sid!4v1787537541732!5m2!1sen!2sid",
      mapUrl: "https://maps.google.com/?q=Margonda,+Depok,+Jawa+Barat,+Indonesia"
    },
    // {
    //   id: "sorowako",
    //   type: lang === "id" ? "KANTOR CABANG // SOROWAKO" : lang === "ch" ? "运营中心 // 索罗瓦科" : "OPERATIONS HUB // SOROWAKO",
    //   city: lang === "id" ? "Sorowako, Luwu Timur" : lang === "ch" ? "索罗瓦科，东鲁乌" : "Sorowako, East Luwu",
    //   name: lang === "id" ? "Kantor Cabang Sorowako" : lang === "ch" ? "索罗瓦科运营中心" : "Sorowako Operations Hub",
    //   address: "Sorowako, Nuha, Kabupaten Luwu Timur, Sulawesi Selatan, Indonesia 92983",
    //   phone: "+62 811-5064-378",
    //   coords: "LAT: -2.5458° S // LNG: 121.3525° E",
    //   embedUrl: "https://maps.google.com/maps?q=Sorowako,+Nuha,+Luwu+Timur,+South+Sulawesi,+Indonesia&t=&z=14&ie=UTF8&iwloc=&output=embed",
    //   mapUrl: "https://maps.google.com/?q=Sorowako,+Nuha,+Luwu+Timur,+South+Sulawesi,+Indonesia"
    // }
  ];


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const servicesList = [
    { value: "lidar", label: t("solutions.lidar.title") },
    { value: "photogrammetry", label: t("solutions.photogrammetry.title") },
    { value: "bathymetry", label: t("solutions.bathymetry.title") },
    { value: "slam", label: t("solutions.slam.title") },
    { value: "consulting", label: "GIS Data Processing & Consulting" },
    { value: "other", label: "General Inquiry / Other" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!formData.name || !formData.email || !formData.service) {
      setStatus("error");
      setErrorMessage(t("contact.requiredFieldsError"));
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || t("contact.submitError"));
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setErrorMessage(t("contact.unexpectedError"));
    }
  };

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Telemetry Header/Hero */}
      <section className="relative py-20 border-b border-white/5 light:border-slate-200 overflow-hidden">
        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        
        {/* Soft cyan blur blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> {t("contact.backToHome")}
            </Link>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-brand-cyan font-bold tracking-wider uppercase">{t("nav.contact")}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              {t("contact.getInTouch")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 light:text-slate-600 leading-relaxed font-light">
              {t("contact.subtitle")}
            </p>
          </div>

        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Information (Left) */}
            <div className="lg:col-span-5 space-y-10">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white light:text-slate-900">Survey Teknologi Indonesia</h2>
                <p className="text-sm text-gray-400 light:text-slate-600 leading-relaxed">
                  {t("contact.officeDesc")}
                </p>
              </div>

              {/* Coordinates & Technical Specs Banner */}
              <div className="p-4 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white text-[10px] font-mono text-gray-500 light:text-slate-500 leading-relaxed">
                <span className="text-brand-cyan font-bold block mb-1">STATION DATA SPECIFICATIONS</span>
                LOC ID: STI_MKS // LAT: -5.1400° S // LNG: 119.4215° E <br />
                ALTITUDE: 8.0m MSL // HORIZ ACCURACY: 0.02m (RTK) <br />
                STANDBY FREQ: 433.05 MHz // POWER LINK: SECURE
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6">
                
                {/* Office Location */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">{t("contact.officeLocation")}</h4>
                    <p className="mt-1 text-sm text-gray-400 light:text-slate-600 leading-relaxed">
                     Golden Galaxy Inn, Bangkala, Manggala  <br />
                      Makassar, Sulawesi Selatan, Indonesia
                    </p>
                  </div>
                </div>

                {/* Email Inquiry */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">{t("contact.directEmail")}</h4>
                    <p className="mt-1 text-sm text-gray-400 light:text-slate-600">
                      <a href="mailto:info@surveyteknologi.id" className="hover:text-brand-cyan transition-colors">
                        info@surveyteknologi.id
                      </a>
                      <br />
                      <a href="mailto:indosurtek@gmail.com" className="hover:text-brand-cyan transition-colors">
                        indosurtek@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">{t("contact.callCenter")}</h4>
                    <p className="mt-1 text-sm text-gray-400 light:text-slate-600">
                      <a href="tel:+622139707890" className="hover:text-brand-cyan transition-colors">
                        +62 811-5064-378
                      </a>
                    </p>
                  </div>
                </div>

                {/* Operation Hours */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">{t("contact.opsHours")}</h4>
                    <p className="mt-1 text-sm text-gray-400 light:text-slate-600">
                      {t("contact.opsHoursDesc")}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5 light:border-slate-200">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">{t("contact.connectWithUs")}</span>
                <div className="flex gap-4">
                  <a href="#" className="h-10 w-10 rounded-lg border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 hover:text-white light:hover:text-slate-950 flex items-center justify-center text-gray-400 transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-lg border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 hover:text-white light:hover:text-slate-950 flex items-center justify-center text-gray-400 transition-colors">
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Inquiry Form Card (Right) */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-white p-8 shadow-xl transition-all duration-300 hover:border-brand-cyan/20">
                {/* Visual highlights */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
                
                {status === "success" ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                      <CheckCircle2 className="h-10 w-10 animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white light:text-slate-900">{t("contact.successTitle")}</h3>
                      <p className="mt-3 text-sm text-gray-400 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                        {t("contact.successDesc")}
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-6 py-2.5 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan font-bold rounded-lg transition-colors text-xs uppercase tracking-wider"
                    >
                      {t("contact.sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white light:text-slate-900">{t("contact.formTitle")}</h3>
                      <p className="mt-1 text-xs text-gray-400 light:text-slate-500">{t("contact.formDesc")}</p>
                    </div>

                    {status === "error" && (
                      <div className="p-3 rounded-lg border border-red-500/25 bg-red-500/10 text-red-400 text-xs">
                        {errorMessage || t("contact.requiredFieldsError")}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                          {t("contact.fullName")} <span className="text-brand-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          required
                          className="w-full rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50/50 px-4 py-3 text-sm text-white light:text-slate-900 placeholder-gray-500 focus:border-brand-cyan focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                          {t("contact.emailAddress")} <span className="text-brand-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. john@company.com"
                          required
                          className="w-full rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50/50 px-4 py-3 text-sm text-white light:text-slate-900 placeholder-gray-500 focus:border-brand-cyan focus:outline-none transition-colors"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Company */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                          {t("contact.companyName")}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Adaro Mining Co."
                          className="w-full rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50/50 px-4 py-3 text-sm text-white light:text-slate-900 placeholder-gray-500 focus:border-brand-cyan focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                          {t("contact.phoneNumber")}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +62 812-3456-7890"
                          className="w-full rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50/50 px-4 py-3 text-sm text-white light:text-slate-900 placeholder-gray-500 focus:border-brand-cyan focus:outline-none transition-colors"
                        />
                      </div>

                    </div>

                    {/* Services Selection Dropdown */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                        {t("contact.requiredService")} <span className="text-brand-cyan">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50/50 px-4 py-3 text-sm text-white light:text-slate-900 focus:border-brand-cyan focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-gray-950 light:text-gray-400 bg-white dark:bg-[#0c1221]">
                            {t("contact.selectService")}
                          </option>
                          {servicesList.map((item) => (
                            <option 
                              key={item.value} 
                              value={item.value}
                              className="text-gray-200 light:text-slate-900 bg-[#0c1221] light:bg-white"
                            >
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                        {t("contact.message")}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={t("contact.messagePlaceholder")}
                        className="w-full rounded-lg border border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50/50 px-4 py-3 text-sm text-white light:text-slate-900 placeholder-gray-500 focus:border-brand-cyan focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-cyan hover:bg-brand-cyan/90 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(0,163,224,0.2)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t("contact.processing")}
                        </>
                      ) : (
                        <>
                          {t("contact.sendInquiry")} <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Branch Google Maps Embed Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 light:border-slate-200 bg-[#0c1221]/80 light:bg-slate-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>
                {lang === "id"
                  ? "JARINGAN KANTOR OPERASIONAL"
                  : lang === "ch"
                  ? "区域办公与运营中心网络"
                  : "OPERATIONAL NETWORKS & HUBS"}
              </span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              {lang === "id"
                ? "Jaringan 3 Kantor Cabang Kami"
                : lang === "ch"
                ? "我们的3个分支办公与技术中心"
                : "Our 3 Regional Branch & Operational Hubs"}
            </h2>
            <p className="mt-4 text-base text-gray-400 light:text-slate-600 leading-relaxed font-light">
              {lang === "id"
                ? "Kunjungi kantor pusat atau cabang terdekat kami di seluruh Indonesia untuk konsultasi survei pemetaan UAV, akuisisi data LiDAR, dan pengolahan geospasial."
                : lang === "ch"
                ? "欢迎访问我们在印度尼西亚分布的总部或区域中心，深度咨询 UAV 航空测绘、LiDAR 数据采集及空间建模业务。"
                : "Visit our headquarters or nearest regional branch across Indonesia for UAV mapping consultations, LiDAR acquisition, and geospatial data processing."}
            </p>
          </div>

          {/* 3-Column Maps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branchList.map((branch) => (
              <div
                key={branch.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 light:border-slate-200 bg-[#121826]/90 light:bg-white p-6 shadow-xl hover:border-brand-cyan/50 hover:shadow-2xl hover:shadow-brand-cyan/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top Glowing Gradient Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Branch Info Header */}
                <div>
           
                  <div className="flex items-center gap-2.5 mt-2">
                    <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors">
                      {branch.name}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-2.5 text-sm text-gray-300 light:text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-1" />
                      <span className="leading-relaxed text-xs sm:text-sm">
                        {branch.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 pt-1">
                      <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-xs sm:text-sm font-semibold hover:text-brand-cyan transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed Container */}
                <div className="my-6">
                  <div className="relative w-full h-96 rounded-xl overflow-hidden border border-white/10 light:border-slate-200 bg-dark-bg/60 shadow-inner">
                    <iframe
                      src={branch.embedUrl}
                      title={`Google Maps - ${branch.name}`}
                      className="w-full h-full border-0 filter group-hover:brightness-105 transition-all duration-300"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* External Action Button */}
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-cyan text-white light:text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 light:border-slate-200 shadow-sm"
                >
                  <span>
                    {lang === "id"
                      ? "Buka di Google Maps"
                      : lang === "ch"
                      ? "在谷歌地图中打开"
                      : "Open in Google Maps"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
