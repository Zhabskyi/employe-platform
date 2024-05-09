import { Suspense } from "react";
import "./root.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import App from "../App";
import { theme } from "../../../theme/theme";
import { Provider } from "../../../models/Provider";

const Root: React.FC = () => {
  return (
    <Suspense>
      <Provider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </Suspense>
  );
};

export default Root;
