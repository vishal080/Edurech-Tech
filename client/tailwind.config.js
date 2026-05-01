/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* KEYFRAMES */
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        fadeInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        logoSpin: {
          '0%,100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },

        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      /* ANIMATION NAMES */
      animation: {
        slideDown: 'slideDown 0.8s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        logoSpin: 'logoSpin 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        countUp: 'countUp 2s ease-out',
      },

    },
  },
  plugins: [],
}