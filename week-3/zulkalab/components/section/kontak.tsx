import Bagian from "../Bagian";

const kontak = [
  { label: "Email", nilai: "halo@contoh.com", href: "mailto:halo@contoh.com" },
  { label: "Telepon", nilai: "+62 812-3456-7890", href: "tel:+6281234567890" },
  { label: "Alamat", nilai: "Jl. Contoh No. 1, Jakarta" },
];

export default function Kontak() {
  return (
    <Bagian id="kontak" judul="Kontak">
      <address className="mt-6 not-italic">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {kontak.map((k) => (
            <li key={k.label}>
              <div className="h-full rounded-lg border p-6">
                <h3 className="text-lg font-semibold">{k.label}</h3>
                <p className="mt-2 text-gray-700">
                  {k.href ? (
                    <a href={k.href} className="underline hover:text-blue-600">
                      {k.nilai}
                    </a>
                  ) : (
                    k.nilai
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </address>
    </Bagian>
  );
}
