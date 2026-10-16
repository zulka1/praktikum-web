# Dokumen Teknis Modul 3 – TypeScript dan Komponen React

Nama/NIM    : Ubaidulloh Zulkarnain
Repositori  : https://github.com/zulka1/praktikum-web/

## 1\. Tipe Data Produk

- Isi lib/tipe.ts dan alasan pemilihan union type serta properti opsional  
  export type Kategori \= "energi" | "lingkungan" | "kampus";  
    
  export interface Item {  
    id: number;  
    judul: string;  
    kategori: Kategori;  
    deskripsi: string;  
    tersedia: boolean;  
    gambar?: string;  
  }  
    
  Kategori menggunakan union type agar nilai kategori terbatas pada "energi", "lingkungan", atau "kampus". Ini mencegah nilai lain yang tidak sesuai, sekaligus membantu TypeScript memeriksa kategori saat data digunakan.  
    
  gambar bersifat opsional karena item pada data saat ini tidak semuanya memiliki gambar. Properti lain wajib karena diperlukan untuk mengidentifikasi dan menampilkan item: id sebagai identitas, judul dan deskripsi sebagai informasi, kategori untuk pengelompokan, serta tersedia untuk menunjukkan status ketersediaan.

## 2\. Struktur Komponen

- Diagram pohon komponen akhir (Server dan Client Component)  
  RootLayout (SC)  
  ├── SiteHeader (SC)  
  ├── Halaman aktif  
  │   ├── Beranda / app/page.tsx (SC)  
  │   │   ├── Bagian: Cara Kerja (SC)  
  │   │   ├── Bagian: Item Terbaru (SC)  
  │   │   │   └── ItemTerbaru (CC)  
  │   │   │       └── KartuItem (digunakan dalam subtree CC)  
  │   │   ├── Fitur (SC)  
  │   │   │   └── Bagian (SC)  
  │   │   └── Kontak (SC)  
  │   │       └── Bagian (SC)  
  │   └── HalamanKatalog / app/katalog/page.tsx (SC)  
  │       └── Bagian: Daftar Item (SC)  
  │           └── DaftarItem (CC)  
  │               └── KartuItem (digunakan dalam subtree CC)  
  └── SiteFooter (SC)

- Tabel komponen: nama, props dan tipenya, tempat digunakan

| Komponen | Props dan tipe | Tempat digunakan |
| :---- | :---- | :---- |
| `SiteHeader` | `namaProduk: string`, `tautan: { href: string; label: string }[]` | Layout global |
| `SiteFooter` | `namaProduk: string` | Layout global |
| `Bagian` | `id: string`, `judul: string`, `children: ReactNode`, `className?: string` | Beranda, Katalog, Fitur, Kontak |
| `DaftarItem` | `items: Item[]` | Halaman Katalog |
| `ItemTerbaru` | Tidak ada props | Bagian “Item Terbaru” di Beranda |
| `KartuItem` | `item: Item` | Daftar katalog dan item terbaru |
| `Fitur` | Tidak ada props | Beranda |
| `Kontak` | Tidak ada props | Beranda |


## 3\. State dan Interaksi

- Tangkapan layar tab Components (props dan state DaftarItem)

  <img width="985" height="882" alt="Screenshot 2026-10-16 084648" src="https://github.com/user-attachments/assets/b96cf794-ed56-4a1d-992c-848e287a7a71" />

- Penjelasan alur dari event hingga render ulang  
  Pada tab Components, DaftarItem menerima props items, yaitu daftar item yang ditampilkan. Bagian Hooks menunjukkan dua state yang digunakan komponen: kataKunci untuk pencarian dan filter untuk penyaringan berdasarkan kategori.
## 4\. Pengambilan Data

- Tangkapan layar panel Network untuk permintaan item.json  

  <img width="1091" height="903" alt="image" src="https://github.com/user-attachments/assets/8aac363f-1f07-4107-805a-1f67817bbbb5" />

- Hasil pengujian kondisi memuat, berhasil, dan gagal  
  Pengujian kondisi memuat dilakukan dengan mengaktifkan throttling Fast 3G pada tab Network. Permintaan item.json memerlukan waktu beberapa detik untuk selesai. Selama data masih diminta, komponen menampilkan pesan “Memuat data...”. Setelah respons diterima, daftar item ditampilkan. Pada pengujian ini, status permintaan terlihat 304 karena respons menggunakan cache browser; status tersebut bukan error.

## 5\. Verifikasi

- Keluaran npx tsc \--noEmit dan npm run lint  
  D:\\KULIAH\\5\\pemrograman aplikasi web\\week-3\\zulkalab\>npx tsc \--noEmit  
  npm notice run zulkalab@0.1.0 npx  
  npm notice run tsc \--noEmit  
    
  D:\\KULIAH\\5\\pemrograman aplikasi web\\week-3\\zulkalab\>npm run lint  
  npm notice run zulkalab@0.1.0 lint  
  npm notice run eslint  
    
  D:\\KULIAH\\5\\pemrograman aplikasi web\\week-3\\zulkalab\>

## 6\. Kendala dan Penyelesaian

## 7\. Catatan Pemanfaatan AI

 Tipe Data Produk

\- Isi lib/tipe.ts dan alasan pemilihan union type serta properti opsional  
export type Kategori \= "energi" | "lingkungan" | "kampus";

export interface Item {

  id: number;

  judul: string;

  kategori: Kategori;

  deskripsi: string;

  tersedia: boolean;

  gambar?: string;

}

 2\. Struktur Komponen

\- Diagram pohon komponen akhir (Server dan Client Component)  
\- Tabel komponen: nama, props dan tipenya, tempat digunakan

 3\. State dan Interaksi

\- Tangkapan layar tab Components (props dan state DaftarItem)  
\- Penjelasan alur dari event hingga render ulang

 4\. Pengambilan Data

\- Tangkapan layar panel Network untuk permintaan item.json  
\- Hasil pengujian kondisi memuat, berhasil, dan gagal

jelaskan alur pengerjaanya beserta aranya
