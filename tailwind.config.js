const plugin = require("tailwindcss/plugin");
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            lineClamp: {
                7: '7', 8: '8',
            }, colors: {
                'background': '#003049',
                'theme': '#fcBf49',
                'theme-hover': '#eba210',
                'cart-bg': '#f8f8f8',
                'dark-red': '#d62828',
                'orange': '#f77f00',
                'lemon': '#eae2b7',
            },
            keyframes: {
                'notify': {
                    '0%': {opacity: 1},
                    '75%': {opacity: 1},
                    '100%': {opacity: 0},
                }
            },
            animation: {
                'notification': 'notify 4s linear forwards',
            },
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};