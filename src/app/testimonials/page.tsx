"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="bg-mawuli-black text-white py-16 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-5xl">Testimonials</h1>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                    Hear from clients who trusted me with their projects
                </p>
            </div>
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
