"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-mawuli-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-mawuli-green rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-mawuli-red rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Contact me today for a free consultation and quote. I work on residential and commercial projects across Ghana.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a
                            href="tel:+233243356416"
                            className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-mawuli-green hover:border-mawuli-green transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white text-white group-hover:text-mawuli-green transition-colors">
                                <Phone size={32} />
                            </div>
                            <span className="text-lg font-bold">Call Me</span>
                            <span className="text-gray-300 group-hover:text-white mt-1">+233 24 335 6416</span>
                        </a>

                        <a
                            href="https://wa.me/233243356416"
                            className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white text-white group-hover:text-[#25D366] transition-colors">
                                <MessageCircle size={32} />
                            </div>
                            <span className="text-lg font-bold">WhatsApp</span>
                            <span className="text-gray-300 group-hover:text-white mt-1">Chat on WhatsApp</span>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
                        <MapPin size={20} />
                        <span>Located in Accra, Serving Greater Accra, Volta, Ashanti, and Eastern Regions.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
