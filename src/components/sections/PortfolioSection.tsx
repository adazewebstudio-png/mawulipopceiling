"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Grand Hall Ornate Design",
        category: "Ceiling Installation",
        image: "/ceiling-installation-5.webp",
        link: "/portfolio", // Link to portfolio page for now
    },
    {
        title: "Geometric Luxury Masterpiece",
        category: "Ceiling Installation",
        image: "/ceiling-installation-4.webp",
        link: "/portfolio",
    },
    {
        title: "Modern Tray Ceiling",
        category: "Hall Design",
        image: "/ceiling-installation-1.webp",
        link: "/portfolio",
    },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 bg-mawuli-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Take a look at some of my recent transformations. Quality and neatness is my hallmark.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="hidden md:flex items-center gap-2 font-bold text-mawuli-green hover:text-mawuli-black transition-colors"
                    >
                        View All Projects <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>
                            <div className="p-6">
                                <div className="text-sm font-bold text-mawuli-green mb-2 uppercase tracking-wide">
                                    {project.category}
                                </div>
                                <h3 className="font-heading font-bold text-xl text-mawuli-black group-hover:text-mawuli-green transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 font-bold text-mawuli-green hover:text-mawuli-black transition-colors"
                    >
                        View All Projects <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
