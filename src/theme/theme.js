const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
  colors: {
    light: {
      bgPrimary: "rgba(254, 255, 254, 0.8)",
      bgSecondary: "#f3f3f3",
      border: "#fefffe",
    },
    dark: {
      bgPrimary: "rgba(2, 9, 25, 0.8)",
      bgSecondary: "#0d1321",
      border: "#111724",
    },
  },
  fonts: {},
});

export default theme;
