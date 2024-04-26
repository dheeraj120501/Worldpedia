/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    fontWeight: {
      normal: '300',
      bold: '600',
      extraBold: '800',
    },
    extend: {
      colors: {
        'dark-element': 'hsl(209, 23%, 22%)',
        'dark-bg': 'hsl(207, 26%, 17%)',
        'dark-text': 'hsl(0, 0%, 100%)',
        'light-element': 'hsl(0, 0%, 100%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'light-input': 'hsl(0, 0%, 52%)',
        'light-bg': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
