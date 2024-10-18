# To-Do List Sederhana

Ini adalah proyek mini **To-Do List** sederhana yang dibuat menggunakan **HTML, CSS, dan JavaScript**. Aplikasi ini memungkinkan pengguna untuk menambahkan, menandai sebagai selesai, memulihkan, dan menghapus tugas dari daftar. Desainnya minimalis dan responsif sehingga mudah digunakan.

## Fitur

- Menambahkan tugas baru dengan judul dan tanggal.
- Menandai tugas sebagai selesai.
- Memulihkan tugas yang sudah diselesaikan ke daftar belum selesai.
- Menghapus tugas dari daftar.
- Data tersimpan secara otomatis di **Local Storage**, sehingga tetap tersedia walau halaman di-refresh.
- Antarmuka pengguna yang sederhana dan bersih.
- Desain responsif yang mendukung berbagai ukuran layar.

## Instalasi

1. Clone atau unduh repositori ini.
2. Buka file `index.html` di browser untuk menjalankan aplikasi.

## Struktur Proyek

- `index.html` – Berisi struktur HTML untuk daftar To-Do.
- `css/style.css` – Berisi styling untuk antarmuka To-Do List.
- `js/script.js` – Berisi kode JavaScript untuk menambah, menandai, memulihkan, dan menghapus tugas.

## Pratinjau

Berikut adalah pratinjau dari aplikasi:

### Tampilan Awal

![Tampilan Awal To-Do List](todo-list.png)

## Penggunaan

1. Buka halaman aplikasi.
2. Masukkan tugas di kolom input, termasuk judul dan tanggal penyelesaian.
3. Klik tombol "Submit" untuk menambah tugas ke daftar.
4. Tugas yang belum selesai akan muncul di bagian "Yang harus dilakukan".
5. Klik tombol centang untuk menandai tugas sebagai selesai (tugas akan pindah ke bagian "Yang sudah dilakukan").
6. Klik tombol panah untuk memulihkan tugas dari daftar yang selesai kembali ke daftar yang belum selesai.
7. Klik tombol tempat sampah untuk menghapus tugas secara permanen.

## Penyimpanan Data

Aplikasi ini mendukung **Local Storage** untuk menyimpan daftar tugas. Data tetap tersimpan meskipun halaman di-refresh atau browser ditutup, dan akan dimuat kembali ketika aplikasi dijalankan.
