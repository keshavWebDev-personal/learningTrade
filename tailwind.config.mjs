/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ce00ea",

                    secondary: "#7e6600",

                    accent: "#007500",

                    neutral: "#141414",

                    "base-100": "#1f253a",

                    info: "#007ff4",

                    success: "#65a300",

                    warning: "#bc8700",

                    error: "#ff8a95",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
