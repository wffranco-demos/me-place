/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchVariant }) => {
      const modifier = extra => extra?.modifier ? `\\/${extra.modifier}` : '';
      const values = {checked: 'checked'};
      matchVariant('cousin', (value, extra) => `:has(> .cousin${modifier(extra)}:${value}, * .cousin${modifier(extra)}:${value}) ~ * &`, {values});
      matchVariant('heir', (value, extra) => `&:has(> .heir${modifier(extra)}:${value}, * .heir${modifier(extra)}:${value})`, {values});
      matchVariant('nephew', (value, extra) => `:has(> .nephew${modifier(extra)}:${value}, * .nephew${modifier(extra)}:${value}) ~ &`, {values});
      matchVariant('uncle', (value, extra) => `.uncle${modifier(extra)}:${value} ~ * &`, {values});
    }),
  ],
};
