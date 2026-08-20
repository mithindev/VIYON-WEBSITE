import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: React.ReactNode;
  highlighted?: boolean;
}

const brands: Brand[] = [
  {
    name: "Premier Energies",
    logo: (
      <svg className="h-9 w-auto text-slate-400 group-hover:text-sky-600 transition-colors" viewBox="0 0 100 30" fill="currentColor">
        <path d="M10,5 L20,15 L10,25 Z" fill="#94A3B8" />
        <path d="M18,5 L28,15 L18,25 Z" fill="#475569" />
        <text x="32" y="14" fontSize="7" fontWeight="bold" fill="#475569">PREMIER</text>
        <text x="32" y="21" fontSize="5.5" fill="#94A3B8" letterSpacing="0.5">ENERGIES</text>
      </svg>
    ),
  },
  {
    name: "Eastman",
    logo: (
      <svg className="h-9 w-auto text-slate-400 group-hover:text-sky-600 transition-colors" viewBox="0 0 100 30" fill="currentColor">
        <circle cx="15" cy="15" r="9" stroke="#E2E8F0" strokeWidth="1" fill="none" />
        <circle cx="15" cy="15" r="7" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 1.5" fill="none" />
        <text x="28" y="19" fontSize="11" fontWeight="bold" fontStyle="italic" fill="#334155">Eastman</text>
      </svg>
    ),
  },
  {
    name: "Polycab",
    highlighted: true,
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <circle cx="50" cy="10" r="5" stroke="#EF4444" strokeWidth="1.8" fill="none" />
        <line x1="50" y1="2" x2="50" y2="10" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
        <text x="50" y="25" textAnchor="middle" fontSize="9" fontWeight="900" fill="#EF4444" letterSpacing="0.5">POLYCAB</text>
      </svg>
    ),
  },
  {
    name: "Adani Solar",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <text x="20" y="15" fontSize="13" fontWeight="bold" fill="#334155">adani</text>
        <text x="22" y="23" fontSize="8" fontWeight="bold" fill="#64748B">Solar</text>
      </svg>
    ),
  },
  {
    name: "WAAREE",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <text x="50" y="14" textAnchor="middle" fontSize="11" fontWeight="900" fill="#475569" letterSpacing="1">WAAREE</text>
        <text x="50" y="22" textAnchor="middle" fontSize="5" fill="#64748B">One with the Sun</text>
      </svg>
    ),
  },
  {
    name: "Vikram Solar",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <path d="M15,5 L23,12 L31,5 L27,15 L15,5 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
        <text x="35" y="18" fontSize="8" fontWeight="bold" fill="#475569">vikramsolar</text>
      </svg>
    ),
  },
  {
    name: "RIPS Technology",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <circle cx="20" cy="15" r="9" fill="#334155" />
        <text x="14" y="18" fill="white" fontSize="9" fontStyle="italic" fontWeight="bold">Rips</text>
        <text x="34" y="18" fontSize="8" fontWeight="bold" fill="#475569">TECHNOLOGY</text>
      </svg>
    ),
  },
  {
    name: "Texmo",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <path d="M10,8 L40,8 L33,22 L17,22 Z" fill="#334155" />
        <text x="14" y="17" fill="white" fontSize="7" fontWeight="bold" letterSpacing="1">TEXMO</text>
      </svg>
    ),
  },
  {
    name: "Renew Power",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <text x="50" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">ReNew</text>
        <text x="50" y="22" textAnchor="middle" fontSize="6" fill="#94A3B8" letterSpacing="1.5">POWER</text>
      </svg>
    ),
  },
  {
    name: "Finolex Cables",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <text x="50" y="14" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">Finolex</text>
        <text x="50" y="22" textAnchor="middle" fontSize="5" fill="#64748B">Cables Limited</text>
      </svg>
    ),
  },
  {
    name: "Vsole",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <text x="50" y="15" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#94A3B8" letterSpacing="1">VSOLE</text>
        <text x="50" y="22" textAnchor="middle" fontSize="6" fill="#64748B">SOLAR INVERTER</text>
      </svg>
    ),
  },
  {
    name: "UTL",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <circle cx="20" cy="15" r="8" fill="#475569" />
        <rect x="25" y="10" width="10" height="10" fill="#94A3B8" />
        <text x="42" y="19" fontSize="12" fontWeight="bold" fill="#475569" letterSpacing="1">UTL</text>
      </svg>
    ),
  },
  {
    name: "Textro Electronics",
    logo: (
      <svg className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor">
        <circle cx="20" cy="15" r="7" fill="#475569" />
        <text x="32" y="18" fontSize="8" fontWeight="bold" fill="#475569">Textro Electronics</text>
      </svg>
    ),
  },
];

export default function PartnersMarquee() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-6 sm:py-8 bg-slate-50 border-t border-sky-100/50">
      <div className="container mx-auto px-6">
        {/* Title Block matching the screenshot */}
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-3xl font-extrabold font-heading text-slate-800 text-center tracking-tight">
            Our Brands / Our Collaborators
          </h2>
          <div className="w-16 h-1 bg-teal-500 rounded-full mt-2.5" />
        </div>

        {/* Brand Grid matching the layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.15)" }}
              className={`flex flex-col items-center justify-center gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 border transition-all duration-300 group cursor-default aspect-[4/3] ${
                brand.highlighted
                  ? "border-sky-500 shadow-[0_4px_20px_rgba(14,165,233,0.15)]"
                  : "border-slate-100 shadow-sm hover:border-sky-400 hover:shadow-md"
              }`}
            >
              {/* Logo Area */}
              <div className="flex-1 flex items-center justify-center w-full max-h-[48px]">
                {brand.logo}
              </div>

              {/* Label */}
              <span className={`text-xs font-bold text-center transition-colors duration-300 ${
                brand.highlighted 
                  ? "text-sky-950" 
                  : "text-slate-600 group-hover:text-sky-600"
              }`}>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
