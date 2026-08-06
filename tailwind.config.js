/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C8A23A',
        ink: '#090909',
        slate: '#111111',
        panel: '#181818',
      },
      boxShadow: {
        luxe: '0 24px 80px rgba(0, 0, 0, 0.55)',
        glow: '0 0 0 1px rgba(200, 162, 58, 0.16), 0 24px 80px rgba(200, 162, 58, 0.14)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 20% 20%, rgba(200, 162, 58, 0.08), transparent 22%), radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.08), transparent 18%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 26%)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};