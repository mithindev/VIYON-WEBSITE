import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, HeartHandshake, Leaf, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Proven Expertise",
    desc: "Viyon Smart Solutions delivers complex mechanical mounting layouts and custom wiring. With over 15 years of solar engineering expertise across our team, we ensure structural wind-load compliance and stable net metering.",
    image: "/assets/7.5kw_cgl.jpg"
  },
  {
    icon: ShieldCheck,
    title: "Top-Tier Products",
    desc: "We collaborate with recognized domestic and international solar module, inverter, and battery manufacturers. Viyon systems utilize modules from Premier Energies, WAAREE, and Adani Solar for solid efficiency.",
    image: "/assets/IMG20221231154653.jpg"
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Service",
    desc: "We own the complete cycle. From on-site load audits, grid sync documentation, component configuration, structure assembly to ongoing physical maintenance checks.",
    image: "/assets/Aldo_inverter.jpg"
  },
  {
    icon: Leaf,
    title: "Eco-Verified & Sustainable",
    desc: "Going solar with Viyon actively offsets local carbon emission profiles. We design setups optimized for maximum generation efficiency to speed up your investment returns.",
    image: "/assets/7.5kw_cgl_topview.jpg"
  }
];

const testimonials = [
  {
    quote: "We installed a 5kW On-Grid solar setup at our house in Salem. Our monthly utility bill went from ₹6,500 down to under ₹800. The Viyon installation crew handled all government subsidy paperwork perfectly.",
    author: "Karthikeyan S.",
    role: "Homeowner, Salem"
  },
  {
    quote: "Our factory required a robust hybrid backup solution for critical automated machinery. Viyon designed a custom 50kVA Hybrid setup with lithium storage. Zero production downtime since installation.",
    author: "Meenakshi Sundaram",
    role: "Director, MS Textiles"
  },
  {
    quote: "Excellent after-sales support. When our monitoring app went offline after a router change, their technical team was at our premises within 4 hours to re-configure the WiFi telemetry interface.",
    author: "Dr. Anand Ram",
    role: "Anand Dental Clinic"
  }
];

export default function WhyUs() {
  return (
    <div>
      <PageHero
        label="The Viyon Difference"
        title="Why Choose Viyon Smart Solutions"
        subtitle="Uncompromising structural design, top-tier module partners, and Nagercoil's most trusted solar service crew."
        currentPage="Why Us"
      />

      {/* Differentiators Section */}
      <section className="py-5 sm:py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12 sm:space-y-16">
            {features.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? "order-1" : "order-1 lg:order-2"}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                    />
                  </motion.div>

                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? "order-2" : "order-2 lg:order-1"}
                  >
                    <div className="w-12 h-12 rounded-lg bg-sky-light flex items-center justify-center text-sky-primary mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground mb-4">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 sm:py-8 bg-sky-pale">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="section-label">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-sm">
              Discover how Viyon helps households and industries save money through custom solar arrays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-xl border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-8 w-8 text-sky-light mb-6" />
                  <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm font-heading text-foreground">{t.author}</h4>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Badges */}
      <section className="py-5 sm:py-7 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="bg-sky-light/40 border border-sky-primary/20 rounded-2xl p-6 sm:p-8 flex items-center gap-4 sm:gap-6 max-w-md w-full">
              <ShieldCheck className="h-10 w-10 text-sky-primary shrink-0" />
              <div>
                <h3 className="font-heading font-extrabold text-lg text-sky-dark mb-1">TRU SECURE Sizing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We guarantee wind-load structural compliance and proper string fuse protection on every design layouts.
                </p>
              </div>
            </div>
            <div className="bg-sky-light/40 border border-sky-primary/20 rounded-2xl p-6 sm:p-8 flex items-center gap-4 sm:gap-6 max-w-md w-full">
              <Leaf className="h-10 w-10 text-sky-primary shrink-0" />
              <div>
                <h3 className="font-heading font-extrabold text-lg text-sky-dark mb-1">ECO VERIFIED Efficiency</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our system configurations utilize only Tier-1 high efficiency solar cells to optimize investment payback periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sky-gradient py-7 sm:py-8 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4">
            Build Your Own Solar Grid with Viyon
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8 text-sm">
            Contact our Nagercoil engineering team to set up your onsite system capacity calculation today.
          </p>
          <Button asChild variant="white" size="lg">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
