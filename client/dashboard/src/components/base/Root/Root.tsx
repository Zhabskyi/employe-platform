import React from "react";
import "./root.css";
import { QueryClient } from "@tanstack/react-query";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "../App";

const queryClient = new QueryClient();

const Root: React.FC = () => {
  return (
    <React.Suspense>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </React.Suspense>
  );
};

export default Root;
