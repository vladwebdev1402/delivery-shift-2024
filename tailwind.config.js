/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'rgba(20, 28, 36, 1)',
      secondary: 'rgba(52, 64, 81, 1)',
      tertiary: 'rgba(99, 112, 131, 1)',
      quartenery: 'rgba(151, 161, 175, 1)',
      'bg-brand': 'rgba(25, 117, 255, 1)',
      'indicator-light': 'rgba(206, 210, 218, 1)',
      'indicator-medium': 'rgba(151, 161, 175, 1)',
      'indicator-attention': 'rgba(255, 178, 25, 1)',
      'indicator-error': 'rgba(246, 76, 76, 1)',
      'indicator-positive': 'rgba(78, 207, 83, 1)',
      'bg-secondary': 'rgba(245, 245, 248, 1)',
      'border-light': 'rgba(206, 210, 218, 1)',
      'border-extra-light': 'rgba(227, 229, 229, 1)',
      'bg-disabled': 'rgba(243, 244, 246, 1)',
      invert: 'white',
    },
  },
  plugins: [],
};
