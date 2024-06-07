/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{hbs,js,}",
    ""],
  theme: {
    screen: {

      '2xl': '1536px',
      '3xl': '1792px',
      '4xl': '2048px',
    },
    fontFamily: {
      "barrio": ["barrio", 'system-ui']
    },
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
        heartbeat: 'heartbeat 0.2s linear',
      },
    },
  },

  plugins: [],
}
