import { Grid, Typography } from "@mui/material";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <Grid item>
      <Typography variant="h3" color="primary">
        Welcome
      </Typography>
      <Typography variant="h5" color="secondary">
        First Name Last Name
      </Typography>
    </Grid>
  );
};

export default Welcome;
