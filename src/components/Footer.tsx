import Link from 'next/link';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl font-bold tracking-tight">Lumina</h3>
                        <p className="text-primary-foreground/70 max-w-sm font-sans font-light text-sm leading-relaxed text-balance">
                            Capturing life&apos;s most delicate moments with professional lighting and an artistic editorial eye.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-serif text-xl tracking-wide">Contact</h4>
                        <div className="space-y-4 font-sans text-sm font-light text-primary-foreground/80">
                            <a href="mailto:hello@luminastudio.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" />
                                hello@luminastudio.com
                            </a>
                            <a href="tel:+628111222333" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone className="w-4 h-4" />
                                +62 811 1222 333
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span className="leading-snug text-balance">Jl. Sudirman No. 45<br />Jakarta Selatan, 12190</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-serif text-xl tracking-wide">Social</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            {/* Add other socials as needed */}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-primary-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Lumina Photography Studio. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
