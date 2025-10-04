# My Personal Portfolio

[![Website](https://img.shields.io/badge/Website-live-blue)](https://lann747.github.io/my-personal-portfolio/)

Deskripsi singkat:  
Website portfolio pribadi untuk menampilkan profil, keahlian, proyek, kontak, dan karya saya sebagai web developer.

---

## 🛠 Teknologi yang Digunakan

- React  
- Vite  
- Tailwind CSS  
- Framer Motion  
- lucide‑react (ikon)  
- ESLint  

---

## 🚀 Cara Menjalankan (Development)

1. Clone repo  
   ```bash
   git clone https://github.com/lann747/my-personal-portfolio.git
   cd my-personal-portfolio
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Jalankan server dev  
   ```bash
   npm run dev
   ```

4. Buka browser → `http://localhost:5173` (atau port yang muncul di terminal)  

---

## 📦 Build & Deploy ke GitHub Pages

1. Pastikan di `vite.config.js` sudah ada:
   ```js
   base: '/my-personal-portfolio/',
   ```

2. Pastikan file logo, gambar, dan aset lainnya berada di folder `public/`.

3. Jalankan:
   ```bash
   npm run build
   npm run deploy
   ```

4. Di GitHub → Settings → Pages → Pastikan branch `gh-pages` dipilih sebagai source halaman.

5. Akses website melalui:  
   `https://lann747.github.io/my-personal-portfolio/`

---

## 🔍 Struktur Project

```
my-personal-portfolio/
├── public/
│   ├── images/           ← file gambar yang diakses langsung (profil, logo, dll)
│   ├── favicon, logo, dll
│   └── index.html
├── src/
│   ├── components/
│   ├── assets/
│   └── main.jsx, App.jsx
├── vite.config.js
├── package.json
└── README.md
```

---

## ✨ Tips Khusus

- Pastikan nama file gambar **case-sensitive** (huruf besar/kecil harus sesuai) agar tidak gagal di GitHub Pages.  
- Gunakan path gambar dari `public/` dengan `src="./images/nama-file.jpg"`.  
- Jika favicon tidak muncul setelah deploy, coba bersihkan cache browser (`Ctrl + Shift + R` / force reload).  

---

## 📬 Kontak & Kontribusi

Kalau kamu menemukan bug atau punya ide peningkatan, silakan buat issue atau pull request 😊  
Terima kasih sudah melihat 🙏  

---

## 🧾 License

Original by Lantera
