import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Package, Users, Award, Smile } from "lucide-react";

const stats = [
  { icon: Package, raw: 20,   suffix: "+",   label: "Products Offered" },
  { icon: Users,   raw: 10,   suffix: "+",   label: "Technical Experts" },
  { icon: Award,   raw: 15,   suffix: "+",   label: "Years Experience" },
  { icon: Smile,   raw: 5000, suffix: "K+",  label: "Happy Customers", divisor: 1000 },
];

function AnimatedStat({ raw, suffix, divisor = 1 }: { raw: number; suffix: string; divisor?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const motionVal = useMotionValue(0);
  const spring    = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const display   = useTransform(spring, (v) => {
    const n = Math.round(v / divisor);
    return `${n}${suffix}`;
  });

  if (isInView) motionVal.set(raw);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatStrip() {
  return (
    <section className="bg-sky-500 py-10 sm:py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Divider */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/25" />
              )}
              <div className="flex justify-center mb-3 text-white">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-none mb-1">
                <AnimatedStat raw={stat.raw} suffix={stat.suffix} divisor={stat.divisor} />
              </div>
              <div className="text-white/70 text-xs font-semibold tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
