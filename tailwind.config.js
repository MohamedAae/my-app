/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
        colors: {
            'background': '#003049',
            'theme': '#fcBf49',
            'theme-hover': '#eba210',
            'dark-red': '#d62828',
            'orange': '#f77f00',
            'lemon': '#eae2b7',
        },
    },
    plugins: [
        require("flowbite/plugin"),
        require('@tailwindcss/forms'),
    ],
};
