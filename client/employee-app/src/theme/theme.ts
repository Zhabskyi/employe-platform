import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ba5009"
    },
    secondary: {
      main: "#F4A261",
      contrastText: "#1D3557"
    },
    text: {
      primary: "#1D3557",
      secondary: "#457B9D"
    }
  },
  typography: {
    fontFamily: "Open Sans, sans-serif"
  }
});
