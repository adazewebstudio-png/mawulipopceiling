// Link to specific projects or categories if dynamic JsonLd needed later

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Mawuli POP Ceiling",
        "image": "https://mawulipopceiling.com/mawuli-hero.webp",
        "@id": "https://mawulipopceiling.com",
        "url": "https://mawulipopceiling.com",
        "telephone": "+233243356416",
        "email": "info@mawulipopceiling.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ag bogba",
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "postalCode": "00233",
            "addressCountry": "GH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 5.666,
            "longitude": -0.166
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Accra"
            },
            {
                "@type": "City",
                "name": "Tema"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Greater Accra Region"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Ashanti Region"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Volta Region"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Eastern Region"
            }
        ],
        "sameAs": [
            "https://facebook.com/mawulipopceiling"
        ],
        "founder": {
            "@type": "Person",
            "name": "Mawuli Kodzo Afrim"
        },
        "description": "Professional POP ceiling installer, wall skimming expert, and interior designer in Ghana with 16+ years of experience."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
