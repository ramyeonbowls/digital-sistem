import defaultTheme from 'tailwindcss/defaultTheme';
const { addDynamicIconSelectors } = require("@iconify/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './node_modules/flyonui/dist/js/*.js',
        './node_modules/datatables.net/js/dataTables.min.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "blue-template": "#1995ad",
                "white-template": "#f1f1f1",
            }
        },
    },
    plugins: [
        require("flyonui"),
        require("flyonui/plugin"),
        addDynamicIconSelectors(),
    ],
    flyonui: {
        vendors: true,
        themes: ["corporate"]
    }
};
