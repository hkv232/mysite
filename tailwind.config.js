/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        blue: "#0000ff"
      },
      backgroundImage: {
        circularLight:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 8px,#f5f5f5 100px)",
    
        circularDark:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
    
        circularLightLg:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 7px,#f5f5f5 80px)",
    
        circularDarkLg:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 7px,#1b1b1b 80px)",
    
        circularLightMd:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 6px,#f5f5f5 60px)",
    
        circularDarkMd:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",
    
        circularLightSm:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 3px,#f5f5f5 40px)",
    
        circularDarkSm:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 3px,#1b1b1b 40px)",
      }
    },
    screens:{
      xxl: { max: "1635px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1400px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1200px" },
      // => @media (max-width: 1023px) { ... }

      mdlg: { max: "950px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
} 



// i made the site responsive from here using tailwind manual