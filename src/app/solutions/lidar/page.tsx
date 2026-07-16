"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Layers, 
  Cpu, 
  Navigation, 
  Eye, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight, 
  Compass, 
  Zap, 
  Settings, 
  ShieldAlert 
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function LidarSolutionPage() {
  const { t, lang } = useTranslation();
  const conceptualPillars = lang === "id" ? [
    {
      icon: <Zap className="h-6 w-6 text-brand-cyan" />,
      title: "Pulsa Laser Aktif",
      desc: "Memancarkan hingga 240.000 pulsa laser per detik, mengukur waktu terbang cahaya yang dipantulkan untuk menghitung jarak dengan presisi milimeter."
    },
    {
      icon: <Navigation className="h-6 w-6 text-brand-cyan" />,
      title: "Pemosisian RTK GNSS",
      desc: "Terintegrasi dengan penerima satelit antena ganda untuk menetapkan koordinat georeferensi bagi setiap titik data secara real-time."
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-cyan" />,
      title: "IMU Akurasi Tinggi",
      desc: "Unit Pengukuran Inersia internal yang terus memantau roll, pitch, dan yaw drone, mengoreksi arah vektor laser selama penerbangan."
    }
  ] : lang === "ch" ? [
    {
      icon: <Zap className="h-6 w-6 text-brand-cyan" />,
      title: "有源激光脉冲",
      desc: "每秒发射高达 240,000 次激光脉冲，测量反射光的飞行时间，以毫米级精度计算距离。"
    },
    {
      icon: <Navigation className="h-6 w-6 text-brand-cyan" />,
      title: "RTK GNSS 定位",
      desc: "与双天线卫星接收机集成，实时为每个数据点建立地理参考坐标。"
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-cyan" />,
      title: "高精度 IMU",
      desc: "内置惯性测量单元，持续监测无人机的翻滚、俯仰和偏航，在飞行过程中修正激光矢量方向。"
    }
  ] : [
    {
      icon: <Zap className="h-6 w-6 text-brand-cyan" />,
      title: "Active Laser Pulse",
      desc: "Emits up to 240,000 laser pulses per second, measuring the time-of-flight of reflected light to calculate distances with millimeter precision."
    },
    {
      icon: <Navigation className="h-6 w-6 text-brand-cyan" />,
      title: "RTK GNSS Positioning",
      desc: "Integrates with dual-antenna satellite receivers to establish georeferenced coordinates for every single data point in real-time."
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-cyan" />,
      title: "High-Accuracy IMU",
      desc: "A built-in Inertial Measurement Unit continuously monitors drone roll, pitch, and yaw, correcting laser vector directions during flight."
    }
  ];

  const specs = lang === "id" ? [
    { label: "Akurasi Sistem", value: "Sub-5 cm Vertikal" },
    { label: "Titik Per Detik", value: "240k (Single Return)" },
    { label: "Rentang Reflektif", value: "250m @ 10% reflektivitas" },
    { label: "Tingkat Penetrasi", value: "Hingga 5 Target Return" },
  ] : lang === "ch" ? [
    { label: "系统精度", value: "垂直低于 5 厘米" },
    { label: "每秒点数", value: "240k（单次脉冲）" },
    { label: "反射范围", value: "250米 @ 10% 反射率" },
    { label: "穿透级别", value: "高达 5 次目标回波" },
  ] : [
    { label: "System Accuracy", value: "Sub-5 cm Vertical" },
    { label: "Points Per Second", value: "240k (Single Return)" },
    { label: "Reflective Range", value: "250m @ 10% reflectivity" },
    { label: "Penetration Level", value: "Up to 5 Target Returns" },
  ];

  const deliverables = lang === "id" ? [
    {
      id: "del-01",
      title: "Point Cloud 3D Terklasifikasi",
      desc: "Kumpulan titik padat dari koordinat 3D georeferensi, diberi kode warna dan diklasifikasikan menjadi tanah, vegetasi tinggi, vegetasi sedang, dan struktur buatan. Ideal untuk menghitung tinggi kanopi pohon dan profil teknik.",
      image: "/assets/image/lidar/classified_pointcloud.png",
      tags: ["Koordinat XYZ", "Format LAS / LAZ"],
      hudCode: "POINTS: 240k/s // CLASSIFIED: TRUE // FORMAT: .LAS",
      specs: [
        { name: "Kepadatan Titik", value: "240+ titik/m² (Multi-return)" },
        { name: "Gema Return", value: "Hingga 5 Target Return" },
        { name: "Akurasi Vertikal", value: "± 3 cm RMSE" },
        { name: "Format Output", value: "LAS / LAZ, E57, XYZ ASCII" },
      ],
    },
    {
      id: "del-02",
      title: "Model Medan Digital (DTM)",
      desc: "Model elevasi tanah kosong yang menunjukkan permukaan tanah sebenarnya setelah perangkat lunak menyaring semua kanopi, semak, dan fitur buatan manusia. Sangat penting untuk survei geologi, rute pipa, dan pematangan lahan.",
      image: "/assets/image/lidar/dsm.jpeg",
      tags: ["Tanah Kosong", "GIS Raster / GeoTIFF"],
      hudCode: "GRID: 0.5m x 0.5m // VERT_ACC: 3.8cm // GEOTIFF",
      specs: [
        { name: "Ukuran Sel", value: "Ukuran grid 0.25m hingga 1.0m" },
        { name: "Penyaringan Vegetasi", value: "Penetrasi multi-gema tingkat lanjut" },
        { name: "Kompatibilitas Kontur", value: "Pembuatan kontur langsung" },
        { name: "Format Data", value: "GeoTIFF, XYZ ASCII, ASCII Grid" },
      ],
    },
    {
      id: "del-03",
      title: "Model Permukaan Digital (DSM)",
      desc: "Model yang menangkap titik elevasi tertinggi dari semua fitur di permukaan, termasuk puncak kanopi, kabel listrik, dan atap bangunan. Penting untuk analisis ruang pandang perkotaan dan peta tinggi kanopi.",
      image: "/assets/image/lidar/DSM.jpg",
      tags: ["Permukaan Atas", "Peta Tinggi"],
      hudCode: "DSM_GRID: 0.5m // CANOPY: TRUE // FORMAT: .TIF",
      specs: [
        { name: "Penangkapan Fitur", value: "Termasuk bangunan, kanopi, jalur transmisi" },
        { name: "Presisi Vertikal", value: "Akurasi sub-5 cm" },
        { name: "GSD Horizontal", value: "Output raster visual 1.5 cm" },
        { name: "Kompatibilitas", value: "ArcGIS, QGIS, Global Mapper" },
      ],
    },
    {
      id: "del-04",
      title: "Kontur Topografi",
      desc: "Garis kontur elevasi presisi tinggi yang siap digunakan di CAD, dihasilkan pada interval detail (misalnya, 0,5m hingga 1m) untuk desain teknik dan perencanaan drainase. Dapat langsung diimpor ke AutoCAD atau Civil 3D.",
      image: "/assets/image/lidar/topolines.jpg",
      tags: ["Kontur CAD", "Format DXF / DWG"],
      hudCode: "CONTOUR_INT: 0.5m // FILE: .DWG/.DXF // V_ACC: 3cm",
      specs: [
        { name: "Interval Kontur", value: "0.2m, 0.5m, 1.0m dapat disesuaikan" },
        { name: "Jenis Geometri", value: "Aset CAD Polyline 2D & 3D" },
        { name: "Kompatibilitas Lunak", value: "AutoCAD Civil 3D, Bentley MicroStation" },
        { name: "Kelas Presisi", value: "Topografi Tingkat Rekayasa Teknik" },
      ],
    },
  ] : lang === "ch" ? [
    {
      id: "del-01",
      title: "3D 分类点云",
      desc: "地理参考 3D 坐标的密集点云，经过色彩编码并分类为地面、高植被、中等植被和人造结构。非常适合计算树木阴影高度和工程剖面图。",
      image: "/assets/image/lidar/classified_pointcloud.png",
      tags: ["XYZ 坐标", "LAS / LAZ 格式"],
      hudCode: "POINTS: 240k/s // CLASSIFIED: TRUE // FORMAT: .LAS",
      specs: [
        { name: "点云密度", value: "每平方米 240+ 点 (多次反射)" },
        { name: "回波数量", value: "高达 5 次目标回波" },
        { name: "垂直精度", value: "± 3 厘米 RMSE" },
        { name: "输出格式", value: "LAS / LAZ, E57, XYZ ASCII" },
      ],
    },
    {
      id: "del-02",
      title: "数字地形模型 (DTM)",
      desc: "在软件过滤掉所有植被覆盖、灌木和人造地物之后，显示真实地表水平的裸地高程模型。对于地质测量、管道选线和场地平整至关重要。",
      image: "/assets/image/lidar/dsm.jpeg",
      tags: ["裸地表面", "GIS 栅格 / GeoTIFF"],
      hudCode: "GRID: 0.5m x 0.5m // VERT_ACC: 3.8cm // GEOTIFF",
      specs: [
        { name: "网格大小", value: "0.25米至1.0米网格单元" },
        { name: "植被过滤", value: "先进的多回波穿透技术" },
        { name: "等高线兼容性", value: "直接生成等高线" },
        { name: "数据格式", value: "GeoTIFF, XYZ ASCII, ASCII Grid" },
      ],
    },
    {
      id: "del-03",
      title: "数字表面模型 (DSM)",
      desc: "捕获地表所有特征最高高程点的模型，包括树冠顶部、输电线和建筑物屋顶。对于城市视线分析和树冠高度图必不可少。",
      image: "/assets/image/lidar/DSM.jpg",
      tags: ["顶部表面", "高度图"],
      hudCode: "DSM_GRID: 0.5m // CANOPY: TRUE // FORMAT: .TIF",
      specs: [
        { name: "特征提取", value: "包括建筑物、树冠、输电线路" },
        { name: "垂直精度", value: "低于 5 厘米精度" },
        { name: "水平 GSD", value: "1.5 厘米视觉栅格输出" },
        { name: "兼容性", value: "ArcGIS, QGIS, Global Mapper" },
      ],
    },
    {
      id: "del-04",
      title: "地形等高线",
      desc: "高精度、CAD 就绪的等高线，以详细的间隔（例如 0.5 米至 1 米）生成，用于工程设计和排水规划。直接导入 AutoCAD 或 Civil 3D。",
      image: "/assets/image/lidar/topolines.jpg",
      tags: ["CAD 等高线", "DXF / DWG 格式"],
      hudCode: "CONTOUR_INT: 0.5m // FILE: .DWG/.DXF // V_ACC: 3cm",
      specs: [
        { name: "等高线间隔", value: "0.2米、0.5米、1.0米可定制" },
        { name: "几何类型", value: "2D 和 3D 折线 CAD 资产" },
        { name: "软件兼容性", value: "AutoCAD Civil 3D, Bentley MicroStation" },
        { name: "精度等级", value: "工程级地形图" },
      ],
    },
  ] : [
    {
      id: "del-01",
      title: "3D Classified Point Cloud",
      desc: "A dense cloud of georeferenced 3D coordinates, color-coded and classified into ground, high vegetation, medium vegetation, and artificial structures. Ideal for calculating tree canopy heights and engineering profiles.",
      image: "/assets/image/lidar/classified_pointcloud.png",
      tags: ["XYZ Coordinates", "LAS / LAZ Format"],
      hudCode: "POINTS: 240k/s // CLASSIFIED: TRUE // FORMAT: .LAS",
      specs: [
        { name: "Point Density", value: "240+ pts/m² (Multiple returns)" },
        { name: "Return Echoes", value: "Up to 5 Target Returns" },
        { name: "Vertical Accuracy", value: "± 3 cm RMSE" },
        { name: "Output Format", value: "LAS / LAZ, E57, XYZ ASCII" },
      ],
    },
    {
      id: "del-02",
      title: "Digital Terrain Model (DTM)",
      desc: "A bare-earth elevation model showing the actual ground surface after software filters out all canopy, bushes, and man-made features. Vital for geological surveys, pipeline routing, and site grading.",
      image: "/assets/image/lidar/dsm.jpeg",
      tags: ["Bare-Earth", "GIS Raster / GeoTIFF"],
      hudCode: "GRID: 0.5m x 0.5m // VERT_ACC: 3.8cm // GEOTIFF",
      specs: [
        { name: "Cell Size", value: "0.25m to 1.0m grid cells" },
        { name: "Vegetation Filtering", value: "Advanced Multi-echo penetration" },
        { name: "Contour Compatibility", value: "Direct contours generation" },
        { name: "Data Format", value: "GeoTIFF, XYZ ASCII, ASCII Grid" },
      ],
    },
    {
      id: "del-03",
      title: "Digital Surface Model (DSM)",
      desc: "A model capturing the highest elevation points of all features on the surface, including canopy tops, power lines, and building roofs. Essential for urban line-of-sight reviews and canopy height maps.",
      image: "/assets/image/lidar/DSM.jpg",
      tags: ["Top Surface", "Height Map"],
      hudCode: "DSM_GRID: 0.5m // CANOPY: TRUE // FORMAT: .TIF",
      specs: [
        { name: "Feature Capture", value: "Includes buildings, canopy, transmission lines" },
        { name: "Vertical Precision", value: "Sub-5 cm accuracy" },
        { name: "Horizontal GSD", value: "1.5 cm visual raster output" },
        { name: "Compatibility", value: "ArcGIS, QGIS, Global Mapper" },
      ],
    },
    {
      id: "del-04",
      title: "Topographic Contours",
      desc: "High-precision CAD-ready elevation contour lines generated at detailed intervals (e.g., 0.5m to 1m) for engineering design and drainage planning. Directly imported into AutoCAD or Civil 3D.",
      image: "/assets/image/lidar/topolines.jpg",
      tags: ["CAD Contours", "DXF / DWG Format"],
      hudCode: "CONTOUR_INT: 0.5m // FILE: .DWG/.DXF // V_ACC: 3cm",
      specs: [
        { name: "Contour Interval", value: "0.2m, 0.5m, 1.0m customizable" },
        { name: "Geometry Type", value: "2D & 3D Polyline CAD assets" },
        { name: "Software Compatibility", value: "AutoCAD Civil 3D, Bentley MicroStation" },
        { name: "Precision Class", value: "Engineering Grade Topography" },
      ],
    },
  ];

  const useCases = lang === "id" ? [
    { sector: "Pertambangan & Volumetrik", use: "Estimasi volume stockpile, pemantauan stabilitas lereng struktural, dan pemetaan penggalian pit yang cepat." },
    { sector: "Infrastruktur & Jalan", use: "Pemetaan koridor untuk jalan, kereta api, dan jembatan, menyediakan penampang struktural dan profil medan." },
    { sector: "Kehutanan & Karbon", use: "Estimasi biomassa, metrik tinggi kanopi, pelacakan inventaris hutan, dan pemantauan lingkungan." },
    { sector: "Inspeksi Jalur Transmisi Listrik", use: "Analisis jarak bebas antara konduktor listrik dan vegetasi di sekitarnya untuk mengidentifikasi bahaya langsung." }
  ] : lang === "ch" ? [
    { sector: "矿业与体积测量", use: "矿料堆体积估算、结构边坡稳定性监测以及快速基坑开挖测绘。" },
    { sector: "基础设施与道路", use: "道路、铁路和桥梁廊道测绘，提供结构横断面和地形剖面。" },
    { sector: "林业与碳源", use: "生物量估算、树冠高度指标、森林资源跟踪和环境监测。" },
    { sector: "电力线巡检", use: "输电导线与周围植被之间的安全距离分析，识别即时安全隐患。" }
  ] : [
    { sector: "Mining & Volumetrics", use: "Stockpile volume estimation, structural slope stability monitoring, and rapid pit excavation mapping." },
    { sector: "Infrastructure & Roads", use: "Corridor mapping for roads, railways, and bridges, providing structural cross-sections and terrain profiles." },
    { sector: "Forestry & Carbon", use: "Biomass estimation, canopy height metrics, forest inventory tracking, and environmental monitoring." },
    { sector: "Power Line Inspection", use: "Clearance analysis between power conductors and surrounding vegetation to identify immediate hazards." }
  ];

  return (
    <div className="bg-[#090d16] light:bg-slate-50 min-h-screen text-gray-200 light:text-slate-700 transition-colors duration-300">
      
      {/* Telemetry Header/Hero */}
      <section className="relative py-24 border-b border-white/5 light:border-slate-200 overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
        
        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Navigation Back */}
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
            <span className="text-xs text-gray-400 light:text-slate-500">LiDAR</span>
          </div>

          {/* Telemetry HUD display line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: ACQUISITION_STAGE // SENSOR_LINK: STANDBY</span>
            <span>HDG: 000° N // LAT: -6.2088 // LNG: 106.8456</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              LiDAR Remote Sensing
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("solutions.lidar.title")} <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                {lang === "id" ? "& Solusi Pemetaan" : lang === "ch" ? "& 地图解决方案" : "& Mapping Solutions"}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              {t("solutions.lidar.desc")}
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
            
            {/* Description (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                {lang === "id" ? "Ikhtisar Teknologi" : lang === "ch" ? "技术概述" : "Technology Overview"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                {lang === "id" ? "Bagaimana LiDAR Drone Bekerja" : lang === "ch" ? "无人机激光雷达如何工作" : "How Drone LiDAR Works"}
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id" 
                  ? "LiDAR (Light Detection and Ranging) adalah teknologi penginderaan jauh aktif yang memancarkan pulsa laser cepat ke arah tanah. Dengan mengukur waktu pantulan pulsa laser ini, dikombinasikan dengan data koordinat GNSS (GPS) dan perhitungan kemiringan IMU (Inertial Measurement Unit), kami menghasilkan peta 3D dengan akurasi sentimeter untuk permukaan tanah dan aset di atasnya."
                  : lang === "ch"
                    ? "LiDAR（激光探测与测量）是一种主动遥感技术，向地面发射快速激光脉冲。通过测量这些脉冲的精确返回时间，并结合 GNSS（GPS）坐标数据和惯性测量单元（IMU）的俯仰和翻滚计算，我们能够生成地面和地表资产的高密度、厘米级精度 3D 地图。"
                    : "LiDAR (Light Detection and Ranging) is an active remote sensing technology that projects rapid laser pulses toward the ground. By measuring the precise return times of these pulses, combined with GNSS (GPS) coordinate data and Inertial Measurement Unit (IMU) pitch and roll calculations, we generate high-density, centimeter-accurate 3D maps of both the ground and surface assets."
                }
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  {lang === "id"
                    ? "Berbeda dengan fotogrametri tradisional, LiDAR tidak bergantung pada pencocokan visual atau cahaya matahari, artinya kami dapat memindai bayangan, kanopi hutan lebat, dan koridor vertikal dengan keandalan tinggi."
                    : lang === "ch"
                      ? "与传统的摄影测量不同，LiDAR 不依赖于视觉匹配或日光，这意味着我们可以以极高的可靠性扫描阴影、茂密的森林冠层和狭窄的垂直资产。"
                      : "Unlike traditional photogrammetry, LiDAR does not rely on visual matching or daylight, meaning we can scan shadows, forested canopies, and narrow vertical assets with unmatched reliability."
                  }
                </p>
              </div>
            </div>

            {/* Concept cards (Right) */}
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

      {/* Canopy Penetration Highlights */}
      <section className="py-20 bg-gradient-to-r from-brand-blue/10 via-[#070b12] light:via-slate-100/50 to-brand-blue/10 border-y border-white/5 light:border-slate-200 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Graphic Representation (Left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] p-6 rounded-2xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white backdrop-blur-sm shadow-2xl light:shadow-sm">
                {/* Tech brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-cyan/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-cyan/40" />
                
                <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">
                  {lang === "id" ? "METRIK PANTULAN KANOPI" : lang === "ch" ? "林冠回波指标" : "CANOPY RETURN METRICS"}
                </h4>

                <div className="space-y-4">
                  {/* Return 1 */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#10b981]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">RETURN #1 // 0.00μs</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">
                        {lang === "id" ? "Puncak Kanopi Pohon" : lang === "ch" ? "树冠顶部" : "Top of Tree Canopy"}
                      </p>
                    </div>
                    <span className="text-[10px] bg-[#10b981]/15 text-[#10b981] px-2 py-0.5 rounded font-mono">100%</span>
                  </div>

                  {/* Return 2 */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#3b82f6]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">RETURN #2 // 0.05μs</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">
                        {lang === "id" ? "Semak & Ranting" : lang === "ch" ? "下层与树枝" : "Understory & Branches"}
                      </p>
                    </div>
                    <span className="text-[10px] bg-[#3b82f6]/15 text-[#3b82f6] px-2 py-0.5 rounded font-mono">42%</span>
                  </div>

                  {/* Return Last */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-brand-cyan">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">LAST RETURN // 0.12μs</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">
                        {lang === "id" ? "Permukaan tanah kosong (DTM)" : lang === "ch" ? "裸地表面 (DTM)" : "Bare ground surface (DTM)"}
                      </p>
                    </div>
                    <span className="text-[10px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded font-mono">12%</span>
                  </div>
                </div>

                <p className="mt-6 text-[10px] text-gray-500 text-center leading-relaxed">
                  {lang === "id"
                    ? "Pantulan ganda menyaring tutupan vegetasi, memungkinkan ekstraksi kontur tanah asli."
                    : lang === "ch"
                      ? "多次回波可过滤植被覆盖，从而能够提取裸地等高线。"
                      : "Multiple returns filter vegetation cover, enabling the extraction of bare-earth contours."
                  }
                </p>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                {lang === "id" ? "Kompetensi Utama" : lang === "ch" ? "核心竞争力" : "Core Competency"}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                {lang === "id" ? "Menembus Vegetasi dengan Teknologi Multi-Return" : lang === "ch" ? "利用多回波技术穿透植被" : "Filtering Vegetation with Multi-Return Tech"}
              </h3>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Salah satu keunggulan terbesar LiDAR adalah kemampuannya menembus vegetasi. Saat pulsa laser ditembakkan, ia tidak langsung terhenti oleh daun pertama. Pulsa tunggal dapat menghasilkan beberapa refleksi (return) saat melewati sela-sela kanopi pohon, menyaring ke bawah melalui cabang, dan akhirnya memantul kembali dari permukaan tanah asli."
                  : lang === "ch"
                    ? "LiDAR 的最大优势之一是其穿透植被的能力。当发射激光束时，它并不会停留在第一片叶子上。当单次脉冲撞击树冠中的间隙、向下过滤穿过树枝并最终从实际地面反弹时，它可以返回多次反射。"
                    : "One of the greatest advantages of LiDAR is its ability to penetrate vegetation. When a laser beam is fired, it does not stop at the first leaf. A single pulse can return multiple reflections as it hits gaps in the canopy, filters down through the branches, and finally bounces off the actual ground."
                }
              </p>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Dengan memproses data beberapa pantulan ini, kami dapat menyingkirkan tutupan pohon dan semak-semak dalam pengolahan data pasca-survei, sehingga menampakkan elevasi tanah yang sebenarnya. Ini menjadikan LiDAR satu-satunya metode pemetaan tanah yang andal untuk area hutan lebat dan endapan mineral."
                  : lang === "ch"
                    ? "通过处理这些多次回波，我们在后期处理中剥离树木覆盖物和灌木，显示出真实的地表水平。这使得 LiDAR 成为森林地形、公路走廊和覆盖有茂密叶子的矿床的唯一可行测量方法。"
                    : "By processing these multiple returns, we strip away tree cover and bushes in post-processing, revealing the true ground level. This makes LiDAR the only viable surveying method for forested terrain, highway corridors, and mineral deposits covered in heavy foliage."
                }
              </p>
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
              {lang === "id" ? "Peralatan Survei Skala Enterprise" : lang === "ch" ? "企业级测量设备" : "Enterprise Survey Equipment"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id" ? "Kami mengoperasikan perangkat keras kelas atas untuk menjamin presisi tingkat sentimeter dan integritas data." : lang === "ch" ? "我们运行顶级硬件，以确保厘米级精度和数据完整性。" : "We operate top-tier hardware to guarantee centimeter-level precision and data integrity."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Drone Platform Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 400 RTK Platform</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Sistem drone enterprise berkemampuan angkut tinggi kami. Dirancang untuk kondisi survei yang keras, drone ini bersertifikasi tahan cuaca IP56, dilengkapi sensor penghindar rintangan canggih, dan sistem hot-swap baterai ganda. Terintegrasi dengan sistem RTK GNSS untuk akurasi koordinat tinggi."
                  : lang === "ch"
                    ? "我们的重载企业级无人机系统。专为恶劣的测量条件设计，具有 IP56 天气防护等级、先进的避障传感器以及支持连续运行的双电池热插拔。配备集成的 RTK GNSS 系统，可确保极其精确的空中坐标。"
                    : "Our heavy-lift enterprise drone system. Designed for harsh surveying conditions, it features an IP56 weather rating, advanced obstacle avoidance sensors, and dual-battery hot-swapping for continuous operation. Equipped with integrated RTK GNSS systems, it ensures ultra-accurate aerial coordinates."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Waktu Terbang" : lang === "ch" ? "飞行时间" : "Flight Time"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">
                    {lang === "id" ? "Hingga 60 menit" : lang === "ch" ? "长达 60 分钟" : "Up to 60 minutes"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">IP Rating</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">
                    {lang === "id" ? "Tahan Cuaca IP56" : lang === "ch" ? "IP56 防风雨" : "IP56 Weather Resistant"}
                  </span>
                </div>
              </div>
            </div>

            {/* Sensor Payload Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Zenmuse L3 Sensor</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Sensor payload LiDAR canggih yang mengintegrasikan scanner laser, IMU presisi tinggi, dan kamera pemetaan CMOS 4/5 inci. Zenmuse L3 menawarkan akurasi vertikal hingga 3 cm, deteksi multi-pantulan hingga 5 return, dan jarak pemindaian 300 meter."
                  : lang === "ch"
                    ? "最先进的 LiDAR 负载，集成了机载扫描仪、高精度自主研发的 IMU 和 4/5 英寸 CMOS 画幅制图相机。L3 提供 3 厘米的垂直精度、多次目标回波（最多 5 次）以及 300 米的扫描目标范围。"
                    : "A state-of-the-art LiDAR payload integrating an airborne scanner, high-precision self-developed IMU, and a 4/5-inch CMOS frame mapping camera. The L3 offers vertical accuracy of 3 cm, multiple target return returns (up to 5), and a scanning target range of 300 meters."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Akurasi Vertikal" : lang === "ch" ? "垂直精度" : "Vertical Accuracy"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">
                    {lang === "id" ? "3 cm (Tingkat Survei)" : lang === "ch" ? "3 厘米（测量级）" : "3 cm (Survey Grade)"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Rentang Deteksi" : lang === "ch" ? "检测范围" : "Target Detection Range"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">300m @ 10% Reflectivity</span>
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
              LiDAR Survey Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data point cloud LiDAR presisi tinggi menjadi produk pemetaan spasial detail yang siap diintegrasikan.
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
                  {/* Left Side: Image Visual with Tech HUD styling */}
                  <div className="w-full lg:w-1/2">
                    <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl light:shadow-md">
                      
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 light:from-white/70 via-transparent to-transparent pointer-events-none" />

                      {/* Tech Bracket HUD overlay */}
                      <div className="absolute inset-3 border border-white/5 light:border-slate-900/5 pointer-events-none" />
                      <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-brand-cyan/60 pointer-events-none" />
                      <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-brand-cyan/60 pointer-events-none" />
                      
                      {/* Floating tag pills */}
                      <div className="absolute top-5 right-5 flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="bg-dark-bg/85 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-bold tracking-wider text-gray-300 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* HUD Metadata Spec Label */}
                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center bg-[#090d16]/80 backdrop-blur-sm border border-white/5 px-3 py-2 rounded-lg text-[9px] font-mono text-gray-400">
                        <span>{item.hudCode}</span>
                        <span className="text-brand-cyan font-bold">READY</span>
                      </div>

                    </div>
                  </div>

                  {/* Right Side: Detailed Descriptions & Param Grid */}
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

                    {/* Specification list */}
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

                    {/* Button link */}
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
              LiDAR Industry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Serving various high-precision sectors in Indonesia with specialized geospatial workflows.
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

      {/* Call to Action Banner */}
      <section className="py-20 relative overflow-hidden border-t border-white/5 light:border-slate-200 transition-colors">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        
        {/* Glow */}
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
            {t("contact.getInTouch")}
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
            {lang === "id" ? "Siap Memetakan Lokasi Proyek Anda?" : lang === "ch" ? "准备好测绘您的项目地点了吗？" : "Ready to Map Your Project Site?"}
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
