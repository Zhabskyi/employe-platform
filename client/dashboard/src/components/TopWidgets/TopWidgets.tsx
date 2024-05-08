import { Grid } from "@mui/material";
import * as S from "./TopWidgets.css";
import Welcome from "./Welcome";

const TopWidgets = () => {
  return (
    <S.Container container maxWidth="md">
      <Grid container item justifyContent="space-between">
        <Welcome />
        {/* Possible more widgets */}
      </Grid>
    </S.Container>
  );
};

export default TopWidgets;
