import Link from "next/link";
import { connection } from "next/server";

interface SiteFooterProps {
  namaProduk: string;
}

export default async function SiteFooter({ namaProduk }: SiteFooterProps) {
  await connection();
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold text-gray-900">
          {namaProduk}
        </Link>

        <p>
          &copy; {tahunSekarang} {namaProduk}. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
}
