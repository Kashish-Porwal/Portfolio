/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0a0a",
                accent: {
                    100: "#00ff9d", // Neon Mint
                    200: "#ff00ff", // Neon Magenta
                    300: "#00ffff", // Cyan
                    400: "#7000ff", // Electric Purple
                },
                surface: "#1a1a1a",
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
