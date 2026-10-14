export const portfolioData = {
  profile: {
    name: 'Rudi Kurniawan',
    title: 'Mahasiswa Teknik Informatika',
    subtitle: 'Web App Developer | IoT Enthusiast',
    bio: 'Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi web dan eksplorasi dunia IoT. Berdedikasi tinggi, adaptif, serta tahan banting & tahan ghosting dalam menuntaskan setiap tantangan koding.',
    avatarUrl: 'https://github.com/loodyngab.png',
    location: 'Karawang, Indonesia',
    status: 'Tersedia untuk Magang & Proyek',
    stats: [
      { label: 'Proyek Selesai', value: '3' },
      { label: 'Tech Stack', value: '8+' },
      { label: 'Tahun Belajar', value: '2+' },
    ],
  },

  education: {
    institution: 'Universitas Sehati Indonesia',
    degree: 'S1 Teknik Informatika',
    period: '2024 - Sekarang',
    gpa: '∞',
    description:
      'Mendalami Rekayasa Perangkat Lunak, pemrograman aplikasi berbasis web, manajemen basis data, serta memiliki ketertarikan tinggi pada riset dan implementasi Internet of Things (IoT).',
    focus:
      'Sangat tertarik dengan inovasi di bidang Internet of Things (IoT), integrasi mikrokontroler/sensor dengan sistem web, serta arsitektur backend modern.',
  },

  skills: [
    {
      category: 'Backend Development',
      items: ['PHP (Laravel)', 'RESTful APIs', 'MVC Architecture', 'Web Services'],
    },
    {
      category: 'Database Management',
      items: ['MySQL', 'Relational Database Design', 'Query Optimization'],
    },
    {
      category: 'Tools & DevOps',
      items: ['Git & GitHub', 'Linux', 'Docker Basics', 'Figma', 'Postman'],
    },
    {
      category: 'Creative & Editing',
      items: ['Adobe Photoshop', 'Adobe After Effects', 'Wondershare Filmora'],
    },
  ],

  projects: [
    {
      id: '1',
      title: 'Aplikasi Point of Sale (POS)',
      tagline: 'Sistem Kasir & Manajemen Inventaris Toko Retail',
      description:
        'Sistem kasir dan manajemen transaksi penjualan ritel real-time, pencatatan inventaris stok produk multi-kategori, riwayat laporan transaksi harian, serta alur cetak struk belanja.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Bootstrap'],
      githubUrl: 'https://github.com/loodyngab/sistem-pos-toko-kelompok1',
      featured: true,
      category: 'Web',
    },
    {
      id: '2',
      title: 'Platform E-Commerce UMKM',
      tagline: 'Katalog Produk & Transaksi Toko Online Digital',
      description:
        'Platform toko online responsif yang membantu pelaku UMKM memajang katalog produk, mengelola pesanan masuk, serta menyediakan alur pemesanan produk secara praktis.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
      githubUrl: 'https://github.com/loodyngab',
      featured: true,
      category: 'Web',
    },
    {
      id: '3',
      title: 'Sistem IoT & Web Monitoring',
      tagline: 'Prototype Monitoring Sensor & Kontrol Perangkat Berbasis Web',
      description:
        'Eksplorasi integrasi perangkat keras IoT dengan dashboard web interaktif untuk pemantauan data sensor secara berkala serta kendali sistem terpusat.',
      technologies: ['IoT / Sensors', 'PHP / Web API', 'MySQL', 'C++ / Microcontroller'],
      githubUrl: 'https://github.com/loodyngab',
      featured: false,
      category: 'Web',
    },
  ],

  contact: {
    email: 'loodyngab@gmail.com',
    github: 'https://github.com/loodyngab',
  },
};
