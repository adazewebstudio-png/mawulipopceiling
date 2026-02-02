import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "mawuli-green": "#288E48",
                "mawuli-green-dark": "#1e6f38",
                "mawuli-red": "#D0202F",
                "mawuli-black": "#1A1A1A",
                "mawuli-gold": "#D4AF37",
                "mawuli-gray": "#F4F4F4",
            },
            fontFamily: {
                sans: ["var(--font-opensans)", "sans-serif"],
                heading: ["var(--font-montserrat)", "sans-serif"],
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to right bottom, rgba(40, 142, 72, 0.9), rgba(26, 26, 26, 0.9))",
            }
        },
    },
    plugins: [],
};
export default config;
