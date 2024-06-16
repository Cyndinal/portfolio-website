import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container:
        {center: true, padding: "2rem", screens: {
        "2xl": "1400px",
      }
      }
    // screens:{
    //   sm:"640px",
    //   md:"768px",
    //   lg:"960",
    //   xl:"1200px",
    // }
    ,
    fontFamily:{
      primary:"var(--font-jetbrainsMono)",
    },
    colors:{
      primary:"#1c1c22",
      accent:{
        DEFAULT:"#00ff99",
      },
      secondary:{
        DEFAULT:"#2E6AD3",
      },
      secondaryAsh:{
        DEFAULT:"#A6CFC1",
      },
      secondaryRed:{
        DEFAULT:"#FF9829"
      },DeepRed:{
        DEFAULT:"#FF2839"
      },
      secondaryFade:{
        DEFAULT:'#41C296'
      },
      secondarySidebar:{
        DEFAULT:'#33BFAA'
      },
      secondaryDark:{
        DEFAULT:"#16294B",
      },
      secondaryWhite:{
        DEFAULT:"#E2FFEB"
      }

    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config