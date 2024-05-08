import { theme } from "../../../theme/theme";
import { Grid, Typography } from "@mui/material";
import ActionPanel from "./ActionPanel";

const Home: React.FC = () => {
  return (
    <Grid container flexDirection="column" margin="64px">
      <Grid container item flexDirection="row" justifyContent="space-between">
        <Grid item>
          <Typography variant="h3" color={theme.palette.text.primary}>
            Employees
          </Typography>
        </Grid>
        <Grid item alignContent="center">
          <ActionPanel />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
