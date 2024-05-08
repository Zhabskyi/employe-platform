import { Suspense } from "react";
import "./root.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import App from "../App";
import { theme } from "../../../theme/theme";

const Root: React.FC = () => {
  return (
    <Suspense>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};

export default Root;
