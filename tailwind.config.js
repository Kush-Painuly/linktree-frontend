/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width:{
        customWidth: "43%"
      },
      fontSize: {
        smallest: "9px",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "login-banner": "url('./src/assets/login-banner.png')",
      },
      boxShadow: {
        "custom-shadow": "0 4px 8px rgba(0, 0, 0, 0.2);",
      },
      colors: {
        sitecolor: "#502274",
        sitecolor2: "rgb(120, 0, 22)",
        sitecolor3: "rgb(243, 243, 241)",
        sitecolor4: "#007aff",
        sitecolor5: "rgb(210, 232, 35);", 
        textcolor: "rgb(223,192,223)",
        listcolor :"#1818187e",
        jumpstartcolor :"rgb(80, 34, 116);"
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      perspective: {
        1000: "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 15s linear infinite",
      },
      transformOrigin: {
        center: "center",
      },
    },
  },

  plugins: [],
};
