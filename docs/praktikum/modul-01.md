# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP

Nama/NIM : Ubaidulloh Zulkarnain/105224024
Repositori : https://github.com/zulka1/praktikum-web/

## 1. Lingkungan Pengembangan
<img width="762" height="162" alt="dokumen1" src="https://github.com/user-attachments/assets/59277ad3-a925-47bb-ac03-68fc175c16ef" />

## 2. Alur Kerja Git
- D:\KULIAH\5\pemrograman aplikasi web>git log --oneline --graph
	* a6ad197 (HEAD -> week-1, origin/week-1) feat: add .gitignore file to exclude unnecessary files and directories
	* 987e05d feat: initialize zulka-corporation project with Next.js, TypeScript, and Tailwind CSS
	* 55b30bc (main) init
- https://github.com/zulka1/praktikum-web/pull/1
- konflik tidak ada
## 3. Pengamatan Lalu Lintas HTTP
<img width="1031" height="897" alt="dokumen3" src="https://github.com/user-attachments/assets/b71fbe71-b148-4f09-8a36-ffa44b628295" />

- Keluaran curl -I dan curl -v :
	D:\KULIAH\5\pemrograman aplikasi web\week-1\zulka-corporation>curl -I http://localhost:3000
	HTTP/1.1 200 OK
	Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
	Link: </_next/static/media/797e433ab948586e-s.p.0r6juujl39pe6.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/caa3a2e1cccd8315-	s.p.0wgildi0cnwt9.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2"
	Cache-Control: no-cache, must-revalidate
	X-Powered-By: Next.js
	Content-Type: text/html; charset=utf-8
	Date: Mon, 28 Sep 2026 03:19:16 GMT
	Connection: keep-alive
	Keep-Alive: timeout=5

	D:\KULIAH\5\pemrograman aplikasi web\week-1\zulka-corporation>curl -v http://localhost:3000
	* Host localhost:3000 was resolved.
	* IPv6: ::1
	* IPv4: 127.0.0.1
	*   Trying [::1]:3000...
	* Established connection to localhost (::1 port 3000) from ::1 port 49727
	* using HTTP/1.x
	> GET / HTTP/1.1
	> Host: localhost:3000
	> User-Agent: curl/8.21.0
	> Accept: */*
	>
	* Request completely sent off	
	< HTTP/1.1 200 OK
	< Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
	< Link: </_next/static/media/797e433ab948586e-s.p.0r6juujl39pe6.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/caa3a2e1cccd8315-	s.p.0wgildi0cnwt9.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2"
	< Cache-Control: no-cache, must-revalidate
	< X-Powered-By: Next.js
	< Content-Type: text/html; charset=utf-8
	< Date: Mon, 28 Sep 2026 03:19:56 GMT
	< Connection: keep-alive
	< Keep-Alive: timeout=5
	< Transfer-Encoding: chunked
	<
	<!DOCTYPE html><html lang="en" ....

	D:\KULIAH\5\pemrograman aplikasi web\week-1\zulka-corporation>curl -v http://github.com
	*   Trying 20.205.243.166:80...
	* Established connection to github.com (20.205.243.166 port 80) from 192.168.0.136 port 52732
	* using HTTP/1.x
	> GET / HTTP/1.1
	> Host: github.com
	> User-Agent: curl/8.21.0
	> Accept: */*
	>
	* Request completely sent off
	< HTTP/1.1 301 Moved Permanently
	< Content-Length: 0
	< Location: https://github.com/
	<
	* Connection #0 to host github.com:80 left intact

	D:\KULIAH\5\pemrograman aplikasi web\week-1\zulka-corporation>curl -I http://github.com
	HTTP/1.1 301 Moved Permanently
	Content-Length: 0
	Location: https://github.com/


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
