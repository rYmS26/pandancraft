# Pandancraft

Website statis HTML, CSS, dan JavaScript berdasarkan kode desain Stitch yang diberikan. Warna, teks, susunan bagian, dan gambar mengikuti referensi. CSS tersedia lokal tanpa Tailwind CDN atau proses build.

## Membuka website

Buka `index.html` di browser. Untuk menjalankan melalui server lokal (opsional):

```sh
python3 -m http.server 8000
```

Buka `http://localhost:8000`.

## Sebelum dipublikasikan

1. Isi `whatsappNumber` di `config.js` dengan nomor perajin sebenarnya, dalam format `628xxxxxxxxxx`, tanpa tanda `+`, spasi, atau angka `0` awal. Selama nilainya `null`, tombol menampilkan informasi bahwa kontak belum tersedia, agar pesanan tidak dikirim ke nomor contoh.
2. Periksa nama perajin, harga, statistik, kutipan, serta klaim konservasi yang berasal dari kode referensi. Konten ini dipertahankan dan belum diverifikasi secara independen.
3. Pastikan gambar boleh digunakan untuk website Anda.

## Hosting di GitHub Pages

1. Buat repository GitHub, misalnya `pandancraft`. Untuk akun GitHub Free, gunakan repository **Public**.
2. Ekstrak ZIP. Unggah **isi folder** `pandancraft` ke root repository menggunakan **Add file → Upload files**. `index.html`, `styles.css`, `script.js`, `config.js`, dan folder `assets` harus berada langsung di root; jangan mengunggah ZIP atau meletakkan semuanya di subfolder.
3. Simpan dengan **Commit changes** ke branch `main`.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment → Source**, pilih **Deploy from a branch**.
6. Pilih branch **main** dan folder **/(root)**, kemudian klik **Save**.
7. Setelah deployment selesai, buka alamat website yang diberikan GitHub pada halaman Pages. Pembaruan bisa memerlukan hingga sekitar 10 menit.

Sumber panduan: https://docs.github.com/en/pages/quickstart

Semua jalur CSS, JavaScript, dan aset memakai jalur relatif agar kompatibel dengan GitHub Pages pada subpath repository. Tidak memerlukan npm, database, atau server backend.

## Berkas dan fitur

- `index.html`: struktur dan konten website.
- `styles.css`: gaya desain, breakpoint tablet/desktop, menu HP, dan aksesibilitas.
- `script.js`: filter katalog, menu HP, kontak WhatsApp, serta tahun copyright.
- `config.js`: nomor WhatsApp.
- `assets/`: gambar referensi yang berhasil disalin dan favicon SVG.

Font Poppins dan Inter menggunakan Google Fonts dan membutuhkan internet; font sans-serif menjadi fallback. Jika ada gambar yang tidak berhasil disalin, URL sumbernya tetap digunakan.

Filter katalog berfungsi dengan JavaScript; tanpa JavaScript semua produk tetap terlihat. Pemesanan menggunakan WhatsApp, bukan checkout atau penyimpanan transaksi.
