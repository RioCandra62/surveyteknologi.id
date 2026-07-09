"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft, CheckCircle2, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const servicesList = [
    { value: "lidar", label: "Airborne LiDAR Survey" },
    { value: "photogrammetry", label: "Drone Photogrammetry" },
    { value: "bathymetry", label: "Bathymetric & Hydrographic Survey" },
    { value: "slam", label: "SLAM / Mobile Terrestrial Mapping" },
    { value: "consulting", label: "GIS Data Processing & Consulting" },
    { value: "other", label: "General Inquiry / Other" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      setStatus("error");
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
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
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
              <ArrowLeft className="h-3 w-3" /> Back to Home
            </Link>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-brand-cyan font-bold tracking-wider uppercase">Contact</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              Start Your Geospatial <br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                Project Consultation
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 light:text-slate-600 leading-relaxed font-light">
              Connect with our survey and engineering team to get detailed scoping, coordinate validation, and tailored pricing estimates.
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
                  Headquartered in Makassar, we deploy survey teams and state-of-the-art drone payloads nationwide for major infrastructure, carbon mapping, and resource industries.
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
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">Office Location</h4>
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
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">Direct Email</h4>
                    <p className="mt-1 text-sm text-gray-400 light:text-slate-600">
                      <a href="mailto:info@surveyteknologi.id" className="hover:text-brand-cyan transition-colors">
                        info@surveyteknologi.id
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
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">Call Center</h4>
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
                    <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">Operations Hours</h4>
                    <p className="mt-1 text-sm text-gray-400 light:text-slate-600">
                      Monday – Friday: 08:30 – 17:30 (WIB)
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5 light:border-slate-200">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">Connect with us</span>
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
                      <h3 className="text-2xl font-bold text-white light:text-slate-900">Inquiry Sent Successfully!</h3>
                      <p className="mt-3 text-sm text-gray-400 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Survey Teknologi Indonesia. Your technical scope query has been logged. Our surveying engineer will contact you within 24 business hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-6 py-2.5 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan font-bold rounded-lg transition-colors text-xs uppercase tracking-wider"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white light:text-slate-900">Contact Form</h3>
                      <p className="mt-1 text-xs text-gray-400 light:text-slate-500">Provide your technical requirements to generate an engineering bid response.</p>
                    </div>

                    {status === "error" && (
                      <div className="p-3 rounded-lg border border-red-500/25 bg-red-500/10 text-red-400 text-xs">
                        Please complete all required fields (Name, Email, and Selection Service).
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 light:text-slate-600 uppercase tracking-wider block">
                          Full Name <span className="text-brand-cyan">*</span>
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
                          Email Address <span className="text-brand-cyan">*</span>
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
                          Company Name
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
                          Phone Number
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
                        Required Service <span className="text-brand-cyan">*</span>
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
                            -- Select a service --
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
                        Message / Project Description
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Please detail your area location, size in hectares, target accuracy standards, and any special deliverables required."
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
                          Processing Scope...
                        </>
                      ) : (
                        <>
                          Send Inquiry <Send className="h-4 w-4" />
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

    </div>
  );
}
