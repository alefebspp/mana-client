/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#7752FE',
          dark: '#3F1651',
          light: '#C3ACD0'
        },
        gray: {
          dark: '#333333'
        }
      }
    }
  },
  plugins: []
}
