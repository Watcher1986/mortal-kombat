/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        tb: '10px 10px 5px 0px rgba(19,245,185,1)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fill, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
};
