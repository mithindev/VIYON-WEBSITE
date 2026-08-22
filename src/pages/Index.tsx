import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sun,
  BatteryCharging,
  Zap,
  ArrowRight,
  Award,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  PhoneCall,
  Leaf,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StatStrip from "@/components/StatStrip";
import ServiceCard from "@/components/ServiceCard";
import PartnersMarquee from "@/components/PartnersMarquee";

/* ── Reusable scroll-reveal wrapper ── */
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const hidden =
    direction === "left"
      ? { opacity: 0, x: -48 }
      : direction === "right"
      ? { opacity: 0, x: 48 }
      : direction === "none"
      ? { opacity: 0 }
      : { opacity: 0, y: 40 };

  const visible =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0 }
      : direction === "none"
      ? { opacity: 1 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Index() {
  const navigate = useNavigate();
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const [carouselXScale, setCarouselXScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive carousel scale based on window width
  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      if (w < 400) setCarouselXScale(0.35);
      else if (w < 640) setCarouselXScale(0.45);
      else setCarouselXScale(1);
    };
    updateScale();
    window.addEventListener("resize", updateScale, { passive: true });
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const carouselSlides = [
    {
      id: "online-ups",
      title: "Online UPS",
      desc: "Premium backup power systems to protect sensitive electronic systems.",
      image: "/assets/Inverter_Image2.jpg"
    },
    {
      id: "online-ups",
      title: "Inverter Systems",
      desc: "Robust, heavy-duty power backup for homes and offices.",
      image: "/assets/Aldo_inverter.jpg"
    },
    {
      id: "on-grid-solar",
      title: "On-Grid Solar",
      desc: "Maximize savings by feeding clean solar power back to the utility grid.",
      image: "/assets/7.5kw_cgl_topview.jpg"
    },
    {
      id: "off-grid-solar",
      title: "Off-Grid Solar",
      desc: "Complete power self-sufficiency with high-performance battery banks.",
      image: "/assets/10kw_parakummu_re.jpg"
    },
    {
      id: "solar-street-light",
      title: "Solar Street Light",
      desc: "Self-charging, weather-resistant smart lighting for outdoor spaces.",
      image: "/assets/IMG20230705144319.jpg"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered, carouselSlides.length]);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO SECTION ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-sky-50/50 to-white pt-20 lg:pt-24 pb-8 lg:pb-0"
      >
        {/* Soft background ambient glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />

        {/* Clean, subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-6 relative z-10 py-8 lg:py-0 flex items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

            {/* LEFT: Text & Value Proposition */}
            <div className="flex flex-col">

              {/* Active Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 mb-6 w-fit bg-sky-100/80 border border-sky-200/40 px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(14,165,233,0.04)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                <span className="text-sky-700 text-xs font-bold tracking-[0.18em] uppercase">Nagercoil's Trusted solar installer</span>
              </motion.div>

              {/* Headline */}
              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-3xl sm:text-5xl xl:text-7xl font-extrabold font-heading leading-[1.05] tracking-tight text-slate-900"
                >
                  Power Your Home With{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 font-extrabold relative inline-block">
                    Clean Solar
                    <span className="absolute bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full opacity-60" />
                  </span>{" "}
                  Energy
                </motion.h1>
              </div>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-8 max-w-lg"
              >
                Custom solar solutions designed to cut energy bills, increase property value,
                and power your home or business efficiently and sustainably.
              </motion.p>

              {/* Trust Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-2 mb-6 sm:mb-10"
              >
                {[
                  { label: "Govt. Subsidized", icon: <ShieldCheck className="h-4 w-4 text-sky-600 shrink-0" /> },
                  { label: "15+ Yrs Experience", icon: <Award className="h-4 w-4 text-sky-600 shrink-0" /> },
                  { label: "5,000+ Customers", icon: <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" /> },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-xs font-bold text-sky-850 border border-sky-100/80 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(14,165,233,0.04)]"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-[0_10px_25px_rgba(14,165,233,0.2)] hover:shadow-[0_12px_30px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Book Free Site Visit</span>
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 text-sky-700 font-semibold text-sm px-6 py-3.5 rounded-full border border-sky-200 bg-white/80 hover:bg-sky-50 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Our Services</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Image Showcase */}
            <motion.div
              className="relative flex items-center justify-center w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Premium outer double border wrapper */}
              <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-xl p-2 sm:p-3.5 bg-white/70 backdrop-blur-md border border-sky-100/80 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_24px_50px_rgba(14,165,233,0.12)]">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/60">
                  <img
                    src="/assets/solar_house_render.png"
                    alt="Modern home with solar panels"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Metric 1: Efficiency */}
                <motion.div
                  className="absolute -left-4 top-8 hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white border border-sky-100/80 shadow-[0_12px_28px_rgba(14,165,233,0.08)] z-20"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 border border-sky-100">
                    <Sun className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800 text-lg leading-none">98%</div>
                    <div className="text-sky-600/90 text-[10px] font-bold mt-0.5 uppercase tracking-wider">Efficiency Rate</div>
                  </div>
                </motion.div>

                {/* Floating Metric 2: Carbon Free */}
                <motion.div
                  className="absolute -right-4 bottom-10 hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 shadow-[0_12px_28px_rgba(14,165,233,0.2)] text-white z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Leaf className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-lg leading-none">CO₂ Free</div>
                    <div className="text-sky-100/90 text-[10px] font-bold mt-0.5 uppercase tracking-wider">Clean Green Power</div>
                  </div>
                </motion.div>

                {/* Floating Pill: System Active */}
                <motion.div
                  className="absolute -top-3 right-6 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100/80 shadow-[0_6px_16px_rgba(14,165,233,0.06)] z-20"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-slate-700 text-xs font-extrabold">System Active</span>
                </motion.div>

                {/* Floating Metric 3: kWh Saved */}
                <motion.div
                  className="absolute left-6 -bottom-4 hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-sky-100/80 shadow-[0_8px_20px_rgba(14,165,233,0.06)] z-20"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Zap className="h-4.5 w-4.5 text-yellow-500 shrink-0" />
                  <div>
                    <span className="text-slate-800 font-extrabold text-sm">1,24,000+</span>
                    <span className="text-slate-500 text-[10px] ml-1.5 font-semibold">kWh Saved</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Soft bottom transition edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Welcome Poster Modal */}
      <AnimatePresence>
        {showPoster && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPoster(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Poster Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-[720px] w-full bg-white rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-white/10 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPoster(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg hover:scale-105 duration-200 z-20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="w-full h-auto bg-slate-100 relative">
                <img
                  src="/assets/veiyon_hybrid_poster.jpg"
                  alt="Veiyon Hybrid Solar Power Poster"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <StatStrip />

      {/* ══════════════ ABOUT PREVIEW ══════════════ */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <Reveal direction="left" className="relative">
              <div className="relative">
                <img
                  src="/assets/7.5kw_cgl.jpg"
                  alt="Solar engineers team"
                  className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-sky-200 -z-10" />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-4 sm:px-7 py-3 sm:py-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div>
                    <div className="font-extrabold text-3xl text-white leading-none">15+</div>
                    <div className="text-[11px] text-sky-100 mt-1 uppercase tracking-wider">Years Combined Experience</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <span className="section-label">About Us</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 mt-3 mb-5 leading-[1.08]">
                Powering the Future with Solar &amp; Backup Solutions
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 text-base">
                Veiyon Smart Solutions harnesses the power of the sun to create sustainable energy solutions for residential, commercial, and industrial clients across Nagercoil and beyond.
              </p>
              <ul className="space-y-3.5 mb-10">
                {[
                  "Government subsidized Suryagar On-Grid systems",
                  "Off-grid and hybrid backup installations",
                  "Solar water heating and utility UPS setups",
                  "Nagercoil-based operations with responsive local service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="sky">
                <Link to="/how-we-work" className="group">
                  How we Work
                  <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES PREVIEW (3D CAROUSEL) ══════════════ */}
      <section
        className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #e0f4ff 0%, #d0edfb 50%, #e8f8ff 100%)" }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sky-200/50 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-200/40 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="none" className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 mt-3 tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mt-3" />
          </Reveal>

          <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col items-center justify-center min-h-[420px] max-w-5xl mx-auto py-6 overflow-visible"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-visible z-10" style={{ transformStyle:"preserve-3d" }}>
              {carouselSlides.map((slide, i) => {
                const count = carouselSlides.length;
                let diff = i - activeCarouselIndex;
                while (diff < -2) diff += count;
                while (diff > 2) diff -= count;

                let x = 0, scale = 1, zIndex = 10, opacity = 1, rotateY = 0;
                let filter = "none";

                if (isMobile) {
                  if (diff === 0) {
                    x = 0;
                    scale = 0.95;
                    zIndex = 30;
                    opacity = 1;
                    rotateY = 0;
                    filter = "none";
                  } else if (diff === -1 || diff === 1) {
                    x = diff * 135;
                    scale = 0.75;
                    zIndex = 20;
                    opacity = 0.4;
                    rotateY = 0;
                    filter = "blur(2px) brightness(0.6)";
                  } else {
                    x = diff * 150;
                    scale = 0.6;
                    zIndex = 10;
                    opacity = 0;
                    rotateY = 0;
                    filter = "blur(4px) brightness(0.4)";
                  }
                } else {
                  if (diff === 0) { x=0; scale=1.2; zIndex=30; opacity=1; rotateY=0; filter="none"; }
                  else if (diff === -1) { x=-220; scale=.92; zIndex=20; opacity=.85; rotateY=24; filter="brightness(.9)"; }
                  else if (diff === 1)  { x=220;  scale=.92; zIndex=20; opacity=.85; rotateY=-24; filter="brightness(.9)"; }
                  else if (diff === -2) { x=-400; scale=.72; zIndex=10; opacity=.55; rotateY=40; filter="brightness(.6) blur(1px)"; }
                  else if (diff === 2)  { x=400;  scale=.72; zIndex=10; opacity=.55; rotateY=-40; filter="brightness(.6) blur(1px)"; }
                }

                const responsiveX = isMobile ? x : x * carouselXScale;

                return (
                  <motion.div
                    key={slide.title}
                    onClick={() => {
                      if (activeCarouselIndex === i) {
                        navigate(`/services#${slide.id}`);
                      } else {
                        setActiveCarouselIndex(i);
                      }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(event, info) => {
                      const swipeThreshold = 50;
                      if (info.offset.x < -swipeThreshold) {
                        setActiveCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
                      } else if (info.offset.x > swipeThreshold) {
                        setActiveCarouselIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
                      }
                    }}
                    className="absolute w-[200px] sm:w-[280px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.16)] hover:shadow-[0_25px_60px_rgba(14,165,233,0.26)] border-4 border-white bg-white group cursor-pointer transition-shadow duration-300 origin-center"
                    style={{
                      transformOrigin: "center center",
                      touchAction: "pan-y",
                      pointerEvents: isMobile ? (diff === -1 || diff === 0 || diff === 1 ? "auto" : "none") : "auto",
                    }}
                    animate={{ x:responsiveX, scale, zIndex, opacity, rotateY, filter }}
                    transition={{ type:"spring", stiffness:280, damping:28 }}
                  >
                    <div className="relative w-full h-full">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 sm:p-5 flex flex-col justify-end text-left transition-opacity duration-300">
                        <span className="text-[9px] sm:text-[10px] text-sky-400 font-bold uppercase tracking-widest">Our Service</span>
                        <span className="text-white text-sm sm:text-lg font-extrabold mt-0.5 leading-tight">{slide.title}</span>
                        <p className="text-slate-300 text-[9px] sm:text-xs font-medium mt-1 leading-tight line-clamp-2">{slide.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="hidden md:block relative w-full max-w-[700px] h-[30px] mt-10 z-20">
              {carouselSlides.map((slide, i) => {
                const count = carouselSlides.length;
                let diff = i - activeCarouselIndex;
                while (diff < -2) diff += count;
                while (diff > 2) diff -= count;
                let x = 0, opacity = 0;
                if (isMobile) {
                  if (diff === 0) {
                    x = 0;
                    opacity = 1;
                  } else {
                    x = diff * 120;
                    opacity = 0;
                  }
                } else {
                  if (diff === 0)  { x=0;    opacity=1; }
                  else if (diff === -1) { x=-220; opacity=.7; }
                  else if (diff === 1)  { x=220;  opacity=.7; }
                  else if (diff === -2) { x=-400; opacity=.3; }
                  else if (diff === 2)  { x=400;  opacity=.3; }
                }
                const responsiveX = isMobile ? x : x * carouselXScale;
                return (
                  <motion.div
                    key={slide.title+"-label"}
                    className="absolute left-1/2 -translate-x-1/2 text-center"
                    animate={{ x:responsiveX, opacity }}
                    transition={{ type:"spring", stiffness:280, damping:28 }}
                    style={{ pointerEvents: isMobile && diff !== 0 ? "none" : "auto" }}
                  >
                    {diff === 0 ? (
                      <Link
                        to={`/services#${slide.id}`}
                        className="text-xs sm:text-sm font-extrabold text-base tracking-wide transition-colors text-sky-950 hover:text-sky-600 cursor-pointer whitespace-nowrap"
                      >
                        {slide.title}
                      </Link>
                    ) : (
                      <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-500 whitespace-nowrap">
                        {slide.title}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mt-8 z-30">
              {carouselSlides.map((_,i) => (
                <button key={i} onClick={() => setActiveCarouselIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i===activeCarouselIndex?"bg-sky-600 scale-125 shadow-sm shadow-sky-500/50":"bg-sky-200 hover:bg-sky-400"}`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>

            <div className="text-center mt-10 z-30">
              <Button asChild variant="sky" size="lg" className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                <Link to="/services">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <Reveal direction="none" className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 mt-3 mb-4 leading-[1.08]">
              Why Homeowners &amp; Businesses Trust Veiyon
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon:Award, title:"Proven Expertise", desc:"Delivering reliable solar installations backed by engineering experience and custom layout design.", delay:0 },
              { icon:ShieldCheck, title:"Top-Tier Products", desc:"Collaborating with premium brands like Premier Energies and Eastman for maximum efficiency.", delay:.1 },
              { icon:HeartHandshake, title:"Customer-First Support", desc:"Committed to Nagercoil and regional support, offering comprehensive post-installation technical backup.", delay:.2 },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} direction="up" delay={card.delay}>
                  <motion.div
                    whileHover={{ y:-6, boxShadow:"0 20px 48px rgba(14,165,233,.15)" }}
                    transition={{ duration:.25 }}
                    className="flex flex-col gap-5 p-8 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-[0_6px_20px_rgba(14,165,233,.3)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={0.2} className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/how-we-work">Learn How We Work</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ PARTNERS MARQUEE ══════════════ */}
      <PartnersMarquee />

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section
        className="relative py-12 sm:py-16 lg:py-24 text-center overflow-hidden"
        style={{ background:"linear-gradient(135deg,hsl(200,82%,40%) 0%,hsl(196,90%,52%) 55%,hsl(200,85%,66%) 100%)" }}
      >
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

        <motion.div
          className="absolute top-10 right-12 text-white/10 hidden lg:block"
          animate={{ rotate:360 }}
          transition={{ duration:80, repeat:Infinity, ease:"linear" }}
        >
          <Sun className="h-40 w-40" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="up">
            <span className="inline-block text-xs font-bold tracking-[.2em] uppercase text-white/70 mb-5">
              Start Saving Today
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2 mb-5 leading-[1.08]">
              Ready to Power Your Home<br className="hidden sm:block" /> With Clean Solar?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              Get a customized layout evaluation and a full return-on-investment breakdown for your property — completely free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-bold rounded-full w-full sm:w-auto px-5 sm:px-9 py-4 text-sm shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <PhoneCall className="h-4 w-4" />
                Get Free Site Visit
              </Link>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold rounded-full w-full sm:w-auto px-5 sm:px-9 py-4 text-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Solar Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
