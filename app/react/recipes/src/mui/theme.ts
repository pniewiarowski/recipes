import { ThemeOptions, createTheme } from "@mui/material/styles";

const theme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffa31a",
    },
    secondary: {
      main: "#e2454a",
    },
    text: {
      primary: "#efefef",
    },
    background: {
      default: "#1b1b1b",
      paper: "#292929",
    },
  },
  typography: {
    h2: {
      fontWeight: 1000,
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      fontSize: 25,
      letterSpacing: -1.5,
    },
    h3: {
      fontWeight: 1000,
      fontFamily: "sans-serif",
      lineHeight: 2,
      fontSize: 30,
      letterSpacing: -3,
    },
    body1: {
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "sans-serif",
          fontSize: "1.5rem",
          fontWeight: 1000,
          lineHeight: 2,
          letterSpacing: -0.5,
          padding: "0.5rem 2rem",
        },
      },
    },
  },
});

export default theme;
