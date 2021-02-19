module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000",
      white: "#fff",
    },
    animation: {
      none: 'none',
      bounce: 'bounce 1s infinite',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    gradientColorStops: false,
  },
  plugins: [],
}
