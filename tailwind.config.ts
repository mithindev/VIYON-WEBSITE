import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        heading: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ── Viyon Sky-Blue Palette ──────────────────
        "sky-primary": "hsl(200, 82%, 48%)",
        "sky-bright":  "hsl(196, 90%, 60%)",
        "sky-dark":    "hsl(210, 72%, 22%)",
        "sky-mid":     "hsl(208, 65%, 35%)",
        "sky-light":   "hsl(200, 80%, 94%)",
        "sky-pale":    "hsl(200, 60%, 97%)",
        "navy":        "hsl(218, 50%, 14%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "999px",
      },
      backgroundImage: {
        "sky-gradient": "linear-gradient(135deg, hsl(200,82%,40%) 0%, hsl(196,90%,58%) 55%, hsl(200,90%,78%) 100%)",
        "sky-gradient-soft": "linear-gradient(135deg, hsl(200,80%,94%) 0%, hsl(196,90%,98%) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(0.8)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "marquee": "marquee 32s linear infinite",
        "float":   "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 1.5s infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-in":   "fade-in 0.6s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
