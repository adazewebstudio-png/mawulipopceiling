// No imports needed for this data file as we are not using components here anymore

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    benefits: string[];
    process: string[];
    image: string; // Placeholder for now, will map to existing ones or use generic
}

export const services: Service[] = [
    {
        id: "pop-ceiling-installation",
        title: "POP Ceiling Installation",
        shortDescription: "Modern tray, suspended, and acoustic ceilings for homes and offices.",
        fullDescription: "Transform the look of your interiors with my professional POP ceiling installation services. Whether you want a simple flat ceiling or a complex multi-level design with hidden lighting, I have the expertise to bring your vision to life. I use high-quality plasterboard and acoustic materials to ensure durability and a perfect finish.",
        benefits: [
            "Hides electrical wiring and plumbing pipes",
            "Improves thermal insulation",
            "Enhances soundproofing",
            "Adds value to your property",
            "Customizable designs to fit any room style"
        ],
        process: [
            "Consultation & Design Selection",
            "Framing & Structural Support Installation",
            "Fixing Plasterboards",
            "Jointing & Finishing",
            "Sanding & Painting Preparation"
        ],
        image: "/ceiling-installation-3.webp"
    },
    {
        id: "wall-skimming",
        title: "Wall Skimming",
        shortDescription: "Ultra-smooth wall finishing to prepare your surfaces for premium painting.",
        fullDescription: "Achieve glass-smooth walls with my expert wall skimming services. Skimming corrects uneven plasterwork and provides a flawless base for painting or wallpapering. I ensure that your walls are perfectly level and free from imperfections, giving your home a high-end, modern feel.",
        benefits: [
            "Corrects uneven walls and cracks",
            "Provides a luxury, smooth finish",
            "Makes painting easier and more beautiful",
            "Hides old imperfections",
            "Durability against minor wear"
        ],
        process: [
            "Surface Cleaning & Preparation",
            "Application of Base Coat",
            "Smoothing & Leveling",
            "Fine Sanding",
            "Final Inspection"
        ],
        image: "/wall-skimming-2.webp"
    },
    {
        id: "tv-unit-designs",
        title: "TV Unit Designs",
        shortDescription: "Custom POP media walls and TV stands that become the center of your living room.",
        fullDescription: "Make your living room stand out with a custom POP TV unit. I design and build modern media walls that integrate your TV, sound system, and decor items into a seamless structure. From floating shelves to backlit panels, I create focal points that are both functional and stylish.",
        benefits: [
            "Custom fit for your TV and devices",
            "Hidden cable management for a clean look",
            "Integrated lighting options",
            "Additional storage and display space",
            "Modern aesthetic appeal"
        ],
        process: [
            "Space Planning & Design Sketch",
            "Framing the Unit Structure",
            "Electrical & LED Wiring Setup",
            "Board Installation & Skimming",
            "Painting & Finishing Touches"
        ],
        image: "/tv-unit-2.webp"
    },
    {
        id: "wall-designs",
        title: "Wall Designs",
        shortDescription: "Decorative 3D wall panels and artistic POP designs to add character.",
        fullDescription: "Bored of plain flat walls? Add texture and depth with my POP wall design services. Whether it's 3D panels, geometric patterns, or classic wainscoting, I can create wall features that add personality and elegance to any room.",
        benefits: [
            "Creates a stunning focal point",
            "Adds texture and depth to the room",
            "Wide range of patterns available",
            "Can cover up damaged wall sections",
            "Unique and artistic expression"
        ],
        process: [
            "Design Consultation",
            "Wall Surface Preparation",
            "Pattern Layout & Marking",
            "Installation of 3D Elements/POP",
            "Jointing & Finishing"
        ],
        image: "/wall-design-2.webp"
    },
    {
        id: "arch-designs",
        title: "Arch Designs",
        shortDescription: "Elegant archways for corridors, entryways, and hall dividers.",
        fullDescription: "Soften the transitions between rooms with beautiful POP arches. I design and construct arches that frame your spaces elegantly, replacing sharp corners with smooth, flowing curves. Perfect for hallways, living room entrances, and dining areas.",
        benefits: [
            "Softens architectural lines",
            "Adds a classic or Mediterranean touch",
            "Defines spaces without blocking light",
            "Customizable shapes (Round, Elliptical, etc.)",
            "Enhances visual flow"
        ],
        process: [
            "Measurement & Template Creation",
            "Framing the Arch Curve",
            "Boarding & Beading",
            "Skimming & Shaping",
            "Final Sanding"
        ],
        image: "/arch-2.webp"
    },
    {
        id: "pillars-columns",
        title: "Pillars & Columns",
        shortDescription: "Roman and modern pillar designs to add grandeur to your building.",
        fullDescription: "Add a sense of grandeur and stability to your building with decorative POP pillars. Whether you need structural columns clad in beautiful designs or purely decorative pillars for aesthetics, I can create Roman, Greek, or modern styles to suit your architecture.",
        benefits: [
            "Adds architectural grandeur",
            "Can hide structural steel or concrete posts",
            "Various styles (Fluted, Smooth, Square)",
            "Durable and impact resistant",
            "Enhances curb appeal"
        ],
        process: [
            "Structural Assessment",
            "Framing or Cladding Installation",
            "Molding Application",
            "Cap & Base Installation",
            "Finishing & Detailing"
        ],
        image: "/pillar-2.webp"
    }
];
