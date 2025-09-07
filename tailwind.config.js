/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // GpavbhaG Restaurant Brand Colors
        primary: {
          DEFAULT: '#8B2F1A',
          hover: '#66200E',
          light: '#F2E8E5'
        },
        secondary: {
          DEFAULT: '#B8860B',
          hover: '#9A7209',
          light: '#F7F1D9'
        },
        tertiary: {
          DEFAULT: '#2E7D32',
          hover: '#1B5E20',
          light: '#E8F5E9'
        },
        neutral: {
          white: '#FFFFFF',
          charcoal: '#212121',
          'gray-light': '#F5F5F5',
          'gray-medium': '#9E9E9E'
        }
      },
      fontFamily: {
        // Custom font families for GpavbhaG Restaurant  
        'sans': ['Poppins', 'sans-serif'],     // Default font for entire site
        'heading': ['Poppins', 'sans-serif'],  // For headings, logo text 
        'body': ['Poppins', 'sans-serif']      // For body text, menu, buttons
      }
    },
  },
  plugins: [],
}