# 📱 Mobile Portfolio App (React Native & Expo)

Aplikasi portofolio pribadi modern berbasis **React Native** dan **Expo** yang dirancang khusus untuk mahasiswa Teknik Informatika dan Mobile Developer. Memiliki navigasi lancar (**React Navigation Bottom Tabs**), desain responsif di berbagai ukuran layar smartphone, dan styling modern menggunakan bawaan `StyleSheet`.

---

## 🌟 Fitur Utama Layar (Screens)

1. **🏠 Beranda (Home Screen)**
   - Header sapaan ramah dengan status ketersediaan aktif.
   - Foto profil profesional dengan badge verifikasi.
   - Nama lengkap dan identitas jelas sebagai **Mahasiswa Teknik Informatika**.
   - Subtitle & ringkasan bio singkat.
   - Kartu statistik (Total Proyek, Tech Stack, Pengalaman Belajar).
   - Tombol navigasi cepat (*Call-to-Action*) menuju halaman Proyek & Kontak.
   - Cuplikan kartu Proyek Unggulan (*Featured Projects*).

2. **👤 Tentang Saya (About Screen)**
   - Riwayat & latar belakang pendidikan (**S1 Teknik Informatika**, Universitas, IPK, dan deskripsi fokus studi).
   - Keterampilan teknis (*Technical Skills*) yang dikelompokkan rapi dalam bentuk *chips/pills*:
     - **Mobile & Frontend:** React Native, React.js, JavaScript (ES6+), TypeScript, HTML/CSS.
     - **Backend Development:** PHP (Laravel), Python (FastAPI/Flask), Node.js, RESTful APIs.
     - **Database:** MySQL, PostgreSQL, SQLite, Firebase.
     - **Server & DevOps:** Linux Server (Ubuntu/Debian), Nginx, Docker, Git & GitHub.
   - Kartu fokus karir dan minat riset teknologi.

3. **💼 Proyek (Projects Screen)**
   - Filter kategori interaktif (*Semua, Mobile, Web, Server*).
   - Kartu proyek responsif (*Card Layout*) dengan bayangan (*shadow & elevation*):
     - Proyek **Aplikasi Point of Sale (POS)** (Kasir, stok barang, cetak struk).
     - Proyek **Sistem Manajemen Keuangan** (Arus kas, grafik analitik, budgeting).
     - Proyek tambahan: Linux Server Monitor & Scholari Mobile.
   - Label teknologi terpasang pada masing-masing kartu.
   - Tombol aksi terintegrasi dengan tautan langsung ke repositori **GitHub** (`Linking.openURL`).

4. **✉️ Kontak (Contact Screen)**
   - Kartu status ketersediaan (*Available for Projects & Internships*).
   - Tombol interaktif terhubung langsung ke:
     - ✉️ **Email** (`mailto:...`)
     - 🐙 **GitHub Profile**
     - 💼 **LinkedIn Profile**
     - 💬 **WhatsApp Chat**
   - Form pesan cepat (*Quick Message Form*) untuk langsung membuka aplikasi email bawaan.

---

## 📁 Struktur Folder Proyek

```text
portfolio-app/
├── App.js                   # Entry point aplikasi & konfigurasi React Navigation
├── app.json                 # Konfigurasi Expo
├── package.json             # Dependensi proyek
├── babel.config.js          # Konfigurasi Babel
└── src/
    ├── theme/
    │   └── colors.js        # Palet warna & sistem styling global
    ├── data/
    │   └── portfolioData.js # Data profil, pendidikan, keahlian, proyek, & kontak
    └── screens/
        ├── HomeScreen.js    # Tampilan Beranda
        ├── AboutScreen.js   # Tampilan Tentang Saya & Keterampilan
        ├── ProjectsScreen.js# Tampilan Daftar Proyek & GitHub Links
        └── ContactScreen.js # Tampilan Kontak & Media Sosial
```

---

## 🚀 Panduan Menjalankan Aplikasi

### 1. Prasyarat
Pastikan komputer Anda sudah terinstal:
- **Node.js** (versi 18 ke atas)

### 2. Instalasi Dependensi
Buka terminal (Command Prompt atau PowerShell) pada direktori proyek:
```bash
cd portfolio-app
npm install
```

### 3. Menjalankan Server Pengembangan Expo
Jalankan perintah berikut:
```bash
npx expo start
```
Terminal akan menampilkan **QR Code** besar beserta menu opsi.

---

## 📲 Cara Menjalankan di Perangkat Fisik (HP Android / iPhone)

Sangat direkomendasikan untuk perekaman video demonstrasi:

1. **Unduh Expo Go**:
   - Di Android: Buka **Google Play Store**, cari dan instal **Expo Go**.
   - Di iOS: Buka **App Store**, cari dan instal **Expo Go**.
2. **Koneksi Jaringan**:
   - Pastikan HP dan Laptop/PC Anda terhubung ke **Wi-Fi yang sama**.
   *(Catatan: Jika Wi-Fi berbeda atau berada di jaringan kampus/kantor yang memblokir port lokal, jalankan dengan mode tunnel: `npx expo start --tunnel`)*.
3. **Buka Aplikasi**:
   - **Android**: Buka aplikasi Expo Go, pilih tombol **"Scan QR code"**, lalu arahkan kamera ke QR code di terminal laptop Anda.
   - **iPhone**: Buka aplikasi **Kamera bawaan iOS**, scan QR code, lalu klik banner untuk membuka di Expo Go.

---

## 💻 Cara Menjalankan di Emulator (Android Studio)

1. Buka **Android Studio** dan jalankan salah satu Virtual Device (AVD).
2. Setelah emulator aktif, pada jendela terminal Expo Anda, cukup tekan tombol:
   ```text
   a
   ```
3. Expo akan otomatis mengunduh Expo Go ke emulator dan membuka aplikasi portofolio Anda.

---

## 🎥 Tips Merekam Layar (Screen Recording) untuk YouTube

Untuk hasil demonstrasi yang menarik dan profesional di video YouTube:

1. **Alat Perekam**:
   - Di HP: Gunakan perekam layar bawaan (*Built-in Screen Recorder*) dengan resolusi 1080p dan 60fps. Aktifkan fitur *Show Touches* (Tampilkan Titik Sentuhan) di Developer Options agar penonton melihat interaksi jari Anda.
   - Di Laptop: Jika menggunakan Android Emulator, gunakan **OBS Studio** untuk menangkap jendela emulator dengan frame mockup ponsel.
2. **Urutan Alur Demonstrasi Video (Storyline Demo)**:
   - **00:00 - Intro**: Sambutan singkat, tunjukkan tampilan **Beranda (Home)**, jelaskan foto profil, nama, status mahasiswa Teknik Informatika, serta metric stats.
   - **00:30 - Navigasi Tab**: Tunjukkan transisi navigasi tab bar bawah yang halus.
   - **00:45 - Tab Tentang (About)**: Jelaskan latar belakang pendidikan, IPK, dan detail *chips skills* (React Native, PHP, Python, Linux Server).
   - **01:15 - Tab Proyek (Projects)**: Tunjukkan kartu proyek, filter kategori, dan **ketuk tombol "Lihat di GitHub"** untuk membuktikan bahwa tautan berfungsi.
   - **01:45 - Tab Kontak (Contact)**: Tunjukkan opsi kontak (Email, GitHub, LinkedIn, WhatsApp) serta fitur pengiriman pesan cepat.
   - **02:00 - Outro**: Kesimpulan dan tautan ke repositori GitHub portofolio Anda di deskripsi video.

---

## ✏️ Cara Mengubah Data Portofolio Anda Sendiri

Cukup buka file `src/data/portfolioData.js` dan sesuaikan nilainya:
- Ganti `name`, `avatarUrl`, dan `bio` dengan identitas Anda.
- Ganti daftar universitas di bagian `education`.
- Tambahkan atau perbarui proyek di bagian `projects` beserta tautan repositori GitHub asli Anda.
- Ganti email, username GitHub, dan nomor WhatsApp di bagian `contact`.
