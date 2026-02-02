"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Hammer, ShieldCheck, Clock } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-mawuli-gray">
            <Navbar />

            {/* Hero Header */}
            <section className="bg-mawuli-black text-white py-20 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">About Me</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The face behind the quality work. Get to know Mawuli.
                    </p>
                </div>
            </section>

            {/* SECTION 1: Who I Am & My Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Image */}
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/mawuli-profile.webp"
                                alt="Mawuli Kodzo Afrim"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-mawuli-green font-bold uppercase tracking-widest text-sm mb-2">Who I Am</h2>
                            <h3 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-6">
                                Hi, I&apos;m Mawuli Kodzo Afrim.
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                I am a professional POP ceiling specialist with over <strong className="text-mawuli-black">16 years of hands-on experience</strong> across Ghana.
                                I have personally handled over 100 projects in Accra, Tema, and beyond.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                I am not just a contractor who manages people; I am a craftsman who is involved in every detail of the work.
                                From the mixing of the POP to the final smoothing, I ensure everything meets my high standards.
                            </p>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-mawuli-green shadow-sm">
                                <h4 className="font-heading font-bold text-xl text-mawuli-black mb-2">My Mission</h4>
                                <p className="text-gray-700 italic">
                                    &quot;My focus is simple: To provide quality work that makes your space look good and lasts long.
                                    I don&apos;t rush, and I don&apos;t cut corners.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: What I Do */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-mawuli-green font-bold uppercase tracking-widest text-sm mb-2">What I Do</h2>
                        <h3 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black">
                            Expert Craftsmanship for Your Interior
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-mawuli-gray rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-mawuli-green">
                                <Hammer size={32} />
                            </div>
                            <h4 className="font-bold text-xl mb-3">POP Installations</h4>
                            <p className="text-gray-600">
                                I design and install suspended ceilings, acoustic ceilings, and intricate wall designs that transform ordinary rooms into luxury spaces.
                            </p>
                        </div>
                        <div className="p-8 bg-mawuli-gray rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-mawuli-green">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="font-bold text-xl mb-3">Structural Integrity</h4>
                            <p className="text-gray-600">
                                I ensure every structure is fortified with the right mixture and support, guaranteeing that your ceiling will never sag or crack.
                            </p>
                        </div>
                        <div className="p-8 bg-mawuli-gray rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-mawuli-green">
                                <CheckCircle2 size={32} />
                            </div>
                            <h4 className="font-bold text-xl mb-3">Premium Finishing</h4>
                            <p className="text-gray-600">
                                The difference is in the finish. I specialize in ultra-smooth wall skimming and precise edges that painting professionals love to work on.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: What You Get (My Promise) */}
            <section className="py-20 bg-mawuli-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="text-mawuli-green font-bold uppercase tracking-widest text-sm mb-2">My Promise</h2>
                            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                                What You Get When You Work With Me
                            </h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Choosing a POP installer can be risky. Here is exactly what I bring to your project to give you peace of mind.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-mawuli-green">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Neat & Clean Finishing</h4>
                                        <p className="text-gray-400">No rough edges. Your space will look polished and professional.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-mawuli-green">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Durable Structures</h4>
                                        <p className="text-gray-400">I use the best materials to ensure longevity. No future repairs needed.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-mawuli-green">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">On-Time Delivery</h4>
                                        <p className="text-gray-400">I respect your timeline. I start on time and finish on time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border-4 border-mawuli-green/20">
                            <Image
                                src="/mawuli-hero.webp"
                                alt="Mawuli Working on Site"
                                fill
                                className="object-cover opacity-80"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-mawuli-black to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-4xl font-bold text-white mb-2">100+</div>
                                <div className="text-lg text-gray-300">Successful Projects Completed</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
