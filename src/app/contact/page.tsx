"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="bg-mawuli-black text-white py-16 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-5xl">Contact Me</h1>
            </div>

            <section className="py-20 bg-mawuli-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Contact Info */}
                        <div className="bg-mawuli-green p-10 text-white">
                            <h2 className="font-heading font-bold text-2xl mb-6">Get In Touch</h2>
                            <p className="mb-8 text-green-50">
                                Fill out the form or contact me directly. I answer quickly!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-white" size={24} />
                                    <div>
                                        <p className="text-xs font-bold uppercase opacity-70">Phone</p>
                                        <p className="font-bold text-lg">+233 24 335 6416</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-white" size={24} />
                                    <div>
                                        <p className="text-xs font-bold uppercase opacity-70">Email</p>
                                        <p className="font-bold text-lg">info@mawulipopceiling.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-white" size={24} />
                                    <div>
                                        <p className="text-xs font-bold uppercase opacity-70">Location</p>
                                        <p className="font-bold text-lg">Accra, Ghana</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-10">
                            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                                <input type="hidden" name="form-name" value="contact" />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                        <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mawuli-green focus:border-transparent outline-none transition-all" placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mawuli-green focus:border-transparent outline-none transition-all" placeholder="Your Phone Number" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mawuli-green focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mawuli-green focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..." required></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-mawuli-black text-white font-bold rounded-lg hover:bg-mawuli-green transition-colors shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
