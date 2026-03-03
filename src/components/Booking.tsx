"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar as CalendarIcon, Clock, User, Phone, Send } from "lucide-react";

const packages = [
    { id: "bronze", name: "Bronze Package", price: "IDR 500.000" },
    { id: "silver", name: "Silver Package", price: "IDR 1.250.000" },
    { id: "gold", name: "Gold Package", price: "IDR 2.500.000" },
];

const timeSlots = [
    { time: "09:00", available: true },
    { time: "10:30", available: false },
    { time: "13:00", available: true },
    { time: "15:00", available: true },
    { time: "16:30", available: false },
];

export default function Booking() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedPackage, setSelectedPackage] = useState(packages[0].id);
    const [formData, setFormData] = useState({ name: "", phone: "" });

    const selectedPkgData = packages.find(p => p.id === selectedPackage);

    const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #292524;
      --rdp-background-color: #e7e5e4;
      margin: 0;
    }
    .rdp-day_selected {
      background-color: var(--rdp-accent-color);
      color: white;
      font-weight: bold;
    }
  `;

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        if (!date || !selectedTime || !formData.name || !formData.phone) return;

        // Format message for WhatsApp
        const formattedDate = format(date, 'dd MMMM yyyy');
        const msg = `Halo Lumina Studio! Saya ingin booking sesi foto:%0A%0A*Nama:* ${formData.name}%0A*Nomor WA:* ${formData.phone}%0A*Paket:* ${selectedPkgData?.name}%0A*Tanggal:* ${formattedDate}%0A*Jam:* ${selectedTime}%0A%0AApakah slot ini masih tersedia?`;

        window.open(`https://wa.me/628111222333?text=${msg}`, '_blank');
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <style>{css}</style>
            <div className="bg-white p-6 md:p-10 shadow-xl border border-stone-200">
                <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Calendar & Time */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="flex items-center font-serif text-xl mb-6">
                                <CalendarIcon className="w-5 h-5 mr-3 text-primary" />
                                Select Date
                            </h3>
                            <div className="flex justify-center border border-stone-100 p-4 bg-stone-50">
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={[{ before: new Date() }]}
                                    className="font-sans"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="flex items-center font-serif text-xl mb-6">
                                <Clock className="w-5 h-5 mr-3 text-primary" />
                                Select Time Slot
                            </h3>
                            {date ? (
                                <div className="grid grid-cols-3 gap-3">
                                    {timeSlots.map((slot) => (
                                        <button
                                            key={slot.time}
                                            type="button"
                                            disabled={!slot.available}
                                            onClick={() => setSelectedTime(slot.time)}
                                            className={`py-3 text-sm font-medium transition-all border ${!slot.available
                                                    ? "bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed line-through"
                                                    : selectedTime === slot.time
                                                        ? "bg-primary text-white border-primary shadow-md"
                                                        : "bg-white text-stone-700 border-stone-300 hover:border-primary"
                                                }`}
                                        >
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-stone-500 italic">Please select a date first.</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Details & Submit */}
                    <div className="space-y-8 bg-stone-50 p-6 md:p-8 border border-stone-100">
                        <div>
                            <h3 className="font-serif text-xl mb-6 border-b border-stone-200 pb-4">Your Details</h3>
                            <div className="space-y-5">
                                <div>
                                    <label className="flex items-center text-sm font-medium text-stone-700 mb-2">
                                        <User className="w-4 h-4 mr-2" /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full border border-stone-300 p-3 bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center text-sm font-medium text-stone-700 mb-2">
                                        <Phone className="w-4 h-4 mr-2" /> WhatsApp Number
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        pattern="^[0-9\-\+]{9,15}$"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9+]/g, '') })}
                                        className="w-full border border-stone-300 p-3 bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                                        placeholder="+62"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-stone-700 mb-2 block">
                                        Choose Package
                                    </label>
                                    <select
                                        value={selectedPackage}
                                        onChange={e => setSelectedPackage(e.target.value)}
                                        className="w-full border border-stone-300 p-3 bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors cursor-pointer"
                                    >
                                        {packages.map(pkg => (
                                            <option key={pkg.id} value={pkg.id}>
                                                {pkg.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-stone-200">
                            <div className="flex justify-between items-end mb-6">
                                <span className="text-sm text-stone-500 uppercase tracking-wider">Estimated Total</span>
                                <span className="font-serif text-2xl font-semibold text-primary">{selectedPkgData?.price}</span>
                            </div>
                            <button
                                type="submit"
                                disabled={!date || !selectedTime || !formData.name || !formData.phone}
                                className="w-full flex items-center justify-center py-4 bg-primary text-white hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                Booking via WhatsApp
                                <Send className="w-4 h-4 ml-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
