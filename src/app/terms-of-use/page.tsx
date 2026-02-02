"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-mawuli-gray">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-8">Terms of Use</h1>

                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-6">
                            By accessing and using the Mawuli POP Ceiling website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">2. Services</h2>
                        <p className="mb-6">
                            Mawuli POP Ceiling provides POP design, installation, and related interior construction services. All quotes provided are estimates and subject to final on-site assessment.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">3. Intellectual Property</h2>
                        <p className="mb-6">
                            All content on this website, including text, images, project photos, and design, is the property of Mawuli POP Ceiling and is protected by copyright laws. You may not use my project images for your own commercial purposes without my express written consent.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">4. Limitation of Liability</h2>
                        <p className="mb-6">
                            While I strive to provide accurate information on this website, I make no warranties about the completeness or accuracy of the content. Mawuli POP Ceiling shall not be liable for any damages arising from the use of this website.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">5. Governing Law</h2>
                        <p className="mb-6">
                            These terms shall be governed by and construed in accordance with the laws of Ghana.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">6. Changes to Terms</h2>
                        <p className="mb-6">
                            I reserve the right to modify these terms from time to time at my sole discretion. Your continued use of the website constitutes acceptance of those changes.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">7. Contact</h2>
                        <p className="mb-6">
                            For any questions regarding these terms, please contact: +233 24 335 6416.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
