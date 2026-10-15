import { ReactNode } from "react";

interface BagianProps {
  id: string;
  judul: string;
  children: ReactNode;
  className?: string; 
}

export default function Bagian({ id, judul, children, className = "" }: BagianProps) {
  const headingId = `judul-${id}`;

  return (
    <section 
      id={id} 
      aria-labelledby={headingId} 
      className={`py-8 ${className}`.trim()}
    >
      <h2 id={headingId} className="text-2xl font-bold">
        {judul}
      </h2>
      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}
