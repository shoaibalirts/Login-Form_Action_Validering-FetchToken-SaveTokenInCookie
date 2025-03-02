/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        grayish: "#EAEAEA",
        mehroonish: "#5E2E53",
        pinkish: "#E1A1E9",
        blackish: "#000000",
        lightmehroonish: "#CACACA",
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
};
export default config;




