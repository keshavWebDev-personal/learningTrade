/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    colors: {
        text: "#f8f2e2",
        background: "#191919",
        primary: "#ECDBBA",
        secondary: "#2D4263",
        accent: "#C84B31",
    },
    plugins: [require("daisyui")],
};
