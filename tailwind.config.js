module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    screens: {
      mobile: '360px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      colors: {
        paletteOne: "#0D1821",
        paletteTwo: "#344966",
        paletteThree: "#AA7BC3",
        paletteFour: "#6B9080",
        paletteFive: "#F0F4EF"
      },
    },
    plugins: [],
  }
}
