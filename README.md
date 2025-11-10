# TrashUp

TrashUp adalah platform layanan pengelolaan sampah berbasis digital yang berfokus pada penjemputan sampah dari rumah ke rumah di wilayah Kota Samarinda, Kalimantan Timur.

Lahir dari keresahan akan kurangnya solusi praktis dan terorganisir untuk pengelolaan sampah rumah tangga, TrashUp hadir dengan pendekatan teknologi, sosial, dan lingkungan untuk membantu masyarakat mengelola sampah secara lebih mudah, terarah, dan berkelanjutan.

---

## Visi

Menjadi platform layanan pengelolaan sampah berbasis teknologi yang terdepan dan terpercaya di Kota Samarinda, dengan memberdayakan masyarakat, mendukung program pemerintah, dan menciptakan lingkungan yang bersih, sehat, dan berkelanjutan.

## Misi / Tujuan

- Memberikan layanan penjemputan sampah yang cepat, mudah, dan fleksibel melalui platform digital berbasis web, guna menjawab kebutuhan masyarakat urban akan pengelolaan sampah rumah tangga yang efisien.
- Memberdayakan masyarakat lokal sebagai bagian dari solusi, dengan membuka peluang kerja sebagai petugas pengangkut sampah yang dilatih dan dikelola secara profesional.
- Menerapkan teknologi Smart E-Government yang terintegrasi dengan sistem pelayanan publik berbasis data, untuk mendukung kinerja pemerintah dalam pengelolaan sampah.
- Mendorong perilaku hidup bersih dan tanggung jawab lingkungan, melalui pendekatan edukatif dan human-centered design agar masyarakat lebih sadar akan pentingnya pemilahan dan penanganan sampah.
- Membangun kolaborasi dengan pemerintah, komunitas, dan pelaku industri daur ulang, demi menciptakan ekosistem pengelolaan sampah yang inklusif, berkelanjutan, dan berdampak nyata bagi Kota Samarinda.

---

## Fitur Utama (High-Level)

Beberapa fitur utama yang direncanakan/tersedia pada TrashUp:

- Pemesanan penjemputan sampah rumah tangga melalui web.
- Manajemen jadwal dan rute petugas pengangkut sampah.
- Dashboard monitoring penjemputan (untuk admin/operator).
- Manajemen user (warga, petugas, admin).
- Integrasi data untuk mendukung konsep Smart E-Government (laporan, statistik, dan rekapitulasi).

---

## Teknologi yang Digunakan

Aplikasi ini dikembangkan menggunakan teknologi berikut:

- **Frontend**
  - React.js
  - Chakra UI
  - Tailwind CSS

- **Backend**  
  - Node.js + Express
  - REST API / GraphQL

- **Database**  
  - MongoDB 

---

## Akun Demo

| Username | Password   | Role   | Akses / Catatan |
|----------|------------|--------|-----------------|
| regar    | 12345678   | Driver | Tombol **Driver** muncul di navbar → /driver |
| rizky    | 12345678   | User   | User biasa |
| *user baru dari register* | *sesuai input* | User | Semua akun hasil registrasi otomatis dianggap **user biasa** |

---

## Struktur Folder Singkat

Struktur dasar repository:

```bash
.
trashup
├─ backend
│  ├─ config
│  ├─ controllers
│  ├─ models
│  └─ routes
└─ frontend
   ├─ src
   │  ├─ components
   │  └─ pages
   └─ public
```

## Cara Menjalankan Proyek (Development)

### 1. Clone repository
```bash
git clone https://github.com/username/trashup.git
cd trashup
```

### 2. Jalankan backend
```bash
cd backend
npm install
npm run dev
```

### 3. Jalankan frontend
```bash
cd ../frontend
npm install
npm run dev
```
