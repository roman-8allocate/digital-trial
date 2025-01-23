import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': '#333',
        'gray-2': '#2c2c2c',
        'gray-3': '#C8C8C8',
        'gray-4': '#BDBDBD',
        'gray-5': '#F2F2F2',
        'gray-6': '#F9F9F9',
        'gray-7': '#E0E0E0',
        'gray-8': '#FBFBFB',
        'gray-9': '#F3F3F3',
        'gray-10': '#8D8D8D',
        'red-1': '#C30000'
      },
      flex: {
        'slide': '0 0 100%'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'gothic': ['Gothic A1', 'sans-serif']
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1200px',
      }
    }
  },
  plugins: [],
} satisfies Config;
