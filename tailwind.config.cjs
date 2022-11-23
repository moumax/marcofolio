/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "xs": "0px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
    extend: {},
    fontFamily: {
      sans: ['"Exo 2"'],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
