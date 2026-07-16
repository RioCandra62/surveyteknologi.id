"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Eye, Layers, Compass, Maximize2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function SpatialCameraSolutionPage() {
  const { t, lang } = useTranslation();
  const specs = lang === "id" ? [
    { label: "Resolusi Mesh", value: "Mesh 3D Fotorealistis" },
    { label: "Tampilan Panorama", value: "Bidang Pandang 360° (FOV)" },
    { label: "Kecepatan Pemrosesan", value: "Pemrosesan Cloud Cepat" },
    { label: "Aplikasi Utama", value: "Kembaran Digital & Audit BIM" },
  ] : lang === "ch" ? [
    { label: "网格解析度", value: "照片级逼真三维网格" },
    { label: "全景视图", value: "360° 视场角 (FOV)" },
    { label: "处理效率", value: "云端极速解算" },
    { label: "主打应用", value: "数字孪生与 BIM 三维审计" },
  ] : [
    { label: "Mesh Resolution", value: "Photorealistic 3D Mesh" },
    { label: "Panoramic View", value: "360° Field of View (FOV)" },
    { label: "Processing Speed", value: "Fast Cloud Processing" },
    { label: "Primary Application", value: "Digital Twins & BIM Audits" },
  ];

  const conceptualPillars = lang === "id" ? [
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "Penjahitan Panorama HDR",
      desc: "Larik multi-lensa menangkap foto dengan rentang dinamis tinggi, menjahitnya menjadi bola panorama 360° tanpa celah dengan representasi warna yang nyata."
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Tautan Mesh Fotogrametri",
      desc: "Menyelaraskan geometri struktural di berbagai data visual untuk menyusun mesh 3D padat dari interior ruangan dan detail aset."
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "Tinjauan Spasial Interaktif",
      desc: "Menyusun tur visual georeferensi, memungkinkan pemangku kepentingan untuk memeriksa dimensi fasilitas dari jarak jauh melalui browser web standar."
    },
  ] : lang === "ch" ? [
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "HDR 全景无缝拼接",
      desc: "多镜头阵列采集高动态范围照片，并将其拼接成无缝的 360° 全景球幕图景，呈现逼真色彩还原。"
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "摄影测量网格重构",
      desc: "对齐视觉图像间的几何结构特征，以生成建筑室内以及设备细节的高密三维彩色网格。"
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "交互式空间巡检",
      desc: "编译出带地理坐标的空间漫游通道，方便相关各方通过普通浏览器远程评估和测量设施尺寸。"
    },
  ] : [
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "HDR Panoramic Stitching",
      desc: "Multi-lens arrays capture high-dynamic-range photos, stitching them into seamless 360° panoramic spheres with true color representation.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Photogrammetric Mesh Link",
      desc: "Aligns structural geometries across visual data to compile dense 3D meshes of room interiors and asset details.",
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-cyan" />,
      title: "Interactive Spatial Reviews",
      desc: "Compiles georeferenced visual walkthroughs, allowing stakeholders to inspect facility dimensions remotely via standard web browsers.",
    },
  ];

  const deliverables = lang === "id" ? [
    {
      id: "del-01",
      title: "Tur Virtual 3D Interaktif",
      desc: "Jalur jalan spasial interaktif, memungkinkan pengguna untuk mengunjungi lingkungan dalam ruangan yang dipindai secara online. Penting untuk tur visual real estat dan peninjauan properti jarak jauh.",
      image: "/assets/image/portalcam/walkthrough.jpeg",
      tags: ["Tautan Web", "Tata Letak HTML5"],
      hudCode: "WALK_NODES: 42 // RESOLUTION: 8K // COMPAT: MOBILE",
      specs: [
        { name: "Kualitas Visual", value: "Panorama 8K definisi tinggi" },
        { name: "Tautan Navigasi", value: "Navigasi titik koordinat interaktif" },
        { name: "Dukungan Platform", value: "Web Desktop, Tablet, dan Seluler" },
        { name: "Tag Catatan", value: "Tambahkan catatan pada elemen struktural vertikal" },
      ],
    },
    {
      id: "del-02",
      title: "Mesh 3D Fotorealistis",
      desc: "Mesh bertekstur 3D dengan kerapatan tinggi yang menangkap bentuk dan dimensi aset. Terintegrasi langsung ke arsitektur BIM dan kembaran digital CAD.",
      image: "/assets/image/portalcam/detail.jpeg",
      tags: ["OBJ / FBX", "3D Tiles"],
      hudCode: "POLY_COUNT: 8.4M // FORMAT: OBJ/FBX // TEXTURE: 4K",
      specs: [
        { name: "Kualitas Tekstur", value: "Peta visual 4K/8K fotorealistis" },
        { name: "Kerapatan Mesh", value: "Permukaan segitiga beresolusi tinggi" },
        { name: "Format Industri", value: "OBJ, FBX, 3D Tiles, tautan Cesium" },
        { name: "Kompatibilitas", value: "Autodesk Revit, Unity, Unreal Engine" },
      ],
    },
    {
      id: "del-03",
      title: "Inventarisasi Aset Visual",
      desc: "Tata letak dan daftar terperinci yang mengidentifikasi aset struktural, kolom struktural, saluran listrik, dan tata letak fasilitas, dipetakan langsung dari model 3D.",
      image: "/assets/image/portalcam/visual_asset.jpeg",
      tags: ["Laporan PDF", "Inventaris CSV"],
      hudCode: "ITEMS: 120+ // TARGET: AUDIT // REF: DESIGN_GRID",
      specs: [
        { name: "Pemetaan Fitur", value: "Mengidentifikasi outlet HVAC, kolom, panel" },
        { name: "Format Database", value: "Excel CSV, laporan PDF, file koordinat" },
        { name: "Kelas Akurasi", value: "Estimasi lokasi tingkat sentimeter" },
        { name: "Pemrosesan", value: "Audit manual dan validasi AI" },
      ],
    },
  ] : lang === "ch" ? [
    {
      id: "del-01",
      title: "3D 实景虚拟漫游",
      desc: "交互式空间漫游通道，允许用户在线浏览任意扫描的室内环境。这对于房地产线上看房和资产远程巡检极其关键。",
      image: "/assets/image/portalcam/walkthrough.jpeg",
      tags: ["网页链接", "HTML5 布局"],
      hudCode: "WALK_NODES: 42 // RESOLUTION: 8K // COMPAT: MOBILE",
      specs: [
        { name: "图像画质", value: "高清 8K 全景摄影" },
        { name: "漫游体验", value: "交互式航点跳转导航" },
        { name: "平台适配", value: "桌面网页、平板电脑及手机浏览器" },
        { name: "空间标签", value: "可直接在三维空间特定设备上附加批注" },
      ],
    },
    {
      id: "del-02",
      title: "高真实感 3D 彩色网格",
      desc: "高密度 3D 纹理网格模型，精准捕捉资产外观和尺寸。完美兼容 BIM 软件平台及 CAD 数字孪生系统。",
      image: "/assets/image/portalcam/detail.jpeg",
      tags: ["OBJ / FBX", "3D Tiles"],
      hudCode: "POLY_COUNT: 8.4M // FORMAT: OBJ/FBX // TEXTURE: 4K",
      specs: [
        { name: "纹理清晰度", value: "实景逼真的 4K/8K 视觉贴图" },
        { name: "网格精细度", value: "高精度三角化重构表面" },
        { name: "行业标准格式", value: "OBJ, FBX, 3D Tiles, Cesium 连接" },
        { name: "兼容平台", value: "Autodesk Revit, Unity, Unreal Engine" },
      ],
    },
    {
      id: "del-03",
      title: "可视化资产台账清单",
      desc: "提取结构资产、承重柱、电气桥架和设施布局的详细目录，直接从 3D 实景模型中提取输出。",
      image: "/assets/image/portalcam/visual_asset.jpeg",
      tags: ["PDF 报告", "CSV 台账清单"],
      hudCode: "ITEMS: 120+ // TARGET: AUDIT // REF: DESIGN_GRID",
      specs: [
        { name: "测绘要素", value: "识别暖通设备、管道、电气盘柜和立柱" },
        { name: "台账格式", value: "Excel CSV 列表、PDF 巡检报告、点位坐标文件" },
        { name: "精度等级", value: "厘米级物体几何定位估算" },
        { name: "数据校对", value: "专业工程团队人工审核联合 AI 校验" },
      ],
    },
  ] : [
    {
      id: "del-01",
      title: "3D Virtual Walkthrough",
      desc: "Interactive spatial walk paths, allowing users to visit any scanned indoor environment online. Crucial for real estate visual tours and remote property scoping.",
      image: "/assets/image/portalcam/walkthrough.jpeg",
      tags: ["Web-Link", "HTML5 Layout"],
      hudCode: "WALK_NODES: 42 // RESOLUTION: 8K // COMPAT: MOBILE",
      specs: [
        { name: "Visual Quality", value: "High-definition 8K panoramas" },
        { name: "Scoping Link", value: "Interactive waypoint navigation" },
        { name: "Platform Support", value: "Desktop, Tablet, and Mobile Web" },
        { name: "Tagging", value: "Add notes on vertical structural elements" },
      ],
    },
    {
      id: "del-02",
      title: "Photorealistic 3D Mesh",
      desc: "High-density 3D textured mesh capturing shapes and dimensions of assets. Plugs directly into BIM architectures and CAD twins.",
      image: "/assets/image/portalcam/detail.jpeg",
      tags: ["OBJ / FBX", "3D Tiles"],
      hudCode: "POLY_COUNT: 8.4M // FORMAT: OBJ/FBX // TEXTURE: 4K",
      specs: [
        { name: "Texture Quality", value: "Photorealistic 4K/8K visual maps" },
        { name: "Mesh Density", value: "High-resolution triangulated surface" },
        { name: "Industry Formats", value: "OBJ, FBX, 3D Tiles, Cesium link" },
        { name: "Compatibility", value: "Autodesk Revit, Unity, Unreal Engine" },
      ],
    },
    {
      id: "del-03",
      title: "Visual Asset Inventory",
      desc: "Detailed layouts and lists identifying structural assets, structural columns, electrical conduits, and facilities layouts, mapped directly from 3D models.",
      image: "/assets/image/portalcam/visual_asset.jpeg",
      tags: ["PDF Report", "CSV Inventory"],
      hudCode: "ITEMS: 120+ // TARGET: AUDIT // REF: DESIGN_GRID",
      specs: [
        { name: "Feature Mapping", value: "Identifies HVAC outlets, columns, panels" },
        { name: "Database Format", value: "Excel CSV, PDF reports, coordinate files" },
        { name: "Accuracy Class", value: "Centimeter-level location estimates" },
        { name: "Processing", value: "Manual audit and AI validation" },
      ],
    },
  ];

  const useCases = lang === "id" ? [
    {
      sector: "Pemetaan Real Estat",
      use: "Jalur jalan virtual dan denah lantai properti serta ruang pamer ritel mewah untuk daftar online.",
    },
    {
      sector: "BIM & Rekonstruksi",
      use: "Mengaudit tata letak interior untuk memodelkan dinding struktural, kolom, dan memverifikasi distribusi saluran.",
    },
    {
      sector: "Inspeksi Pabrik",
      use: "Direktori aset visual yang memungkinkan manajer pabrik memeriksa tata letak pabrik dan memantau pengaturan dari jarak jauh.",
    },
    {
      sector: "Pusat Pameran",
      use: "Panduan interaktif virtual untuk museum, pusat konvensi, dan tur galeri digital.",
    },
  ] : lang === "ch" ? [
    {
      sector: "房产展示看房",
      use: "对商业写字楼、高档商铺、展示空间制作实景三维云漫游及提供平面图展示。",
    },
    {
      sector: "BIM 重构设计",
      use: "核验室内既有管线、立柱 and 墙面位置，为装修改造提供数字建模参考。",
    },
    {
      sector: "工厂可视化诊断",
      use: "可视化资产分布目录，帮助厂长或安全员异地查看工厂陈设，监控生产线布置。",
    },
    {
      sector: "展馆景区数字展出",
      use: "为博物馆、会议展览中心和美术馆创建虚拟云交互游览路线导航。",
    },
  ] : [
    {
      sector: "Real Estate Scoping",
      use: "Virtual walk paths and floorplans of properties and luxury retail showrooms for online listings.",
    },
    {
      sector: "BIM & Reconstruction",
      use: "Auditing interior layouts to model structural walls, columns, and verify conduits distribution.",
    },
    {
      sector: "Factory Inspections",
      use: "Visual asset directories allowing plant managers to inspect factory layouts and monitor setups remotely.",
    },
    {
      sector: "Exhibition Centers",
      use: "Virtual interactive guides for museums, convention centers, and digital gallery walkthroughs.",
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
            <span className="text-xs text-gray-400 light:text-slate-500">Spatial Camera</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: SPATIAL_ACQ // STATUS: NOMINAL</span>
            <span>GRID: CLOUD_LINK // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Digital Twin Capture
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("solutions.spatialCamera.title")} <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                {lang === "id" ? "& Pemetaan Digital Twin" : lang === "ch" ? "& 数字孪生测绘" : "& Digital Twin Mapping"}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              {t("solutions.spatialCamera.desc")}
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
                {lang === "id" ? "Merajut Realitas ke dalam Model 3D" : lang === "ch" ? "拼接实景还原三维数字世界" : "Stitching Reality into 3D Models"}
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Pemetaan kamera spasial menggunakan sistem visual multi-sensor untuk mendokumentasikan lingkungan interior. Dengan menangkap bola panorama HDR definisi tinggi di beberapa titik target, perangkat lunak kami menyusun grid koordinat bergeoreferensi. Penyesuaian fotogrametri memproses hubungan visual ini, menyusun model 3D dan kembaran digital yang terperinci."
                  : lang === "ch"
                    ? "空间相机测绘采用多传感器视觉系统记录室内空间。通过捕获多个关键站点的超高清 HDR 全景球幕影像，我们的算法后台将它们编排进包含地坐标的空间网格中。摄影测量算法解算不同测站的图像相关性，以自动化重建三维精细模型与实景孪生。"
                    : "Spatial camera mapping utilizes multi-sensor visual systems to document interior environments. By capturing high-definition HDR panoramic spheres across multiple target points, our software constructs a georeferenced coordinate grid. Photogrammetry adjustments process these visual relationships, compiling detailed 3D models and digital twins."
                }
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  {lang === "id"
                    ? "Ideal untuk daftar real estat, manajemen aset, dan audit konstruksi, solusi visual ini menghubungkan pemangku kepentingan jarak jauh ke lokasi fisik secara instan."
                    : lang === "ch"
                      ? "该可视化方案非常适合商业地产线上展厅、资产台账维护以及施工现场竣工对比，使多方决策者能够异地实时查看物理现场。"
                      : "Ideal for real estate listings, asset management, and construction audits, this visual solution links remote stakeholders to physical sites instantly."
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
              {lang === "id" ? "Armada Kamera Spasial" : lang === "ch" ? "空间相机机队" : "Spatial Camera Fleet"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id" ? "Kami mengoperasikan kamera pemindai panorama khusus beresolusi tinggi untuk mendokumentasikan lingkungan interior." : lang === "ch" ? "我们运行专业级高清全景三维建模相机以采集记录室内空间。" : "We operate specialized, high-resolution panoramic scanning cameras to document interior environments."}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            
            {/* Camera Card */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm text-center items-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">XGrids Portal Cam</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                {lang === "id"
                  ? "Kamera pemetaan panorama beresolusi tinggi utama kami. Dirancang untuk dokumentasi ruangan yang cepat, kamera ini memiliki sistem lensa panorama ganda dan triangulasi laser terintegrasi, menyusun kembaran digital secara langsung ke node pemrosesan cloud."
                  : lang === "ch"
                    ? "我们的主力高清全景实景重构相机。专为快速记录室内三维环境而打造，集成双全景镜头模组及激光三角测距传感器，将实景数字孪生直接上传至云端计算节点进行高速解算。"
                    : "Our primary high-resolution panoramic mapping camera. Designed for quick room documentation, it features dual panoramic lens systems and integrated laser triangulation, compiling digital twins directly to cloud processing nodes."
                }
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-8 text-xs w-full">
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "FOV Tangkapan" : lang === "ch" ? "图像视场角" : "Capture FOV"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">{lang === "id" ? "Panorama Sferis 360°" : lang === "ch" ? "360° 球幕全景" : "360° Spherical Panoramic"}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">{lang === "id" ? "Format Ekspor" : lang === "ch" ? "格式导出" : "Model Export"}</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">OBJ Mesh / 3D Tiles</span>
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
              {lang === "id" ? "Produk Output" : lang === "ch" ? "输出产品" : "Output Products"}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              {lang === "id" ? "Hasil Kamera Spasial" : lang === "ch" ? "空间相机成果交付" : "Spatial Camera Deliverables"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id"
                ? "Kami memproses data kamera spasial menjadi tur virtual interaktif dan model 3D dengan format standar industri."
                : lang === "ch"
                  ? "我们将空间相机采集的数据处理成交互式三维云漫游及符合行业标准的 3D 模型。"
                  : "We process spatial camera data into interactive virtual tours and industry-standard 3D models."
              }
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

      {/* Interactive 3D Asset Preview Section */}
      <section className="py-24 bg-[#05080e] light:bg-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              {lang === "id" ? "Demo 3D Interaktif" : lang === "ch" ? "交互式 3D 在线展示" : "Interactive 3D Demo"}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              {lang === "id" ? "Jelajahi Aset 3DGS Kami secara Langsung" : lang === "ch" ? "在线探寻我们的 3DGS 实景数字资产" : "Explore Our 3DGS Asset Live"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id"
                ? "Melalui tautan yang dibagikan oleh LCC Cloud, Anda akan memasuki dunia tiga dimensi baru dan menjelajahi model 3DGS dengan presisi sangat tinggi. Buka 'Web viewer' untuk menelusuri dan berinteraksi dengan mudah. Rasakan sekarang!"
                : lang === "ch"
                  ? "通过 XGrids 专属分享链接，您即可快捷进入崭新的三维数字视界，沉浸式浏览超高精度 3DGS 彩色模型。点按'网页浏览器'即可在线轻松进行互动式漫游体验！"
                  : "Through the link shared by LCC Cloud, you will enter a new three-dimensional world and explore the ultra-high-precision 3DGS model. Open the 'Web viewer' to browse and interact easily. Experience it now!"
              }
            </p>
          </div>

          {/* Iframe Viewport Wrapper */}
          <div className="relative w-full aspect-video md:max-h-[600px] rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl light:shadow-md bg-[#02050a]">
            {/* Tech bracket corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-cyan/60 z-20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-cyan/60 z-20 pointer-events-none" />
            
            {/* Real 3D Iframe */}
            <iframe
              src="https://lcc-viewer.xgrids.com/pub/26ce53ab-c8df-4ca7-8e1b-2563838dc548"
              className="w-full h-full border-none relative z-10"
              allow="xr-spatial-tracking; autoplay; fullscreen"
              title="LCC 3DGS Web Viewer"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://lcc-viewer.xgrids.com/pub/26ce53ab-c8df-4ca7-8e1b-2563838dc548"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-cyan text-white hover:bg-brand-cyan/90 font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,224,0.25)] text-xs uppercase tracking-wider"
            >
              {lang === "id" ? "Buka Web Viewer di Layar Penuh" : lang === "ch" ? "全屏打开网页版浏览器" : "Open Web Viewer in Fullscreen"} <ArrowUpRight className="h-4 w-4" />
            </a>
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
              {lang === "id" ? "Aplikasi Kamera Spasial" : lang === "ch" ? "空间相机应用场景" : "Spatial Camera Applications"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id"
                ? "Menerapkan kembaran digital fotorealistis untuk memfasilitasi inspeksi dan pendaftaran fasilitas."
                : lang === "ch"
                  ? "应用高写真数字孪生技术来协助资产设施日常巡检及线上三维宣传展示。"
                  : "Applying photorealistic digital twins to facilitate facility inspections and listings."
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
            {lang === "id" ? "Siap Mengabadikan Twin Fasilitas Anda?" : lang === "ch" ? "准备好构建您的设施孪生了吗？" : "Ready to Capture Your Facility Twin?"}
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
