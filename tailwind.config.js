/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%': { transform: 'rotate(0deg) scale(0.9)' },
          // '25%': { transform: 'rotate(0deg) scale(1)' },
          // '30%': { transform: 'rotate(0deg) scale(1.4)' },
          '35%': { transform: 'rotate(0deg) scale(1.1)' },
          // '70%': { transform: 'rotate(0deg) scale(1.4)' },
          // '100%': { transform: 'rotate(0deg) scale(1)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 0.5s linear',
      },
    },
  },
  fontFamily: {
  },
  plugins: [],
}
