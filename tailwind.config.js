/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'meteora-purple': '#8b5cf6',
        'meteora-blue': '#3b82f6',
        'meteora-green': '#10b981',
        'meteora-orange': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}
