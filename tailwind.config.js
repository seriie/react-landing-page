/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'black': '0 0 8px 3px #0F172A',
        'white': '0 0 8px 3px #F1F5F9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)',
        'custom-reverse': 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)',
      },
    },
  },
  plugins: [],
}

