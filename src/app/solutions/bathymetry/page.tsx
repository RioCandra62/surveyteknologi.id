"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Anchor, Waves, Layers, Compass } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function BathymetrySolutionPage() {
  const { t, lang } = useTranslation();
  const specs = lang === "id" ? [
    { label: "Akurasi Kedalaman", value: "Sub-5 cm RMSE" },
    { label: "Frekuensi Transduser", value: "Ganda (50 / 200 kHz)" },
    { label: "Rentang Kedalaman", value: "Rentang 0.3m hingga 150m" },
    { label: "Sistem Platform", value: "Autonomous Surface Vehicle (ASV)" },
  ] : lang === "ch" ? [
    { label: "深度精度", value: "低于 5 厘米 RMSE" },
    { label: "换能器频率", value: "双频 (50 / 200 kHz)" },
    { label: "深度范围", value: "0.3米至150米范围" },
    { label: "平台系统", value: "自主无人船 (ASV)" },
  ] : [
    { label: "Depth Accuracy", value: "Sub-5 cm RMSE" },
    { label: "Transducer Freq.", value: "Dual (50 / 200 kHz)" },
    { label: "Depth Range", value: "0.3m to 150m Range" },
    { label: "Platform System", value: "Autonomous Surface Vehicle (ASV)" },
  ];

  const conceptualPillars = lang === "id" ? [
    {
      icon: <Waves className="h-6 w-6 text-brand-cyan" />,
      title: "Pemeruman Gema Akustik",
      desc: "Transduser frekuensi tinggi memancarkan pulsa akustik ke bawah, memetakan kedalaman air berdasarkan waktu pantulan sinyal gema dari dasar laut."
    },
    {
      icon: <Anchor className="h-6 w-6 text-brand-cyan" />,
      title: "Sound Velocity Profile (SVP)",
      desc: "Kolom suhu dan salinitas air diukur untuk menghitung variasi kecepatan akustik, memastikan perhitungan kedalaman yang tepat di berbagai kerapatan air."
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Koreksi Pasang Surut RTK",
      desc: "Penerima base RTK melacak ketinggian pasang surut secara real-time, secara dinamis mengurangi pergeseran pasang surut untuk menghasilkan elevasi dasar laut yang absolut."
    },
  ] : lang === "ch" ? [
    {
      icon: <Waves className="h-6 w-6 text-brand-cyan" />,
      title: "声学回声测深",
      desc: "高频换能器向下发射声学脉冲，根据从海底反射回来的回波信号时间映射水深。"
    },
    {
      icon: <Anchor className="h-6 w-6 text-brand-cyan" />,
      title: "声速剖面 (SVP)",
      desc: "测量水温和盐度柱以计算声速变化，确保在不同水体密度下获得精确的深度计算。"
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "RTK 潮汐改正",
      desc: "有源基准站接收机实时追踪潮位高度，动态扣除天文潮位偏差，从而获得绝对的海底高程。"
    },
  ] : [
    {
      icon: <Waves className="h-6 w-6 text-brand-cyan" />,
      title: "Acoustic Echo Sounding",
      desc: "High-frequency transducers emit acoustic pulses downward, mapping the water depth based on the return signal timing reflected from the seabed.",
    },
    {
      icon: <Anchor className="h-6 w-6 text-brand-cyan" />,
      title: "Sound Velocity Profile (SVP)",
      desc: "Water temperature and salinity columns are measured to calculate acoustic velocity variations, ensuring exact depth calculations across varying densities.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "RTK Tide Corrections",
      desc: "Active base receivers track real-time tidal height elevations, dynamically subtracting astronomical tide shifts to yield absolute bottom elevations.",
    },
  ];

  const deliverables = lang === "id" ? [
    {
      id: "del-01",
      title: "Permukaan 3D Dasar Laut & Sungai",
      desc: "Permukaan digital 3D berdensitas tinggi yang merinci bentuk dan topografi dasar sungai, danau, atau laut pesisir. Sangat penting untuk konstruksi teknik dan tata letak struktural.",
      image: "/assets/image/bathymmetry/result.jpeg",
      tags: ["Raster GeoTIFF", "Permukaan 3D"],
      hudCode: "FREQ: 200kHz // DEPTH: 14.8m // VERT_ACC: 3.2cm",
      specs: [
        { name: "Jarak Kisi (Grid)", value: "Grid resolusi 0.5m hingga 2.0m" },
        { name: "Referensi Koordinat", value: "Zona UTM / Datum WGS 84" },
        { name: "Tingkat Presisi", value: "Presisi Vertikal Sub-5 cm" },
        { name: "Format Output", value: "GeoTIFF, ASCII Grid, Data XYZ" },
      ],
    },
    {
      id: "del-02",
      title: "Peta Kontur Batimetri",
      desc: "Kontur elevasi presisi tinggi yang merinci kedalaman bawah air. Penting untuk verifikasi pengerukan pelabuhan dan penyusunan peta navigasi.",
      image: "https://www.whiteclouds.com/wp-content/uploads/2023/04/Lake-Huron-Bathymetric-Maps.jpg",
      tags: ["Kontur CAD", "Format DXF / DWG"],
      hudCode: "INTERVAL: 0.5m // FILE: .DWG // REF: MSL (MEAN)",
      specs: [
        { name: "Interval Kontur", value: "Interval 0.2m, 0.5m, 1.0m" },
        { name: "Datum Tinggi", value: "Mean Sea Level (MSL) / Chart Datum" },
        { name: "Format Gambar", value: "AutoCAD DWG, DXF, SHP Shapefile" },
        { name: "Validasi Lapangan", value: "Dikalibrasi dengan batu duga manual (leadlines)" },
      ],
    },
    {
      id: "del-03",
      title: "Profil Penampang Sungai",
      desc: "Profil penampang terperinci yang memvisualisasikan offset kedalaman pada stasiun teknik tertentu. Ideal untuk analisis gerusan di sekitar pilar jembatan dan pemantauan struktural bendungan.",
      image: "/assets/image/bathymmetry/result2.jpeg",
      tags: ["Laporan PDF", "Penampang Melintang"],
      hudCode: "STATION: KM 12+400 // WIDTH: 80m // SCALE: 1:200",
      specs: [
        { name: "Lebar Penampang", value: "Profil lebar hingga 500 meter" },
        { name: "Interval Sampel", value: "Interval 10m, 20m, 50m di sepanjang jalur" },
        { name: "Format Profil", value: "AutoCAD DWG, Excel CSV, Bagan PDF" },
        { name: "Deteksi Gerusan", value: "Membandingkan profil gerusan dari waktu ke waktu" },
      ],
    },
  ] : lang === "ch" ? [
    {
      id: "del-01",
      title: "3D 海床与河床三维表面",
      desc: "高密度 3D 数字表面，详细展示河床、湖泊或沿海海床的形状和地形。对于工程建设和结构布局至关重要。",
      image: "/assets/image/bathymmetry/result.jpeg",
      tags: ["GeoTIFF 栅格", "3D 表面"],
      hudCode: "FREQ: 200kHz // DEPTH: 14.8m // VERT_ACC: 3.2cm",
      specs: [
        { name: "网格间距", value: "0.5米至2.0米分辨率网格" },
        { name: "坐标参考", value: "UTM 投影带 / WGS 84 基准" },
        { name: "精度级别", value: "亚厘米级垂直精度" },
        { name: "输出格式", value: "GeoTIFF, ASCII Grid, XYZ 数据" },
      ],
    },
    {
      id: "del-02",
      title: "等深线图",
      desc: "显示水下深度的精确高程等高线。对于港口疏浚验证和导航图编制必不可少。",
      image: "https://www.whiteclouds.com/wp-content/uploads/2023/04/Lake-Huron-Bathymetric-Maps.jpg",
      tags: ["CAD 等高线", "DXF / DWG 格式"],
      hudCode: "INTERVAL: 0.5m // FILE: .DWG // REF: MSL (MEAN)",
      specs: [
        { name: "等深线间隔", value: "0.2米、0.5米、1.0米间隔" },
        { name: "高程基准", value: "平均海平面 (MSL) / 海图基准面" },
        { name: "图纸格式", value: "AutoCAD DWG, DXF, SHP Shapefile" },
        { name: "核验方法", value: "使用手动测深锤进行校准" },
      ],
    },
    {
      id: "del-03",
      title: "河床横断面剖面图",
      desc: "可视化特定工程测站水深偏移的详细断面剖面图。非常适合桥墩周围的冲刷分析和水坝结构监测。",
      image: "/assets/image/bathymmetry/result2.jpeg",
      tags: ["PDF 报告", "横断面"],
      hudCode: "STATION: KM 12+400 // WIDTH: 80m // SCALE: 1:200",
      specs: [
        { name: "断面宽度", value: "宽达 500 米的断面剖面" },
        { name: "采样间隔", value: "沿里程桩 10米、20米、50米间隔" },
        { name: "剖面格式", value: "AutoCAD DWG, Excel CSV, PDF 图表" },
        { name: "冲刷检测", value: "对比不同时间的冲刷演变剖面" },
      ],
    },
  ] : [
    {
      id: "del-01",
      title: "3D Seabed & Riverbed Surface",
      desc: "High-density 3D digital surfaces detailing the shape and topography of riverbeds, lakes, or coastal seabeds. Crucial for engineering construction and structural layouts.",
      image: "/assets/image/bathymmetry/result.jpeg",
      tags: ["GeoTIFF Raster", "3D Surface"],
      hudCode: "FREQ: 200kHz // DEPTH: 14.8m // VERT_ACC: 3.2cm",
      specs: [
        { name: "Grid Spacing", value: "0.5m to 2.0m resolution grids" },
        { name: "Coordinate Reference", value: "UTM Zone / WGS 84 Datum" },
        { name: "Precision Level", value: "Sub-5 cm Vertical Precision" },
        { name: "Output Format", value: "GeoTIFF, ASCII Grid, XYZ Data" },
      ],
    },
    {
      id: "del-02",
      title: "Bathymetric Contour Maps",
      desc: "High-precision elevation contours detailing underwater depths. Essential for harbor dredging verification and navigation charts compilation.",
      image: "https://www.whiteclouds.com/wp-content/uploads/2023/04/Lake-Huron-Bathymetric-Maps.jpg",
      tags: ["CAD Contours", "DXF / DWG Format"],
      hudCode: "INTERVAL: 0.5m // FILE: .DWG // REF: MSL (MEAN)",
      specs: [
        { name: "Contour Interval", value: "0.2m, 0.5m, 1.0m intervals" },
        { name: "Height Datum", value: "Mean Sea Level (MSL) / Chart Datum" },
        { name: "Drawing Formats", value: "AutoCAD DWG, DXF, SHP Shapefile" },
        { name: "Validation", value: "Calibrated with manual leadlines" },
      ],
    },
    {
      id: "del-03",
      title: "Riverbed Cross-Section Profiles",
      desc: "Detailed cross-sectional profiles visualizing depth offsets at specific engineering stations. Ideal for scour analysis around bridge pillars and dam structural monitoring.",
      image: "/assets/image/bathymmetry/result2.jpeg",
      tags: ["PDF Report", "Cross-sections"],
      hudCode: "STATION: KM 12+400 // WIDTH: 80m // SCALE: 1:200",
      specs: [
        { name: "Cross-section Width", value: "Up to 500 meters wide profiles" },
        { name: "Sampling Interval", value: "10m, 20m, 50m intervals along chainage" },
        { name: "Profiles Formats", value: "AutoCAD DWG, Excel CSV, PDF Charts" },
        { name: "Scour Detection", value: "Compares scour profiles over time" },
      ],
    },
  ];

  const useCases = lang === "id" ? [
    {
      sector: "Pengerukan Pelabuhan",
      use: "Survei sebelum dan sesudah pengerukan untuk memverifikasi kedalaman alur navigasi dan menghitung volume sedimentasi.",
    },
    {
      sector: "Analisis Gerusan Jembatan",
      use: "Pemetaan lubang gerusan di sekitar pilar dan fondasi jembatan untuk memantau risiko erosi struktural.",
    },
    {
      sector: "Kapasitas Waduk",
      use: "Pemetaan volumetrik waduk bendungan untuk menghitung perubahan kapasitas penyimpanan air akibat penumpukan sedimen.",
    },
    {
      sector: "Pipa Bawah Laut",
      use: "Pemetaan dasar laut yang mendetail di sepanjang rute pipa bawah laut yang diusulkan untuk mengidentifikasi rintangan.",
    },
  ] : lang === "ch" ? [
    {
      sector: "港口疏浚",
      use: "疏浚前和疏浚后测量，以验证导航通道深度并计算淤积量。",
    },
    {
      sector: "桥梁冲刷分析",
      use: "绘制桥墩和基础周围的冲刷坑，以监测结构侵蚀风险。",
    },
    {
      sector: "水库容量",
      use: "大坝水库体积图，以计算由于泥沙淤积引起的水库蓄水容量变化。",
    },
    {
      sector: "海底管道",
      use: "沿着拟建的海底管道路线进行详细的海底制图以识别障碍物。",
    },
  ] : [
    {
      sector: "Port Dredging",
      use: "Pre-dredge and post-dredge surveys to verify navigation channel depths and compute siltation volumes.",
    },
    {
      sector: "Bridge Scour Analysis",
      use: "Mapping scour holes around bridge piers and foundations to monitor structural erosion risks.",
    },
    {
      sector: "Reservoir Capacity",
      use: "Volumetric mapping of dam reservoirs to calculate water storage capacity changes due to silt buildup.",
    },
    {
      sector: "Marine Pipelines",
      use: "Detailed seabed mapping along proposed underwater pipeline routes to identify obstructions.",
    },
  ];

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Telemetry Header/Hero */}
      <section className="relative py-24 border-b border-white/5 light:border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> {t("contact.backToHome")}
            </Link>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-brand-cyan font-bold tracking-wider uppercase">{t("nav.solutions")}</span>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-xs text-gray-400 light:text-slate-500">Bathymetry</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: AC_SOUNDING // STATUS: NOMINAL</span>
            <span>FREQ: 50/200 kHz // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Hydrographic Surveying
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("solutions.bathymetry.title")} <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                {lang === "id" ? "& Pemetaan Bawah Air" : lang === "ch" ? "& 水下测绘" : "& Underwater Mapping"}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              {t("solutions.bathymetry.desc")}
            </p>
          </div>

          {/* Quick specs banner */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 light:border-slate-200 pt-8">
            {specs.map((item, idx) => (
              <div key={idx} className="border-l border-brand-cyan/30 pl-4">
                <p className="text-xs text-gray-500 light:text-slate-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-lg font-bold text-white light:text-slate-900 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Concept Breakdown Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                {lang === "id" ? "Ikhtisar Teknologi" : lang === "ch" ? "技术概述" : "Technology Overview"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                {lang === "id" ? "Pencitraan Akustik Bawah Air" : lang === "ch" ? "水下声学剖面测量" : "Underwater Acoustic Profiling"}
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Pemetaan batimetri mengandalkan penginderaan jauh akustik. Echo sounder memancarkan pulsa audio terkalibrasi ke bawah, mencatat perbedaan waktu dari gema yang memantul dari dasar perairan. Memadukan pengukuran kedalaman ini dengan posisi RTK GPS menghasilkan profil elevasi koordinat presisi tinggi dari topografi bawah air."
                  : lang === "ch"
                    ? "水下测深测量依赖于声学遥感。回声测深仪向下发射校准声学脉冲，记录从水底反射回来的回波时间差。将这些深度测量与大地测量级 RTK GPS 位置相结合，可以获得水下地形的高精度坐标高程剖面。"
                    : "Bathymetry mappings rely on acoustic remote sensing. Echo sounders emit calibrated audio pulses downward, registering the time offsets of the echoes returning from the bed floor. Pairing these depth soundings with geodetic RTK GPS positions yields high-precision coordinate elevation profiles of the sub-surface topography."
                }
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  {lang === "id"
                    ? "Mengerahkan unmanned autonomous surface vehicles (ASVs) memungkinkan kami mensurvei area air dangkal dan bendungan tailing yang berbahaya dengan aman, menghindari risiko bagi kru manusia."
                    : lang === "ch"
                      ? "部署自主无人探测船 (ASV) 使我们能够安全地测量浅水区域和危险的尾矿坝，避免了外场人员的安全风险。"
                      : "Deploying unmanned autonomous surface vehicles (ASVs) allows us to survey shallow-water areas and hazardous tailing dams safely, avoiding risks to human crews."
                  }
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {conceptualPillars.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 p-6 rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-slate-100 hover:border-brand-cyan/20 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 transition-colors group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-[#090d16] light:bg-slate-50 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              {lang === "id" ? "Perangkat Keras Industri" : lang === "ch" ? "工业硬件" : "Industrial Hardware"}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              {lang === "id" ? "Armada Survei Hidrografi" : lang === "ch" ? "水文测量船队" : "Hydrographic Survey Fleet"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id" ? "Kami mengoperasikan kapal permukaan otonom robotik dan transduser dual-frekuensi untuk menangkap profil air dangkal yang akurat." : lang === "ch" ? "我们运行机器人自主无人船和双频换能器，以获取精准的浅水剖面。" : "We operate robotic autonomous surface vessels and dual-frequency transducers to capture accurate shallow water profiles."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* ASV Platform Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Autonomous Surface Vehicle (ASV)</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Kapal survei hidrografi tanpa awak kami. Dilengkapi navigasi titik acuan (waypoint) otonom, sistem propulsi pendorong ganda, dan waktu operasi aktif hingga 4 jam. Ideal untuk survei lingkungan di kolam tailing dangkal, muara sungai, dan bendungan."
                  : lang === "ch"
                    ? "我们的无人水文测量船。具备自主航点导航测绘网格、双推进器动力系统以及长达 4 小时的作业时间。非常适合在浅水尾矿库、河口和水坝进行环境测量。"
                    : "Our unmanned hydrographic surveying vessel. Features autonomous waypoint navigation mapping grids, a dual-thruster power train, and up to 4 hours of active operation. Ideal for environmental surveying in shallow tailing ponds, river estuaries, and dams."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Waktu Operasi" : lang === "ch" ? "作业时间" : "Operation Time"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">
                    {lang === "id" ? "Hingga 4 jam" : lang === "ch" ? "长达 4 小时" : "Up to 4 hours"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Tautan Navigasi" : lang === "ch" ? "导航方式" : "Navigation Link"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">
                    {lang === "id" ? "Autopilot / Rute RTK" : lang === "ch" ? "自动驾驶 / RTK 航线" : "Autopilot / RTK Route"}
                  </span>
                </div>
              </div>
            </div>

            {/* Echo Sounder Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">{lang === "id" ? "Echo Sounder Dual-Frekuensi" : lang === "ch" ? "双频回声测深仪" : "Dual-Frequency Echo Sounder"}</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Sensor kedalaman akustik presisi tinggi yang beroperasi secara simultan pada frekuensi 50 kHz dan 200 kHz. Frekuensi tinggi melacak batas lumpur atas, sedangkan frekuensi rendah menembus lumpur lunak untuk menangkap lapisan permukaan keras dasar perairan."
                  : lang === "ch"
                    ? "高精度声学深度传感器，可同时工作在 50 kHz 和 200 kHz 频率。高频追踪上层淤泥边界，而低频穿透软泥以捕获坚硬的底部表面层。"
                    : "A high-precision acoustic depth sensor operating simultaneously at 50 kHz and 200 kHz frequencies. The high frequency tracks the upper silt boundaries, while the low frequency penetrates soft mud to capture the hard bottom surface layer."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Frequencies</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">50 kHz & 200 kHz</span>
                </div>
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Rentang Kedalaman Sensor" : lang === "ch" ? "传感器测深范围" : "Sensor Depth Range"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">
                    {lang === "id" ? "Pemeruman 0.3m hingga 150m" : lang === "ch" ? "0.3米至150米水深" : "0.3m to 150m soundings"}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-gradient-to-b from-[#090d16] light:from-slate-50 to-[#05080e] light:to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Output Products
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Bathymetry Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data transduser sonar menjadi model permukaan dasar laut/sungai berformat GIS dan CAD.
            </p>
          </div>

          <div className="space-y-32">
            {deliverables.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl light:shadow-md">
                      
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 light:from-white/70 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute inset-3 border border-white/5 light:border-slate-900/5 pointer-events-none" />
                      <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-brand-cyan/60 pointer-events-none" />
                      <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-brand-cyan/60 pointer-events-none" />
                      
                      <div className="absolute top-5 right-5 flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="bg-dark-bg/85 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-bold tracking-wider text-gray-300 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center bg-[#090d16]/80 backdrop-blur-sm border border-white/5 px-3 py-2 rounded-lg text-[9px] font-mono text-gray-400">
                        <span>{item.hudCode}</span>
                        <span className="text-brand-cyan font-bold">READY</span>
                      </div>

                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase">
                        DELIVERABLE 0{idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white light:text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 light:border-slate-200">
                      {item.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex gap-2.5 items-start">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan mt-0.5">
                            <span className="text-[8px] font-bold">✓</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase tracking-wider block">
                              {spec.name}
                            </span>
                            <span className="text-xs font-bold text-white light:text-slate-800 mt-0.5 block">
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                      >
                        Request Sample Data <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Industrial Use Cases Section */}
      <section className="py-24 bg-[#090d16] light:bg-slate-50 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Sectors served
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Bathymetry Industry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying underwater sonar mapping to solve navigation and engineering problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-slate-100/50 hover:border-brand-cyan/20 transition-all duration-300 group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors">
                    {item.sector}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-400 light:text-slate-600 leading-relaxed">
                    {item.use}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <CheckCircle2 className="h-4 w-4 text-brand-cyan opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden border-t border-white/5 light:border-slate-200 transition-colors">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
            {t("contact.getInTouch")}
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
            {lang === "id" ? "Siap Memetakan Area Air Anda?" : lang === "ch" ? "准备好测绘您的水体了吗？" : "Ready to Map Your Water Bodies?"}
          </h2>

          <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {lang === "id" ? "Diskusikan kebutuhan survei Anda dengan tim teknis kami. Kami menyediakan solusi yang disesuaikan dan estimasi yang akurat." : lang === "ch" ? "与我们的技术团队讨论您的测量需求。我们提供量身定制的解决方案和准确的估算。" : "Discuss your surveying needs with our technical team. We provide tailored solutions and accurate estimations."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-cyan text-white hover:bg-brand-cyan/90 font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,224,0.25)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              {t("nav.contact")} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border border-white/10 light:border-slate-200 hover:border-white/20 light:hover:border-slate-300 bg-white/5 light:bg-white hover:bg-white/10 text-white light:text-slate-800 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-sm uppercase tracking-wider"
            >
              {lang === "id" ? "Kembali ke Beranda" : lang === "ch" ? "返回首页" : "Return Home"}
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
