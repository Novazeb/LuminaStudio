import { MapPin, Mail, Phone, Clock, Instagram, Twitter } from "lucide-react";

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
                                Jl. Sudirman No. 45<br />
                                Gedung Harmoni Lt. 3<br />
                                Jakarta Selatan, DKI Jakarta 12190
                            </p>
                        </div>

                        <div>
                            <h3 className="flex items-center font-serif text-2xl text-white mb-6">
                                <Phone className="w-5 h-5 mr-3 text-stone-400" />
                                Get In Touch
                            </h3>
                            <div className="space-y-4 font-sans text-stone-400 font-light">
                                <a href="tel:+628111222333" className="block hover:text-white transition-colors">
                                    +62 812 1893 9696 (WhatsApp Only)
                                </a>
                                <a href="mailto:hello@luminastudio.com" className="block hover:text-white transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> hello@luminastudio.com
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="flex items-center font-serif text-2xl text-white mb-6">
                                <Clock className="w-5 h-5 mr-3 text-stone-400" />
                                Operating Hours
                            </h3>
                            <table className="w-full max-w-sm text-sm font-sans font-light text-stone-400">
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

                        <div className="pt-8 border-t border-stone-800">
                            <div className="flex gap-4 border border-stone-800 p-2 inline-flex bg-stone-900">
                                <a href="https://www.instagram.com/zebua_1011" className="p-3 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors" aria-label="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="x.com" className="p-3 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors" aria-label="Twitter">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="relative h-[400px] lg:h-auto w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24036069904!2d106.7570535!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x1065e2f752494191!2sSudirman%20Central%20Business%20District%20(SCBD)!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}
