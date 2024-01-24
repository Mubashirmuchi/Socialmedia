/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        backgroundImage: {
            uibackground: "url('../src/assets/img/uibackgound.jpg')",
        },
        extend: {},
    },
    plugins: [],
};
