"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Camera, Layers, Focus, Maximize2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PhotogrammetrySolutionPage() {
  const { t, lang } = useTranslation();
  const specs = lang === "id" ? [
    { label: "Resolusi (GSD)", value: "Sub-1.0 cm / piksel" },
    { label: "Sensor Kamera", value: "45 MP Full-Frame" },
    { label: "Akurasi Horizontal", value: "1.5 cm RMSE" },
    { label: "Akurasi Vertikal", value: "3.0 cm RMSE" },
  ] : lang === "ch" ? [
    { label: "分辨率 (GSD)", value: "低于 1.0 厘米/像素" },
    { label: "相机传感器", value: "4500万像素全画幅" },
    { label: "水平精度", value: "1.5 厘米 RMSE" },
    { label: "垂直精度", value: "3.0 厘米 RMSE" },
  ] : [
    { label: "Resolution (GSD)", value: "Sub-1.0 cm / pixel" },
    { label: "Camera Sensor", value: "45 MP Full-Frame" },
    { label: "Horizontal Accuracy", value: "1.5 cm RMSE" },
    { label: "Vertical Accuracy", value: "3.0 cm RMSE" },
  ];

  const conceptualPillars = lang === "id" ? [
    {
      icon: <Camera className="h-6 w-6 text-brand-cyan" />,
      title: "Akuisisi Gambar Overlap Tinggi",
      desc: "Misi direncanakan menggunakan perangkat lunak kontrol penerbangan otomatis, menangkap bingkai nadir atau miring secara terus menerus dengan overlap 80% depan dan 75% samping untuk mencegah celah visual."
    },
    {
      icon: <Focus className="h-6 w-6 text-brand-cyan" />,
      title: "Ground Control Points (GCP)",
      desc: "Target visual kontras tinggi diukur di lapangan menggunakan receiver geodetik RTK GNSS. Koordinat ini menambatkan grid piksel fotogrametri ke koordinat global absolut."
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Structure-from-Motion (SfM)",
      desc: "Perangkat lunak fotogrametri mencocokkan ratusan titik kunci umum di seluruh foto yang tumpang tindih. Perhitungan triangulasi merekonstruksi geometri kamera dan bentuk 3D yang tepat."
    },
  ] : lang === "ch" ? [
    {
      icon: <Camera className="h-6 w-6 text-brand-cyan" />,
      title: "高重叠图像采集",
      desc: "使用自动航线控制软件规划任务，连续采集航向重叠度 80% 和旁向重叠度 75% 的正射或倾斜像片，以防止出现视觉缝隙。"
    },
    {
      icon: <Focus className="h-6 w-6 text-brand-cyan" />,
      title: "地面控制点 (GCP)",
      desc: "在地面上使用大地测量级 RTK GNSS 接收机测量高对比度标志。这些坐标将摄影测量像素网格锚定到绝对全球坐标系。"
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "运动恢复结构 (SfM)",
      desc: "摄影测量软件匹配重叠照片中数以百计的公共特征点。三角测量计算重构精确的相机几何形状和三维外形。"
    },
  ] : [
    {
      icon: <Camera className="h-6 w-6 text-brand-cyan" />,
      title: "High-Overlap Image Acquisition",
      desc: "Missions are planned using automated flight control software, capturing continuous nadir or oblique frames with 80% frontal and 75% lateral overlaps to prevent visual gaps.",
    },
    {
      icon: <Focus className="h-6 w-6 text-brand-cyan" />,
      title: "Ground Control Points (GCPs)",
      desc: "High-contrast visual targets are surveyed on the ground using geodetic RTK GNSS receivers. These coordinates anchor the photogrammetric pixel grids to absolute global coordinates.",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-cyan" />,
      title: "Structure-from-Motion (SfM)",
      desc: "Photogrammetry software matches hundreds of common keypoints across overlapping photos. Triangulation calculations reconstruct the exact camera geometry and 3D shapes.",
    },
  ];

  const deliverables = lang === "id" ? [
    {
      id: "del-01",
      title: "Peta Ortomosaik Resolusi Tinggi 2D",
      desc: "Peta visual dua dimensi ter-ortorektifikasi dan ter-georeferensi yang disusun dari ribuan foto udara overlap tinggi. Mengoreksi distorsi lensa dan relief topografi untuk menghasilkan presisi pemetaan absolut pada resolusi sub-sentimeter.",
      image: "/assets/image/photogrammetry/ortho.png",
      tags: ["GeoTIFF / TIF", "Siap GIS"],
      hudCode: "GSD: 0.6 cm/px // FILE: .TIF // PROJ: UTM_50S",
      specs: [
        { name: "Resolusi Tanah", value: "Sub-1 cm / piksel (GSD)" },
        { name: "Sistem Koordinat", value: "UTM / WGS 84 (Georeferenced)" },
        { name: "Tingkat Presisi", value: "± 2 cm Akurasi Horizontal" },
        { name: "Format Perangkat Lunak", value: "GeoTIFF, KML/KMZ, ECW" },
      ],
    },
    {
      id: "del-02",
      title: "Model Permukaan Digital (DSM)",
      desc: "Representasi raster elevasi grid dari titik elevasi tertinggi di atas tanah kosong, menangkap ketinggian struktur bangunan, puncak vegetasi, dan objek permukaan lainnya.",
      image: "/assets/image/photogrammetry/dsm.png",
      tags: ["Digital Surface Model", "Elevation Raster"],
      hudCode: "GSD: 1.2 cm // FORMAT: .TIF // V_ACC: 3.5cm",
      specs: [
        { name: "Ukuran Grid", value: "Akurasi grid 1.0cm hingga 5.0cm" },
        { name: "Elevasi Terikat", value: "Referensi ortometrik terikat GCP" },
        { name: "Output Format", value: "GeoTIFF (.TIF), XYZ, ASCII" },
        { name: "Kegunaan Utama", value: "Perencanaan elevasi kota, pemodelan run-off" },
      ],
    },
    {
      id: "del-03",
      title: "Model Medan Digital (DTM)",
      desc: "Raster elevasi tanah kosong (bare-earth) yang dihasilkan dengan menyaring semua pohon, bangunan, dan fitur buatan dari DSM. Menyediakan profil topografi tanah dasar yang akurat.",
      image: "/assets/image/photogrammetry/dtm.png",
      tags: ["Digital Terrain Model", "Bare-Earth"],
      hudCode: "GSD: 1.2 cm // REMOVED: TREES/BLDGS // GRID: 1m",
      specs: [
        { name: "Metode Filter", value: "Algoritma klasifikasi klasifikasi tanah" },
        { name: "Interval Kontur", value: "Siap menghasilkan kontur 0.5m" },
        { name: "Format File", value: "GeoTIFF, DEM, XYZ ASCII" },
        { name: "Kegunaan Utama", value: "Desain sipil, pematangan tanah, hidrologi" },
      ],
    },
    {
      id: "del-04",
      title: "3D Textured Mesh / Model 3D",
      desc: "Model mesh tiga dimensi fotorealistik bertekstur tinggi yang direkonstruksi dari foto udara multi-sudut. Menyediakan kembaran digital visual interaktif untuk inspeksi jarak jauh.",
      image: "/assets/image/photogrammetry/mesh.png",
      tags: ["3D Mesh", "Digital Twin Model"],
      hudCode: "POLY_COUNT: 24M // TEXTURE: 8K // FORMAT: .OBJ/.3MX",
      specs: [
        { name: "Presisi Tekstur", value: "Pemetaan tekstur resolusi tinggi 8K" },
        { name: "Format File", value: "OBJ, FBX, 3MX (Cesium), glTF" },
        { name: "Kompatibilitas", value: "Bentley ContextCapture, Sketchfab, Unity" },
        { name: "Waktu Pengolahan", value: "Pasca-pemrosesan cepat (Sub-24 jam)" },
      ],
    },
  ] : lang === "ch" ? [
    {
      id: "del-01",
      title: "2D 高分辨率正射影像图",
      desc: "由数千张高重叠度航空照片编译而成的地理参考、正射纠正二维视觉地图。纠正镜头畸变和地形起伏，从而在亚厘米级分辨率下产生绝对的测绘精度。",
      image: "/assets/image/photogrammetry/ortho.png",
      tags: ["GeoTIFF / TIF", "GIS 就绪"],
      hudCode: "GSD: 0.6 cm/px // FILE: .TIF // PROJ: UTM_50S",
      specs: [
        { name: "地面分辨率", value: "亚厘米级 / 像素 (GSD)" },
        { name: "坐标系", value: "UTM / WGS 84 (地理参考)" },
        { name: "精度等级", value: "± 2 厘米水平精度" },
        { name: "软件格式", value: "GeoTIFF, KML/KMZ, ECW" },
      ],
    },
    {
      id: "del-02",
      title: "数字表面模型 (DSM)",
      desc: "网格高程栅格图像，捕获裸地之上的所有建筑物、植被和表面物体的最高高程点。",
      image: "/assets/image/photogrammetry/dsm.png",
      tags: ["数字表面模型", "高程栅格"],
      hudCode: "GSD: 1.2 cm // FORMAT: .TIF // V_ACC: 3.5cm",
      specs: [
        { name: "网格大小", value: "1.0厘米至5.0厘米网格精度" },
        { name: "高程限制", value: "基于 GCP 限制的正交高程" },
        { name: "输出格式", value: "GeoTIFF (.TIF), XYZ, ASCII" },
        { name: "主要应用", value: "城市高程规划、径流建模" },
      ],
    },
    {
      id: "del-03",
      title: "数字地形模型 (DTM)",
      desc: "裸地高程栅格，通过从 DSM 中过滤掉所有树木、农作物和建筑物生成。提供准确的底层地面拓扑图。",
      image: "/assets/image/photogrammetry/dtm.png",
      tags: ["数字地形模型", "裸地表面"],
      hudCode: "GSD: 1.2 cm // REMOVED: TREES/BLDGS // GRID: 1m",
      specs: [
        { name: "过滤方法", value: "地面分类分类算法" },
        { name: "等高线间隔", value: "准备生成 0.5 米等高线" },
        { name: "文件格式", value: "GeoTIFF, DEM, XYZ ASCII" },
        { name: "主要应用", value: "土木设计、场地平整、水文学" },
      ],
    },
    {
      id: "del-04",
      title: "3D 实景三维模型",
      desc: "从多角度航空照片中重建的高清实景三维网格模型。为远程检测提供交互式的三维视觉数字孪生。",
      image: "/assets/image/photogrammetry/mesh.png",
      tags: ["3D 网格", "数字孪生模型"],
      hudCode: "POLY_COUNT: 24M // TEXTURE: 8K // FORMAT: .OBJ/.3MX",
      specs: [
        { name: "纹理精度", value: "8K 高分辨率纹理映射" },
        { name: "文件格式", value: "OBJ, FBX, 3MX (Cesium), glTF" },
        { name: "软件兼容性", value: "Bentley ContextCapture, Sketchfab, Unity" },
        { name: "交付时间", value: "快速后期处理 (24小时内)" },
      ],
    },
  ] : [
    {
      id: "del-01",
      title: "2D High-Resolution Orthomosaic Map",
      desc: "A georeferenced, orthorectified two-dimensional visual map compiled from thousands of high-overlap aerial photographs. Corrects lens distortions and topographic reliefs to yield absolute mapping precision at sub-centimeter resolutions.",
      image: "/assets/image/photogrammetry/ortho.png",
      tags: ["GeoTIFF / TIF", "GIS-Ready"],
      hudCode: "GSD: 0.6 cm/px // FILE: .TIF // PROJ: UTM_50S",
      specs: [
        { name: "Ground Resolution", value: "Sub-1 cm / pixel (GSD)" },
        { name: "Coordinate System", value: "UTM / WGS 84 (Georeferenced)" },
        { name: "Precision Level", value: "± 2 cm Horizontal Accuracy" },
        { name: "Software Formats", value: "GeoTIFF, KML/KMZ, ECW" },
      ],
    },
    {
      id: "del-02",
      title: "Digital Surface Model (DSM)",
      desc: "Grid elevation raster capturing the top height of all structures, vegetation, and ground surfaces above the bare-earth.",
      image: "/assets/image/photogrammetry/dsm.png",
      tags: ["Digital Surface Model", "Elevation Raster"],
      hudCode: "GSD: 1.2 cm // FORMAT: .TIF // V_ACC: 3.5cm",
      specs: [
        { name: "Grid Size", value: "1.0cm to 5.0cm grid accuracy" },
        { name: "Elevation Constraints", value: "Orthometric elevation GCP-constrained" },
        { name: "Output Format", value: "GeoTIFF (.TIF), XYZ, ASCII" },
        { name: "Primary Applications", value: "Urban height planning, run-off modeling" },
      ],
    },
    {
      id: "del-03",
      title: "Digital Terrain Model (DTM)",
      desc: "A bare-earth elevation raster generated by filtering out all trees, crops, and buildings from the DSM. Yields accurate underlying terrain topography.",
      image: "/assets/image/photogrammetry/dtm.png",
      tags: ["Digital Terrain Model", "Bare-Earth"],
      hudCode: "GSD: 1.2 cm // REMOVED: TREES/BLDGS // GRID: 1m",
      specs: [
        { name: "Filtering Method", value: "Ground class classification algorithms" },
        { name: "Contour Interval", value: "Ready for 0.5m contour generation" },
        { name: "File Format", value: "GeoTIFF, DEM, XYZ ASCII" },
        { name: "Primary Applications", value: "Civil design, site grading, hydrology" },
      ],
    },
    {
      id: "del-04",
      title: "3D Textured Mesh",
      desc: "A photorealistic three-dimensional mesh model reconstructed from multi-angle aerial photographs. Yields interactive visual digital twins for remote auditing.",
      image: "/assets/image/photogrammetry/mesh.png",
      tags: ["3D Mesh", "Digital Twin Model"],
      hudCode: "POLY_COUNT: 24M // TEXTURE: 8K // FORMAT: .OBJ/.3MX",
      specs: [
        { name: "Texture Precision", value: "8K high-resolution texture mapping" },
        { name: "File Formats", value: "OBJ, FBX, 3MX (Cesium), glTF" },
        { name: "Software Compatibility", value: "Bentley ContextCapture, Sketchfab, Unity" },
        { name: "Turnaround Time", value: "Fast post-processing (Sub-24 hours)" },
      ],
    },
  ];

  const useCases = lang === "id" ? [
    {
      sector: "Pertambangan Terbuka",
      use: "Perhitungan volume stockpile, tata letak batas, dan pemetaan lereng kuari untuk ulasan geologi struktural.",
    },
    {
      sector: "Pertanian Presisi",
      use: "Penghitungan tanaman pohon, pemetaan kesehatan tanaman menggunakan sensor NDVI, dan manajemen batas perkebunan.",
    },
    {
      sector: "Sipil & Konstruksi",
      use: "Tata letak perataan tanah, ulasan desain jalan, perhitungan volume massa tanah galian dan timbunan.",
    },
    {
      sector: "Kadastral & Perencanaan Lahan",
      use: "Tata letak batas visual terperinci untuk validasi kepemilikan tanah dan database pemetaan kadastral.",
    },
  ] : lang === "ch" ? [
    {
      sector: "露天采矿",
      use: "矿料堆体积计算、边界规划以及用于结构地质审查的采石场剖面测绘。",
    },
    {
      sector: "精准农业",
      use: "果树计数、使用 NDVI 传感器进行作物健康图谱分析以及种植园边界管理。",
    },
    {
      sector: "土木与建设",
      use: "土地平整规划、道路设计审查、土石方挖填体积计算。",
    },
    {
      sector: "地籍与土地规划",
      use: "用于土地所有权验证和地籍测绘数据库的详细视觉边界测绘。",
    },
  ] : [
    {
      sector: "Open-Cut Mining",
      use: "Stockpile volume calculations, boundaries layout, and mapping of quarry faces for structural geology reviews.",
    },
    {
      sector: "Precision Agriculture",
      use: "Tree crop counts, crop health mapping using NDVI sensors, and plantation boundary management.",
    },
    {
      sector: "Civil & Construction",
      use: "Land grading layout, road design reviews, volume calculations of cut-and-fill soil mass.",
    },
    {
      sector: "Cadastral & Land Planning",
      use: "Detailed visual boundaries layout for land ownership validation and cadastral mapping databases.",
    },
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
            <span className="text-xs text-gray-400 light:text-slate-500">Photogrammetry</span>
          </div>

          {/* Telemetry HUD display line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: PHOTO_ACQUISITION // STATUS: NOMINAL</span>
            <span>HDG: 090° E // LAT: -5.1400 // LNG: 119.4215</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Optical Remote Sensing
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("solutions.photogrammetry.title")} <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                {lang === "id" ? "& Pemetaan Ortomosaik" : lang === "ch" ? "& 正射影像地图测绘" : "& Orthomosaic Mapping"}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              {t("solutions.photogrammetry.desc")}
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
                {lang === "id" ? "Bagaimana Fotogrametri Drone Bekerja" : lang === "ch" ? "无人机摄影测量如何工作" : "How Drone Photogrammetry Works"}
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Fotogrametri adalah ilmu untuk mengekstrak pengukuran geometris dari foto udara yang tumpang tindih (overlap). Dengan menerbangkan drone di sepanjang jalur penerbangan grid terstruktur dan menangkap ratusan gambar visual resolusi tinggi, kami menyusun dataset di mana setiap piksel ter-georeferensi. Menggunakan perhitungan triangulasi dan parameter kalibrasi kamera, perangkat lunak fotogrametri merekonstruksi model 3D terperinci."
                  : lang === "ch"
                    ? "摄影测量是从重叠照片中提取几何测量的科学。通过使无人机沿着结构化的网格航线飞行并采集数百张高分辨率视觉像片，我们编译了每个像素都具有地理参考的数据集。利用三角测量计算和相机校准参数，摄影测量软件重建了详细的三维模型。"
                    : "Photogrammetry is the science of extracting geometric measurements from overlapping photographs. By flying a drone along structured grid flight lines and capturing hundreds of high-resolution visual frames, we compile datasets where each pixel is georeferenced. Using triangulation calculations and camera calibration parameters, photogrammetry software reconstructs detailed 3D models."
                }
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  {lang === "id"
                    ? "Berbeda dengan LiDAR yang memetakan elevasi di bawah vegetasi, fotogrametri menangkap peta visual realistis warna (ortomosaik) dan permukaan bertekstur, menghasilkan fitur visual yang sangat detail."
                    : lang === "ch"
                      ? "与映射植被下高程的 LiDAR 不同，摄影测量捕获色彩逼真的视觉地图（正射影像）和纹理表面，呈现高度详细的可见地物。"
                      : "Unlike LiDAR which maps elevations beneath vegetation, photogrammetry captures color-realistic visual maps (orthomosaics) and textured surfaces, rendering highly detailed visible features."
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

      {/* Overlap & Ground Sampling Distance (GSD) highlights */}
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
                  {lang === "id" ? "SPESIFIKASI GSD & PENERBANGAN" : lang === "ch" ? "GSD 与飞行规范" : "GSD & FLIGHT SPECIFICATIONS"}
                </h4>

                <div className="space-y-4">
                  {/* Altitude 50m */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#10b981]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">ALTITUDE // 50m AGL</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">{lang === "id" ? "Resolusi Tanah (GSD)" : lang === "ch" ? "地面分辨率 (GSD)" : "Ground Resolution (GSD)"}</p>
                    </div>
                    <span className="text-[10px] bg-[#10b981]/15 text-[#10b981] px-2 py-0.5 rounded font-mono">0.6 cm/px</span>
                  </div>

                  {/* Altitude 100m */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-[#3b82f6]">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">ALTITUDE // 100m AGL</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">{lang === "id" ? "Resolusi Tanah (GSD)" : lang === "ch" ? "地面分辨率 (GSD)" : "Ground Resolution (GSD)"}</p>
                    </div>
                    <span className="text-[10px] bg-[#3b82f6]/15 text-[#3b82f6] px-2 py-0.5 rounded font-mono">1.2 cm/px</span>
                  </div>

                  {/* Altitude 150m */}
                  <div className="flex justify-between items-center bg-white/5 light:bg-slate-50 rounded-lg p-3 border-l-2 border-brand-cyan">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 light:text-slate-500">ALTITUDE // 150m AGL</span>
                      <p className="text-xs font-bold text-white light:text-slate-900 mt-0.5">{lang === "id" ? "Resolusi Tanah (GSD)" : lang === "ch" ? "地面分辨率 (GSD)" : "Ground Resolution (GSD)"}</p>
                    </div>
                    <span className="text-[10px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded font-mono">1.8 cm/px</span>
                  </div>
                </div>

                <p className="mt-6 text-[10px] text-gray-500 text-center leading-relaxed">
                  {lang === "id"
                    ? "Ketinggian penerbangan yang lebih rendah menghasilkan GSD yang lebih padat untuk pemetaan presisi tinggi."
                    : lang === "ch"
                      ? "更低的飞行高度产生更精细的地面采样距离 (GSD)，用于高精度制图。"
                      : "Lower flight altitudes yield denser Ground Sampling Distance (GSD) for high-precision mapping."
                  }
                </p>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
                {lang === "id" ? "Faktor Kunci Akurasi" : lang === "ch" ? "精度关键要素" : "Accuracy Key Factors"}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                {lang === "id" ? "Memahami Resolusi Piksel & Overlap Penerbangan" : lang === "ch" ? "了解像素分辨率与飞行重叠度" : "Understanding Pixel Resolution & Flight Overlap"}
              </h3>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Akurasi fotogrametri ditentukan oleh Ground Sampling Distance (GSD) dan persentase overlap foto. GSD mewakili ukuran fisik setiap piksel di tanah. Terbang lebih rendah meningkatkan resolusi piksel (GSD sub-sentimeter), memungkinkan pendeteksian retakan terkecil atau pergeseran tanah."
                  : lang === "ch"
                    ? "摄影测量的精度由地面采样距离 (GSD) 和照片重叠百分比决定。GSD 代表地面上每个像素的实际物理大小。在更低高度飞行会增加像素分辨率（达到亚厘米级 GSD），从而能够检测微小的裂缝或土地位移。"
                    : "The accuracy of photogrammetry is determined by the Ground Sampling Distance (GSD) and the photo overlap percentage. GSD represents the physical size of each pixel on the ground. Flying lower increases the pixel resolution (sub-centimeter GSD), enabling the detection of tiny cracks or land shifts."
                }
              </p>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Kami menjaga overlap depan minimal 80% dan overlap samping 75%. Overlap tinggi ini memastikan bahwa setiap titik di tanah ditangkap dari setidaknya 5-8 sudut kamera yang berbeda, menghilangkan titik buta dan distorsi di sekitar struktur vertikal."
                  : lang === "ch"
                    ? "我们维持至少 80% 的前向重叠和 75% 的旁向重叠。如此高的重叠度确保了地面上的每个点都能从至少 5 到 8 个不同的相机角度被捕获，从而消除了盲区以及垂直结构周围的畸变。"
                    : "We maintain a minimum of 80% frontal overlap and 75% lateral overlap. This high overlap ensures that every point on the ground is captured from at least 5-8 different camera angles, eliminating blind spots and distortions around vertical structures."
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
              Industrial Hardware
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Enterprise Mapping Fleet
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate specialized, high-resolution enterprise drones equipped with mechanical global shutter cameras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Drone Platform Card 1 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 4 Enterprise</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our primary compact enterprise mapping drone. Designed for rapid deployment, it features a built-in mechanical shutter camera to completely prevent motion distortion when flying at high speeds. Equipped with an RTK module, it links to geodetic ground stations for centimeter-level coordinate accuracy.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Flight Time</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 45 minutes</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Camera Shutter</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Mechanical Global Shutter</span>
                </div>
              </div>
            </div>

            {/* Drone Platform Card 2 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 350 / 400 RTK + Zenmuse P1</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our heavy-lift workhorse setup for large-scale operations. The Zenmuse P1 payload integrates a 45-megapixel full-frame sensor on a 3-axis stabilized gimbal. Supporting multiple lens profiles (24mm, 35mm, 50mm), it delivers ultra-dense pixel maps for complex topographies.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Camera Sensor</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">45 MP Full-Frame CMOS</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Smart Oblique Capture</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Supported (Multi-Angle)</span>
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
              Photogrammetry Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memproses data foto udara tumpang-tindih (overlap) tinggi menjadi produk pemetaan spasial yang detail, presisi, dan siap diintegrasikan.
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
              Photogrammetry Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Applying high-resolution drone mapping to solve critical inspection and volume computation tasks.
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
