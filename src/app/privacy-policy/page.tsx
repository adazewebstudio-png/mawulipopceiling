"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-mawuli-gray">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-mawuli-black mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">1. Introduction</h2>
                        <p className="mb-6">
                            Mawuli POP Ceiling ("I", "me", "my") respects your privacy. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website or use my services.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">2. Information I Collect</h2>
                        <p className="mb-6">
                            I may collect personal information that you voluntarily provide to me when you:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Fill out a contact form (Name, Email, Phone Number).</li>
                            <li>Request a quote or consultation.</li>
                            <li>Communicate with me via phone, email, or WhatsApp.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">3. How I Use Your Information</h2>
                        <p className="mb-6">
                            I use your information solely for the purpose of:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Responding to your inquiries and providing quotes.</li>
                            <li>Managing your project and communicating updates (including video updates for diaspora clients).</li>
                            <li>Improving my services and website experience.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">4. Information Sharing</h2>
                        <p className="mb-6">
                            I do not sell, trade, or rent your personal information to third parties. I may share your data only with trusted subcontractors who assist me in operating my business (e.g., website hosting), provided they agree to keep this information confidential.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">5. Security</h2>
                        <p className="mb-6">
                            I implement reasonable security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
                        </p>

                        <h2 className="text-xl font-bold text-mawuli-black mb-4">6. Contact Me</h2>
                        <p className="mb-6">
                            If you have any questions regarding this privacy policy, you may contact me using the information below:
                        </p>
                        <p className="font-bold text-mawuli-black">
                            Mawuli POP Ceiling<br />
                            Accra, Ghana<br />
                            Email: info@mawulipopceiling.com<br />
                            Phone: +233 24 335 6416
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
