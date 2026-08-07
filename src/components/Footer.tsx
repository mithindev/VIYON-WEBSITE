import { Link } from "react-router-dom";
import {
  MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ShieldCheck, ArrowRight, Sun,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/our-works", label: "Our Works" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "On-Grid Solar",
  "Off-Grid Solar",
  "Hybrid Solar",
  "Solar Street Lights",
  "Solar Water Heaters",
  "Online UPS Systems",
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050d1a] text-white overflow-hidden">

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/5">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
              <Sun className="h-5 w-5 text-sky-400" />
            </div>
            <div>
              <p className="text-white font-bold text-base leading-tight">Ready to go solar?</p>
              <p className="text-slate-400 text-xs">Get a free site assessment from our team.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-sky-900/40 shrink-0"
          >
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="relative container mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 – Brand */}
          <div>
            <div className="flex items-center gap-3.5 mb-5 select-none">
              <img src="/assets/logo_icon.png" alt="Veiyon Smart Solutions" className="h-12 w-auto object-contain" />
              <div className="flex flex-col justify-center leading-none">
                <div className="font-heading font-extrabold text-2xl leading-none tracking-tighter text-[#0B8F3A] flex items-center select-none">
                  <span>VEIY</span>
                  <span className="inline-block w-[1.1em] h-[0.7em] rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 relative mx-[0.08em] shadow-sm shadow-orange-500/25 align-middle">
                    <span className="absolute right-[0.08em] top-1/2 -translate-y-1/2 w-[0.54em] h-[0.54em] bg-white rounded-full shadow-inner animate-pulse" />
                  </span>
                  <span>N</span>
                </div>
                <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase leading-none mt-1">
                  SMART SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              Harnessing solar energy to power homes, businesses, and communities across Tamil Nadu — sustainably and efficiently.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mb-5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            {/* ISO Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/8">
              <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0" />
              <div>
                <p className="text-white text-[11px] font-bold leading-none">ISO 9001:2015 Certified</p>
                <p className="text-slate-500 text-[9px] mt-0.5">Clean Energy Installer Standards</p>
              </div>
            </div>
          </div>

          {/* Col 2 – Services */}
          <div>
            <h4 className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-sky-400 mb-5 after:block after:w-8 after:h-px after:bg-sky-500/40 after:mt-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-slate-400 text-xs hover:text-sky-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500 group-hover:w-2 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <h4 className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-sky-400 mb-5 after:block after:w-8 after:h-px after:bg-sky-500/40 after:mt-2">
              Get In Touch
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-xs leading-relaxed">
                  No.30, Rajakkamangalam Road, Ganapathi Nagar,<br />Chettikulam Jn, Nagercoil - 629002, Tamil Nadu.
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+916381188563" className="text-slate-400 text-xs hover:text-sky-300 transition-colors block">+91 63811 88563</a>
                  <a href="tel:+918807003005" className="text-slate-400 text-xs hover:text-sky-300 transition-colors block">+91 88070 03005</a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:veiyonsmartsolutions@gmail.com" className="text-slate-400 text-xs hover:text-sky-300 transition-colors block">veiyonsmartsolutions@gmail.com</a>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 border border-sky-500/30 hover:border-sky-400 px-4 py-2 rounded-full transition-all mt-1"
              >
                Send a Message <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 4 – Map */}
          <div>
            <h4 className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-sky-400 mb-5 after:block after:w-8 after:h-px after:bg-sky-500/40 after:mt-2">
              Our Location
            </h4>
            {/* Compact interactive color map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-44 w-full relative">
              <iframe
                title="Veiyon Office Location Map"
                src="https://maps.google.com/maps?q=VEIYON%20SMART%20SOLUTIONS%20Nagercoil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Veiyon Smart Solutions. All rights reserved.</span>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
          </div>
          <span>
            Designed &amp; Built by{" "}
            <a
              href="https://optiviz.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-bold hover:underline transition-colors"
            >
              Optiviz
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
