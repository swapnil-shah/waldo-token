module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          hover: "#e53d59",
          DEFAULT: "#E73151",
        },
        secondary: {
          DEFAULT: "#CCECFD",
        },
        dark: {
          DEFAULT: "#17171B",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
