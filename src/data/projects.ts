export type ProjectCategory = "Ceiling" | "TV Unit" | "Wall Design" | "Pillar" | "Arch" | "Window" | "Skimming";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    image: string;
    description: string;
    location?: string;
}

export const projects: Project[] = [
    {
        id: "grand-hall-ornate",
        title: "Grand Hall Ornate Design",
        category: "Ceiling",
        image: "/ceiling-installation-5.webp",
        description: "A majestic ornate ceiling design with recessed lighting for a luxury home.",
        location: "Ajiringanor, Accra"
    },
    {
        id: "geometric-luxury",
        title: "Geometric Luxury Masterpiece",
        category: "Ceiling",
        image: "/ceiling-installation-4.webp",
        description: "Intricate geometric patterns defining a modern luxury living space.",
        location: "East Legon, Accra"
    },
    {
        id: "modern-tray-ceiling",
        title: "Modern Hall Tray Ceiling",
        category: "Ceiling",
        image: "/ceiling-installation-1.webp",
        description: "Clean and sharp tray ceiling design for a contemporary look.",
        location: "Spintex, Accra"
    },
    {
        id: "acoustic-ceiling",
        title: "Acoustic Suspended Ceiling",
        category: "Ceiling",
        image: "/ceiling-installation-2.webp",
        description: "Functional and stylish suspended ceiling for office spaces.",
        location: "Airport City, Accra"
    },
    {
        id: "tv-media-wall-1",
        title: "Modern TV Media Wall",
        category: "TV Unit",
        image: "/tv-unit-1.webp",
        description: "Custom POP TV unit with integrated shelving and lighting.",
        location: "Tema, Comm 25"
    },
    {
        id: "tv-media-wall-2",
        title: "Floating TV Console",
        category: "TV Unit",
        image: "/tv-unit-2.webp",
        description: "Minimalist floating TV console design.",
        location: "Cantonments, Accra"
    },
    {
        id: "wall-design-art",
        title: "3D Wall Art Panel",
        category: "Wall Design",
        image: "/wall-design-1.webp",
        description: "Artistic 3D wall paneling to add depth and character.",
        location: "Oyarifa, Accra"
    },
    {
        id: "wall-design-pattern",
        title: "Geometric Wall Pattern",
        category: "Wall Design",
        image: "/wall-design-2.webp",
        description: "Repetitive geometric pattern for feature walls.",
    },
    {
        id: "grand-pillars-1",
        title: "Roman Style Pillars",
        category: "Pillar",
        image: "/pillar-1.webp",
        description: "Classic Roman pillars adding structural elegance.",
    },
    {
        id: "modern-pillars-2",
        title: "Contemporary Square Columns",
        category: "Pillar",
        image: "/pillar-2.webp",
        description: "Clean lined square columns for modern facades.",
    },
    {
        id: "archway-design-1",
        title: "Elegant Hall Archway",
        category: "Arch",
        image: "/arch-1.webp",
        description: "Smooth curved archway separating living and dining areas.",
    },
    {
        id: "archway-design-2",
        title: "Decorative Entry Arch",
        category: "Arch",
        image: "/arch-2.webp",
        description: "Ornate entry arch with detailed cornices.",
    },
    {
        id: "window-trim-1",
        title: "POP Window Trimming",
        category: "Window",
        image: "/window-1.webp",
        description: "Neat POP trimming for window borders.",
    },
    {
        id: "wall-skimming-smooth",
        title: "Ultra Smooth Wall Skimming",
        category: "Skimming",
        image: "/wall-skimming-1.webp",
        description: "Glass-like smooth wall finish ready for premium paint.",
    }
];
