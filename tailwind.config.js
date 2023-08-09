/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sarabun: ['var(--font-sarabun)', ...fontFamily.sans],
                zenKurenaido: ['var(--font-zenKurenaido)', ...fontFamily.sans],
                montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                // primary: "#B63E96", // 240,86,199
                primary: "#FF64A5", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },

            backgroundImage: {
                circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 48px)',
                circularLightXL: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px)',

                circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 148px)',
                circularDarkXL: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 100px)',
            },
        },

        screen: {
            // "2xl": {max:"1535px"},
            // "xl": {max:"1279px"},
            // "lg": {max:"1023px"},
            // "md": {max:"767px"},
            // "sm": {max:"639px"},
            // "xs": {max:"479px"},
        }
    },
    plugins: [],
};
