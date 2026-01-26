"use client";

import { Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        name: "Atoty Derek",
        role: "Homeowner",
        content: "I met Mawuli pop ceiling around 2019 on the net and I engage him give him a contract five bedroom self-contained and he did marvelous work he is discipline honest and hardworking Guy.",
        initial: "A"
    },
    {
        name: "Joseph",
        role: "Real Estate Developer",
        content: "I've worked with Mawuli P.O.P Ceiling on several building projects, and I must say he's top-notch! I wanted something simple yet classy for my latest project, and he delivered beyond expectations. His attention to detail and commitment to quality are unmatched.",
        initial: "J"
    },
    {
        name: "Alhaj Omoru",
        role: "Project Manager",
        content: "I have worked with Mawuli POP for some time now he has demonstrated a high level of proficiency and knowledge in his work, resulting in superior quality outcomes. I have use some few other options but I can confidently say he is one of the best.",
        initial: "A"
    },
    {
        name: "Esther Akromah",
        role: "Property Owner",
        content: "I've given 20 apartments house @ Tema committee 25 to Mawuli pop ceiling and I will never regret he delivered on time with good stylish and he understand my terms of payment with patiently. I recommended him to everyone who need a pop ceiling.",
        initial: "E"
    },
    {
        name: "Richard Adaze",
        role: "Real Estate Broker",
        content: "Mawuli POP understands his craft and deliver to meet the client's expectations. Professionalism and quality at its best.",
        initial: "R"
    }
];

export default function TestimonialsSection({ limit }: { limit?: number }) {
    const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

    return (
        <section id="testimonials" className="py-20 bg-mawuli-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Don&apos;t just take my word for it. Here is what some of my clients have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex gap-1 text-mawuli-gold mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-mawuli-black text-white flex items-center justify-center font-bold text-lg">
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-mawuli-black text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {limit && (
                    <div className="text-center mt-12">
                        <Link
                            href="/testimonials"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-mawuli-green text-white font-bold rounded-lg hover:bg-[#1e6f38] transition-colors shadow-lg"
                        >
                            View All Testimonials
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
