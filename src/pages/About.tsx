import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, ShieldCheck, Leaf, Lightbulb, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import StatStrip from "@/components/StatStrip";
import { Button } from "@/components/ui/button";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        label="Who We Are"
        title="About Viyon Smart Solutions"
        subtitle="Harnessing clean, renewable solar power for energy independence and long-term utility savings."
        currentPage="About Us"
      />

      {/* Our Story */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/assets/7.5kw_cgl.jpg"
                alt="Viyon Smart Solutions rooftop solar engineers"
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 mb-6">
                From Vision to Clean Energy Leadership
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Viyon Smart Solutions was established to build reliable solar energy pathways for consumers across Tamil Nadu. Headquartered in Nagercoil, we have scaled our execution capabilities to offer high-quality rooftop and ground-mounted solar power setups.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Over the years, we have delivered tailored energy systems, including standard net-metered residential installations, high-capacity off-grid battery arrays, solar street lighting configurations, and online industrial UPS solutions. Our team guides you at every step, from custom feasibility design to structural execution and localized grid sync setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild variant="sky">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 bg-sky-pale">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-sky-gradient text-white p-7 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                <Target className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase opacity-75 mb-2">Our Mission</p>
              <h3 className="text-2xl font-bold font-heading mb-4">Powering a Cleaner Tomorrow</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                To deliver custom, robust solar setups that lower dependency on traditional grid electricity, optimize cost curves, and transition consumers seamlessly to carbon-neutral micro-generation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-sky-dark text-white p-7 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-sky-bright">
                <Eye className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase opacity-75 mb-2">Our Vision</p>
              <h3 className="text-2xl font-bold font-heading mb-4">Energy Independence For All</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                To stand as the most trusted solar solution provider in the region—defined by structural integrity, execution transparency, and reliable engineering support.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats strip */}
      <StatStrip />

      {/* Core Values */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 mb-4">
              What Viyon Stands For
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "Every module, frame, and inverter is built for heavy duty operation. We back our hardware setup with local operations." },
              { icon: Leaf, title: "Sustainability", desc: "We enable clean transformation. Solar power significantly reduces utility emission footprints." },
              { icon: Lightbulb, title: "Innovation", desc: "We implement latest MPPT chargers, monocrystalline half-cut technologies, and smart hybrid string management." },
              { icon: HeartHandshake, title: "Excellence", desc: "Our commitment spans accurate sizing consultation, clean mounting setups, and transparent pricing." },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-sky-primary transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-sky-light flex items-center justify-center text-sky-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
