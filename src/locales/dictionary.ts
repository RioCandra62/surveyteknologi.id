export type Locale = "en" | "id" | "ch";

export const dictionary = {
  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      ourFleet: "Our Fleet",
      aboutUs: "About Us",
      contact: "Contact",
      gallery: "Gallery",
      changeLang: "Change Language"
    },
    hero: {
      tagline: "INDONESIA'S PREMIER GEOSPATIAL TEAM",
      title1: "High-Precision",
      title2: "Drone Survey & Mapping",
      title3: "Solutions",
      subtitle: "Survey Teknologi Indonesia delivers survey-grade, actionable geospatial data using LiDAR, photogrammetry, bathymetry, and spatial digital twins.",
      exploreBtn: "Explore Solutions",
      contactBtn: "Contact Us",
      scroll: "Scroll"
    },
    portfolio: {
      badge: "Proven Performance",
      title: "Our Impact in Numbers",
      subtitle: "Delivering high-accuracy data and reliable insights across the Indonesian archipelago.",
      statArea: "Total Area Mapped",
      statProjects: "Projects Completed",
      statPartners: "Partner Companies",
      statExperience: "Years of Experience"
    },
    partner: {
      badge: "Trusted Collaborations",
      title: "Our Partners & Clients",
      subtitle: "Collaborating with industry leaders in mining, energy, and infrastructure to map the future."
    },
    leadership: {
      badge: "Executive Vision",
      quote: "\"Data quality and innovation are the keys to success in every survey and mapping project we undertake.\"",
      name: "Hindrawan HM",
      role: "President Director, Survey Teknologi Indonesia"
    },
    solutions: {
      badge: "Core Offerings",
      title: "Advanced Drone-Based Survey & Mapping",
      subtitle: "Survey Teknologi Indonesia delivers survey-grade geospatial datasets and high-density point clouds for critical engineering, infrastructure, and mining operations.",
      exploreBtn: "Explore Solution",
      lidar: {
        title: "LiDAR Survey",
        category: "Aerial Laser",
        desc: "High-density point cloud data for terrain modeling, deformation analysis, and vegetation penetration."
      },
      photogrammetry: {
        title: "Photogrammetry",
        category: "3D Reconstruction",
        desc: "High-resolution orthomosaic and 3D surface models for mapping, inspection, and asset monitoring."
      },
      bathymetry: {
        title: "Bathymetry",
        category: "Hydrographic Survey",
        desc: "Accurate shallow-water and coastal bathymetric survey for marine and infrastructure projects."
      },
      spatialCamera: {
        title: "Spatial Camera",
        category: "Digital Twin",
        desc: "Digital twin creation and spatial mapping using advanced spatial camera technology."
      },
      slam: {
        title: "Simultaneous Localization and Mapping (SLAM)",
        category: "GPS-Denied Mapping",
        desc: "Real-time 3D mapping and localization in GPS-denied environments using SLAM technology."
      },
      terrestrial: {
        title: "Terrestrial Mapping",
        category: "Land Survey",
        desc: "High-precision terrestrial mapping for construction, mining, and infrastructure projects."
      },
      powerline: {
        title: "Powerline Inspection",
        category: "Utility & Grid",
        desc: "AI-driven inspection solutions for transmission lines, identifying structural defects, hot spots, and vegetation encroachment."
      }
    },
    contact: {
      backToHome: "Back to Home",
      getInTouch: "Get in Touch",
      title: "Start Your Geospatial Project Consultation",
      subtitle: "Connect with our survey and engineering team to get detailed scoping, coordinate validation, and tailored pricing estimates.",
      officeDesc: "Headquartered in Makassar, we deploy survey teams and state-of-the-art drone payloads nationwide for major infrastructure, carbon mapping, and resource industries.",
      officeLocation: "Office Location",
      directEmail: "Direct Email",
      callCenter: "Call Center",
      opsHours: "Operations Hours",
      opsHoursDesc: "Monday – Friday: 08:30 – 17:30 (WIB)",
      connectWithUs: "Connect with us",
      formTitle: "Contact Form",
      formDesc: "Provide your technical requirements to generate an engineering bid response.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      companyName: "Company Name",
      phoneNumber: "Phone Number",
      requiredService: "Required Service",
      selectService: "-- Select a service --",
      message: "Message / Project Description",
      messagePlaceholder: "Please detail your area location, size in hectares, target accuracy standards, and any special deliverables required.",
      sendInquiry: "Send Inquiry",
      processing: "Processing Scope...",
      successTitle: "Inquiry Sent Successfully!",
      successDesc: "Thank you for reaching out to Survey Teknologi Indonesia. Your technical scope query has been logged. Our surveying engineer will contact you within 24 business hours.",
      sendAnother: "Send another request",
      requiredFieldsError: "Please complete all required fields (Name, Email, and Selection Service).",
      submitError: "Failed to send email. Please check your server SMTP configuration.",
      unexpectedError: "An unexpected error occurred. Please try again later."
    },
    footer: {
      description: "Survey Teknologi Indonesia delivers high-precision geospatial data and mapping solutions using LiDAR, photogrammetry, bathymetry, and SLAM technologies.",
      company: "Company",
      services: "Services",
      contactUs: "Contact Us",
      allRightsReserved: "All rights reserved."
    },
    gallery: {
      badge: "Field Documentation",
      title: "Our Field Activities",
      subtitle: "Explore our documentation of survey and mapping activities across various terrains.",
      newsTitle: "News & Activities",
      pageTitle: "Field Updates",
      pageSubtitle: "Live updates from the field. Follow the documentation and stories behind our survey, mapping, and inspection operations across the archipelago.",
      featuredBadge: "Featured Highlight",
      readFull: "Read Full Report",
      recentActivities: "Recent Activities",
      readMore: "Read More",
      close: "Close",
      reportId: "Report ID:",
      requestSimilar: "Request Similar Service"
    },
    galleryNews: [
      {
        id: "news-01",
        src: "/assets/image/lidar/DSM.jpg",
        title: "Digital Surface Model (DSM) Mapping Completed in Kalimantan Mining Area",
        category: "LiDAR Mapping",
        date: "20 July 2026",
        excerpt: "Our aerial survey team successfully completed mapping using LiDAR sensors to produce high-accuracy DSMs to support operational planning in East Kalimantan.",
        content: "In our latest project in East Kalimantan, the Survey Teknologi Indonesia team deployed drones with advanced LiDAR payloads to map a mining area of over 500 hectares. The resulting highly detailed Digital Surface Model (DSM) will be used by the client for mine planning, cut-and-fill volume calculations, and periodic slope stability monitoring. This operation was successfully completed in a fraction of the time compared to conventional ground survey methods."
      },
      {
        id: "news-02",
        src: "/assets/image/bathymmetry/result.jpeg",
        title: "Submarine Cable Route Bathymetry Survey Successfully Executed",
        category: "Hydrographic Survey",
        date: "15 July 2026",
        excerpt: "The use of Unmanned Surface Vehicles (USV) equipped with multibeam echo sounders produced precision bathymetry maps for new submarine cable installations.",
        content: "Expanding our marine services, the hydrographic team recently completed a comprehensive bathymetric survey in the shallow coastal waters of Java. Using an autonomous surface vessel (ASV) integrated with a dual-frequency echo sounder, our team mapped the seabed contours with centimeter accuracy. This data is crucial to ensure the safety and viability of the new submarine fiber optic cable route."
      },
      {
        id: "news-03",
        src: "/assets/image/powerline/clearence.png",
        title: "High-Voltage Transmission Line Inspection Using Spatial & Thermal Cameras",
        category: "Utility Inspection",
        date: "08 July 2026",
        excerpt: "Identification of thermal anomalies and measurement of electrical conductor clearance against vegetation along extra-high voltage transmission corridors.",
        content: "Our Utility & Grid division team recently conducted routine inspections on hundreds of kilometers of high-voltage transmission lines. By combining high-resolution visual, thermal, and LiDAR data from drones, we can perform automated clearance analysis. We successfully identified several critical points where vegetation (trees) could potentially interfere with conductors, allowing clients to take immediate pruning mitigation steps before massive power outages occur."
      },
      {
        id: "news-04",
        src: "/assets/image/lidar/classified_pointcloud.png",
        title: "Point Cloud Classification for Protected Forest Concession Planning",
        category: "LiDAR Mapping",
        date: "01 July 2026",
        excerpt: "Advanced processing on LiDAR data to separate vegetation and above-ground objects to obtain the original ground profile.",
        content: "Mapping areas with dense forest canopies has always been a challenge. However, with the penetration of our latest multispectral LiDAR sensor, the spatial data analyst team successfully classified point clouds accurately. This point cloud data is filtered to remove reflections from trees and foliage, leaving high-precision bare-earth elevations. This information is very useful for clients in planning logging road access without damaging the surrounding protected forest areas."
      },
      {
        id: "news-05",
        src: "/assets/image/photogrammetry/ortho.png",
        title: "High-Resolution Orthomosaic Recording in Subang Agricultural Land",
        category: "Photogrammetry",
        date: "25 June 2026",
        excerpt: "Creation of highly detailed orthophoto (Orthomosaic) maps to support precision agriculture programs and paddy crop health monitoring.",
        content: "Support for food security is realized through precision mapping surveys in the rice granary area of Subang, West Java. Our fixed-wing drones mapped thousands of hectares of rice fields in just a matter of days. Aerial photos combined into this orthomosaic map allow agronomists to monitor growth variations, plan irrigation, and forecast crop yields with unprecedented accuracy."
      },
      {
        id: "news-06",
        src: "/assets/image/photogrammetry/contour_line.jpeg",
        title: "Topographic Contour Line Mapping in Sumatra Oil Palm Plantations",
        category: "Photogrammetry",
        date: "12 June 2026",
        excerpt: "Elevation data extracted from 3D photogrammetry modeling is used to design terracing and drainage systems for palm oil plantations.",
        content: "The Sumatra survey team successfully delivered topographic mapping results in the form of contour line maps for one of the largest palm oil plantation companies in Indonesia. With detailed slope information, our clients can now optimize planting block designs, terracing systems to prevent erosion, and peatland water management to be more productive and environmentally friendly."
      },
      {
        id: "news-07",
        src: "/assets/image/lidar/DTM.jpg",
        title: "Digital Terrain Model (DTM) Extraction for New City Masterplan",
        category: "LiDAR Mapping",
        date: "05 June 2026",
        excerpt: "Supporting the acceleration of civil infrastructure development with digital terrain models devoid of vegetation or building obstacles.",
        content: "As part of a new independent city development initiative, Survey Teknologi Indonesia was entrusted with mapping undeveloped hilly areas. The final product, a Digital Terrain Model (DTM), serves as a critical foundation for civil engineers to design main road routes, utility networks, and flood control systems before heavy machinery enters the field."
      },
      {
        id: "news-08",
        src: "/assets/image/photogrammetry/digitize_ortho.jpeg",
        title: "Large-Scale City Spatial Planning Map Digitization Process",
        category: "Photogrammetry",
        date: "28 May 2026",
        excerpt: "Creation of updated digital base maps through a direct digitization process over ultra-high-resolution aerial photographs.",
        content: "Rapid urban development demands the availability of up-to-date spatial data. Using the latest photogrammetric acquisition results, our GIS team is currently conducting a large-scale on-screen digitization process. Buildings, roads, parcel boundaries, and public facilities are mapped into vector formats (shapefiles) that will be integrated directly into the local city government's Geographic Information System (GIS)."
      },
      {
        id: "news-09",
        src: "/assets/image/photogrammetry/dem.jpeg",
        title: "Digital Elevation Model (DEM) Analysis for Flood Risk Mitigation",
        category: "Photogrammetry",
        date: "14 May 2026",
        excerpt: "Digital Elevation Model (DEM)-based surface flow modeling to identify flood-prone zones in river basins.",
        content: "Responding to the need for hydrometeorological disaster mitigation, our aerial mapping data is processed into a comprehensive Digital Elevation Model (DEM). Through hydrological analysis on this DEM data, the client's consulting team can simulate rainwater runoff directions and optimally determine infiltration areas and flood control dam construction points."
      },
      {
        id: "news-10",
        src: "/assets/image/lidar/topolines.jpg",
        title: "Topographic Lines (Topo Lines) Drawing for National Dam Project",
        category: "LiDAR Mapping",
        date: "02 May 2026",
        excerpt: "Generating very dense contour intervals to support technical calculations for the construction of national strategic dams.",
        content: "Accuracy is everything in massive-scale dam construction engineering. Aerial LiDAR mapping provides the perfect base data to extract topographic maps with half-meter contour intervals. This high-precision data has been reviewed and approved by relevant ministries, ensuring the smooth technical design phase of the spillway dam and inundation area."
      }
    ]
  },
  id: {
    nav: {
      home: "Beranda",
      solutions: "Solusi",
      ourFleet: "Armada Kami",
      aboutUs: "Tentang Kami",
      contact: "Kontak",
      gallery: "Galeri",
      changeLang: "Ubah Bahasa"
    },
    hero: {
      tagline: "TIM GEOSPASIAL UTAMA DI INDONESIA",
      title1: "Solusi",
      title2: "Survei & Pemetaan Drone",
      title3: "Presisi Tinggi",
      subtitle: "Survey Teknologi Indonesia menyediakan data geospasial tingkat survei yang akurat menggunakan LiDAR, fotogrametri, batimetri, dan digital twin spasial.",
      exploreBtn: "Jelajahi Solusi",
      contactBtn: "Hubungi Kami",
      scroll: "Gulir"
    },
    portfolio: {
      badge: "Kinerja Terbukti",
      title: "Dampak Kami dalam Angka",
      subtitle: "Menyediakan data dengan akurasi tinggi dan wawasan tepercaya di seluruh kepulauan Indonesia.",
      statArea: "Total Area Dipetakan",
      statProjects: "Proyek Selesai",
      statPartners: "Perusahaan Mitra",
      statExperience: "Tahun Pengalaman"
    },
    partner: {
      badge: "Kolaborasi Tepercaya",
      title: "Mitra & Klien Kami",
      subtitle: "Berkolaborasi dengan para pemimpin industri di sektor pertambangan, energi, dan infrastruktur untuk memetakan masa depan."
    },
    leadership: {
      badge: "Visi Eksekutif",
      quote: "\"Kualitas data dan inovasi adalah kunci kesuksesan dalam setiap proyek survei dan pemetaan yang kami lakukan.\"",
      name: "Hindrawan HM",
      role: "Direktur Utama, Survey Teknologi Indonesia"
    },
    solutions: {
      badge: "Penawaran Utama",
      title: "Survei & Pemetaan Berbasis Drone Canggih",
      subtitle: "Survey Teknologi Indonesia menyediakan kumpulan data geospasial tingkat survei dan point cloud berkepadatan tinggi untuk operasi teknik, infrastruktur, dan pertambangan penting.",
      exploreBtn: "Jelajahi Solusi",
      lidar: {
        title: "Survei LiDAR",
        category: "Laser Udara",
        desc: "Data point cloud berkepadatan tinggi untuk pemodelan medan, analisis deformasi, dan penetrasi vegetasi."
      },
      photogrammetry: {
        title: "Fotogrametri",
        category: "Rekonstruksi 3D",
        desc: "Model permukaan 3D dan ortomosaik resolusi tinggi untuk pemetaan, inspeksi, dan pemantauan aset."
      },
      bathymetry: {
        title: "Batimetri",
        category: "Survei Hidrografis",
        desc: "Survei batimetri air dangkal dan pesisir yang akurat untuk proyek kelautan dan infrastruktur."
      },
      spatialCamera: {
        title: "Kamera Spasial",
        category: "Digital Twin",
        desc: "Pembuatan digital twin dan pemetaan spasial menggunakan teknologi kamera spasial canggih."
      },
      slam: {
        title: "Simultaneous Localization and Mapping (SLAM)",
        category: "Pemetaan Tanpa GPS",
        desc: "Pemetaan dan lokalisasi 3D real-time di lingkungan tanpa sinyal GPS menggunakan teknologi SLAM."
      },
      terrestrial: {
        title: "Pemetaan Terestrial",
        category: "Survei Darat",
        desc: "Pemetaan terestrial presisi tinggi untuk proyek konstruksi, pertambangan, dan infrastruktur."
      },
      powerline: {
        title: "Inspeksi Jalur Transmisi",
        category: "Utilitas & Jaringan",
        desc: "Solusi inspeksi berbasis AI untuk jalur transmisi, mengidentifikasi cacat struktural, titik panas, dan rambatan vegetasi."
      }
    },
    contact: {
      backToHome: "Kembali ke Beranda",
      getInTouch: "Hubungi Kami",
      title: "Mulai Konsultasi Proyek Geospasial Anda",
      subtitle: "Hubungi tim survei dan teknik kami untuk mendapatkan penentuan lingkup proyek detail, validasi koordinat, dan estimasi biaya yang disesuaikan.",
      officeDesc: "Berkantor pusat di Makassar, kami mengerahkan tim survei dan payload drone mutakhir secara nasional untuk proyek infrastruktur utama, pemetaan karbon, dan industri sumber daya.",
      officeLocation: "Lokasi Kantor",
      directEmail: "Email Langsung",
      callCenter: "Pusat Panggilan",
      opsHours: "Jam Operasional",
      opsHoursDesc: "Senin – Jumat: 08:30 – 17:30 (WIB)",
      connectWithUs: "Hubungkan dengan kami",
      formTitle: "Formulir Kontak",
      formDesc: "Berikan persyaratan teknis Anda untuk menghasilkan respons penawaran teknik.",
      fullName: "Nama Lengkap",
      emailAddress: "Alamat Email",
      companyName: "Nama Perusahaan",
      phoneNumber: "Nomor Telepon",
      requiredService: "Layanan yang Diperlukan",
      selectService: "-- Pilih Layanan --",
      message: "Pesan / Deskripsi Proyek",
      messagePlaceholder: "Sebutkan detail lokasi area Anda, luas dalam hektar, standar akurasi target, dan hasil pekerjaan khusus apa pun yang diperlukan.",
      sendInquiry: "Kirim Permintaan",
      processing: "Memproses Lingkup...",
      successTitle: "Permintaan Berhasil Dikirim!",
      successDesc: "Terima kasih telah menghubungi Survey Teknologi Indonesia. Permintaan lingkup teknis Anda telah dicatat. Insinyur survei kami akan menghubungi Anda dalam waktu 24 jam kerja.",
      sendAnother: "Kirim permintaan lain",
      requiredFieldsError: "Harap lengkapi semua bidang yang wajib diisi (Nama, Email, dan Layanan Pilihan).",
      submitError: "Gagal mengirim email. Silakan periksa konfigurasi SMTP server Anda.",
      unexpectedError: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti."
    },
    footer: {
      description: "Survey Teknologi Indonesia menyediakan data geospasial presisi tinggi dan solusi pemetaan menggunakan teknologi LiDAR, fotogrametri, batimetri, dan SLAM.",
      company: "Perusahaan",
      services: "Layanan",
      contactUs: "Hubungi Kami",
      allRightsReserved: "Hak cipta dilindungi undang-undang."
    },
    gallery: {
      badge: "Dokumentasi Lapangan",
      title: "Kegiatan Lapangan Kami",
      subtitle: "Jelajahi dokumentasi kegiatan survei dan pemetaan kami di berbagai medan.",
      newsTitle: "Berita & Kegiatan",
      pageTitle: "Kabar Lapangan",
      pageSubtitle: "Pembaruan langsung dari lapangan. Ikuti dokumentasi dan cerita di balik operasi survei, pemetaan, dan inspeksi kami di seluruh penjuru Nusantara.",
      featuredBadge: "Sorotan Utama",
      readFull: "Baca Laporan Lengkap",
      recentActivities: "Kegiatan Terbaru",
      readMore: "Baca Selengkapnya",
      close: "Tutup",
      reportId: "ID Laporan:",
      requestSimilar: "Minta Layanan Serupa"
    },
    galleryNews: [
      {
        id: "news-01",
        src: "/assets/image/lidar/DSM.jpg",
        title: "Pemetaan Digital Surface Model (DSM) Selesai di Area Tambang Kalimantan",
        category: "LiDAR Mapping",
        date: "20 Juli 2026",
        excerpt: "Tim survei udara kami berhasil menyelesaikan pemetaan menggunakan sensor LiDAR untuk menghasilkan DSM berakurasi tinggi guna mendukung perencanaan operasional di area tambang batubara Kalimantan Timur.",
        content: "Dalam proyek terbaru kami di Kalimantan Timur, tim Survey Teknologi Indonesia mengerahkan drone dengan payload LiDAR canggih untuk memetakan area tambang seluas lebih dari 500 hektar. Hasil pemetaan berupa Digital Surface Model (DSM) yang sangat detail ini akan digunakan oleh klien untuk perencanaan tambang, perhitungan volume material (cut and fill), serta pemantauan kestabilan lereng secara berkala. Operasi ini berhasil diselesaikan dalam waktu yang jauh lebih singkat dibandingkan metode survei darat konvensional."
      },
      {
        id: "news-02",
        src: "/assets/image/bathymmetry/result.jpeg",
        title: "Survei Batimetri Rute Kabel Bawah Laut Selesai Dieksekusi",
        category: "Hydrographic Survey",
        date: "15 Juli 2026",
        excerpt: "Penggunaan Unmanned Surface Vehicle (USV) yang dilengkapi multibeam echo sounder membuahkan peta batimetri presisi untuk instalasi rute kabel bawah laut baru.",
        content: "Melanjutkan ekspansi layanan kelautan kami, tim hidrografi baru saja menyelesaikan survei batimetri komprehensif di perairan dangkal pesisir Jawa. Menggunakan kapal survei otonom (ASV) yang terintegrasi dengan echo sounder frekuensi ganda, tim kami memetakan kontur dasar laut dengan akurasi sentimeter. Data ini sangat krusial untuk memastikan keamanan dan kelayakan rute peletakan kabel serat optik bawah laut yang baru."
      },
      {
        id: "news-03",
        src: "/assets/image/powerline/clearence.png",
        title: "Inspeksi Jalur Transmisi SUTET Menggunakan Kamera Spasial & Termal",
        category: "Utility Inspection",
        date: "08 Juli 2026",
        excerpt: "Identifikasi anomali panas dan pengukuran jarak aman (clearance) konduktor listrik terhadap vegetasi di sepanjang koridor transmisi tegangan ekstra tinggi.",
        content: "Tim divisi Utility & Grid kami baru saja melakukan inspeksi rutin pada ratusan kilometer jalur transmisi SUTET. Dengan menggabungkan data visual resolusi tinggi, termal, dan LiDAR dari drone, kami dapat melakukan analisis jarak bebas (clearance) secara otomatis. Kami berhasil mengidentifikasi beberapa titik kritis di mana vegetasi (pohon) berpotensi mengganggu konduktor, sehingga klien dapat segera melakukan langkah mitigasi pemangkasan sebelum terjadi gangguan listrik massal."
      },
      {
        id: "news-04",
        src: "/assets/image/lidar/classified_pointcloud.png",
        title: "Klasifikasi Point Cloud untuk Perencanaan Konsesi Hutan Lindung",
        category: "LiDAR Mapping",
        date: "01 Juli 2026",
        excerpt: "Pemrosesan tingkat lanjut pada data LiDAR untuk memisahkan vegetasi dan objek di atas permukaan tanah demi mendapatkan profil tanah asli.",
        content: "Pemetaan area dengan kanopi hutan yang lebat selalu menjadi tantangan. Namun, dengan penetrasi sensor LiDAR multispectral terbaru kami, tim analis data spasial berhasil melakukan klasifikasi point cloud secara akurat. Data point cloud ini difilter untuk menghilangkan pantulan dari pohon dan dedaunan, menyisakan elevasi bare-earth yang presisi tinggi. Informasi ini sangat berguna bagi klien dalam merencanakan akses jalan logging tanpa merusak kawasan hutan lindung sekitarnya."
      },
      {
        id: "news-05",
        src: "/assets/image/photogrammetry/ortho.png",
        title: "Perekaman Orthomosaic Resolusi Tinggi di Lahan Pertanian Subang",
        category: "Photogrammetry",
        date: "25 Juni 2026",
        excerpt: "Pembuatan peta orthofoto (Orthomosaic) yang sangat detail untuk mendukung program *precision agriculture* dan pemantauan kesehatan tanaman padi.",
        content: "Dukungan terhadap ketahanan pangan diwujudkan melalui survei pemetaan presisi di kawasan lumbung padi Subang, Jawa Barat. Drone fixed-wing kami memetakan ribuan hektar sawah hanya dalam hitungan hari. Foto udara yang digabungkan menjadi peta orthomosaic ini memungkinkan para ahli agronomi untuk memantau variasi pertumbuhan, merencanakan irigasi, dan memperkirakan hasil panen dengan akurasi yang belum pernah ada sebelumnya."
      },
      {
        id: "news-06",
        src: "/assets/image/photogrammetry/contour_line.jpeg",
        title: "Pemetaan Garis Kontur Topografi di Perkebunan Kelapa Sawit Sumatera",
        category: "Photogrammetry",
        date: "12 Juni 2026",
        excerpt: "Data elevasi yang diekstraksi dari pemodelan 3D fotogrametri digunakan untuk merancang sistem terasering dan drainase kebun sawit.",
        content: "Tim survei Sumatera sukses menyerahkan hasil pemetaan topografi berupa peta garis kontur (contour line) untuk salah satu perusahaan perkebunan kelapa sawit terbesar di Indonesia. Dengan informasi kemiringan lereng yang detail, klien kami kini dapat mengoptimalkan desain blok penanaman, sistem terasering untuk mencegah erosi, serta manajemen tata air lahan gambut agar lebih produktif dan ramah lingkungan."
      },
      {
        id: "news-07",
        src: "/assets/image/lidar/DTM.jpg",
        title: "Ekstraksi Digital Terrain Model (DTM) untuk Masterplan Kota Baru",
        category: "LiDAR Mapping",
        date: "05 Juni 2026",
        excerpt: "Mendukung percepatan pembangunan infrastruktur sipil dengan model medan digital tanpa hambatan vegetasi atau bangunan.",
        content: "Sebagai bagian dari inisiatif pengembangan kota mandiri baru, Survey Teknologi Indonesia dipercaya untuk memetakan area perbukitan yang belum dikembangkan. Produk akhir berupa Digital Terrain Model (DTM) menjadi pondasi kritis bagi insinyur sipil untuk merancang rute jalan utama, jaringan utilitas, dan sistem pengendalian banjir sebelum alat berat turun ke lapangan."
      },
      {
        id: "news-08",
        src: "/assets/image/photogrammetry/digitize_ortho.jpeg",
        title: "Proses Digitasi Peta Tata Ruang Kota Skala Besar",
        category: "Photogrammetry",
        date: "28 Mei 2026",
        excerpt: "Pembuatan peta dasar digital yang diperbarui melalui proses digitasi langsung di atas foto udara resolusi ultra-tinggi.",
        content: "Perkembangan wilayah urban yang pesat menuntut ketersediaan data tata ruang yang *up-to-date*. Menggunakan hasil akuisisi fotogrametri terbaru, tim GIS kami tengah melakukan proses digitasi on-screen berskala besar. Bangunan, jalan, batas persil, dan fasilitas umum dipetakan ke dalam format vektor (shapefile) yang akan diintegrasikan langsung ke dalam Sistem Informasi Geografis (SIG) milik pemerintah kota setempat."
      },
      {
        id: "news-09",
        src: "/assets/image/photogrammetry/dem.jpeg",
        title: "Analisis Elevasi Digital (DEM) untuk Mitigasi Risiko Banjir",
        category: "Photogrammetry",
        date: "14 Mei 2026",
        excerpt: "Pemodelan aliran permukaan berbasis Digital Elevation Model (DEM) guna mengidentifikasi zona rentan genangan di daerah aliran sungai.",
        content: "Merespon kebutuhan akan mitigasi bencana hidrometeorologi, data pemetaan udara kami diolah menjadi Digital Elevation Model (DEM) yang komprehensif. Melalui analisis hidrologi di atas data DEM ini, tim konsultan klien dapat mensimulasikan arah limpasan air hujan (run-off) dan menetapkan area-area resapan serta titik pembangunan bendali (bendungan pengendali banjir) secara optimal."
      },
      {
        id: "news-10",
        src: "/assets/image/lidar/topolines.jpg",
        title: "Penggambaran Garis Topografi (Topo Lines) Proyek Bendungan Nasional",
        category: "LiDAR Mapping",
        date: "02 Mei 2026",
        excerpt: "Menghasilkan interval kontur yang sangat rapat untuk mendukung perhitungan teknis konstruksi bendungan strategis nasional.",
        content: "Akurasi adalah segalanya dalam rekayasa konstruksi bendungan berskala masif. Pemetaan LiDAR udara memberikan data dasar yang sempurna untuk mengekstraksi peta topografi dengan interval kontur setengah meter. Data presisi tinggi ini telah di-review dan disetujui oleh kementerian terkait, memastikan kelancaran tahap desain teknis bendungan pelimpah dan area genangan."
      }
    ]
  },
  ch: {
    nav: {
      home: "首页",
      solutions: "解决方案",
      ourFleet: "机队展示",
      aboutUs: "关于我们",
      contact: "联系我们",
      gallery: "图库",
      changeLang: "更换语言"
    },
    hero: {
      tagline: "印度尼西亚首屈一指的空间地理团队",
      title1: "高精度",
      title2: "无人机测量与绘图",
      title3: "解决方案",
      subtitle: "Survey Teknologi Indonesia 利用 LiDAR、光学摄影测量、水下测深和空间数字孪生技术，提供测量级、可操作的空间地理数据。",
      exploreBtn: "探索解决方案",
      contactBtn: "联系我们",
      scroll: "滚动"
    },
    portfolio: {
      badge: "经受验证的业绩",
      title: "我们的影响力数据",
      subtitle: "在印度尼西亚群岛提供高精度的数据与可靠的见解。",
      statArea: "总测绘面积",
      statProjects: "完成项目数量",
      statPartners: "合作企业数量",
      statExperience: "行业经验年限"
    },
    partner: {
      badge: "信赖的合作伙伴",
      title: "我们的合作伙伴与客户",
      subtitle: "与采矿、能源和基础设施领域的行业领袖携手，共绘未来。"
    },
    leadership: {
      badge: "管理层愿景",
      quote: "\"在我们开展的每个测量和绘图项目中，数据质量和创新是成功的关键。\"",
      name: "Hindrawan HM",
      role: "总经理, Survey Teknologi Indonesia"
    },
    solutions: {
      badge: "核心产品",
      title: "基于无人机的高级测量与绘图",
      subtitle: "Survey Teknologi Indonesia 提供测量级空间地理数据集和高密度点云，适用于关键的工程、基础设施和采矿运营项目。",
      exploreBtn: "探索解决方案",
      lidar: {
        title: "LiDAR 激光雷达测量",
        category: "航空激光",
        desc: "高密度点云数据，用于地形建模、变形分析和植被穿透。"
      },
      photogrammetry: {
        title: "光学摄影测量",
        category: "3D重建",
        desc: "高分辨率正射影像和 3D 地表模型，用于测绘、检测和资产监测。"
      },
      bathymetry: {
        title: "水下测深测量",
        category: "水下测量",
        desc: "适用于海洋和基础设施项目的精准浅水与海岸测深。"
      },
      spatialCamera: {
        title: "空间相机",
        category: "数字孪生",
        desc: "利用先进的空间相机技术创建数字孪生与进行空间测绘。"
      },
      slam: {
        title: "实时定位与建图 (SLAM)",
        category: "无GPS制图",
        desc: "在无 GPS 信号环境中使用 SLAM 技术进行实时 3D 测绘与定位。"
      },
      terrestrial: {
        title: "地面测绘",
        category: "地面测量",
        desc: "适用于建筑、采矿和基础设施项目的高精度地面测绘。"
      },
      powerline: {
        title: "电力巡检",
        category: "电力与电网",
        desc: "基于人工智能的输电线路巡检解决方案，识别结构缺陷、过热点和植被侵入。"
      }
    },
    contact: {
      backToHome: "返回首页",
      getInTouch: "保持联系",
      title: "开始您的空间地理项目咨询",
      subtitle: "与我们的测量和工程团队联系，获取详细的项目范围定义、坐标验证和量身定制的估价。",
      officeDesc: "总部位于望加锡，我们在全国范围内部署测量团队和先进的无人机载荷，服务于重大基础设施、碳测绘和资源开发等行业。",
      officeLocation: "办公地址",
      directEmail: "直接邮箱",
      callCenter: "呼叫中心",
      opsHours: "工作时间",
      opsHoursDesc: "星期一 – 星期五: 08:30 – 17:30 (WIB)",
      connectWithUs: "关注我们",
      formTitle: "联系表单",
      formDesc: "请提供您的技术需求，以便生成工程投标回复。",
      fullName: "姓名",
      emailAddress: "邮箱地址",
      companyName: "公司名称",
      phoneNumber: "电话号码",
      requiredService: "所需服务",
      selectService: "-- 请选择一项服务 --",
      message: "信息 / 项目描述",
      messagePlaceholder: "请详细说明您的区域位置、以公顷为单位的面积大小、目标精度标准以及所需的任何特殊成果。",
      sendInquiry: "发送咨询",
      processing: "正在处理项目范围...",
      successTitle: "咨询发送成功！",
      successDesc: "感谢您联系 Survey Teknologi Indonesia。您的技术咨询范围已记录。我们的测量工程师将在 24 个工作小时内与您联系。",
      sendAnother: "发送另一个请求",
      requiredFieldsError: "请完成所有必填字段（姓名、邮箱和所选服务）。",
      submitError: "发送电子邮件失败。请检查您的服务器 SMTP 配置。",
      unexpectedError: "发生未知错误。请稍后重试。"
    },
    footer: {
      description: "Survey Teknologi Indonesia 利用 LiDAR、光学摄影测量、水下测深和 SLAM 技术，提供高精度的地理空间数据和地图解决方案。",
      company: "公司",
      services: "服务",
      contactUs: "联系我们",
      allRightsReserved: "保留所有权利。"
    },
    gallery: {
      badge: "现场记录",
      title: "我们的现场活动",
      subtitle: "探索我们在各种地形中的测量和测绘活动记录。",
      newsTitle: "新闻与活动",
      pageTitle: "现场动态",
      pageSubtitle: "来自现场的实时更新。关注我们在群岛各地进行的测量、测绘和巡检操作记录与故事。",
      featuredBadge: "精选亮点",
      readFull: "阅读完整报告",
      recentActivities: "最近活动",
      readMore: "阅读更多",
      close: "关闭",
      reportId: "报告编号:",
      requestSimilar: "申请类似服务"
    },
    galleryNews: [
      {
        id: "news-01",
        src: "/assets/image/lidar/DSM.jpg",
        title: "加里曼丹矿区数字地表模型 (DSM) 测绘完成",
        category: "LiDAR Mapping",
        date: "2026年7月20日",
        excerpt: "我们的航空测绘团队成功使用 LiDAR 传感器完成了测绘，生成高精度 DSM 以支持东加里曼丹的运营规划。",
        content: "在东加里曼丹的最新项目中，Survey Teknologi Indonesia 团队部署了配备先进 LiDAR 有效载荷的无人机，对超过 500 公顷的矿区进行了测绘。生成的高精度数字地表模型 (DSM) 将被客户用于矿山规划、土方量计算以及定期边坡稳定性监测。与传统地面测绘方法相比，该作业在极短的时间内成功完成。"
      },
      {
        id: "news-02",
        src: "/assets/image/bathymmetry/result.jpeg",
        title: "海底电缆路线水深测量成功执行",
        category: "Hydrographic Survey",
        date: "2026年7月15日",
        excerpt: "使用配备多波束回声测深仪的无人水面艇 (USV)，为新的海底电缆安装生成了精确的水深图。",
        content: "为了扩大我们的海洋服务，水文团队最近在爪哇岛浅海沿岸完成了一次全面的水深测量。使用集成了双频回声测深仪的自主水面艇 (ASV)，我们的团队以厘米级精度绘制了海底轮廓。这些数据对于确保新的海底光缆路线的安全性和可行性至关重要。"
      },
      {
        id: "news-03",
        src: "/assets/image/powerline/clearence.png",
        title: "使用空间与热成像相机进行高压输电线路巡检",
        category: "Utility Inspection",
        date: "2026年7月8日",
        excerpt: "识别热异常并测量超高压输电走廊沿线电导体与植被的安全距离。",
        content: "我们的公用事业与电网部门团队最近对数百公里的高压输电线路进行了例行巡检。结合无人机采集的高分辨率视觉、热成像和 LiDAR 数据，我们能够进行自动安全距离分析。我们成功识别了几个植被（树木）可能干扰导体的关键点，使客户能够在发生大规模停电前立即采取修剪缓解措施。"
      },
      {
        id: "news-04",
        src: "/assets/image/lidar/classified_pointcloud.png",
        title: "用于保护林特许区规划的点云分类",
        category: "LiDAR Mapping",
        date: "2026年7月1日",
        excerpt: "对 LiDAR 数据进行高级处理，分离植被和地表物体，以获取原始地面轮廓。",
        content: "测绘具有茂密森林冠层的区域一直是一项挑战。然而，凭借我们最新的多光谱 LiDAR 传感器的穿透力，空间数据分析师团队成功地进行了准确的点云分类。该点云数据经过过滤以消除树木和树叶的反射，留下高精度的裸地高程。该信息对客户在不破坏周围保护林区的情况下规划伐木道路通道非常有用。"
      },
      {
        id: "news-05",
        src: "/assets/image/photogrammetry/ortho.png",
        title: "苏邦农田高分辨率正射影像记录",
        category: "Photogrammetry",
        date: "2026年6月25日",
        excerpt: "制作高度详细的正射影像图，以支持精准农业项目和水稻作物健康监测。",
        content: "通过在西爪哇苏邦的粮仓地区进行精准测绘，实现了对粮食安全的支持。我们的固定翼无人机在短短几天内就绘制了数千公顷的稻田。合成到这张正射影像图中的航空照片，使农学家能够以前所未有的准确度监测生长变化、规划灌溉并预测农作物产量。"
      },
      {
        id: "news-06",
        src: "/assets/image/photogrammetry/contour_line.jpeg",
        title: "苏门答腊油棕种植园地形等高线测绘",
        category: "Photogrammetry",
        date: "2026年6月12日",
        excerpt: "从 3D 摄影测量模型中提取高程数据，用于设计油棕种植园的梯田和排水系统。",
        content: "苏门答腊测量团队成功地为印度尼西亚最大的油棕种植园公司之一交付了等高线地形图形式的测绘结果。凭借详细的坡度信息，我们的客户现在可以优化种植区块设计、防止水土流失的梯田系统以及泥炭地水资源管理，从而提高生产力并更加环保。"
      },
      {
        id: "news-07",
        src: "/assets/image/lidar/DTM.jpg",
        title: "新城市总体规划数字地形模型 (DTM) 提取",
        category: "LiDAR Mapping",
        date: "2026年6月5日",
        excerpt: "利用没有植被或建筑障碍的数字地形模型，支持加速民用基础设施发展。",
        content: "作为新的独立城市发展计划的一部分，Survey Teknologi Indonesia 受托对未开发的丘陵地带进行测绘。最终产品——数字地形模型 (DTM)，为土木工程师在重型机械进入现场之前设计主要道路路线、公用事业网络和防洪系统奠定了重要基础。"
      },
      {
        id: "news-08",
        src: "/assets/image/photogrammetry/digitize_ortho.jpeg",
        title: "大规模城市空间规划图数字化流程",
        category: "Photogrammetry",
        date: "2026年5月28日",
        excerpt: "通过在超高分辨率航空照片上直接进行数字化过程，创建更新的数字基础地图。",
        content: "城市快速发展要求提供最新的空间数据。利用最新的摄影测量采集结果，我们的 GIS 团队目前正在进行大规模的屏幕数字化过程。建筑物、道路、地块边界和公共设施被绘制成矢量格式 (shapefile)，并直接集成到当地市政府的地理信息系统 (GIS) 中。"
      },
      {
        id: "news-09",
        src: "/assets/image/photogrammetry/dem.jpeg",
        title: "用于减轻洪水风险的数字高程模型 (DEM) 分析",
        category: "Photogrammetry",
        date: "2026年5月14日",
        excerpt: "基于数字高程模型 (DEM) 的地表径流建模，用于识别河流流域内易受洪水侵袭的区域。",
        content: "响应水文气象减灾的需求，我们的航空测绘数据被处理成综合的数字高程模型 (DEM)。通过对该 DEM 数据的基于水文分析，客户咨询团队可以模拟雨水径流方向，并优化确定下渗区和防洪坝建设点。"
      },
      {
        id: "news-10",
        src: "/assets/image/lidar/topolines.jpg",
        title: "国家水坝项目的地形线 (Topo Lines) 绘制",
        category: "LiDAR Mapping",
        date: "2026年5月2日",
        excerpt: "生成极其密集的等高线间距，以支持国家战略水坝建设的技术计算。",
        content: "在大型水坝建设工程中，准确性决定一切。航空 LiDAR 测绘提供了完美的基础数据，可以提取半米等高线间距的地形图。这些高精度数据已经过相关部委的审查和批准，确保了溢流坝和淹没区技术设计阶段的顺利进行。"
      }
    ]
  }
};
