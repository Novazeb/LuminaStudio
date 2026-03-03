import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Camera className="w-8 h-8 text-primary group-hover:opacity-80 transition-opacity" />
                            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Lumina</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#portfolio" className="text-sm font-medium hover:text-primary/70 transition-colors uppercase tracking-widest text-primary">Portfolio</Link>
                        <Link href="#services" className="text-sm font-medium hover:text-primary/70 transition-colors uppercase tracking-widest text-primary">Services</Link>
                        <Link href="#about" className="text-sm font-medium hover:text-primary/70 transition-colors uppercase tracking-widest text-primary">About</Link>
                        <Link href="#contact" className="text-sm font-medium hover:text-primary/70 transition-colors uppercase tracking-widest text-primary">Contact</Link>
                        <Link href="#booking" className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-sm">
                            Book Session
                        </Link>
                    </div>
                    {/* Mobile menu button could be added here later */}
                </div>
            </div>
        </nav>
    );
}
