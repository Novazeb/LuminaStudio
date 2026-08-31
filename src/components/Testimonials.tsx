"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "The lighting, the direction, the subtle details—everything was perfect. Lumina Studio captured our pre-wedding exactly how we envisioned it: candid yet editorial.",
        author: "Amanda & Reza",
        context: "Pre-wedding Session",
    },
    {
        id: 2,
        text: "I needed professional headshots for my agency, and the results blew me away. The session felt premium, relaxed, and highly collaborative.",
        author: "Kevin S.",
        context: "Professional Portrait",
    },
    {
        id: 3,
        text: "Booking was seamless and the studio itself is an experience. We felt absolutely comfortable with our newborn, and the photos are timeless treasures.",
        author: "The Wijaya Family",
        context: "Family Portrait",
    }
];

export default function Testimonials() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {testimonials.map(t => (
                    <div key={t.id} className="relative bg-stone-50 p-10 md:p-12 border border-stone-200 group hover:bg-stone-100 transition-colors">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-stone-200 z-0 group-hover:text-stone-300 transition-colors" />
                        <div className="relative z-10 pt-4 flex flex-col h-full">
                            <p className="font-serif text-lg leading-relaxed text-stone-700 italic flex-1 mb-8">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="border-t border-stone-200 pt-6">
                                <h4 className="font-sans font-bold text-sm tracking-widest text-primary uppercase">{t.author}</h4>
                                <p className="font-sans text-xs text-stone-500 mt-1">{t.context}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
