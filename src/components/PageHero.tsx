import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  currentPage: string;
  className?: string;
}

export default function PageHero({ label, title, subtitle, currentPage, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-sky-gradient pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-14",
        className
      )}
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/6" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-3"
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-white text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-3 max-w-2xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/80 text-sm sm:text-base max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex items-center gap-2 mt-5 text-sm text-white/60"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          <span className="text-white font-semibold">{currentPage}</span>
        </motion.nav>
      </div>
    </section>
  );
}
