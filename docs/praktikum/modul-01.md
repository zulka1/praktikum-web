# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP

Nama/NIM : Ubaidulloh Zulkarnain/105224024
Repositori : https://github.com/zulka1/praktikum-web/

## 1. Lingkungan Pengembangan
| software | version |
|----------|---------|
| Operating System | Windows 11 Home 25H2 (build 26200.9457) |
| Node.js | v24.21.0 |
| npm | 11.19.0 |
| Git | 2.55.0.windows.5 |
| Visual Studio Code | 1.139.1 |

## 2. Alur Kerja Git
- D:\KULIAH\5\pemrograman aplikasi web>git log --oneline --graph
	* a6ad197 (HEAD -> week-1, origin/week-1) feat: add .gitignore file to exclude unnecessary files and directories
	* 987e05d feat: initialize zulka-corporation project with Next.js, TypeScript, and Tailwind CSS
	* 55b30bc (main) init
- https://github.com/zulka1/praktikum-web/pull/1
- konflik tidak ada
## 3. Pengamatan Lalu Lintas HTTP
| No | URL | Metode | Kode Status | Content-Type | *Header* Lain yang Diamati |
|----|-----|--------|-------------|--------------|----------------------------|
| 1 | http://localhost:3000/ | GET (`curl -v`), HEAD (`curl -I`) | 200 OK | text/html; charset=utf-8 | `Cache-Control: no-cache, must-revalidate`; `X-Powered-By: Next.js`; `Transfer-Encoding: chunked` (hanya GET); `Vary: rsc, next-router-state-tree, ...`; `Connection: keep-alive` |
| 2 | http://localhost:3000/halaman-tidak-ada | GET | ... | ... | ... |
| 3 | Satu berkas CSS atau JS dari localhost | GET | 304 Not Modified | ... | Ukuran transfer 0.3 kB (browser memakai salinan cache setelah validasi ke server) |
| 4 | http://github.com (curl) | GET (`curl -v`), HEAD (`curl -I`) | 301 Moved Permanently | Tidak ada (body kosong) | `Content-Length: 0`; `Location: https://github.com/` |
| 5 | https://developer.mozilla.org (dengan cache) | GET (`curl -v`), HEAD (`curl -I`) | 302 Found | text/plain; charset=utf-8 | `Location: /en-US/`; `Cache-Control: max-age=3600, public`; `Age: 2469` (bukti respons diambil dari cache CDN, bukan dari server asal); `X-Cache: MISS, HIT`; `Via: 1.1 google, 1.1 varnish, 1.1 varnish`; `Server: Google Frontend` |

- Berdasarkan hasil pengujian menggunakan curl, ketika mengakses http://localhost:3000 dengan metode HEAD (curl -I), server mengembalikan status 200 OK tanpa body karena HEAD hanya mengambil header untuk efisiensi. berbeda dengan GET (curl -v) yang mengembalikan seluruh konten HTML dengan Transfer-Encoding: chunked (ukuran dinamis, tidak tetap), dan keduanya menunjukkan Cache-Control: no-cache, must-revalidate yang berarti browser tidak diizinkan menyimpan cache sehingga setiap request akan selalu meminta ulang ke server. Sementara itu, saat mengakses http://github.com, server langsung merespons dengan 301 Moved Permanently dan Content-Length: 0 (tidak ada body sama sekali), karena GitHub memaksa seluruh koneksi menggunakan HTTPS demi keamanan, sehingga setiap permintaan melalui HTTP (port 80) secara permanen dialihkan ke https://github.com/ (port 443) yang terenkripsi.
## 4. Kendala dan Penyelesaian
- salah upload ke main dulu, jadi hard reset
- salah direktori run
## 5. Catatan Pemanfaatan AI
- you are a senior developer, create a simple interface presentation in page.tx
the rules ar simple use color flaxen, modern and simple
company name is zulka corporation
the output need to be a single file. that can be run after finished

-D:\KULIAH\5\pemrograman aplikasi web\week-1>npm run dev
npm error code ENOENT
npm error syscall open
npm error path D:\KULIAH\5\pemrograman aplikasi web\week-1\package.json
npm error errno -4058
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'D:\KULIAH\5\pemrograman aplikasi web\week-1\package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: C:\Users\ubaid\AppData\Local\npm-cache\_logs\2026-09-25T07_54_23_186Z-debug-0.log
re compile?

-i mean web page 
not ppt
some business

-make web page look like profesional page
maybe the business is satelit internet like starlink?

-Analysis: differences in status and size between loading with and without cache, the reason the `curl -I` method uses HEAD, and the reason http://github.com is redirected.
mean?
i must to run on github?

-show me what is the direct
my repo : https://github.com/zulka1/praktikum-web

-so whats the question meaning?
