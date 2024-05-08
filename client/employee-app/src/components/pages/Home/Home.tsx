import { theme } from "../../../theme/theme";
import { Grid, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Grid container flexDirection="column" margin="64px">
      <Typography variant="h3" color={theme.palette.text.primary}>
        Employees
      </Typography>
      {/* Add your content here */}
    </Grid>
  );
};

export default Home;
