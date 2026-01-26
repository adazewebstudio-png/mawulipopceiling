"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, ProjectCategory } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const categories: ("All" | ProjectCategory)[] = [
    "All",
    "Ceiling",
    "TV Unit",
    "Wall Design",
    "Pillar",
    "Arch",
    "Window",
    "Skimming",
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <main className="min-h-screen bg-mawuli-gray">
            <Navbar />

            {/* Header */}
            <section className="bg-mawuli-black text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">My Portfolio</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore my diverse range of projects, from residential homes to commercial complexes across Ghana.
                    </p>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === cat
                                    ? "bg-mawuli-green text-white border-mawuli-green shadow-lg scale-105"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-mawuli-green hover:text-mawuli-green"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                                >
                                    <div className="relative h-72 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold text-mawuli-green uppercase tracking-wider bg-green-50 px-2 py-1 rounded-sm">
                                                {project.category}
                                            </span>
                                            {project.location && (
                                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                                    {project.location}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-heading font-bold text-xl text-mawuli-black mb-2 group-hover:text-mawuli-green transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No projects found in this category.
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </main>
    );
}
