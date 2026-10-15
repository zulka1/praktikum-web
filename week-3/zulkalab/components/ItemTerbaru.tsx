"use client";

import { useEffect, useState } from "react";
import KartuItem from "@/components/KartuItem";
import type { Item } from "@/lib/tipe";

export default function ItemTerbaru() {
  const [items, setItems] = useState<Item[]>([]);
  const [memuat, setMemuat] = useState(true);
  const [galat, setGalat] = useState<string | null>(null);

  useEffect(() => {
    let dibatalkan = false;

    async function muatItem() {
      try {
        const response = await fetch("/data/item.json");
        if (!response.ok) {
          throw new Error(`Server merespons dengan status ${response.status}.`);
        }

        const data: Item[] = await response.json();
        if (!dibatalkan) {
          setItems(data);
        }
      } catch (error) {
        if (!dibatalkan) {
          setGalat(
            error instanceof Error
              ? error.message
              : "Terjadi kesalahan saat memuat item.",
          );
        }
      } finally {
        if (!dibatalkan) {
          setMemuat(false);
        }
      }
    }

    void muatItem();

    return () => {
      dibatalkan = true;
    };
  }, []);

  if (memuat) {
    return <p aria-live="polite">Memuat data...</p>;
  }

  if (galat) {
    return (
      <p role="alert" className="text-red-700">
        Gagal memuat data item: {galat}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <KartuItem item={item} />
        </li>
      ))}
    </ul>
  );
}