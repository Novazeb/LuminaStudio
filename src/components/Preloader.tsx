"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 1300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950 text-white"
        >
          <div className="relative overflow-hidden flex flex-col items-center px-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-12 h-[1px] bg-stone-400/80 mb-6 origin-center"
            />

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em", y: 15 }}
              animate={{ opacity: 1, letterSpacing: "0.45em", y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-stone-100 text-center pl-[0.45em]"
            >
              LUMINA STUDIO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-stone-400 mt-4 text-center pl-[0.3em]"
            >
              Artistic Photography &bull; Medan
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

