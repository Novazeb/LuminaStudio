import Link from 'next/link';
import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-100 py-16 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl font-bold tracking-tight text-white">Lumina Studio</h3>
                        <p className="text-stone-400 max-w-sm font-sans font-light text-sm leading-relaxed text-balance">
                            Indoor Studio &amp; Props Artistic. Modern | Classic | Natural Light &amp; Artificial Light. By appointment only.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-serif text-xl tracking-wide text-white">Contact</h4>
                        <div className="space-y-4 font-sans text-sm font-light text-stone-300">
                            <a href="https://www.instagram.com/zebua_1011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Instagram className="w-4 h-4 text-stone-400" />
                                @zebua_1011
                            </a>
                            <a href="https://wa.me/6281218939696" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-stone-400" />
                                +62 812-1893-9696 (WhatsApp)
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-stone-400" />
                                <span className="leading-snug text-balance">Jalan Beo No. 78 A<br />Medan, Sumatera Utara</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-serif text-xl tracking-wide text-white">Social</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/zebua_1011" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-800 hover:bg-stone-700 rounded-full transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5 text-stone-200" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Lumina Studio Photo. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#portfolio" className="hover:text-stone-300 transition-colors">Portfolio</Link>
                        <Link href="#services" className="hover:text-stone-300 transition-colors">Services</Link>
                        <Link href="#booking" className="hover:text-stone-300 transition-colors">Reservation</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
