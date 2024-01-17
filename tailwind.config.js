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
          light: '#ece6ff',
          pastel: '#C3B1E1'
        },
        gray: {
          primary: '#fafafa',
          border: '#E5E7EB',
          dark: '#333333'
        }
      },
      padding: {
        sm: '1.5rem',
        md: '3rem',
        lg: '4.5rem'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(-15%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        slideOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-15%)' }
        }
      },
      animation: {
        slideIn: 'slideIn .25s ease-in-out',
        slideOut: 'slideOut .3s ease-in-out'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: []
}
