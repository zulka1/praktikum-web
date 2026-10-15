import Bagian from "../Bagian";

const fitur = [
  { judul: "Fitur pertama", deskripsi: "Manfaat fitur bagi pengguna." },
  { judul: "Fitur kedua", deskripsi: "Manfaat fitur bagi pengguna." },
  { judul: "Fitur ketiga", deskripsi: "Manfaat fitur bagi pengguna." },
];

export default function Fitur() {
  return (
    <Bagian id="fitur" judul="Fitur">
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {fitur.map((f) => (
          <li key={f.judul}>
            <article className="h-full rounded-lg border p-6">
              <h3 className="text-lg font-semibold">{f.judul}</h3>
              <p className="mt-2 text-gray-700">{f.deskripsi}</p>
            </article>
          </li>
        ))}
      </ul>
    </Bagian>
  );
}
