import Bagian from "@/components/Bagian";
import ItemTerbaru from "@/components/ItemTerbaru";
import Kontak from "@/components/section/kontak";
import Fitur from "@/components/section/fitur";

export default function Beranda() {
  return (
    <main id="konten" className="mx-auto max-w-6xl p-4">
      <section aria-labelledby="judul-utama" className="py-8">
        <h1
          id="judul-utama"
          className="text-4xl font-extrabold tracking-tight"
        >
          Sistem Pemantauan Energi &amp; Lingkungan Kampus
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Platform terpadu untuk memantau penggunaan energi dan parameter
          lingkungan di seluruh fasilitas kampus secara real-time, mewujudkan
          kampus hijau yang efisien dan berkelanjutan.
        </p>
      </section>

      <Bagian id="cara-kerja" judul="Cara Kerja">
        <p className="mb-4 leading-relaxed text-gray-700">
          Sistem ini mengumpulkan data dari berbagai sensor cerdas (IoT) yang
          tersebar di lingkungan kampus, termasuk panel surya, turbin angin
          mini, dan sensor kualitas udara. Data tersebut dikirimkan secara
          nirkabel ke server pusat untuk diproses dan dianalisis.
        </p>
        <p className="leading-relaxed text-gray-700">
          Pengelola kampus dapat melihat informasi real-time dan laporan
          berkala melalui antarmuka web interaktif ini. Peringatan dini akan
          dikirimkan otomatis jika mendeteksi penggunaan energi yang tidak
          wajar atau parameter kualitas udara yang menurun.
        </p>
      </Bagian>

      <Bagian id="terbaru" judul="Item Terbaru">
        <ItemTerbaru />
      </Bagian>

      <Fitur />
      <Kontak />
    </main>
  );
}
