"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("bronze");

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
            alt="Lumina Photo Studio Setup"
            fill
            className="object-cover opacity-60 mix-blend-overlay scale-105 animate-pulse duration-1000"
            style={{ animationDuration: '8s' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
          >
            Capture Your Best<br className="hidden md:block" /> Moments with<br className="hidden md:block" /> <span className="text-stone-300 italic font-light">Professional Lighting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light tracking-wide text-balance"
          >
            Elevate your personal and commercial milestones with editorial-quality photography in a premium studio environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#booking"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-medium tracking-widest uppercase text-sm transition-all hover:bg-stone-200 shadow-lg hover:shadow-xl"
            >
              Reservasi Sekarang
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-medium tracking-widest uppercase text-sm transition-all hover:bg-white/10 hover:border-white"
            >
              Lihat Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-stone-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Selected Works</h2>
            <p className="text-stone-500 font-sans tracking-wide mb-8">A glimpse into our curated portfolio.</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Services & Pricing</h2>
            <p className="text-stone-500 font-sans tracking-wide max-w-2xl mx-auto text-balance">
              Transparent, tailored packages designed to suit your needs without hidden costs.
            </p>
          </div>
          <Pricing onSelectPackage={setSelectedPackage} />
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 bg-stone-100 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Reservation</h2>
            <p className="text-stone-500 font-sans tracking-wide max-w-2xl mx-auto">
              Secure your session easily. Choose a date, pick a slot, and confirm via WhatsApp.
            </p>
          </div>
          <Booking selectedPackageProp={selectedPackage} />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-stone-50 min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center mb-16 px-4">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">About Us</h2>
            <p className="text-stone-500 font-sans tracking-wide max-w-2xl mx-auto">
              Meet the artisan crafting your memories and explore our sanctuary of light.
            </p>
          </div>
          <About />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-white min-h-[60vh] flex items-center">
        <div className="w-full">
          <div className="text-center mb-16 px-4 max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Kind Words</h2>
            <p className="text-stone-500 font-sans tracking-wide">
              Hear what our clients have to say about their experience.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-stone-950 text-white min-h-[80vh] flex items-center">
        <div className="w-full">
          <div className="text-center mb-16 px-4 max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Contact & Location</h2>
            <p className="text-stone-400 font-sans font-light tracking-wide">
              Reach out to us or drop by the studio.
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
