"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Zap, Shield, Eye, Flame, Layers, Scan, ChevronDown, ChevronUp, Check, X, FileText, Map } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PowerlineInspectionPage() {
  const { t, lang } = useTranslation();
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const packages = lang === "id" ? [
    {
      id: "silver",
      name: "Paket Silver",
      badge: "Audit Standar",
      description: "Inspeksi koridor standar dan validasi jarak bebas menggunakan sensor LiDAR.",
      minOrder: "100 Span",
      climbUp: { included: false, label: "Inspeksi Visual & Termal Tower (Pengganti Panjat) - Tidak Termasuk" },
      mapOutput: { included: false, label: "Output Peta - Tidak Termasuk" },
      colorClass: "from-slate-500/20 to-slate-600/5 hover:border-slate-500/35 border-white/5",
      badgeClass: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      accentColor: "text-slate-400",
      btnClass: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
      rowLiDAR: [
        "Analisis Jarak Bebas Minimum RoW",
        "Analisis Potensi Pohon Tumbang",
        "Analisis Kemiringan Tower",
        "Analisis Lendutan Kurva Katenari (Penghantar Arus)",
        "Analisis Lendutan GSW (GSW)",
        "Tinggi Nominal (Jarak dari Stub ke Crossarm Terendah)",
        "Analisis Jarak Fasa (Jarak Antara Penghantar Arus)",
        "Koreksi Koordinat Tower & Pengukuran Tinggi Riil",
        "Analisis Kondisi Span (Pengukuran Panjang Span Riil)"
      ]
    },
    {
      id: "gold",
      name: "Paket Gold",
      badge: "Analisis Lanjutan",
      description: "Pemantauan komprehensif jaringan transmisi menampilkan audit struktur tower dan deteksi titik panas (hotspot).",
      minOrder: "200 Span",
      climbUp: { included: true, label: "Inspeksi Visual & Termal Tower (Pengganti Panjat) - Termasuk" },
      mapOutput: { included: false, label: "Output Peta - Tidak Termasuk" },
      colorClass: "from-amber-500/20 to-amber-600/5 hover:border-amber-500/35 border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.03)]",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      accentColor: "text-amber-400",
      btnClass: "bg-amber-500 hover:bg-amber-500/90 text-slate-950 font-bold",
      rowLiDAR: [
        "Analisis Jarak Bebas Minimum RoW",
        "Analisis Potensi Pohon Tumbang",
        "Analisis Kemiringan Tower",
        "Analisis Lendutan Kurva Katenari (Penghantar Arus)",
        "Analisis Lendutan GSW (GSW)",
        "Tinggi Nominal (Jarak dari Stub ke Crossarm Terendah)",
        "Analisis Konduktor Terdekat ke DTM (Digital Terrain Model)",
        "Simulasi Lendutan Konduktor (Beban Maks @90°C) pada ACSR vs ACCC",
        "Analisis Jarak Fasa (Jarak Antara Penghantar Arus)",
        "Koreksi Koordinat Tower & Pengukuran Tinggi Riil",
        "Analisis Kondisi Span (Panjang Span Riil)",
        "Analisis Sudut Perlindungan (Proteksi Petir)",
        "Identifikasi Pohon Berbahaya",
        "Pengukuran Perbedaan Tinggi Crossarm",
        "Pengukuran Dimensi Tower (15 Parameter)",
        "Analisis Rekomendasi Peninggian Tower",
        "Analisis Deteksi Sambungan Mid-span (Joints)",
        "Analisis Deteksi Korosi Tower"
      ]
    },
    {
      id: "platinum",
      name: "Paket Platinum",
      badge: "Kembaran Digital Lengkap",
      description: "Inspeksi jaringan transmisi utama termasuk pemetaan ortomosaik lengkap dan model elevasi digital.",
      minOrder: "300 Span",
      climbUp: { included: true, label: "Inspeksi Visual & Termal Tower (Pengganti Panjat) - Termasuk" },
      mapOutput: { included: true, label: "Output Peta - Termasuk" },
      colorClass: "from-brand-cyan/20 to-brand-blue/5 hover:border-brand-cyan/35 border-brand-cyan/20 shadow-[0_0_30px_rgba(0,163,224,0.05)]",
      badgeClass: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
      accentColor: "text-brand-cyan",
      btnClass: "bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold",
      rowLiDAR: [
        "Analisis Jarak Bebas Minimum RoW",
        "Analisis Potensi Pohon Tumbang",
        "Analisis Kemiringan Tower",
        "Analisis Lendutan Kurva Katenari (Penghantar Arus)",
        "Analisis Lendutan GSW (GSW)",
        "Tinggi Nominal (Jarak dari Stub ke Crossarm Terendah)",
        "Analisis Konduktor Terdekat ke DTM (Digital Terrain Model)",
        "Simulasi Lendutan Konduktor (Beban Maks @90°C) pada ACSR vs ACCC",
        "Analisis Jarak Fasa (Jarak Antara Penghantar Arus)",
        "Koreksi Koordinat Tower & Pengukuran Tinggi Riil",
        "Analisis Kondisi Span (Panjang Span Riil)",
        "Analisis Sudut Perlindungan (Proteksi Petir)",
        "Identifikasi Pohon Berbahaya",
        "Pengukuran Perbedaan Tinggi Crossarm",
        "Pengukuran Dimensi Tower (15 Parameter)",
        "Analisis Rekomendasi Peninggian Tower",
        "Analisis Deteksi Sambungan Mid-span (Joints)",
        "Analisis Deteksi Korosi Tower"
      ],
      maps: [
        "Peta Ortomosaik RoW 2D",
        "Model Elevasi Digital (DSM & DTM)"
      ]
    }
  ] : lang === "ch" ? [
    {
      id: "silver",
      name: "银牌方案",
      badge: "标准审计",
      description: "使用激光雷达进行标准廊道巡检和安全净空校验。",
      minOrder: "100档",
      climbUp: { included: false, label: "铁塔视同攀爬与红外检测 (不含)" },
      mapOutput: { included: false, label: "地图成果输出 (不含)" },
      colorClass: "from-slate-500/20 to-slate-600/5 hover:border-slate-500/35 border-white/5",
      badgeClass: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      accentColor: "text-slate-400",
      btnClass: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
      rowLiDAR: [
        "RoW 最小净空通道分析",
        "倒档树障风险分析",
        "铁塔倾斜度分析",
        "导线悬垂弧垂分析 (载流导线)",
        "地线弧垂分析 (GSW)",
        "标称高度 (从塔基到最下层横担的距离)",
        "相间距离分析 (导线相间安全距离)",
        "铁塔坐标校正与实际高度测量",
        "档距工况分析 (实际档距长度测量)"
      ]
    },
    {
      id: "gold",
      name: "金牌方案",
      badge: "深度分析",
      description: "全面电网监测，具备铁塔结构缺陷审计与红外异常热点检测。",
      minOrder: "200档",
      climbUp: { included: true, label: "铁塔视同攀爬与红外检测 (包含)" },
      mapOutput: { included: false, label: "地图成果输出 (不含)" },
      colorClass: "from-amber-500/20 to-amber-600/5 hover:border-amber-500/35 border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.03)]",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      accentColor: "text-amber-400",
      btnClass: "bg-amber-500 hover:bg-amber-500/90 text-slate-950 font-bold",
      rowLiDAR: [
        "RoW 最小净空通道分析",
        "倒档树障风险分析",
        "铁塔倾斜度分析",
        "导线悬垂弧垂分析 (载流导线)",
        "地线弧垂分析 (GSW)",
        "标称高度 (从塔基到最下层横担的距离)",
        "最邻近导线至地面距离分析 (DTM)",
        "导线温度工况弧垂仿真 (最大负载@90°C) ACSR对比ACCC",
        "相间距离分析 (导线相间安全距离)",
        "铁塔坐标校正与实际高度测量",
        "档距工况分析 (实际档距长度)",
        "防雷保护角分析 (避雷线遮蔽角)",
        "危险树木定位识别",
        "横担高差测量",
        "铁塔结构尺寸细部测量 (15项参数)",
        "铁塔升塔 recommendations 分析",
        "档中耐张管/拼接检测分析",
        "铁塔锈蚀损伤检测分析"
      ]
    },
    {
      id: "platinum",
      name: "铂金方案",
      badge: "完整数字孪生",
      description: "顶配电网巡检，涵盖完整的正射影像图和数字高程模型。",
      minOrder: "300档",
      climbUp: { included: true, label: "铁塔视同攀爬与红外检测 (包含)" },
      mapOutput: { included: true, label: "地图成果输出 (包含)" },
      colorClass: "from-brand-cyan/20 to-brand-blue/5 hover:border-brand-cyan/35 border-brand-cyan/20 shadow-[0_0_30px_rgba(0,163,224,0.05)]",
      badgeClass: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
      accentColor: "text-brand-cyan",
      btnClass: "bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold",
      rowLiDAR: [
        "RoW 最小净空通道分析",
        "倒档树障风险分析",
        "铁塔倾斜度分析",
        "导线悬垂弧垂分析 (载流导线)",
        "地线弧垂分析 (GSW)",
        "标称高度 (从塔基到最下层横担的距离)",
        "最邻近导线至地面距离分析 (DTM)",
        "导线温度工况弧垂仿真 (最大负载@90°C) ACSR对比ACCC",
        "相间距离分析 (导线相间安全距离)",
        "铁塔坐标校正与实际高度测量",
        "档距工况分析 (实际档距)",
        "防雷保护角分析 (避雷线遮蔽角)",
        "危险树木定位识别",
        "横担高差测量",
        "铁塔结构尺寸细部测量 (15项参数)",
        "铁塔升塔 recommendations 分析",
        "档中耐张管/拼接检测分析",
        "铁塔锈蚀损伤检测分析"
      ],
      maps: [
        "2D 通道正射影像图",
        "数字高程模型 (DSM & DTM)"
      ]
    }
  ] : [
    {
      id: "silver",
      name: "Silver Package",
      badge: "Standard Audit",
      description: "Standard corridor inspection and clearance validation using LiDAR sensors.",
      minOrder: "100 Spans",
      climbUp: { included: false, label: "Visual & Thermal Tower Inspection (Climb-up Replacement) - Not Included" },
      mapOutput: { included: false, label: "Map Output - Not Included" },
      colorClass: "from-slate-500/20 to-slate-600/5 hover:border-slate-500/35 border-white/5",
      badgeClass: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      accentColor: "text-slate-400",
      btnClass: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
      rowLiDAR: [
        "RoW Minimum Clearance Analysis",
        "Potential Treefall Analysis",
        "Tower Inclination Analysis",
        "Catenary Curve Sag Analysis (Current Carrying)",
        "GSW Sag Analysis (GSW)",
        "Nominal Height (Distance from Stub to Lowest Crossarm)",
        "Phase Distance Analysis (Distance Between Current Carrying)",
        "Tower Coordinate Correction & Real Height Measurement",
        "Span Condition Analysis (Real Span Length Measurement)"
      ]
    },
    {
      id: "gold",
      name: "Gold Package",
      badge: "Advanced Analysis",
      description: "Comprehensive grid monitoring featuring tower structure audits and hot-spot detection.",
      minOrder: "200 Spans",
      climbUp: { included: true, label: "Visual & Thermal Tower Inspection (Climb-up Replacement) - Included" },
      mapOutput: { included: false, label: "Map Output - Not Included" },
      colorClass: "from-amber-500/20 to-amber-600/5 hover:border-amber-500/35 border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.03)]",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      accentColor: "text-amber-400",
      btnClass: "bg-amber-500 hover:bg-amber-500/90 text-slate-950 font-bold",
      rowLiDAR: [
        "RoW Minimum Clearance Analysis",
        "Potential Treefall Analysis",
        "Tower Inclination Analysis",
        "Catenary Curve Sag Analysis (Current Carrying)",
        "GSW Sag Analysis (GSW)",
        "Nominal Height (Distance from Stub to Lowest Crossarm)",
        "Nearest Conductor to DTM (Digital Terrain Model) Analysis",
        "Conductor Sag Simulation (Max Load @90°C) on ACSR vs ACCC",
        "Phase Distance Analysis (Distance Between Current Carrying)",
        "Tower Coordinate Correction & Real Height Measurement",
        "Span Condition Analysis (Real Span Length)",
        "Protection Angle Analysis (Lightning Shielding)",
        "Danger Trees Identification",
        "Crossarm Height Difference Measurement",
        "Tower Dimensions Measurement (15 Parameters)",
        "Tower Heightening Recommendation Analysis",
        "Mid-span Joints Detection Analysis",
        "Tower Corrosion Detection Analysis"
      ]
    },
    {
      id: "platinum",
      name: "Platinum Package",
      badge: "Complete Digital Twin",
      description: "Ultimate grid inspection including complete orthomosaic mapping and digital elevation models.",
      minOrder: "300 Spans",
      climbUp: { included: true, label: "Visual & Thermal Tower Inspection (Climb-up Replacement) - Included" },
      mapOutput: { included: true, label: "Map Output - Included" },
      colorClass: "from-brand-cyan/20 to-brand-blue/5 hover:border-brand-cyan/35 border-brand-cyan/20 shadow-[0_0_30px_rgba(0,163,224,0.05)]",
      badgeClass: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
      accentColor: "text-brand-cyan",
      btnClass: "bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold",
      rowLiDAR: [
        "RoW Minimum Clearance Analysis",
        "Potential Treefall Analysis",
        "Tower Inclination Analysis",
        "Catenary Curve Sag Analysis (Current Carrying)",
        "GSW Sag Analysis (GSW)",
        "Nominal Height (Distance from Stub to Lowest Crossarm)",
        "Nearest Conductor to DTM (Digital Terrain Model) Analysis",
        "Conductor Sag Simulation (Max Load @90°C) on ACSR vs ACCC",
        "Phase Distance Analysis (Distance Between Current Carrying)",
        "Tower Coordinate Correction & Real Height Measurement",
        "Span Condition Analysis (Real Span Length)",
        "Protection Angle Analysis (Lightning Shielding)",
        "Danger Trees Identification",
        "Crossarm Height Difference Measurement",
        "Tower Dimensions Measurement (15 Parameters)",
        "Tower Heightening Recommendation Analysis",
        "Mid-span Joints Detection Analysis",
        "Tower Corrosion Detection Analysis"
      ],
      maps: [
        "2D RoW Orthomosaic Map",
        "Digital Elevation Models (Digital Surface Model & Digital Terrain Model)"
      ]
    }
  ];

  const specs = lang === "id" ? [
    { label: "Presisi Termal", value: "Akurasi radiometrik ±2°C" },
    { label: "Sensor", value: "LiDAR, Termal Radiometrik, 45MP RGB" },
    { label: "Deteksi Cacat AI", value: "Isolator, Damper, Korosi" },
    { label: "Format Data", value: "PLS-CADD Las/Laf, CAD, PDF" },
  ] : lang === "ch" ? [
    { label: "红外精度", value: "辐射测量精度 ±2°C" },
    { label: "传感器组件", value: "激光雷达、辐射红外、4500万像素 RGB" },
    { label: "AI 缺陷识别", value: "绝缘子、防震锤、生锈腐蚀" },
    { label: "数据格式", value: "PLS-CADD Las/Laf, CAD, PDF" },
  ] : [
    { label: "Thermal Precision", value: "±2°C Radiometric accuracy" },
    { label: "Sensors", value: "LiDAR, Radiometric Thermal, 45MP RGB" },
    { label: "AI Defect Detection", value: "Insulators, Dampers, Corrosion" },
    { label: "Data Formats", value: "PLS-CADD Las/Laf, CAD, PDF" },
  ];

  const conceptualPillars = lang === "id" ? [
    {
      icon: <Shield className="h-6 w-6 text-brand-cyan" />,
      title: "Pemantauan Intrusif Vegetasi",
      desc: "Pemindaian LiDAR memetakan jarak 3D antara konduktor dan vegetasi. Mengidentifikasi kecepatan tumbuh dan memprediksi bahaya pohon tumbang."
    },
    {
      icon: <Flame className="h-6 w-6 text-brand-cyan" />,
      title: "Pemindaian Cacat Termal",
      desc: "Sensor termal radiometrik memeriksa sambungan listrik, konektor, dan gardu induk dalam kondisi berbeban, mendeteksi anomali panas sebelum terjadi kerusakan."
    },
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "Audit Komponen Resolusi Tinggi",
      desc: "Kamera RGB beresolusi ultra-tinggi menangkap detail jarak dekat dari menara, isolator, dan damper untuk mendeteksi kelelahan struktural dan karat."
    },
  ] : lang === "ch" ? [
    {
      icon: <Shield className="h-6 w-6 text-brand-cyan" />,
      title: "通道树障侵入监测",
      desc: "利用激光雷达扫描建模导线与植被之间的三维安全距离。识别生长速度并预测树木倒伏隐患。"
    },
    {
      icon: <Flame className="h-6 w-6 text-brand-cyan" />,
      title: "红外测温缺陷扫描",
      desc: "辐射型红外传感器在带电运行状态下巡检电气接头、连接器和开关柜，在故障发生前捕获温度异常点。"
    },
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "高清细部组件审计",
      desc: "超高清可见光相机采集铁塔、绝缘子、防震锤的近景细节，以诊断结构疲劳和生锈状况。"
    },
  ] : [
    {
      icon: <Shield className="h-6 w-6 text-brand-cyan" />,
      title: "Vegetation Encroachment Monitoring",
      desc: "LiDAR scanning maps the 3D distance between conductors and vegetation. Identifies growth speeds and forecasts falling tree hazards.",
    },
    {
      icon: <Flame className="h-6 w-6 text-brand-cyan" />,
      title: "Thermal Defect Scanning",
      desc: "Radiometric thermal sensors inspect electrical splices, connectors, and switchgear under load, detecting abnormal heat anomalies before failure.",
    },
    {
      icon: <Eye className="h-6 w-6 text-brand-cyan" />,
      title: "High-Res Component Audit",
      desc: "Ultra-high-resolution RGB cameras capture close-up details of towers, insulators, and damper weights to detect structural fatigue and rust.",
    },
  ];

  const deliverables = lang === "id" ? [
    {
      id: "del-01",
      title: "Analisis Bahaya Jarak Bebas",
      desc: "Perhitungan otomatis dan analisis jarak antara konduktor aktif dan vegetasi, struktur, atau medan di sekitarnya untuk mendeteksi zona pelanggaran.",
      image: "/assets/image/powerline/clearence.png",
      tags: ["Laporan Jarak Bebas", "Data LAS / LAZ", "Manajemen Vegetasi"],
      hudCode: "CLEARANCE: VIOLATION LOG // EPSG: 32648 // ACCURACY: <5cm",
      specs: [
        { name: "Ruang Lingkup Analisis", value: "Jarak bebas vegetasi dan struktur" },
        { name: "Toleransi Akurasi", value: "Koordinat X, Y, Z <5cm" },
        { name: "Standar Kepatuhan", value: "IEEE 516 / Standar Grid OSHA" },
        { name: "Format Output", value: "Log Bahaya PLS-CADD / PDF" },
      ],
      isFeatured: true,
    },
    {
      id: "del-02",
      title: "Analisis Kemiringan & Dimensi Tower",
      desc: "Pengukuran geodetik dan fotogrametri dari sudut kemiringan menara transmisi, distorsi struktural, dan dimensi fisik untuk memantau kesehatan struktural dari waktu ke waktu.",
      image: "/assets/image/powerline/dimention2.png",
      tags: ["Kesehatan Struktur", "Log Kemiringan", "Kembaran Digital"],
      hudCode: "STRUCTURAL: AUDIT // INCLINATION: TILT DEGREE // GSD: <1mm",
      specs: [
        { name: "Sensitivitas Kemiringan", value: "Akurasi 0.01 derajat" },
        { name: "Presisi Dimensi", value: "Pengukuran fisik sub-sentimeter" },
        { name: "Konten Laporan", value: "Arah condong menara, tinggi, spek panel" },
        { name: "Format Output", value: "Laporan Struktur PDF, model OBJ/FBX" },
      ],
    },
    {
      id: "del-03",
      title: "Deteksi Komponen Termal",
      desc: "Inspeksi bertenaga AI menggunakan pencitraan termal radiometrik untuk menemukan komponen yang terlalu panas (hotspot) pada string isolator, sambungan, klem, dan trafo di bawah beban aktif.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Rq7EImj1GZ2N-33USkx9_UetfZxx2uob_XmeDnH-PPefGOyFg6_Y_38&s=10",
      tags: ["IR Termal", "Deteksi Anomali", "Log Radiometrik"],
      hudCode: "THERMAL: FLIR PAYLOAD // DELTA-T: ANOMALY // RESOLUTION: 640x512",
      specs: [
        { name: "Sensitivitas Termal", value: "Rentang spektral <50 mK" },
        { name: "Indeks Keparahan", value: "Klasifikasi Delta-T (Minor, Mayor, Kritis)" },
        { name: "Cakupan Deteksi", value: "Isolator, sambungan, klem, peralatan hubung bagi" },
        { name: "Format Output", value: "JPG Radiometrik, Log Hotspot PDF" },
      ],
    },
  ] : lang === "ch" ? [
    {
      id: "del-01",
      title: "安全净空通道分析",
      desc: "自动计算和分析运行导线与周围植被、建筑物或地形之间的距离，诊断违规侵入区域。",
      image: "/assets/image/powerline/clearence.png",
      tags: ["净空报告", "LAS / LAZ 数据", "绿化通道管理"],
      hudCode: "CLEARANCE: VIOLATION LOG // EPSG: 32648 // ACCURACY: <5cm",
      specs: [
        { name: "分析范围", value: "通道树障与房屋交叉跨越净空" },
        { name: "精度容差", value: "X, Y, Z 坐标均 <5厘米" },
        { name: "合规标准", value: "IEEE 516 / OSHA 电网安全标准" },
        { name: "输出格式", value: "PLS-CADD / PDF 危险危险隐患日志" },
      ],
      isFeatured: true,
    },
    {
      id: "del-02",
      title: "铁塔倾斜与细部尺寸分析",
      desc: "利用大地测量和摄影测量手段监测输电铁塔的倾斜角、结构变形和物理尺寸，以评估铁塔随时间演变的结构健康状况。",
      image: "/assets/image/powerline/dimention2.png",
      tags: ["结构健康", "倾斜度日志", "数字孪生"],
      hudCode: "STRUCTURAL: AUDIT // INCLINATION: TILT DEGREE // GSD: <1mm",
      specs: [
        { name: "倾斜灵敏度", value: "0.01 度测量精度" },
        { name: "尺寸精度", value: "亚厘米级实体结构测量" },
        { name: "报告内容", value: "铁塔倾斜方向、实际呼高、横担规格" },
        { name: "输出格式", value: "PDF 结构报告、OBJ/FBX 细部三维模型" },
      ],
    },
    {
      id: "del-03",
      title: "红外发热缺陷检测",
      desc: "依托 AI 算法对运行状态下的辐射红外图像进行分析，定位绝缘子串、耐张管、线夹和变压器上的过热点 (Hotspots)。",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Rq7EImj1GZ2N-33USkx9_UetfZxx2uob_XmeDnH-PPefGOyFg6_Y_38&s=10",
      tags: ["红外热像仪", "异常缺陷识别", "辐射测温日志"],
      hudCode: "THERMAL: FLIR PAYLOAD // DELTA-T: ANOMALY // RESOLUTION: 640x512",
      specs: [
        { name: "温度灵敏度", value: "<50 mK 光谱范围" },
        { name: "严重度等级", value: "Delta-T 温升分类 (一般、严重、危急)" },
        { name: "检测目标", value: "绝缘子、耐张管、压接管、导线接头" },
        { name: "输出格式", value: "带辐射数据的 JPG、PDF 缺陷热点日志" },
      ],
    },
  ] : [
    {
      id: "del-01",
      title: "Clearance Danger Analysis",
      desc: "Automated calculation and analysis of distances between active conductors and surrounding vegetation, structures, or terrain to detect violation zones.",
      image: "/assets/image/powerline/clearence.png",
      tags: ["Clearance Report", "LAS / LAZ Data", "Vegetation Management"],
      hudCode: "CLEARANCE: VIOLATION LOG // EPSG: 32648 // ACCURACY: <5cm",
      specs: [
        { name: "Analysis Scope", value: "Vegetation and structural clearance" },
        { name: "Accuracy Tolerance", value: "X, Y, Z coordinates <5cm" },
        { name: "Compliance Standard", value: "IEEE 516 / OSHA Grid Standards" },
        { name: "Format Output", value: "PLS-CADD / PDF Danger Logs" },
      ],
      isFeatured: true,
    },
    {
      id: "del-02",
      title: "Tower Inclination & Dimension Analysis",
      desc: "Geodetic and photogrammetric measurement of transmission tower tilt angle, structural distortion, and physical dimensions to monitor structural health over time.",
      image: "/assets/image/powerline/dimention2.png",
      tags: ["Structural Health", "Inclination Logs", "Digital Twin"],
      hudCode: "STRUCTURAL: AUDIT // INCLINATION: TILT DEGREE // GSD: <1mm",
      specs: [
        { name: "Tilt Sensitivity", value: "0.01 degree accuracy" },
        { name: "Dimension Precision", value: "Sub-centimeter physical measurements" },
        { name: "Report Content", value: "Tower lean direction, height, panel specs" },
        { name: "Format Output", value: "PDF Structural Report, OBJ/FBX models" },
      ],
    },
    {
      id: "del-03",
      title: "Thermal Components Detection",
      desc: "AI-driven inspection using radiometric thermal imaging to locate overheating components (hotspots) on insulator strings, splices, clamps, and transformers under active load.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Rq7EImj1GZ2N-33USkx9_UetfZxx2uob_XmeDnH-PPefGOyFg6_Y_38&s=10",
      tags: ["Thermal IR", "Anomaly Detection", "Radiometric Logs"],
      hudCode: "THERMAL: FLIR PAYLOAD // DELTA-T: ANOMALY // RESOLUTION: 640x512",
      specs: [
        { name: "Thermal Sensitivity", value: "<50 mK spectral range" },
        { name: "Severity Index", value: "Delta-T classification (Minor, Major, Critical)" },
        { name: "Detection Scope", value: "Insulators, joints, clamps, switchgear" },
        { name: "Format Output", value: "Radiometric JPG, PDF Hotspot Logs" },
      ],
    },
  ];

  const useCases = lang === "id" ? [
    {
      sector: "Jalur Transmisi",
      use: "Pemantauan jarak bebas rutin dan darurat di sepanjang koridor jalur transmisi tegangan tinggi.",
    },
    {
      sector: "Jaringan Distribusi",
      use: "Pemeriksaan cepat tiang distribusi tegangan menengah, tiang listrik, dan transformator untuk mencari titik panas.",
    },
    {
      sector: "Inspeksi Gardu Induk",
      use: "Audit termal dan visual area gardu induk, peralatan hubung bagi, dan jalur transmisi tanpa pemadaman.",
    },
    {
      sector: "Pemulihan Bencana",
      use: "Pengintaian udara cepat untuk menemukan kabel putus, kerusakan struktural, dan puing-puing setelah topan atau tanah longsor.",
    },
  ] : lang === "ch" ? [
    {
      sector: "输电线路",
      use: "沿高压输电线路廊道进行日常和应急安全净空通道监测。",
    },
    {
      sector: "配电网",
      use: "对中压配电杆塔、电线杆和变压器缺陷热点进行快速排查。",
    },
    {
      sector: "变电站巡检",
      use: "在不停电状态下对变电站构架、开关设备和出线进行红外测温与可见光审计。",
    },
    {
      sector: "灾后应急恢复",
      use: "在台风或泥石流过后，进行快速空中勘测以定位断线、倒塔和异物悬挂状况。",
    },
  ] : [
    {
      sector: "Transmission Lines",
      use: "Routine and emergency clearance monitoring along high-voltage transmission line corridors.",
    },
    {
      sector: "Distribution Grids",
      use: "Rapid screening of medium-voltage distribution poles, poles, and transformers for hot spots.",
    },
    {
      sector: "Substation Inspection",
      use: "Thermal and visual auditing of substation yards, switchgears, and power lines without shut-offs.",
    },
    {
      sector: "Disaster Recovery",
      use: "Rapid aerial reconnaissance to locate downed lines, structural damage, and debris after typhoons or landslides.",
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
            <span className="text-xs text-gray-400 light:text-slate-500">Powerline Inspection</span>
          </div>

          {/* HUD Status line */}
          <div className="hidden md:flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 light:border-slate-200 pb-2">
            <span>SYS: GRID_INSPECT // STATUS: ACTIVE</span>
            <span>LINK: HELI_DRONE // LAT: -6.2088 // LNG: 106.8456</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Utility & Grid
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight">
              {t("solutions.powerline.title")} <br />
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-blue bg-clip-text text-transparent">
                {lang === "id" ? "& Audit Keselamatan Jaringan" : lang === "ch" ? "& 电网安全审计" : "& Grid Safety Audits"}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 light:text-slate-700 leading-relaxed font-light max-w-3xl">
              {t("solutions.powerline.desc")}
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
                {lang === "id" ? "Analisis Jaringan Multi-Sensor" : lang === "ch" ? "多传感器电网分析" : "Multi-Sensor Grid Analysis"}
              </h2>
              <p className="text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Dengan mengerahkan drone utilitas cerdas yang dilengkapi dengan beberapa sensor co-aligned, kami menjalankan inspeksi jaringan komprehensif dalam satu penerbangan. Sensor LiDAR memodelkan jarak 3D yang tepat antara vegetasi dan konduktor aktif, pemindai inframerah radiometrik memetakan anomali termal di bawah kondisi beban aktif, dan kamera visual RGB resolusi ultra-tinggi mengaudit degradasi komponen."
                  : lang === "ch"
                    ? "通过部署配备多个共轴传感器的智能电力巡检无人机，我们在一次飞行中执行全面的电网巡检。激光雷达传感器建模导线与植被之间的精确三维距离，辐射红外热像仪在带电运行状态下定位缺陷热点，而超高清可见光相机诊断零部件劣化。"
                    : "By deploying intelligent utility drones equipped with multiple co-aligned sensors, we execute comprehensive grid inspections in a single flight. LiDAR sensors model precise spacing between vegetation and active conductors, radiometric infrared scanners map thermal anomalies under active load conditions, and ultra-high-resolution RGB visual cameras audit component degradation."
                }
              </p>
              <div className="border-l-2 border-brand-cyan/30 pl-4 py-1">
                <p className="text-sm italic text-gray-300 light:text-slate-700">
                  {lang === "id"
                    ? "Alur kerja kami memproses jutaan titik data menjadi log pemeliharaan terstruktur dan kepatuhan PLS-CADD, memotong profil risiko dan paparan tim lapangan."
                    : lang === "ch"
                      ? "我们的数据链将数百万个数据点处理成高度结构化的维护和 PLS-CADD 合规日志，有效降低电网运行风险以及外场班组的安全暴露。"
                      : "Our pipelines process millions of data points into highly structured maintenance and PLS-CADD compliance logs, cutting risk profiles and field team exposure."
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
              {lang === "id" ? "Armada Inspeksi Jaringan" : lang === "ch" ? "电力巡检机队" : "Grid Inspection Fleet"}
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "id"
                ? "Kami mengerahkan platform UAV industri canggih yang dilengkapi dengan payload pencitraan kelas perusahaan dan pemindai LiDAR."
                : lang === "ch"
                  ? "我们部署配备企业级成像负载和激光雷达扫描仪的先进工业无人机平台。"
                  : "We deploy advanced industrial UAV platforms equipped with enterprise-grade imaging payloads and LiDAR scanners."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Scanner Card 1 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              {/* Image Wrapper */}
              <div className="relative h-56 w-full mb-6 rounded-xl overflow-hidden bg-white/[0.02] light:bg-slate-100 flex items-center justify-center">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/56833a8d57eb8d0dbae7fd43/1736694238586-4V3G4VVSZK791ML8HDT5/M4T+Side+Top+da.png"
                  alt="DJI Matrice 4 Thermal"
                  fill
                  className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">01</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">DJI Matrice 4 Thermal</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                Our compact enterprise flagship thermal drone for utility audits. Features integrated 640x512 thermal imaging, a 48MP wide-angle camera, a 48MP telephoto camera, and a 1,800-meter laser range finder.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Thermal Payload</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">640x512 @ 30Hz (VOx)</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Laser Range Finder</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 1,800m Range</span>
                </div>
              </div>
            </div>

            {/* Scanner Card 2 */}
            <div className="group border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-white hover:bg-[#0c1221] light:hover:bg-white/80 hover:border-brand-cyan/20 p-8 rounded-2xl transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
              
              {/* Image Wrapper */}
              <div className="relative h-56 w-full mb-6 rounded-xl overflow-hidden bg-white/[0.02] light:bg-slate-100 flex items-center justify-center">
                <Image
                  src="https://shop.quadrocopter.com/assets/images/b04c4847e982b2d28973794021bd7543origin.jpg"
                  alt="Zenmuse L2 UAV LiDAR System"
                  fill
                  className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 light:border-slate-200 bg-white/5 light:bg-slate-100 text-brand-cyan font-bold text-sm">02</div>
              <h3 className="mt-6 text-xl font-bold text-white light:text-slate-900">Zenmuse L2 UAV LiDAR System</h3>
              <p className="mt-3 text-sm text-gray-400 light:text-slate-600 leading-relaxed flex-grow">
                High-performance airborne laser scanner. Features a high-accuracy IMU and multi-return capability to penetrate thick vegetation, mapping exact wire-to-canopy metrics in high definition.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Pulse Rate</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">240,000 pts/sec</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Returns Supported</span>
                  <span className="font-bold text-white light:text-slate-900 mt-1 block">Up to 5 returns</span>
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
              Grid Deliverables
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              We process sensor data into standard formats compatible with leading grid engineering systems.
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
                    <div className={`group relative h-80 sm:h-96 rounded-2xl overflow-hidden border shadow-2xl light:shadow-md transition-all duration-300 ${
                      item.isFeatured 
                        ? "border-brand-cyan/40 shadow-[0_0_30px_rgba(0,163,224,0.1)] scale-[1.01]" 
                        : "border-white/10 light:border-slate-200"
                    }`}>
                      
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
                      <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase flex items-center gap-2">
                        DELIVERABLE 0{idx + 1}
                        {item.isFeatured && (
                          <span className="bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 text-[8px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                            Featured Product
                          </span>
                        )}
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
              Grid Applications
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Deploying tailored aerial inspections for public utility operators and electrical asset managers.
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

      {/* Service Package Options */}
      <section className="py-24 bg-gradient-to-b from-[#05080e] light:from-white to-[#090d16] light:to-slate-50 relative overflow-hidden transition-colors duration-300 border-t border-white/5 light:border-slate-200">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1 rounded-full">
              Pricing & Deliverables
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Service Packages
            </h2>
            <p className="mt-4 text-gray-400 light:text-slate-650 text-sm sm:text-base leading-relaxed">
              Choose the inspection level that fits your utility requirements. Standardized formats ready for engineering import.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              const isExpanded = expandedPackage === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className={`group relative rounded-2xl border bg-white/[0.01] light:bg-white p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full ${pkg.colorClass}`}
                >
                  {/* Decorative background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-white/[0.02] to-transparent rounded-bl-full pointer-events-none" />

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`text-[10px] font-bold tracking-wider uppercase border px-2.5 py-0.5 rounded-full ${pkg.badgeClass}`}>
                          {pkg.badge}
                        </span>
                        <h3 className="mt-3 text-2xl font-extrabold text-white light:text-slate-900">
                          {pkg.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 light:text-slate-500 leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="space-y-4 mb-8 pt-6 border-t border-white/5 light:border-slate-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Minimum Order Volume</span>
                        <span className="font-bold text-white light:text-slate-900">{pkg.minOrder}</span>
                      </div>
                      
                      <div className="flex items-start justify-between gap-4 text-xs">
                        <span className="text-gray-500">Tower Inspection</span>
                        <div className="flex items-center gap-1.5 text-right font-semibold text-white light:text-slate-900">
                          {pkg.climbUp.included ? (
                            <>
                              <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                              <span>Thermal & Visual</span>
                            </>
                          ) : (
                            <>
                              <X className="h-4 w-4 text-rose-500 shrink-0" />
                              <span className="text-gray-500">Not Included</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-4 text-xs">
                        <span className="text-gray-500">Map Output</span>
                        <div className="flex items-center gap-1.5 text-right font-semibold text-white light:text-slate-900">
                          {pkg.mapOutput.included ? (
                            <>
                              <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                              <span>2D & Elevation Models</span>
                            </>
                          ) : (
                            <>
                              <X className="h-4 w-4 text-rose-500 shrink-0" />
                              <span className="text-gray-500">Not Included</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Maps details if included */}
                    {pkg.mapOutput.included && pkg.maps && (
                      <div className="mb-6 p-4 rounded-xl bg-white/[0.02] light:bg-slate-100/50 border border-white/5 light:border-slate-200">
                        <span className="text-[10px] font-bold text-brand-cyan tracking-wider uppercase flex items-center gap-1.5 mb-2">
                          <Map className="h-3 w-3" /> Map Deliverables
                        </span>
                        <ul className="space-y-1.5">
                          {pkg.maps.map((mapItem, mIdx) => (
                            <li key={mIdx} className="flex gap-2 items-start text-xs text-gray-300 light:text-slate-700">
                              <span className="text-brand-cyan shrink-0 mt-0.5">•</span>
                              <span>{mapItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* LiDAR Details Toggle */}
                    <div className="mb-8">
                      <button
                        onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                        className="flex items-center justify-between w-full p-3.5 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.01] light:bg-slate-100 hover:bg-[#0c1221] light:hover:bg-slate-200/50 transition-all text-xs font-semibold text-gray-300 light:text-slate-800"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-brand-cyan" />
                          <span>LiDAR RoW Analysis ({pkg.rowLiDAR.length} Items)</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </button>

                      {/* Expanded LiDAR analyses list */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? "max-h-[550px] mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-4 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-100/40 text-[11px] space-y-2.5 overflow-y-auto max-h-[300px] custom-scrollbar">
                          {pkg.rowLiDAR.map((analysis, aIdx) => (
                            <div key={aIdx} className="flex gap-2 items-start text-gray-300 light:text-slate-600 leading-relaxed">
                              <span className="text-brand-cyan font-mono text-[9px] mt-0.5">{(aIdx + 1).toString().padStart(2, '0')}.</span>
                              <span>{analysis}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action Button */}
                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className={`mt-4 w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all duration-300 ${pkg.btnClass}`}
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
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
            {lang === "id" ? "Siap Mengaudit Jaringan Transmisi Anda?" : lang === "ch" ? "准备好巡检您的电网了吗？" : "Ready to Inspect Your Grid?"}
          </h2>

          <p className="mt-4 text-gray-400 light:text-slate-650 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {lang === "id" ? "Diskusikan kebutuhan survei Anda dengan tim teknis kami. Kami menyediakan solusi yang disesuaikan dan estimasi yang akurat." : lang === "ch" ? "与我们的技术团队讨论您的测量需求。我们提供量身定制的解决方案和准确 of 估算。" : "Discuss your surveying and inspection needs with our technical team. We provide tailored solutions and accurate estimations."}
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
