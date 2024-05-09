import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ba5009"
    },
    secondary: {
      main: "#F4A261",
      contrastText: "#1D3557",
      light: "#fff5ed"
    },
    text: {
      primary: "#1D3557",
      secondary: "#457B9D"
    },
    action: {
      active: "#ba5009"
    },
    error: {
      main: "#e82615"
    }
  },
  typography: {
    fontFamily: "Open Sans, sans-serif"
  },
  spacing: 8
});
