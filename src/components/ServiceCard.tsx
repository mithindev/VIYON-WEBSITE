import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features = [] }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.22 } }}
      className="relative flex flex-col h-full bg-white rounded-2xl border border-sky-100 p-8 shadow-[0_4px_20px_rgba(14,165,233,0.08)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.18)] hover:border-sky-300 transition-all duration-300 group"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-14 h-14 bg-sky-50 group-hover:bg-sky-100 rounded-2xl flex items-center justify-center mb-6 text-sky-500 transition-colors duration-300 shadow-sm">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-2.5 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
              <span className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-sky-700 transition-colors mt-auto group/link"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
