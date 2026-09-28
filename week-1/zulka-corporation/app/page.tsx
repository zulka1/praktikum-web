"use client";

import React, { useState, useEffect, useRef } from "react";

// ─── INLINE SVG ICONS ──────────────────────────────────────────────────────
function ZulkaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#EEDC82" />
      <path d="M13 16H35L20 32H35" stroke="#0A0A0F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="32" r="3" fill="#0A0A0F" />
      <circle cx="33" cy="16" r="3" fill="#0A0A0F" />
    </svg>
  );
}

function SatelliteIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
    </svg>
  );
}

function GlobeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M12 2a14.5 14.5 0 010 20M12 2a14.5 14.5 0 000 20M2 12h20" />
    </svg>
  );
}

function BoltIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function SignalIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function MenuIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ─── ANIMATED STARS BACKGROUND ─────────────────────────────────────────────
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.006 + 0.002,
      });
    }

    let frame: number;
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        const twinkle = s.alpha + Math.sin(t * s.speed * 60) * 0.25;
        ctx.fillStyle = `rgba(255, 252, 220, ${Math.min(1, Math.max(0, twinkle))})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

// ─── SATELLITE ORBIT GRAPHIC (SVG) ─────────────────────────────────────────
function SatelliteOrbital() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square select-none">
      <svg viewBox="0 0 460 460" className="w-full h-full" aria-hidden="true">
        {/* Glow rings */}
        <ellipse cx="230" cy="230" rx="200" ry="200" fill="none" stroke="#EEDC82" strokeOpacity="0.06" strokeWidth="1" />
        <ellipse cx="230" cy="230" rx="155" ry="155" fill="none" stroke="#EEDC82" strokeOpacity="0.08" strokeWidth="1" />
        <ellipse cx="230" cy="230" rx="105" ry="105" fill="none" stroke="#EEDC82" strokeOpacity="0.1" strokeWidth="1" />

        {/* Orbit paths */}
        <ellipse cx="230" cy="230" rx="200" ry="72" fill="none" stroke="#EEDC82" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="8 6" />
        <ellipse cx="230" cy="230" rx="140" ry="140" fill="none" stroke="#EEDC82" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="6 5" />

        {/* Earth globe */}
        <circle cx="230" cy="230" r="64" fill="url(#earthGrad)" />
        <ellipse cx="230" cy="250" rx="60" ry="16" fill="none" stroke="#88D8E8" strokeOpacity="0.4" strokeWidth="0.8" />
        <ellipse cx="200" cy="210" rx="12" ry="22" fill="#2A7A5A" fillOpacity="0.7" />
        <ellipse cx="255" cy="215" rx="18" ry="14" fill="#2A7A5A" fillOpacity="0.6" />
        <ellipse cx="230" cy="245" rx="14" ry="8" fill="#2A7A5A" fillOpacity="0.5" />
        <circle cx="230" cy="230" r="64" fill="none" stroke="#88D8E8" strokeOpacity="0.3" strokeWidth="1" />

        {/* Satellite 1 — outer orbit */}
        <g>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 230 230" to="360 230 230" dur="12s" repeatCount="indefinite" />
          <g transform="translate(430, 230)">
            <rect x="-10" y="-7" width="20" height="14" rx="3" fill="#EEDC82" />
            <rect x="-28" y="-3" width="16" height="6" rx="1" fill="#D4B840" />
            <rect x="12" y="-3" width="16" height="6" rx="1" fill="#D4B840" />
            <line x1="0" y1="-7" x2="0" y2="-16" stroke="#EEDC82" strokeWidth="1.2" />
            <ellipse cx="0" cy="-16" rx="5" ry="2.5" fill="none" stroke="#EEDC82" strokeWidth="1.2" />
          </g>
        </g>

        {/* Satellite 2 — inner orbit, opposite direction */}
        <g>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="180 230 230" to="-180 230 230" dur="8s" repeatCount="indefinite" />
          <g transform="translate(370, 230)">
            <rect x="-7" y="-5" width="14" height="10" rx="2" fill="#F7F2D8" />
            <rect x="-20" y="-2" width="11" height="4" rx="1" fill="#D4B840" />
            <rect x="9" y="-2" width="11" height="4" rx="1" fill="#D4B840" />
            <line x1="0" y1="-5" x2="0" y2="-12" stroke="#F7F2D8" strokeWidth="1" />
            <ellipse cx="0" cy="-12" rx="4" ry="2" fill="none" stroke="#F7F2D8" strokeWidth="1" />
          </g>
        </g>

        {/* Signal beams from satellite to earth */}
        <line x1="230" y1="166" x2="230" y2="295" stroke="#EEDC82" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="strokeOpacity" values="0.18;0.4;0.18" dur="2s" repeatCount="indefinite" />
        </line>

        {/* Gradients */}
        <defs>
          <radialGradient id="earthGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#3B82C4" />
            <stop offset="60%" stopColor="#1E4D8C" />
            <stop offset="100%" stopColor="#0A2450" />
          </radialGradient>
        </defs>
      </svg>

      {/* Flaxen orbit glow overlay */}
      <div className="absolute inset-0 rounded-full bg-[#EEDC82]/5 blur-3xl pointer-events-none" />
    </div>
  );
}

// ─── DATA ───────────────────────────────────────────────────────────────────
const plans = [
  {
    name: "Residential",
    tagline: "For homes in any location",
    price: "Rp 750.000",
    period: "/month",
    hardware: "+ Rp 4.500.000 hardware (one-time)",
    speed: "50–220 Mbps",
    latency: "25–60 ms",
    features: [
      "Unlimited data — no throttling",
      "Self-install dish included",
      "Priority residential routing",
      "24/7 customer support",
      "Free firmware updates",
      "Works in remote rural areas",
    ],
    cta: "Order Now",
    highlight: false,
  },
  {
    name: "Business",
    tagline: "Built for enterprise-grade operations",
    price: "Rp 2.500.000",
    period: "/month",
    hardware: "+ Rp 9.000.000 hardware (one-time)",
    speed: "200–500 Mbps",
    latency: "< 20 ms",
    features: [
      "Dedicated bandwidth pool",
      "Static IP address included",
      "SLA-backed 99.9% uptime",
      "Priority network access",
      "Advanced router & failover",
      "Enterprise account manager",
    ],
    cta: "Start Business Plan",
    highlight: true,
  },
  {
    name: "Maritime",
    tagline: "High-seas connectivity, coast to coast",
    price: "Rp 7.500.000",
    period: "/month",
    hardware: "+ Rp 22.000.000 hardware (one-time)",
    speed: "Up to 350 Mbps",
    latency: "< 40 ms",
    features: [
      "IP67 waterproof dish",
      "Vessel motion tracking",
      "Global ocean coverage",
      "Multi-SIM redundancy",
      "Fleet management portal",
      "Emergency priority signal",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const stats = [
  { value: "1,200+", label: "Satellites in Orbit" },
  { value: "840+", label: "Cities Covered" },
  { value: "2.1M+", label: "Active Subscribers" },
  { value: "99.97%", label: "Network Uptime" },
];

const features = [
  {
    icon: SatelliteIcon,
    title: "Low Earth Orbit Network",
    desc: "Our constellation operates at 340–550 km altitude — far closer than traditional geostationary satellites — delivering dramatically lower latency and higher responsiveness.",
  },
  {
    icon: BoltIcon,
    title: "True High-Speed Internet",
    desc: "Speeds from 50 Mbps up to 500 Mbps for business tiers. Stream 4K video, conduct live video calls, and transfer large files without interruption.",
  },
  {
    icon: GlobeIcon,
    title: "Global Coverage",
    desc: "Zulka Orbit covers Indonesia, Southeast Asia, remote Pacific islands, and international maritime routes — reaching users that cable infrastructure simply cannot.",
  },
  {
    icon: SignalIcon,
    title: "Adaptive Beam Steering",
    desc: "Phased-array dish technology dynamically tracks satellites overhead and hand off between them seamlessly with zero service interruption.",
  },
  {
    icon: ShieldCheckIcon,
    title: "End-to-End Encryption",
    desc: "All traffic over the Zulka Orbit network is protected by AES-256 link encryption and WPA3 local security standards — from dish to device.",
  },
  {
    icon: GlobeIcon,
    title: "Self-Install in Minutes",
    desc: "The Zulka Dish app guides you through sky-view scanning and optimal dish placement with AR alignment. No technician appointment needed.",
  },
];

const coverageZones = [
  { region: "Java & Bali", status: "active", coverage: "Full Coverage" },
  { region: "Sumatra", status: "active", coverage: "Full Coverage" },
  { region: "Kalimantan", status: "active", coverage: "Full Coverage" },
  { region: "Sulawesi", status: "active", coverage: "Full Coverage" },
  { region: "Papua & Maluku", status: "expanding", coverage: "Expanding 2026" },
  { region: "Nusa Tenggara", status: "active", coverage: "Full Coverage" },
  { region: "Open Ocean Routes", status: "active", coverage: "Maritime Tier" },
  { region: "Australia", status: "available", coverage: "Available" },
];

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
export default function ZulkaOrbitPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tier, setTier] = useState("Business");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setEmail("");
      setAddress("");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#ECEAE2] font-sans overflow-x-hidden selection:bg-[#EEDC82] selection:text-[#08090D]">

      {/* ════════════════════════════════════════════════
          NAVIGATION
      ════════════════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#08090D]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <ZulkaLogo className="w-10 h-10" />
            <div>
              <span className="block text-base font-extrabold tracking-tight text-white">Zulka Orbit</span>
              <span className="block text-[10px] font-mono text-[#EEDC82] tracking-widest uppercase">by Zulka Corporation</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 text-sm text-[#A9A59C]">
            {["Coverage", "Plans", "Technology", "About", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#EEDC82] transition-colors duration-200 font-medium">
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#plans" className="text-sm font-medium text-[#ECEAE2] hover:text-[#EEDC82] transition-colors">
              View Plans
            </a>
            <a
              href="#order"
              className="px-5 py-2.5 text-sm font-bold rounded-lg bg-[#EEDC82] text-[#08090D] hover:bg-[#F5E89A] transition-all shadow-[0_0_20px_rgba(238,220,130,0.3)] hover:shadow-[0_0_30px_rgba(238,220,130,0.5)]"
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-[#ECEAE2] p-2 rounded-lg border border-white/10" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {navOpen && (
          <div className="lg:hidden bg-[#0D0E14]/98 backdrop-blur-xl border-t border-white/5 px-5 py-6 space-y-4">
            {["Coverage", "Plans", "Technology", "About", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setNavOpen(false)} className="block text-sm font-medium text-[#A9A59C] hover:text-[#EEDC82] py-1 transition-colors">
                {link}
              </a>
            ))}
            <a href="#order" onClick={() => setNavOpen(false)} className="block text-center mt-4 px-5 py-3 text-sm font-bold rounded-lg bg-[#EEDC82] text-[#08090D]">
              Order Now
            </a>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <StarField />

        {/* Large deep glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#EEDC82]/5 blur-[180px]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#08090D] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EEDC82]/30 bg-[#EEDC82]/8 text-[#EEDC82] text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-[#EEDC82] animate-pulse" />
              Now serving 840+ cities across Indonesia
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white mb-6">
              Internet from{" "}
              <span className="text-[#EEDC82] relative">
                space.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 6c50-8 100-8 196 0" stroke="#EEDC82" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              For everyone,{" "}
              <span className="text-[#EEDC82]">everywhere.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9E9C94] leading-relaxed max-w-lg mb-10">
              Zulka Orbit delivers high-speed satellite internet via a low Earth orbit constellation — reaching remote villages, open oceans, and underserved urban areas across Indonesia and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#order"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#EEDC82] text-[#08090D] hover:bg-[#F5E89A] transition-all shadow-[0_0_35px_rgba(238,220,130,0.35)] hover:shadow-[0_0_50px_rgba(238,220,130,0.5)]"
              >
                Order Your Kit
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base border border-white/15 text-white hover:bg-white/5 hover:border-[#EEDC82]/40 transition-all"
              >
                <GlobeIcon className="w-5 h-5 text-[#EEDC82]" />
                Check Coverage
              </a>
            </div>

            {/* Micro trust signals */}
            <div className="flex flex-wrap items-center gap-5 mt-10 text-xs text-[#706E68]">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-[#EEDC82]" />
                No long-term contract
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-[#EEDC82]" />
                Ships in 3–5 business days
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-[#EEDC82]" />
                30-day money-back guarantee
              </span>
            </div>
          </div>

          {/* Right: Orbital Graphic */}
          <div className="hidden lg:flex justify-center items-center">
            <SatelliteOrbital />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#4A4845] text-xs font-mono animate-bounce">
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
            <rect x="1" y="1" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="#EEDC82">
              <animate attributeName="cy" values="8;13;8" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 bg-[#0D0E14] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#EEDC82] font-mono">{s.value}</div>
              <div className="text-xs sm:text-sm text-[#7A7870] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          COVERAGE
      ════════════════════════════════════════════════ */}
      <section id="coverage" className="py-24 sm:py-32 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82]">Coverage Map</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4 tracking-tight">
            Connected across every archipelago
          </h2>
          <p className="text-sm sm:text-base text-[#8E8C85] max-w-2xl mx-auto">
            Our expanding Low Earth Orbit constellation now covers all major Indonesian provinces, with expansion to remote outer islands underway.
          </p>
        </div>

        <div className="relative p-8 rounded-3xl bg-[#0D0E14] border border-white/8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(238,220,130,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <svg viewBox="0 0 500 200" className="w-full opacity-70" aria-hidden="true">
                <defs>
                  <radialGradient id="coverGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#EEDC82" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EEDC82" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="250" cy="100" rx="240" ry="70" fill="url(#coverGlow)" />
                {/* Sumatra */}
                <ellipse cx="90" cy="95" rx="55" ry="22" fill="#1A1C1E" stroke="#EEDC82" strokeWidth="1.5" />
                <text x="90" y="99" textAnchor="middle" fill="#EEDC82" fontSize="8" fontFamily="monospace">Sumatra</text>
                {/* Java */}
                <ellipse cx="220" cy="115" rx="60" ry="16" fill="#1A1C1E" stroke="#EEDC82" strokeWidth="1.5" />
                <text x="220" y="119" textAnchor="middle" fill="#EEDC82" fontSize="8" fontFamily="monospace">Java</text>
                {/* Kalimantan */}
                <ellipse cx="235" cy="72" rx="45" ry="32" fill="#1A1C1E" stroke="#EEDC82" strokeWidth="1.5" />
                <text x="235" y="76" textAnchor="middle" fill="#EEDC82" fontSize="8" fontFamily="monospace">Kalimantan</text>
                {/* Sulawesi */}
                <ellipse cx="330" cy="78" rx="22" ry="30" fill="#1A1C1E" stroke="#EEDC82" strokeWidth="1.5" />
                <text x="330" y="82" textAnchor="middle" fill="#EEDC82" fontSize="8" fontFamily="monospace">Sulawesi</text>
                {/* Papua */}
                <ellipse cx="430" cy="85" rx="40" ry="28" fill="#151718" stroke="#EEDC82" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="430" y="89" textAnchor="middle" fill="#EEDC82" fillOpacity="0.5" fontSize="8" fontFamily="monospace">Papua</text>
                {/* Bali / NT */}
                <ellipse cx="295" cy="128" rx="18" ry="10" fill="#1A1C1E" stroke="#EEDC82" strokeWidth="1.5" />
                <text x="295" y="132" textAnchor="middle" fill="#EEDC82" fontSize="7" fontFamily="monospace">Bali/NT</text>

                {/* Signal dots */}
                {([[90,95],[220,115],[235,72],[330,78],[295,128]] as [number,number][]).map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3" fill="#EEDC82">
                    <animate attributeName="r" values="3;7;3" dur={`${2+i*0.4}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur={`${2+i*0.4}s`} repeatCount="indefinite" />
                  </circle>
                ))}
              </svg>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3">
              {coverageZones.map((zone, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    zone.status === "active"
                      ? "bg-[#0F1610] border-[#EEDC82]/20"
                      : zone.status === "expanding"
                      ? "bg-[#110F08] border-yellow-900/40"
                      : "bg-[#0C0F14] border-blue-900/30"
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    zone.status === "active" ? "bg-[#EEDC82]" : zone.status === "expanding" ? "bg-yellow-500 animate-pulse" : "bg-blue-400"
                  }`} />
                  <div>
                    <div className="text-xs font-semibold text-[#ECEAE2]">{zone.region}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${
                      zone.status === "active" ? "text-[#EEDC82]" : zone.status === "expanding" ? "text-yellow-400" : "text-blue-400"
                    }`}>{zone.coverage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PLANS / PRICING
      ════════════════════════════════════════════════ */}
      <section id="plans" className="py-24 sm:py-32 bg-[#0A0B10] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82]">Service Plans</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4 tracking-tight">
              A plan for every connection need
            </h2>
            <p className="text-sm sm:text-base text-[#8E8C85] max-w-xl mx-auto">
              Transparent pricing. No throttling. No long-term commitments. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#0F1008] border-[#EEDC82] shadow-[0_0_50px_rgba(238,220,130,0.15)]"
                    : "bg-[#0D0E14] border-white/8 hover:border-white/15"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#EEDC82] text-[#08090D]">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-black text-white">{plan.name}</h3>
                  <p className="text-xs text-[#7A7870] mt-1">{plan.tagline}</p>
                </div>

                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#EEDC82]">{plan.price}</span>
                  <span className="text-sm text-[#7A7870] ml-1">{plan.period}</span>
                </div>
                <p className="text-[11px] text-[#5E5C56] mb-8">{plan.hardware}</p>

                <div className="flex gap-4 mb-8 p-4 rounded-xl bg-white/4 border border-white/5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5E5C56] font-mono">Download</div>
                    <div className="text-sm font-bold text-white mt-0.5">{plan.speed}</div>
                  </div>
                  <div className="w-px bg-white/8" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5E5C56] font-mono">Latency</div>
                    <div className="text-sm font-bold text-white mt-0.5">{plan.latency}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#CCCAB8]">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-[#EEDC82] text-[#08090D]" : "bg-white/8 text-[#EEDC82]"}`}>
                        <CheckIcon className="w-3 h-3" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#order"
                  onClick={() => setTier(plan.name)}
                  className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.highlight
                      ? "bg-[#EEDC82] text-[#08090D] hover:bg-[#F5E89A] shadow-[0_0_20px_rgba(238,220,130,0.3)]"
                      : "border border-white/15 text-white hover:bg-white/5 hover:border-[#EEDC82]/40"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TECHNOLOGY / FEATURES
      ════════════════════════════════════════════════ */}
      <section id="technology" className="py-24 sm:py-32 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82]">The Technology</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4 tracking-tight">
            Built differently — and better
          </h2>
          <p className="text-sm sm:text-base text-[#8E8C85] max-w-xl mx-auto">
            Zulka Orbit is engineered from the ground up with the latest phased-array antenna technology and orbital mechanics software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#0D0E14] border border-white/8 hover:border-[#EEDC82]/30 hover:bg-[#0F1008] group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEDC82]/10 border border-[#EEDC82]/20 flex items-center justify-center text-[#EEDC82] mb-5 group-hover:bg-[#EEDC82]/20 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#7A7870] leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════════ */}
      <section id="about" className="py-24 sm:py-32 bg-[#0A0B10] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82]">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6 tracking-tight">
                Closing Indonesia&apos;s digital divide — from orbit.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#8E8C85] leading-relaxed">
                <p>
                  Over 77 million Indonesians still lack access to reliable, high-speed internet.
                  Legacy fiber infrastructure will take decades to reach every island in the archipelago. We cannot wait.
                </p>
                <p>
                  Zulka Corporation launched the Orbit division in 2022 to address this directly — deploying a sovereign-operated Low Earth Orbit satellite constellation that treats internet access as essential infrastructure, not a luxury.
                </p>
                <p>
                  By 2028, Zulka Orbit will serve 10 million households with affordable, high-performance connectivity — from Central Java to the remotest corners of West Papua.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Satellites Launched", value: "1,247", bar: 82, note: "Target: 1,500 by 2026" },
                { label: "Indonesian Islands Covered", value: "6,847", bar: 70, note: "Target: 10,000+ by 2027" },
                { label: "Households Connected", value: "2.1M+", bar: 42, note: "Target: 10M by 2028" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0D0E14] border border-white/8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#7A7870] uppercase tracking-wider">{item.label}</span>
                    <span className="text-lg font-black text-[#EEDC82]">{item.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#EEDC82] rounded-full"
                      style={{ width: `${item.bar}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-[#4E4D49] mt-2 font-mono">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ORDER / CONTACT
      ════════════════════════════════════════════════ */}
      <section id="order" className="py-24 sm:py-32 max-w-5xl mx-auto px-5 sm:px-8">
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82]">Get Connected</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-5 tracking-tight">
              Order your Zulka Orbit kit today.
            </h2>
            <p className="text-sm text-[#8E8C85] leading-relaxed mb-8">
              We ship the Zulka Dish and Gen-2 Router directly to your door. Self-install takes under 30 minutes with the Zulka Orbit app. No technician required.
            </p>

            <div className="space-y-5 text-sm">
              {[
                { step: "1", title: "Order your hardware kit online", sub: "Ships in 3–5 business days across Indonesia" },
                { step: "2", title: "Self-install with the Zulka Orbit app", sub: "AR-guided sky scan finds your optimal dish angle" },
                { step: "3", title: "Go online in minutes", sub: "High-speed satellite internet, active immediately" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EEDC82]/10 border border-[#EEDC82]/20 text-[#EEDC82] flex items-center justify-center font-bold text-xs flex-shrink-0">{item.step}</div>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-[#5E5C56] mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 space-y-2 text-sm text-[#7A7870]">
              <div><span className="text-white font-medium">Enterprise Sales: </span>orbit@zulkacorporation.com</div>
              <div><span className="text-white font-medium">Support Hotline: </span>+62 21 5550-0100</div>
              <div><span className="text-white font-medium">Headquarters: </span>Jakarta, Indonesia</div>
            </div>
          </div>

          {/* Right: Order Form */}
          <div className="p-8 rounded-3xl bg-[#0D0E14] border border-white/8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {orderSubmitted ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EEDC82]/15 border-2 border-[#EEDC82] text-[#EEDC82] flex items-center justify-center mx-auto text-2xl font-black">✓</div>
                <h3 className="text-xl font-black text-white">Order Received!</h3>
                <p className="text-sm text-[#7A7870] max-w-xs mx-auto">
                  We&apos;ll send shipping confirmation to your email within 24 hours. Your Zulka Orbit Kit is on its way.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOrder} className="space-y-5">
                <h3 className="text-xl font-black text-white mb-6">Reserve Your Connection</h3>

                <div>
                  <label className="block text-xs font-mono text-[#7A7870] uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" required placeholder="Budi Santoso" className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-white/8 text-sm text-[#ECEAE2] placeholder-[#3E3C38] focus:outline-none focus:border-[#EEDC82]/60 focus:ring-1 focus:ring-[#EEDC82]/20 transition" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#7A7870] uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="budi@example.com" className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-white/8 text-sm text-[#ECEAE2] placeholder-[#3E3C38] focus:outline-none focus:border-[#EEDC82]/60 focus:ring-1 focus:ring-[#EEDC82]/20 transition" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#7A7870] uppercase tracking-wider mb-2">Installation Address</label>
                  <textarea rows={3} required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Jl. Kebon Jeruk No. 10, Jakarta Barat..." className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-white/8 text-sm text-[#ECEAE2] placeholder-[#3E3C38] focus:outline-none focus:border-[#EEDC82]/60 focus:ring-1 focus:ring-[#EEDC82]/20 transition" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#7A7870] uppercase tracking-wider mb-2">Service Plan</label>
                  <select value={tier} onChange={(e) => setTier(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-white/8 text-sm text-[#ECEAE2] focus:outline-none focus:border-[#EEDC82]/60 transition">
                    <option>Residential</option>
                    <option>Business</option>
                    <option>Maritime</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-4 mt-2 rounded-xl font-black text-sm bg-[#EEDC82] text-[#08090D] hover:bg-[#F5E89A] transition-all shadow-[0_0_25px_rgba(238,220,130,0.25)] hover:shadow-[0_0_40px_rgba(238,220,130,0.4)]">
                  Submit Order Request
                </button>
                <p className="text-center text-[11px] text-[#4A4845] font-mono">
                  Free cancellation within 30 days. No credit card required to reserve.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 bg-[#08090D]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ZulkaLogo className="w-8 h-8" />
                <div>
                  <span className="block text-sm font-black text-white">Zulka Orbit</span>
                  <span className="block text-[10px] font-mono text-[#EEDC82]">by Zulka Corporation</span>
                </div>
              </div>
              <p className="text-xs text-[#5A5850] leading-relaxed">
                Satellite internet built for the Indonesian archipelago and beyond. High-speed. Always-on. Everywhere.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82] mb-4">Services</h4>
              <ul className="space-y-2 text-xs text-[#6A6860]">
                {["Residential Internet", "Business Solutions", "Maritime Connectivity", "Government & NGO", "Disaster Relief"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#EEDC82] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82] mb-4">Company</h4>
              <ul className="space-y-2 text-xs text-[#6A6860]">
                {["About Zulka", "Mission & Impact", "Technology", "Careers", "Press & Media"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#EEDC82] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#EEDC82] mb-4">Legal & Support</h4>
              <ul className="space-y-2 text-xs text-[#6A6860]">
                {["Terms of Service", "Privacy Policy", "SLA Agreement", "Help Center", "Contact Support"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#EEDC82] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#4A4845] font-mono">
            <span>© {new Date().getFullYear()} Zulka Corporation. All rights reserved. Zulka Orbit™ is a trademark of Zulka Corporation.</span>
            <span className="text-[#EEDC82]/50">Color: Flaxen #EEDC82</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
