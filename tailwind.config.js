const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_mdoules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ["DM Sans", "sans-serif"],
        'caveat': ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
});