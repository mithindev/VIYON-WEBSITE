import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppCTA from "./components/WhatsAppCTA";

// Lazy load pages for fast initial bundle loading
const Index   = lazy(() => import("./pages/Index"));
const About   = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const WhyUs   = lazy(() => import("./pages/WhyUs"));
const OurWorks = lazy(() => import("./pages/OurWorks"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const PageLoader = () => (
  <div className="flex h-[60vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-sky-light border-t-sky-primary"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1 flex flex-col"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const AppInner = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main className="flex-1 flex flex-col pt-0">
        <AnimatedRoutes />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppCTA />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <AppInner />
    </BrowserRouter>
  );
}
