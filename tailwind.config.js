/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export const content = [
  "./dist/**/*.{hbs,html,js}",
  "./views/**/*.{hbs,html,js}",
  "./controllers/**/*.{hbs,html,js}",
  "./routes/**/*.{hbs,html,js}",
  ".",
];
export const theme = {
  screens: {
    // => @media (min-width: 425px) { ... }
    mobile: "425px",
    // => @media (min-width: 768px) { ... }
    tablet: "768px",
    // => @media (min-width: 1024px) { ... }
    laptop: "1024px",

  },
  fontFamily: {
    barrio: ["barrio", "system-ui"],
  },
  extend: {
    keyframes: {
      heartbeat: {
        "0%": { transform: "rotate(0deg) scale(0.9)" },
        // '25%': { transform: 'rotate(0deg) scale(1)' },
        // '30%': { transform: 'rotate(0deg) scale(1.4)' },
        "35%": { transform: "rotate(0deg) scale(1.1)" },
        // '70%': { transform: 'rotate(0deg) scale(1.4)' },
        // '100%': { transform: 'rotate(0deg) scale(1)' },
      },
    },
    animation: {
      heartbeat: "heartbeat 0.2s linear",
    },
  },
};
export const plugins = [];
