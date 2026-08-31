"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["All", "Wisuda", "Pre-wedding", "Produk", "Pas Foto", "Family Portrait"];

const portfolioImages = [
    { id: 1, src: "/img/prewed 1.jpg", category: "Pre-wedding", title: "Eternal Love" },
    { id: 2, src: "/img/wisuda 2.jpg", category: "Wisuda", title: "Graduation Day" },
    { id: 3, src: "/img/produk 2.jpg", category: "Produk", title: "Minimalist Watch" },
    { id: 4, src: "/img/family.jpg", category: "Family Portrait", title: "Weekend Getaway" },
    { id: 5, src: "/img/prewed 2.jpg", category: "Pre-wedding", title: "Golden Hour" },
    { id: 6, src: "/img/wisuda 3 (1).jpg", category: "Wisuda", title: "The Achiever" },
    { id: 7, src: "/img/pasphoto 1.jpg", category: "Pas Foto", title: "Professional Headshot" },
    { id: 8, src: "/img/pasphoto 2.jpg", category: "Pas Foto", title: "Professional Headshot" },
    { id: 9, src: "/img/produk 1.jpg", category: "Produk", title: "Artisan Coffee" },
    { id: 10, src: "/img/family 2.jpg", category: "Family Portrait", title: "Living Room Joy" },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages = activeCategory === "All"
        ? portfolioImages
        : portfolioImages.filter(img => img.category === activeCategory);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex].id);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex].id);
    };

    const activeImageData = filteredImages.find(img => img.id === selectedImage);

    return (
        <div className="w-full">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 ${activeCategory === cat
                                ? "border-primary text-primary font-medium"
                                : "border-transparent text-primary/50 hover:text-primary/80"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4 max-w-7xl mx-auto"
            >
                <AnimatePresence>
                    {filteredImages.map((img) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={img.id}
                            className="relative group overflow-hidden bg-stone-200 cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all"
                            onClick={() => setSelectedImage(img.id)}
                        >
                            <div className="relative w-full h-auto">
                                {/* Fallback padding if image hasn't loaded (intrinsic ratios rely on image loading, but we let Next.js Image do its magic with layout="responsive" or similar. For dynamic sizing we can use just an img or next/image without strict height) */}
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    width={800}
                                    height={1200}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-serif text-xl">{img.title}</h3>
                                    <p className="text-white/80 font-sans text-xs uppercase tracking-widest mt-2">{img.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && activeImageData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-sm p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation */}
                        <button
                            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[85vh] h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full flex items-center justify-center flex-1">
                                <Image
                                    src={activeImageData.src}
                                    alt={activeImageData.title}
                                    fill
                                    className="object-contain"
                                    quality={90}
                                    priority
                                />
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-white font-serif text-2xl">{activeImageData.title}</h3>
                                <p className="text-white/60 font-sans text-sm tracking-widest uppercase mt-2">{activeImageData.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
