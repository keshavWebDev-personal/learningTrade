/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fonts: {
            sans: ["HelveticaWorld", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
            SourceCodePro: ["SourceCodePro", "sans-serif"],
            BebasNeue: ["BebasNeue", "sans-serif"],
        },
    },
    extend: {
        transitionTimingFunction: {
            "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        },
    },

    plugins: [require("daisyui")],
};
