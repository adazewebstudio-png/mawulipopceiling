"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="bg-mawuli-black text-white py-16 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-5xl">My Services</h1>
            </div>
            <ServicesSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
