import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Maximize2,
  X,
  Zap,
  TrendingDown,
  Sun,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: "On-Grid" | "Off-Grid" | "Street Light" | "UPS & Inverters";
  location: string;
  scale: string;
  date: string;
  image: string;
  description: string;
  hardware: string[];
  savings: string;
}

const projectsList: Project[] = [
  {
    id: 1,
    title: "Auroville Mansion Rooftop",
    category: "On-Grid",
    location: "Salem, Tamil Nadu",
    scale: "10 kW On-Grid",
    date: "March 2025",
    image: "/assets/7.5kw_cgl.jpg",
    description: "Full residential installation under the PM Suryagar subsidy program. Feeds excess power back to the regional grid via custom net-metering synchronization, lowering billing overheads by nearly 95%.",
    hardware: ["Premier Energies Mono PERC Modules", "UTL 10kW String Inverter", "Aluminium Mounting Rails"],
    savings: "₹1,15,000 / year savings",
  },
  {
    id: 2,
    title: "Salem Tech Park Carport",
    category: "On-Grid",
    location: "Salem, Tamil Nadu",
    scale: "45 kW On-Grid",
    date: "June 2025",
    image: "/assets/7.5kw_cgl_topview.jpg",
    description: "Commercial carport canopy covering 20 parking bays. The double-utility structural design shields corporate vehicles while generating clean, off-peak electricity.",
    hardware: ["Adani Solar Bifacial Modules", "Growatt 50kW Inverters", "Hot-dip Galvanized Structure"],
    savings: "₹5,20,000 / year savings",
  },
  {
    id: 3,
    title: "Coimbatore Farm Estate",
    category: "Off-Grid",
    location: "Coimbatore, Tamil Nadu",
    scale: "15 kW Off-Grid",
    date: "January 2025",
    image: "/assets/10kw_parakummu_re.jpg",
    description: "Designed for energy independence in an agricultural estate experiencing regular grid cuts. Powers irrigation pump systems and residential villa operations 24/7.",
    hardware: ["Waaree Mono crystalline Panels", "UTL 15kVA Solar PCU", "24x UTL Deep-Cycle Battery Bank"],
    savings: "100% Grid Independence",
  },
  {
    id: 4,
    title: "National Highway 44 Streetlights",
    category: "Street Light",
    location: "Salem Region Bypass",
    scale: "120 Smart LED Units",
    date: "September 2025",
    image: "/assets/IMG20230705144319.jpg",
    description: "Autonomous solar street lights fitted with lithium ferro-phosphate battery blocks, integrated solar panels, and smart dusk-to-dawn sensors.",
    hardware: ["Viyon IP65 Integrated Luminaires", "3.2V LiFePO4 batteries", "Poles & anchoring assemblies"],
    savings: "0% Lighting Grid Costs",
  },
  {
    id: 5,
    title: "Namakkal Boiler Pre-Heater",
    category: "On-Grid",
    location: "Namakkal, Tamil Nadu",
    scale: "5,000 LPD Thermal ETC",
    date: "November 2025",
    image: "/assets/IMG20230705150045.jpg",
    description: "Evacuated tube collector thermal arrays installed on the roof of a food processing plant, saving significant fuel costs during industrial hot water cycles.",
    hardware: ["Toughened Borosilicate Tubes", "Food-grade SUS304 Storage Tanks", "Pressurized Loop sync"],
    savings: "65% Steam Heating Fuel offset",
  },
  {
    id: 6,
    title: "Erode Smart Villa",
    category: "Off-Grid",
    location: "Erode, Tamil Nadu",
    scale: "8 kW Hybrid System",
    date: "February 2025",
    image: "/assets/IMG20230830120011.jpg",
    description: "A premium villa installation providing dual-mode efficiency: grid connection for peak support, and modular battery backups to prevent delicate smart appliances from outages.",
    hardware: ["Eastman Solar Modules", "Viyon 8kW Hybrid Inverter", "Lithium Battery Blocks"],
    savings: "Seamless failover & surge safety",
  },
  {
    id: 7,
    title: "Kovai Diagnostic Lab UPS",
    category: "UPS & Inverters",
    location: "Coimbatore, Tamil Nadu",
    scale: "25 kVA Online UPS",
    date: "October 2025",
    image: "/assets/Inverter_Image2.jpg",
    description: "Continuous double-conversion power security setup for sensitive medical diagnostic scanners and data storage racks. Zero millisecond power transfer times.",
    hardware: ["True Double-Conversion IGBT UPS", "Sealed Lead Acid VRLA Battery Bank", "Surge Isolator panel"],
    savings: "Zero diagnostic scan interruptions",
  },
  {
    id: 8,
    title: "Salem Smart City Villa",
    category: "On-Grid",
    location: "Salem, Tamil Nadu",
    scale: "5 kW On-Grid Solar",
    date: "May 2025",
    image: "/assets/7.5kw_cgl_topview.jpg",
    description: "On-grid rooftop solar setup designed to match contemporary architectural aesthetics. Sleek black mounting profiles integrate flush with the modern terrace.",
    hardware: ["Premier Energies All-Black Modules", "Growatt 5kW String Inverter", "Flush Roof Mount Clamps"],
    savings: "₹62,000 / year savings",
  }
];

const categories = ["All", "On-Grid", "Off-Grid", "Street Light", "UPS & Inverters"];

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsList.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category === activeFilter;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24 overflow-x-hidden">
      <PageHero
        label="Portfolio Showcase"
        title="Our Works"
        subtitle="Explore our successfully commissioned solar installations, backup UPS projects, and outdoor lighting arrays."
        currentPage="Our Works"
      />

      {/* Filter Tabs */}
      <section className="py-3 sm:py-4 bg-white border-b border-sky-100/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 scale-105"
                    : "bg-sky-50 text-slate-600 hover:bg-sky-100 hover:text-sky-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-5 sm:py-6">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={proj.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedProject(proj)}
                >
                  {/* Card Visual representation */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-sky-500 text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {proj.category}
                    </div>
                    {/* Hover indicator overlay */}
                    <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sky-600 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="h-4.5 w-4.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card text */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
                      <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                      <span className="bg-sky-50 text-sky-700 font-bold px-3 py-1 rounded-md">
                        {proj.scale}
                      </span>
                      <span className="text-slate-400 font-medium">{proj.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/65 backdrop-blur-md"
            />

            {/* Modal content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl border border-slate-100 w-full max-w-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center z-20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Scrollable details */}
              <div className="overflow-y-auto flex-1">
                {/* Header Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-sky-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
                  {/* Meta Strip */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-sky-50 border border-sky-100/50 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Location</div>
                      <div className="text-slate-700 text-xs sm:text-sm font-semibold mt-1 flex items-center justify-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        {selectedProject.location.split(",")[0]}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Commissioned</div>
                      <div className="text-slate-700 text-xs sm:text-sm font-semibold mt-1 flex items-center justify-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        {selectedProject.date}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Project Capacity</div>
                      <div className="text-slate-700 text-xs sm:text-sm font-semibold mt-1 flex items-center justify-center gap-1">
                        <Zap className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        {selectedProject.scale}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2.5">Project Overview</h4>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Performance stats & savings */}
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20">
                      <TrendingDown className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Financial & Carbon Yield</h5>
                      <p className="text-emerald-950 font-extrabold text-sm sm:text-base mt-0.5">{selectedProject.savings}</p>
                    </div>
                  </div>

                  {/* Tech stack/Hardware used */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Hardware Components</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.hardware.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-slate-600 text-xs sm:text-sm">
                          <CheckCircle2 className="h-4.5 w-4.5 text-sky-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Action footer */}
              <div className="p-6 border-t border-slate-50 flex items-center justify-end gap-3 bg-slate-50">
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close Details
                </Button>
                <Button asChild variant="sky">
                  <Link to="/contact">
                    Get Similar Sizing Proposal
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
