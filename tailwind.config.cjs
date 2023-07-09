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
      matchVariant('child', (value, extra) => `&:has(> .child${modifier(extra)}:${value}, * .child${modifier(extra)}:${value})`, {values});
      matchVariant('peer-child', (value, extra) => `.peer${modifier(extra)}:has(> .child${modifier(extra)}:${value}, * .child${modifier(extra)}:${value}) ~ &`, {values});
    }),
  ],
};
