import { MapPin, Mail, Phone, Clock, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto border border-stone-800 bg-stone-900 overflow-hidden">

                {/* Contact Info */}
                <div className="p-8 md:p-16 flex flex-col justify-center bg-stone-950">
                    <div className="space-y-12">
                        <div>
                            <h3 className="flex items-center font-serif text-2xl text-white mb-6">
                                <MapPin className="w-5 h-5 mr-3 text-stone-400" />
                                Visit The Studio
                            </h3>
                            <p className="font-sans text-stone-400 leading-relaxed font-light">
                                Jalan Beo No. 78 A<br />
                                Medan, Sumatera Utara
                            </p>
                        </div>

                        <div>
                            <h3 className="flex items-center font-serif text-2xl text-white mb-6">
                                <Phone className="w-5 h-5 mr-3 text-stone-400" />
                                Get In Touch
                            </h3>
                            <div className="space-y-4 font-sans text-stone-400 font-light">
                                <a href="tel:+6282320000396" className="block hover:text-white transition-colors">
                                    +62 8232 0000 396 (WhatsApp Only)
                                </a>
                                <a href="https://www.instagram.com/makastudio.space" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors flex items-center gap-2">
                                    <Instagram className="w-4 h-4" /> @makastudio.space
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="flex items-center font-serif text-2xl text-white mb-6">
                                <Clock className="w-5 h-5 mr-3 text-stone-400" />
                                Operating Hours
                            </h3>
                            <div className="font-sans text-sm font-light text-stone-400">
                                <p className="text-stone-300 font-medium mb-2">By Appointment Only</p>
                                <table className="w-full max-w-sm">
                                    <tbody>
                                        <tr className="border-b border-stone-800">
                                            <td className="py-3">Monday - Friday</td>
                                            <td className="py-3 text-right text-stone-300">09:00 - 18:00</td>
                                        </tr>
                                        <tr className="border-b border-stone-800">
                                            <td className="py-3">Saturday</td>
                                            <td className="py-3 text-right text-stone-300">08:00 - 20:00</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Sunday / Public Holidays</td>
                                            <td className="py-3 text-right text-stone-300">By Appointment</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-stone-800">
                            <div className="flex gap-4 border border-stone-800 p-2 inline-flex bg-stone-900">
                                <a href="https://www.instagram.com/makastudio.space" target="_blank" rel="noopener noreferrer" className="p-3 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors" aria-label="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Embed - Medan, Jalan Beo */}
                <div className="relative h-[400px] lg:h-auto w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0!2d98.6722!3d3.5852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzUnMDYuNyJOIDk4wrA0MCcxOS45IkU!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Maka Studio Location - Jalan Beo No. 78 A, Medan"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}
