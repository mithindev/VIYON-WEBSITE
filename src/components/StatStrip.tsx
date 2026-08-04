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
    <section className="relative z-20 bg-sky-500 py-3 sm:py-4 shadow-lg shadow-sky-500/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center justify-center gap-3 relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              {/* Divider */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/20" />
              )}
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                <stat.icon className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl text-white leading-none">
                  <AnimatedStat raw={stat.raw} suffix={stat.suffix} divisor={stat.divisor} />
                </span>
                <span className="text-white/80 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase mt-0.5 leading-none">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
