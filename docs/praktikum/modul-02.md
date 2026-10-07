# Dokumen Teknis Modul 2 – HTML Semantik, Tailwind CSS, dan Aksesibilitas

Nama/NIM   : Ubaidulloh Zulkarnain/105224024  
Repositori : https\://github.com/zulka1/praktikum-web

## 1\. Struktur Semantik

- Kerangka landmark   
  h1  Zulka Orbit  
  ├─ h2  Fitur Utama  
  │   ├─ h3  Fitur pertama  
  │   ├─ h3  Fitur kedua  
  │   └─ h3  Fitur ketiga  
  ├─ h2  Cara Kerja  
  └─ h2  Hubungi Kami [support@zulkaorbit.com](mailto:support@zulkaorbit.com)  
    
- Tangkapan layar pohon aksesibilitas pada DevTools


## 2\. Tata Letak Responsif

- Tangkapan layar pada lebar 360 px, 768 px, dan 1280 px  
- Kelas Flexbox  
* flex flex-col sm:flex-row sm:items-center sm:justify-between digunakan untuk mengatur navigasi. Pada layar kecil, elemen disusun ke bawah, kemudian menjadi satu baris mulai ukuran sm.  
* flex flex-col gap-2 sm:flex-row sm:gap-6 digunakan untuk mengatur daftar tautan. Tautan ditampilkan vertikal di layar kecil dan horizontal di layar yang lebih besar.  
* flex flex-col gap-1 digunakan agar label dan input pada formulir tersusun ke bawah dengan jarak yang rapi.  
  Kelas Grid  
* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 digunakan untuk bagian kartu fitur. Kartu ditampilkan 1 kolom di layar kecil, 2 kolom pada ukuran sm, dan 3 kolom pada ukuran lg.  
* lg:grid-cols-\[2fr\_1fr\] digunakan untuk bagian Cara Kerja dan informasi tambahan. Pada layar lg, bagian tersebut dibuat menjadi dua kolom dengan bagian utama lebih lebar.  
* grid max-w-xl gap-4 digunakan pada formulir agar elemen tersusun dalam satu kolom dengan jarak yang konsisten.  
    
  Breakpoint  
* sm: digunakan pada ukuran layar 640 px ke atas untuk mengubah beberapa layout dari vertikal menjadi horizontal.  
* lg: digunakan pada ukuran layar 1024 px ke atas untuk menampilkan layout desktop, seperti tiga kolom pada kartu fitur.

## 3\. Audit Aksesibilitas

- Tabel skor Lighthouse sebelum dan sesudah perbaikan (halaman latihan dan halaman utama)


| Sebelum |  |  | Sesudah |  |
| :---- | :---- | :---- | :---- | :---- |
| Halaman | skor |  | Halaman | skor |
| latihan | 79 |  | latihan | 100 |
| utama | 96 |  | utama | 100 |


- Daftar audit yang gagal, penyebab, dan perbaikannya


| Audit yang gagal | Elemen | Penyebab | Perbaikan |
| :---- | :---- | :---- | :---- |
| Buttons do not have an accessible name | button.ml-2.border.p-2 | Tombol hanya berisi ikon SVG, tanpa teks, jadi pembaca layar hanya mengucapkan "button". | Tambahkan aria-label="Cari" pada tombol dan aria-hidden="true" pada SVG. |
| Image elements do not have \[alt\] attributes | img | Gambar tidak memiliki atribut alt, sehingga isinya tidak dapat dibaca oleh pembaca layar. | Tambahkan alt="Logo Next.js" atau alt="" jika gambar hanya dekoratif. |
| Form elements do not have associated labels | input.border.p-2 | Kolom pencarian tidak memiliki label yang terhubung dengan input. | Tambahkan \<label htmlFor="cari"\>Cari alat\</label\> dan id="cari" pada input. |
| Document does not have a main landmark | html | Seluruh isi halaman dibungkus \<div\>, sehingga tidak ada \<main\> sebagai landmark utama. | Ganti \<div\> pembungkus dengan \<main\>. |
| Background and foreground colors do not have a sufficient contrast ratio | p | Warna teks dan background terlalu mirip sehingga teks sulit dibaca, terutama bagi pengguna dengan gangguan penglihatan. | hapus @media (prefers-color-scheme: dark)  |
| Background and foreground colors do not have a sufficient contrast ratio | aside.rounded-lg.bg-gray-100.p-6 | Warna teks atau elemen di dalam aside memiliki kontras yang kurang dengan background. | hapus @media (prefers-color-scheme: dark)  |
| Background and foreground colors do not have a sufficient contrast ratio | p\#email-bantuan.text-sm.text-gray-600 | Warna teks text-gray-600 terlalu redup terhadap background sehingga sulit dibaca. | hapus @media (prefers-color-scheme: dark)  |
| Background and foreground colors do not have a sufficient contrast ratio | body.min-h-full.flex.flex-col | Terdapat kombinasi warna pada elemen halaman yang menghasilkan kontras yang tidak mencukupi. | hapus @media (prefers-color-scheme: dark)  |


- Hasil pemeriksaan manual dengan papan ketik (urutan fokus dan garis fokus)

## 4\. Kendala dan Penyelesaian

- bingung ngerjainnya pake web hasil prompting yang kemarin week 1 atau ngikut modul, akhirnya cari aman ngikutin modul 2 aja nyusun webnya.  
- benerin error setelah pemeriksaan skor, tapi kebantu ai padahal cuman aku suruh buat tabel saja

## 5\. Catatan Pemanfaatan AI

- Struktur Semantik  
* Kerangka landmark dan hierarki judul halaman utama  
* Tangkapan layar pohon aksesibilitas pada DevTools 