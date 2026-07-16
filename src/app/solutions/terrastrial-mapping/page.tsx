"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Compass, Layers, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function TerrestrialMappingSolutionPage() {
  const { t, lang } = useTranslation();
  const specs = lang === "id" ? [
    { label: "Akurasi Sudut", value: '2" (Detik Busur)' },
    { label: "Jangkauan Tanpa Reflektor", value: "Hingga 1000m" },
    { label: "Presisi RTK", value: "H: 8mm / V: 15mm" },
    { label: "Kompensasi Kemiringan", value: "Kemiringan IMU hingga 60°" },
  ] : lang === "ch" ? [
    { label: "测角精度", value: '2" (角秒)' },
    { label: "免棱镜测程", value: "长达 1000 米" },
    { label: "RTK 精度", value: "平面: 8mm / 高程: 15mm" },
    { label: "倾斜补偿", value: "IMU 倾斜高达 60°" },
  ] : [
    { label: "Angular Accuracy", value: '2" (Arc Seconds)' },
    { label: "Reflectorless Range", value: "Up to 1000m" },
    { label: "RTK Precision", value: "H: 8mm / V: 15mm" },
    { label: "Tilt Compensation", value: "IMU Tilt up to 60°" },
  ];

  const conceptualPillars = lang === "id" ? [
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Poligon Total Station",
      desc: "Mengukur sudut horizontal dan vertikal yang presisi di sepanjang poligon tertutup untuk menghitung posisi benchmark lokal dengan akurasi relatif sub-milimeter."
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "Pemosisian RTK GNSS",
      desc: "Menghubungkan set base dan rover receiver multi-konstelasi untuk menerima sinyal pemosisian waktu nyata, menentukan koordinat geodesi absolut di lapangan."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-cyan" />,
      title: "Pematokan Batas Presisi",
      desc: "Mengekstrak koordinat langsung dari desain CAD teknik dan menempatkan penanda fisik di lapangan untuk menentukan alinyemen dan batas lahan."
    },
  ] : lang === "ch" ? [
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "全站仪导线测量",
      desc: "沿闭合导线精密测量水平角 and 垂直角，以解算出亚毫米级相对精度的控制点坐标。"
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "RTK GNSS 高精度定位",
      desc: "架设多星多频 RTK 基准站与移动站，接收实时差分定位信号，以解算现场绝对大地坐标系。"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-cyan" />,
      title: "边界精密放样 staking",
      desc: "直接从工程 CAD 图纸设计中提取放样点三维坐标，在现场打桩设立物理标记，以圈定红线和边界线。"
    },
  ] : [
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Total Station Traverses",
      desc: "Measures precise horizontal and vertical angles along closed traverses to compute local benchmark positions with sub-millimeter relative accuracy.",
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "RTK GNSS Positioning",
      desc: "Links multi-constellation base and rover receivers to receive real-time positioning signals, defining absolute geodetic coordinates on site.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-cyan" />,
      title: "Precision Boundary Staking",
      desc: "Extracts coordinates directly from engineering CAD designs and places physical markers on site to define alignments and borders.",
    },
  ];

  const deliverables = lang === "id" ? [
    {
      id: "del-01",
      title: "Survei Tata Letak Batas Tanah",
      desc: "Garis batas presisi tinggi dan patok batas kepemilikan tanah yang menetapkan batas kadaster. Sangat penting untuk akuisisi lahan, kepatuhan zonasi, dan pembagian lahan resmi secara hukum.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcZDRFoPMGEeh47lAcMnQH7qUTXvNIX0OUEfD2IrLhjK-nCMeyJLqbA8&s=10",
      tags: ["Gambar CAD", "Format DXF / DWG"],
      hudCode: "STAKES: 48 // ACCURACY: <1.5cm // REF: BPN_INDONESIA",
      specs: [
        { name: "Standar Kadaster", value: "Sesuai Standar BPN (Badan Pertanahan Nasional)" },
        { name: "Material Penanda", value: "Pin besi, pilar beton (patok batas)" },
        { name: "Format Output", value: "AutoCAD DWG, Shapefile SHP, Peta PDF" },
        { name: "Aplikasi", value: "Batas zonasi, registrasi tanah resmi secara hukum" },
      ],
    },
    {
      id: "del-02",
      title: "Gambar CAD Topografi",
      desc: "Gambar teknik CAD yang merinci kontur tanah, elevasi medan, utilitas yang ada, jalan, struktur, dan pohon. Terintegrasi langsung ke dalam desain perataan sipil.",
      image: "https://images.squarespace-cdn.com/content/v1/62814369091b2127fa485b70/4955b079-f72c-47bb-8a19-96c1776d5da7/topo+survey+drawing.PNG",
      tags: ["Kontur CAD", "Format DWG / DXF"],
      hudCode: "CONTOUR_INT: 0.5m // GRID: 5m // TARGET: SITE_CIVIL",
      specs: [
        { name: "Interval Kontur", value: "Interval 0.2m, 0.5m, 1.0m" },
        { name: "Pengodean Fitur", value: "Pengodean CAD lengkap untuk utilitas dan pohon" },
        { name: "Format Data", value: "AutoCAD Civil 3D DWG, DXF, LandXML" },
        { name: "Referensi Elevasi", value: "Referensi CORS / MSL (Mean Sea Level)" },
      ],
    },
    {
      id: "del-04",
      title: "Laporan Pematokan Koordinat",
      desc: "Daftar laporan terperinci yang menunjukkan target patok vs koordinat aktual dan deviasi struktural, memvalidasi kepatuhan tata letak di lapangan.",
      image: "https://leica-geosystems.com/-/media/images/leicageosystems/products/gnss-systems/more/augmented-stake-out/leica-augmented-stakeout-stake_points5.png?sc_lang=en&hash=EFA6C585D16726F4822A0D49688F2EFA",
      tags: ["Excel CSV", "Laporan PDF"],
      hudCode: "POINTS: 120 // STATUS: VALIDATED // ERROR: <10mm",
      specs: [
        { name: "Metode Pematokan", value: "Total Station tanpa reflektor / GNSS rover" },
        { name: "Validasi", value: "Verifikasi pengukuran double-tie" },
        { name: "Laporan Output", value: "Tabel koordinat Excel CSV, denah PDF" },
        { name: "Tingkat Akurasi", value: "Kualitas tata letak teknik sipil" },
      ],
    },
  ] : lang === "ch" ? [
    {
      id: "del-01",
      title: "地籍边界界址放样",
      desc: "测定高精度的地籍红线界桩和边界。用于土地收储、征地拆迁、合规核查及法定土地确权分割。",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcZDRFoPMGEeh47lAcMnQH7qUTXvNIX0OUEfD2IrLhjK-nCMeyJLqbA8&s=10",
      tags: ["CAD 图纸", "DXF / DWG 格式"],
      hudCode: "STAKES: 48 // ACCURACY: <1.5cm // REF: BPN_INDONESIA",
      specs: [
        { name: "地籍规范标准", value: "符合 BPN (印尼国家土地局) 规范" },
        { name: "物理界桩材质", value: "钢筋锚针、水泥实体地桩界桩" },
        { name: "输出格式", value: "AutoCAD DWG, Shapefile SHP, PDF 地籍图" },
        { name: "典型应用", value: "土地规划红线划定、法定地价评估登记" },
      ],
    },
    {
      id: "del-02",
      title: "二维地形 CAD 等高线图纸",
      desc: "详尽描绘现场等高线、地形起伏、既有管线设施、道路、建筑物和树木的 CAD 工程图。直接作为土石方平整设计底板图。",
      image: "https://images.squarespace-cdn.com/content/v1/62814369091b2127fa485b70/4955b079-f72c-47bb-8a19-96c1776d5da7/topo+survey+drawing.PNG",
      tags: ["等高线 CAD", "DWG / DXF 格式"],
      hudCode: "CONTOUR_INT: 0.5m // GRID: 5m // TARGET: SITE_CIVIL",
      specs: [
        { name: "等高距间距", value: "0.2米, 0.5米, 1.0米 等高线距" },
        { name: "特征地物编码", value: "管网、行道树和井盖的 CAD 完全编码" },
        { name: "数据格式", value: "AutoCAD Civil 3D DWG, DXF, LandXML" },
        { name: "高程基准系", value: "本地 GNSS 连续运行参考站 CORS / MSL 平均海平面" },
      ],
    },
    {
      id: "del-04",
      title: "点位测量放样报告",
      desc: "详细对比设计坐标与现场放样实测坐标的偏差分析表，对现场布局精度等级进行合规评估。",
      image: "https://leica-geosystems.com/-/media/images/leicageosystems/products/gnss-systems/more/augmented-stake-out/leica-augmented-stakeout-stake_points5.png?sc_lang=en&hash=EFA6C585D16726F4822A0D49688F2EFA",
      tags: ["Excel CSV", "PDF 成果报告"],
      hudCode: "POINTS: 120 // STATUS: VALIDATED // ERROR: <10mm",
      specs: [
        { name: "放样手段", value: "全站仪免棱镜投点 / 实时差分 GNSS 移动站" },
        { name: "测点检核", value: "采用多基点联合校准检核" },
        { name: "输出报告成果", value: "Excel CSV 点位坐标对比表、PDF 平面布置图" },
        { name: "精度等级", value: "高精度工程设计放样级" },
      ],
    },
  ] : [
    {
      id: "del-01",
      title: "Boundary Layout Survey",
      desc: "High-precision boundary lines and property stakes defining cadastral borders. Crucial for land acquisitions, zoning compliance, and legal property divisions.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcZDRFoPMGEeh47lAcMnQH7qUTXvNIX0OUEfD2IrLhjK-nCMeyJLqbA8&s=10",
      tags: ["CAD Drawings", "DXF / DWG Format"],
      hudCode: "STAKES: 48 // ACCURACY: <1.5cm // REF: BPN_INDONESIA",
      specs: [
        { name: "Cadastral Standards", value: "BPN (Badan Pertanahan Nasional) Compliant" },
        { name: "Marker Material", value: "Iron pins, concrete pillars (patok)" },
        { name: "Output Format", value: "AutoCAD DWG, Shapefile SHP, PDF Maps" },
        { name: "Applications", value: "Zoning boundaries, legal land registries" },
      ],
    },
    {
      id: "del-02",
      title: "Topographic CAD Drawings",
      desc: "CAD engineering drawings detailing ground contours, terrain elevations, existing utilities, roads, structures, and trees. Plugs directly into civil grading designs.",
      image: "https://images.squarespace-cdn.com/content/v1/62814369091b2127fa485b70/4955b079-f72c-47bb-8a19-96c1776d5da7/topo+survey+drawing.PNG",
      tags: ["CAD Contours", "DWG / DXF Format"],
      hudCode: "CONTOUR_INT: 0.5m // GRID: 5m // TARGET: SITE_CIVIL",
      specs: [
        { name: "Contour Interval", value: "0.2m, 0.5m, 1.0m intervals" },
        { name: "Feature Coding", value: "Full CAD coding for utilities and trees" },
        { name: "Data Format", value: "AutoCAD Civil 3D DWG, DXF, LandXML" },
        { name: "Elevation Reference", value: "CORS Reference / MSL (Mean Sea Level)" },
      ],
    },
    {
      id: "del-04",
      title: "Coordinate Staking Report",
      desc: "Detailed report lists showing targeted stakes vs actual coordinates and structural deviations, validating layout compliance on site.",
      image: "https://leica-geosystems.com/-/media/images/leicageosystems/products/gnss-systems/more/augmented-stake-out/leica-augmented-stakeout-stake_points5.png?sc_lang=en&hash=EFA6C585D16726F4822A0D49688F2EFA",
      tags: ["Excel CSV", "PDF Report"],
      hudCode: "POINTS: 120 // STATUS: VALIDATED // ERROR: <10mm",
      specs: [
        { name: "Staking Method", value: "Total Station reflectorless / GNSS rover" },
        { name: "Validation", value: "Double-tie measurements verified" },
        { name: "Output Reports", value: "Excel CSV coordinate table, PDF layout" },
        { name: "Accuracy Level", value: "Engineering layout grade" },
      ],
    },
  ];

  const useCases = lang === "id" ? [
    {
      sector: "Kadaster Lahan",
      use: "Menentukan batas properti hukum untuk pendaftaran tanah, penyelesaian sengketa, dan pembagian lahan.",
    },
    {
      sector: "Tata Letak Pondasi",
      use: "Pematokan koordinat tiang beton, grid struktural, dan kolom pada lokasi konstruksi.",
    },
    {
      sector: "Konstruksi Jalan",
      use: "Pematokan profil garis tengah alinyemen, penampang melintang, dan penanda kemiringan perataan jalan.",
    },
    {
      sector: "Kemajuan Perataan",
      use: "Menghitung perubahan volume tanah antara interval survei selama pembersihan lahan dan perataan lokasi.",
    },
  ] : lang === "ch" ? [
    {
      sector: "地籍确权划界",
      use: "界定法定房产及土地红线，用于产权登记、边界纠纷调处以及土地宗地分割。",
    },
    {
      sector: "基础工程定位放样",
      use: "在建筑工地现场放样混凝土管桩中心、承重结构网格及建筑柱网坐标点位。",
    },
    {
      sector: "道路施工放样",
      use: "放样路面中心线走向、断面高程以及路堤/路堑边坡放样指示桩。",
    },
    {
      sector: "土石方工程量测算",
      use: "在土地开挖和场地平整的施工周期内，通过对比不同阶段测绘数据以解算挖填方土石方量变化。"
    },
  ] : [
    {
      sector: "Land Cadastral",
      use: "Defining legal property boundaries for registration, disputes resolution, and land subdivisions.",
    },
    {
      sector: "Foundation Layout",
      use: "Staking out concrete piles, structural grids, and columns coordinates on construction sites.",
    },
    {
      sector: "Road Construction",
      use: "Staking alignment centerline profiles, cross-sections, and grading slope markers.",
    },
    {
      sector: "Grading Progress",
      use: "Computing soil volume changes between survey intervals during land clearance and site grading.",
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
            <span className="text-xs text-gray-400 light:text-slate-500">Terrestrial Mapping</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: TERRESTRIAL_SURVEY // STATUS: NOMINAL</span>
            <span>GRID: CORS_BIG // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Geodetic Land Surveying
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("solutions.terrestrial.title")} <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                {lang === "id" ? "& Solusi Survei Geodesi" : lang === "ch" ? "& 大地测量解决方案" : "& Geodetic Survey Solutions"}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              {t("solutions.terrestrial.desc")}
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
                {lang === "id" ? "Survei Geodesi Tradisional & Modern" : lang === "ch" ? "传统与现代大地测量" : "Traditional & Modern Geodetic Surveys"}
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Pemetaan terestrial adalah fondasi konstruksi sipil dan audit zonasi hukum. Dengan mengerahkan total station elektronik untuk mengukur vektor optik presisi, dan rover GPS RTK geodesi untuk memecahkan satelit multi-konstelasi, kami melabuhkan batas fisik dengan patok acuan geodesi."
                  : lang === "ch"
                    ? "地面测绘是土木工程建设和法定地籍合规核查的基础。通过部署电子全站仪测量精密光学向量，以及大地测量型 RTK GNSS 接收机接收多星多频卫星信号，我们以大地控制点锚定物理边界。"
                    : "Terrestrial mapping is the foundation of civil construction and legal zoning audits. By deploying electronic total stations to measure precise optical vectors, and geodetic RTK GPS rovers to resolve multi-constellation satellites, we anchor physical boundaries with georeferenced benchmarks."
                }
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  {lang === "id"
                    ? "Semua patok acuan dirujuk langsung ke stasiun satelit CORS BIG (Badan Informasi Geospasial), memastikan kepatuhan terhadap standar Badan Pertanahan Nasional (BPN)."
                    : lang === "ch"
                      ? "现场所有测站点均直接联接引用本地 CORS（连续运行参考站）基准站网络，确保符合地籍测绘与印尼国家土地局 (BPN) 规范要求。"
                      : "All benchmarks are referenced directly to the CORS BIG (Badan Informasi Geospasial) satellite stations link, ensuring compliance with legal Pertanahan (BPN) standards."
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
              {lang === "id" ? "Instrumen Survei Geodesi" : lang === "ch" ? "大地测量仪器" : "Geodetic Survey Instruments"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id" ? "Kami mengoperasikan total station geodesi dan stasiun receiver base/rover dengan kompensasi kemiringan visual." : lang === "ch" ? "我们运行大地测量全站仪和带倾斜补偿的 RTK GNSS 接收机。" : "We operate geodetic total stations and visual tilt-compensated base/rover receiver stations."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Total Station Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Efix TS Total Station</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Total station pemetaan optik presisi tinggi kami. Menawarkan pengukuran jarak tanpa reflektor hingga 1000 meter dan akurasi sudut 2 detik busur, menjadikannya ideal untuk tata letak kolom grid dan audit teknik sipil."
                  : lang === "ch"
                    ? "我们的高精度光学全站仪。提供长达 1000 米的无棱镜测距和 2 角秒的测角精度，是建筑轴线网放样和土木工程校验的理想选择。"
                    : "Our high-precision optical mapping total station. Offers reflectorless distance measurements up to 1000 meters and 2 arc-seconds angular accuracy, making it ideal for column grids layout and civil engineering audits."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Akurasi Sudut" : lang === "ch" ? "测角精度" : "Angular Accuracy"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">2 Arc Seconds</span>
                </div>
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Mode Pengukuran" : lang === "ch" ? "测量模式" : "Measuring Mode"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">{lang === "id" ? "Penyelarasan laser tanpa reflektor" : lang === "ch" ? "免棱镜激光对齐" : "Reflectorless laser alignment"}</span>
                </div>
              </div>
            </div>

            {/* GNSS Receivers Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Efix F7+ / F8 GNSS Receivers</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Set base dan rover RTK multi-konstelasi. Dilengkapi dengan kompensasi kemiringan IMU (hingga kemiringan 60°) dan pematokan visual AR kamera (model F8), memungkinkan koordinasi topografi yang cepat dan tepat di lingkungan yang sulit."
                  : lang === "ch"
                    ? "多星多频 RTK 基准站与移动站。配备 IMU 倾斜补偿（支持高达 60° 倾斜）和实景 AR 镜头放样（F8 型号），可在野外恶劣环境下实现快速精准的三维坐标定位。"
                    : "Multi-constellation RTK base and rover sets. Equipped with IMU tilt compensation (up to 60° tilt) and camera AR visual staking (F8 model), enabling fast and precise topographic coordination in rugged environments."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">RTK Precision</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">H: 8mm / V: 15mm</span>
                </div>
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Sensor Kemiringan" : lang === "ch" ? "倾斜传感器" : "Tilt Sensor"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">{lang === "id" ? "Survei kemiringan aktif IMU" : lang === "ch" ? "IMU 动态倾斜测量" : "IMU active tilt survey"}</span>
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
              Terrestrial Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami menyerahkan laporan koordinat, peta kontur AutoCAD, dan as-built drawing standar konstruksi.
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
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
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
                        {lang === "id" ? "Minta Sampel Data" : lang === "ch" ? "获取样本数据" : "Request Sample Data"} <ArrowUpRight className="h-4 w-4" />
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
              {lang === "id" ? "Sektor yang dilayani" : lang === "ch" ? "服务行业" : "Sectors served"}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              {lang === "id" ? "Aplikasi Industri Terestrial" : lang === "ch" ? "地面测绘应用场景" : "Terrestrial Industry Applications"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id"
                ? "Menerapkan pengukuran optik dan geodesi untuk mendukung konstruksi, pembagian wilayah, dan pengaturan teknik sipil."
                : lang === "ch"
                  ? "应用光学与大地测量测绘，以支持各类工程建设、宗地划界和土木工程设施定位。"
                  : "Applying optical and geodetic measurements to support construction, subdivisions, and civil setups."
              }
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
            {lang === "id" ? "Siap Menentukan Koordinat Lokasi Anda?" : lang === "ch" ? "准备好定位您的场地坐标了吗？" : "Ready to Layout Your Site Coordinates?"}
          </h2>

          <p className="mt-4 text-gray-400 light:text-slate-650 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
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
