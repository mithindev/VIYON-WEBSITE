import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun,
  BatteryCharging,
  Zap,
  Lightbulb,
  Flame,
  Power,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import PartnersGrid from "@/components/PartnersMarquee";
import { Button } from "@/components/ui/button";

const servicesList = [
  {
    id: "on-grid-solar",
    title: "On-Grid Solar Systems",
    description: "Connect your property to the utility grid. Ideal for homes and commercial establishments under the PM Suryagar subsidy program to export surplus energy and slash your monthly electricity bills close to zero.",
    image: "/assets/7.5kw_cgl.jpg",
    price: "From ₹45,000 / kW",
    features: [
      "Government-subsidized net metering sync",
      "Low maintenance with high-grade string inverters",
      "Automatic energy exports to local electricity grid",
      "Real-time digital generation performance tracking"
    ],
    tag: "Grid-Tied Efficiency",
  },
  {
    id: "off-grid-solar",
    title: "Off-Grid Solar Systems",
    description: "Achieve true energy independence. Designed for farms, estates, and remote zones without a stable utility grid, using top-tier high-capacity battery storage banks to power your property 24/7.",
    image: "/assets/10kw_parakummu_re.jpg",
    price: "From ₹65,000 / kW",
    features: [
      "Zero dependency on local electricity utility grids",
      "Heavy-duty lithium & tubular deep-cycle storage",
      "Reliable power delivery for agricultural pump sets",
      "Custom sized arrays matched to seasonal energy loads"
    ],
    tag: "100% Energy Autonomy",
  },
  {
    id: "hybrid-solar",
    title: "Hybrid Solar Systems",
    description: "The absolute best of both worlds. A smart system that utilizes battery storage to protect your appliances during blackouts, while remaining grid-tied to dynamically optimize pricing and fallback support.",
    image: "/assets/7.5kw_cgl_topview.jpg",
    price: "From ₹85,000 / kW",
    features: [
      "Smart micro-grid energy distribution control",
      "Instant automatic backup switchover during blackouts",
      "Load peak-shaving to minimize high-tariff grid usage",
      "Full surge isolation protection for delicate appliances"
    ],
    tag: "Smart Power Resiliency",
  },
  {
    id: "solar-street-light",
    title: "Solar Street Lights",
    description: "Self-sustaining, zero-maintenance public and private lighting arrays. Integrated with high-performance lithium iron phosphate (LiFePO4) storage, smart motion/light sensors, and weather-proof LED frames.",
    image: "/assets/IMG20230705144319.jpg",
    price: "From ₹12,500 / unit",
    features: [
      "Self-contained weatherproof IP65 outdoor build",
      "Intelligent dusk-to-dawn and motion dimming systems",
      "Quick layout assembly without structural cabling",
      "High-output LED modules with ultra-wide projection"
    ],
    tag: "Eco Outdoor Lighting",
  },
  {
    id: "solar-water-heater",
    title: "Solar Water Heaters",
    description: "High-grade evacuated tube collector (ETC) thermal systems designed to offset heavy heating load profiles. Ideal for residential apartments, health facilities, hotels, and pre-heating arrays for steam boilers.",
    image: "/assets/IMG20230705144800.jpg",
    price: "From ₹24,000 / unit",
    features: [
      "Toughened borosilicate tubes for maximum heat capture",
      "Premium rust-proof food grade stainless inner storage tanks",
      "Dynamic pressurized loop configurations for high pressure",
      "Saves up to 70% on water-heating utility expenses"
    ],
    tag: "Thermal Water Solutions",
  },
  {
    id: "online-ups",
    title: "Online UPS Systems",
    description: "Clean, continuous double-conversion backup power engineered for servers, laboratories, and heavy industrial automation machinery. Protects operations against noise, dips, and micro-outages.",
    image: "/assets/Aldo_inverter.jpg",
    price: "From ₹18,000 / kVA",
    features: [
      "True zero-millisecond power switchover times",
      "Advanced IGBT inverter control for pure sine wave delivery",
      "Double conversion circuit isolates loads from utility surges",
      "Parallel redundant setups for high-capacity reliability"
    ],
    tag: "Uninterrupted Power",
  }
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "We evaluate utility billing profiles, check roof load limits, and outline custom sizing advice." },
  { step: "02", title: "Custom Sizing & Design", desc: "Our engineers compute accurate shadow layout, structure wind-load profiles, and present expected ROI charts." },
  { step: "03", title: "Professional Build", desc: "Certified installation crews complete structure mounting, module routing, earthing arrays, and solar inverter setup." },
  { step: "04", title: "Commissioning & Support", desc: "We configure net-metering synchronization with grid officials and deliver localized ongoing support." }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <PageHero
        label="Feasibility & Setup"
        title="Our Services"
        subtitle="Veiyon Smart Solutions delivers custom solar power setups, industrial backup systems, and smart outdoor lighting arrays."
        currentPage="Services"
      />

      {/* Intro Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="section-label">Tailored Clean Energy</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-6">
            Reliable Energy Solutions Engineered for Performance
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Every building is unique. We size, mount, and configure clean power hardware matched to your specific consumption profiles, using top-tier solar modules and reliable inverter setups.
          </p>
        </div>
      </section>

      {/* Alternate detailed services display */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl space-y-12 sm:space-y-16">
          {servicesList.map((svc, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={svc.title}
                id={svc.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 scroll-mt-28 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image Representation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-1/2 relative"
                >
                  {/* Decorative glowing blob behind image container */}
                  <div className="absolute -inset-4 bg-sky-400/10 rounded-[32px] blur-2xl -z-10" />

                  {/* Frame container */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]"
                  >
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-100 shadow-sm text-xs font-bold text-sky-700">
                      {svc.tag}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Content Representation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {svc.title}
                    </h3>
                    <span className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                      {svc.price}
                    </span>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="space-y-3.5 mb-6">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="sky">
                      <Link to="/contact">
                        Get Sizing Inquiry
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="tel:+916381188563" className="flex items-center gap-1.5">
                        Call Expert
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Execution Process */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">Execution Process</span>
            <h2 className="text-4xl font-extrabold font-heading text-slate-900 mt-3 mb-4">
              How We Deliver Projects
            </h2>
            <p className="text-slate-500 text-sm">
              Our 4-step delivery pipeline ensures reliable mechanical layout and code-compliant inverter configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            {/* Background connector line — desktop only */}
            <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-sky-100 z-0" />

            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative z-10 group"
              >
                <div className="w-[100px] h-[100px] rounded-full bg-sky-500 group-hover:bg-sky-600 flex items-center justify-center text-white font-heading font-extrabold text-2xl shadow-lg shadow-sky-500/20 mx-auto mb-6 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[220px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <PartnersGrid />
    </div>
  );
}
