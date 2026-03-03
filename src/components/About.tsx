import Image from "next/image";
import { Camera, Map, Award } from "lucide-react";

export default function About() {
    return (
        <div className="w-full">
            {/* Profil Fotografer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 max-w-7xl mx-auto px-4">
                <div className="relative aspect-[3/4] md:aspect-auto md:h-[600px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="/img/about 2.jpg"
                        alt="Lead Photographer Profile"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h3 className="font-sans text-sm tracking-[0.2em] text-primary/60 uppercase">The Visionary</h3>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Novasco</h2>
                    <p className="font-sans text-lg font-light leading-relaxed text-stone-600 mb-6">
                        With over a decade of experience in fashion and editorial photography, Sarah brings a meticulous eye for detail to every shot. Her philosophy is simple: capture the authentic essence of the moment through masterful lighting and composition.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-stone-200">
                        <div>
                            <Award className="w-6 h-6 text-stone-400 mb-3" />
                            <h4 className="font-serif text-lg text-primary mb-1">Award Winning</h4>
                            <p className="text-sm font-light text-stone-500">Recognized by IPA Masters 2023.</p>
                        </div>
                        <div>
                            <Camera className="w-6 h-6 text-stone-400 mb-3" />
                            <h4 className="font-serif text-lg text-primary mb-1">Expert Lighting</h4>
                            <p className="text-sm font-light text-stone-500">Mastery in both natural and studio strobe.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suasana Studio BTS */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Inside The Studio</h2>
                <p className="text-stone-500 font-sans font-light max-w-2xl mx-auto">
                    A premium space designed for your comfort, equipped with state-of-the-art facilities.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 aspect-square md:aspect-[21/9] w-full max-w-full overflow-hidden">
                <div className="relative group overflow-hidden">
                    <Image src="/img/studio.jpg" fill alt="Studio Lights" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-serif tracking-wide">Main Stage</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <Image src="/img/studio 2.jpg" fill alt="Makeup Room" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-serif tracking-wide">Vanity Room</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <Image src="/img/studio 3.jpg" fill alt="Lounge Area" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-serif tracking-wide">Client Lounge</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden bg-stone-100 flex flex-col items-center justify-center p-8 text-center border-l border-stone-200">
                    <Map className="w-10 h-10 text-stone-300 mb-4" />
                    <h4 className="font-serif text-xl mb-2 text-primary">Fully Equipped</h4>
                    <p className="text-sm font-light text-stone-500 text-balance">Air-conditioned, private changing rooms, Wi-Fi, and premium coffee.</p>
                </div>
            </div>
        </div>
    );
}
