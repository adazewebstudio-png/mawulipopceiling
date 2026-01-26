"use client";

import Link from "next/link";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-mawuli-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-heading text-2xl font-bold mb-4">
                            Mawuli POP<span className="text-mawuli-red">.</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Premium POP ceiling installation, wall skimming, and TV unit design specialist with 16+ years of experience across Ghana.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/mawulipopceiling" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mawuli-gold transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone className="text-mawuli-green mt-1 flex-shrink-0" size={18} />
                                <span>
                                    <a href="tel:+233243356416" className="hover:text-white transition-colors">+233 24 335 6416</a>
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail className="text-mawuli-green mt-1 flex-shrink-0" size={18} />
                                <span>info@mawulipopceiling.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-mawuli-green mt-1 flex-shrink-0" size={18} />
                                <span>Accra, Ghana (Servicing All Regions)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-mawuli-gold transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-of-use" className="text-gray-400 hover:text-mawuli-gold transition-colors">Terms of Use</Link>
                            </li>
                            <li>
                                <Link href="/sitemap.xml" className="text-gray-400 hover:text-mawuli-gold transition-colors">Sitemap</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Mawuli POP Ceiling Services. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        Built by{" "}
                        <a
                            href="https://adazewebstudio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mawuli-green hover:underline"
                        >
                            Adaze Web Studio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
