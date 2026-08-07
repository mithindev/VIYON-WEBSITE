import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sun, BatteryCharging, Zap, ShieldCheck } from "lucide-react";

const WHATSAPP_NUMBER = "918807003005"; // Veiyon Smart Solutions Phone

const options = [
  { name: "On-Grid", icon: Sun, msg: "On-Grid Solar System" },
  { name: "Off-Grid", icon: BatteryCharging, msg: "Off-Grid Solar System" },
  { name: "Hybrid", icon: Zap, msg: "Hybrid Solar System" },
  { name: "UPS Backup", icon: ShieldCheck, msg: "UPS / Backup Solution" },
];

export default function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: typeof options[0]) => {
    const text = encodeURIComponent(
      `Hi Veiyon Smart Solutions! I'm visiting your website and would like to get a sizing inquiry & quote for a ${option.msg}. Please share the details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-3 w-72 rounded-2xl border border-sky-100 bg-white p-4 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Solar Assistant
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                aria-label="Close widget"
              >
                <X size={14} />
              </button>
            </div>
            
            <h4 className="mt-2 text-sm font-extrabold text-slate-800 leading-tight font-heading">
              Need a Solar Quote?
            </h4>
            <p className="mt-1 text-xs text-slate-500 leading-normal">
              Select your system type to chat directly with our experts on WhatsApp.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {options.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.name}
                    onClick={() => handleSelectOption(opt)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700 transition-all shadow-sm"
                  >
                    <Icon size={13} className="text-sky-500 shrink-0" />
                    <span>{opt.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        )}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </motion.button>
      </div>
    </div>
  );
}
