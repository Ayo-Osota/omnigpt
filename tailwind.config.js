/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '26': '5.625rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '7.5xl': '5rem',
      },
      fontFamily: {
        'header': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '3.5xl': ['2rem', '2rem']
      },
      borderRadius: {
        'chatBox': '4.1875rem',
      }
    },
  },
  plugins: [],
}
