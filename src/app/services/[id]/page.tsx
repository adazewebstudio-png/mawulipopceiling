import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        id: service.id,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = services.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Mawuli POP Ceiling",
            "image": "https://mawulipopceiling.com/mawuli-hero.webp",
            "telephone": "+233243356416",
            "priceRange": "$$",
            "description": "Expert POP ceiling installation with video updates for remote clients"
        },
        "areaServed": {
            "@type": "City",
            "name": "Accra"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "POP Ceiling Services",
            "itemListElement": service.benefits.map((benefit, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": benefit
                },
                "position": index + 1
            }))
        }
    };

    return (
        <main className="min-h-screen bg-mawuli-gray">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Header */}
            <section className="bg-mawuli-black text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to All Services
                    </Link>
                    <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4">{service.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">{service.shortDescription}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Image */}
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div>
                                <h2 className="font-heading font-bold text-2xl text-mawuli-black mb-4">Overview</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="font-heading font-bold text-2xl text-mawuli-black mb-6">Key Benefits</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-mawuli-green flex-shrink-0 mt-1" size={20} />
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="font-heading font-bold text-2xl text-mawuli-black mb-6">My Process</h2>
                                <div className="space-y-4">
                                    {service.process.map((step, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mawuli-black text-white flex items-center justify-center font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{step}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-xl shadow-lg sticky top-24 border-t-4 border-mawuli-green">
                                <h3 className="font-heading font-bold text-xl text-mawuli-black mb-4">Need this service?</h3>
                                <p className="text-gray-600 mb-6">
                                    Contact me today for a free consultation and quote for your {service.title.toLowerCase()} project.
                                </p>
                                <Link href="/contact" className="block w-full py-4 bg-mawuli-green text-white font-bold text-center rounded-lg hover:bg-mawuli-green-dark transition-colors shadow-md mb-4">
                                    Get a Free Quote
                                </Link>
                                <a href="tel:+233243356416" className="block w-full py-4 bg-gray-100 text-mawuli-black font-bold text-center rounded-lg hover:bg-gray-200 transition-colors">
                                    Call +233 24 335 6416
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
