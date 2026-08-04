import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const centerLinks = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/services",label: "Our Services" },
  { href: "/why-us",  label: "Why Choose Us" },
  { href: "/our-works",label: "Our Works" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-7xl rounded-full border border-white/50 shadow-[0_8px_32px_0_rgba(14,165,233,0.08)]",
          scrolled
            ? "top-4 bg-white/50 backdrop-blur-xl py-2 shadow-sky-500/10"
            : "top-6 bg-white/20 backdrop-blur-lg py-3.5"
        )}
        initial={{ y: -80, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 shrink-0 select-none">
            <img src="/assets/logo_icon.png" alt="Veiyon Smart Solutions" className="h-11 sm:h-12 w-auto object-contain block" />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-heading font-extrabold text-xl sm:text-[28px] leading-none tracking-tighter text-[#0B8F3A]">
                VEIYON
              </span>
              <span className="text-[9px] sm:text-[12px] font-semibold tracking-widest text-[#5F6368] uppercase leading-none mt-1">
                SMART SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {centerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    isActive(link.href)
                      ? "text-black bg-white/40 shadow-sm"
                      : "text-neutral-700 hover:text-black hover:bg-white/25"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA / Contact */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                isActive("/contact")
                  ? "text-black bg-white/40 shadow-sm"
                  : "text-neutral-700 hover:text-black hover:bg-white/25 bg-white/10"
              )}
            >
              Contact
            </Link>
            <a
              href="tel:+919486796006"
              className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white transition-all rounded-full px-4 py-2 text-xs font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg duration-200 gap-1.5"
            >
              <Phone className="h-3.5 w-3.5" />
              Call: +91 94867 96006
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-full text-neutral-800 hover:bg-white/25 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-sky-50/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-col items-center gap-4"
            >
              {[...centerLinks, { href: "/contact", label: "Contact" }].map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "text-2xl font-heading font-bold transition-colors",
                      isActive(link.href) ? "text-sky-500" : "text-slate-700 hover:text-sky-500"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="mt-4"
              >
                <a
                  href="tel:+919486796006"
                  className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white transition-all rounded-full px-8 py-3 text-base font-bold shadow-md hover:-translate-y-0.5 gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call: +91 94867 96006
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
