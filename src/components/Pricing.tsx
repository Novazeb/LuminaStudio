import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
    {
        name: "Bronze",
        price: "IDR 500.000",
        description: "Perfect for quick portraits or graduation solo shots.",
        features: [
            "30 Minutes Photo Session",
            "Up to 2 Persons max",
            "5 Edited High-Res Photos",
            "1 Printed Photo (10R size)",
            "Digital Delivery via G-Drive - 1 Week"
        ],
        highlight: false
    },
    {
        name: "Silver",
        price: "IDR 1.250.000",
        description: "Ideal for couples, pre-weddings, or small families.",
        features: [
            "60 Minutes Photo Session",
            "Up to 5 Persons max",
            "15 Edited High-Res Photos",
            "2 Printed Photos (12R size)",
            "Digital Delivery via Flashdisk - 2 Weeks",
            "Access to 1 Studio Wardrobe"
        ],
        highlight: true
    },
    {
        name: "Gold",
        price: "IDR 2.500.000",
        description: "The ultimate package for large groups and commercial shoots.",
        features: [
            "120 Minutes Photo Session",
            "Up to 10 Persons max",
            "All Good Photos lightly edited",
            "30 Premium Retouched Photos",
            "Exclusive Photobook & Flashdisk Delivery",
            "Unlimited Wardrobe Changes"
        ],
        highlight: false
    }
];

const addons = [
    { name: "Makeup Artist (MUA)", price: "IDR 400.000", per: "person" },
    { name: "Extra Person", price: "IDR 50.000", per: "person" },
    { name: "Extra Time", price: "IDR 250.000", per: "30 mins" },
    { name: "Costume Rental", price: "IDR 150.000", per: "item" }
];

export default function Pricing() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-4 md:px-0">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className={`relative flex flex-col p-8 md:p-10 border transition-all duration-300 ${pkg.highlight
                                ? "border-primary bg-primary text-white shadow-2xl scale-100 md:scale-105 z-10"
                                : "border-border bg-white text-primary hover:border-primary/50 hover:shadow-lg"
                            }`}
                    >
                        {pkg.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary px-4 py-1 text-xs font-bold tracking-widest uppercase">
                                Most Popular
                            </div>
                        )}

                        <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
                        <p className={`text-sm mb-6 pb-6 border-b ${pkg.highlight ? "text-white/70 border-white/20" : "text-stone-500 border-stone-200"}`}>
                            {pkg.description}
                        </p>
                        <div className="mb-8">
                            <span className="text-3xl font-serif">{pkg.price}</span>
                        </div>

                        <ul className="flex-1 space-y-4 mb-8">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm">
                                    <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.highlight ? "text-white/80" : "text-primary/60"}`} />
                                    <span className={pkg.highlight ? "text-white/90" : "text-stone-600"}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="#booking"
                            className={`w-full py-4 text-center text-sm font-medium tracking-widest uppercase transition-colors ${pkg.highlight
                                    ? "bg-white text-primary hover:bg-stone-200"
                                    : "bg-primary text-white hover:bg-primary/90"
                                }`}
                        >
                            Choose {pkg.name}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto px-4 text-center">
                <h3 className="font-serif text-2xl mb-8">Add-on Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {addons.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 border border-stone-200 bg-stone-50 hover:bg-stone-100 transition-colors">
                            <span className="font-medium text-stone-700">{item.name}</span>
                            <div className="text-right">
                                <span className="block font-serif text-primary">{item.price}</span>
                                <span className="block text-xs text-stone-500">per {item.per}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
