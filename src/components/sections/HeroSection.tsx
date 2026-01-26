"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-mawuli-gray pt-16 pb-20 lg:pt-24 lg:pb-28">
            {/* Background Ornament - Optional */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <Image src="/Mawuli POP Ceiling Logo.png" width={800} height={800} alt="bg" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-mawuli-green text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-mawuli-green animate-pulse"></span>
                            Available for projects in Ghana
                        </div>
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-mawuli-black mb-6 leading-tight">
                            Professional <span className="text-mawuli-green">POP Designs</span> for Homes & Businesses
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            From POP ceilings and wall finishes to TV units and pillars.
                            I bring 16+ years of expert craftsmanship to create modern, durable, and beautiful interiors.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Link
                                href="/#contact"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-mawuli-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
                            >
                                <Phone size={20} />
                                Get a Free Quote
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-mawuli-black border-2 border-gray-200 font-bold rounded-lg hover:border-mawuli-green hover:text-mawuli-green transition-colors"
                            >
                                View My Work
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-gray-700">
                            <div className="flex items-center gap-2">
                                <div className="p-1 bg-green-100 rounded-full">
                                    <Check size={16} className="text-mawuli-green" />
                                </div>
                                Clean Finishing
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 bg-green-100 rounded-full">
                                    <Check size={16} className="text-mawuli-green" />
                                </div>
                                16+ Years Experience
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 bg-green-100 rounded-full">
                                    <Check size={16} className="text-mawuli-green" />
                                </div>
                                Affordable Pricing
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:h-[600px] h-[400px] w-full"
                    >
                        {/* Main Hero Image */}
                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/mawuli-hero.webp"
                                alt="Mawuli POP Ceiling Specialist"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-mawuli-green hidden sm:block">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-mawuli-black font-heading">100+</div>
                                <div className="text-sm text-gray-500 leading-tight">
                                    Successful<br />Projects
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
