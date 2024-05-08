import { Grid } from "@mui/material";
import * as S from "./TopWidgets.css";

const TopWidgets = () => {
  return (
    <S.Container container maxWidth="md">
      <Grid container item justifyContent="space-between">
        TopWidgets
      </Grid>
    </S.Container>
  );
};

export default TopWidgets;
