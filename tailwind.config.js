export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { char: { DEFAULT: '#0e0e0f', 800: '#161617', 700: '#1f1f21', 600: '#2a2a2d' }, ember: { DEFAULT: '#f0561d', 400: '#ff7a3d', 600: '#d63a12' }, cream: '#f6efe4' },
      fontFamily: { display: ['"Playfair Display"', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
