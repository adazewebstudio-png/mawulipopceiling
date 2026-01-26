"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { LayoutTemplate, PaintRoller, Palette, Tv, Spline, RectangleVertical } from "lucide-react";

// Helper to map string ID to icon (since we can't store components in JSON/TS data comfortably if we want strict separation, but here it's fine. 
// Actually, let's keep the local icon mapping but use the data from imported file for consistent IDs)
const getIcon = (id: string) => {
    switch (id) {
        case "pop-ceiling-installation": return <LayoutTemplate size={32} />;
        case "wall-skimming": return <PaintRoller size={32} />;
        case "tv-unit-designs": return <Tv size={32} />;
        case "wall-designs": return <Palette size={32} />;
        case "arch-designs": return <Spline size={32} />;
        case "pillars-columns": return <RectangleVertical size={32} />;
        default: return <LayoutTemplate size={32} />;
    }
};

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-4">
                        My POP Services
                    </h2>
                    <p className="text-gray-600 text-lg">
                        I deliver high-quality craftsmanship across a wide range of interior design services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.id}`}
                            className="group p-8 border border-gray-100 rounded-xl hover:shadow-xl hover:border-mawuli-green/30 transition-all duration-300 bg-white block"
                        >
                            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center text-mawuli-green mb-6 group-hover:bg-mawuli-green group-hover:text-white transition-colors duration-300">
                                {getIcon(service.id)}
                            </div>
                            <h3 className="font-heading font-bold text-xl text-mawuli-black mb-3 group-hover:text-mawuli-green transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.shortDescription}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
