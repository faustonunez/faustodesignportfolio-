import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        '3xl': '1600px',
      },
    },
    extend: {
      fontSize: {
        'fluid-header': 'clamp(1.5rem, 10vw + 5rem, 6rem)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'acumin': ['acumin-pro-wide', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        light: {
          'text-dark': '#061018',
          'text-medium': '#082E3C',
          'text-light': '#155268',
          'divider': '#C1E3F7',
          'outline': '#64C5F0',
          'background': '#EAF6FE',
          'primary': '#D56D0D',
        },
        dark: {
          'text-dark': '#B8DDF2',
          'text-medium': '#93CEED',
          'text-light': '#2E97BE',
          'divider': '#082E3C',
          'outline': '#155268',
          'background': '#061018',
          'primary': '#D56D0D',
        },
        brand: {
          'primary-20': '#FBF3EE',
          'primary-30': '#F7E2D2',
          'primary-50': '#E5A373',
          'secondary-100-text': '#0A0B11',
          'secondary-80-bg': '#1A1D27',
          'secondary-60': '#2D373E',
          'secondary-40': '#5D7180',
          'secondary-10': '#CFDCE5',
          'tertiary-20': '#EDEEF5',
          'tertiary-10': '#F8F9FF',
          'greys-20': '#F6F3F3',
          'greys-0': '#FFFFFF',
        },
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
