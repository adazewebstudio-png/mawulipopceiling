"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
    "16+ Years Experience",
    "Neat & Clean Finishing",
    "Durable Structures",
    "Timely Project Delivery",
    "Transparent Pricing",
    "Owner-Supervised Projects",
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/mawuli-profile.webp"
                            alt="Mawuli Working"
                            fill
                            className="object-cover"
                            sizes="50vw"
                        />
                    </div>

                    <div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-6">
                            Why Choose Mawuli POP?
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Your POP ceiling is a major part of your building&apos;s interior. Poor installation leads to cracks, sagging, and ugly finishes.
                            With Mawuli, you get a <strong>proven expert</strong> who cares about the final look of your home.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            I have personally handled over 100 projects in Accra, Tema, and beyond. My team and I ensure that every job is done with precision, neatness, and structural integrity.
                            <strong> Building from abroad?</strong> I specialize in working with diaspora clients, providing weekly video updates so you can track progress from anywhere in the world.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-mawuli-green flex-shrink-0" size={20} />
                                    <span className="font-medium text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-mawuli-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Learn More About Me
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
