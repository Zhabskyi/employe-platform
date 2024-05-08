import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E63946"
    },
    secondary: {
      main: "#F4A261",
      contrastText: "#1D3557"
    }
  },
  typography: {
    fontFamily: "Open Sans, sans-serif"
  }
});
