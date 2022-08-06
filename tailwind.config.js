/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            lineClamp: {
                7: '7', 8: '8',
            }
        }, colors: {
            'background': '#003049',
            'theme': '#fcBf49',
            'theme-hover': '#eba210',
            'cart-bg':'#f8f8f8',
            'dark-red': '#d62828',
            'orange': '#f77f00',
            'lemon': '#eae2b7',
        },
    },
    plugins: [require("flowbite/plugin"), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'),],
};