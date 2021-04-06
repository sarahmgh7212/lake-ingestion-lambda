module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-purple": "#6366f1",
        "hover-light-purple": "#8a8bf5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
