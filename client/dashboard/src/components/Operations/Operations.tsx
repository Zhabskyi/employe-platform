import { Grid, Typography } from "@mui/material";
import * as S from "./Operations.css";

const Operations: React.FC = () => {
  return (
    <S.Container>
      <Typography variant="h3" color="secondary">
        Operations
      </Typography>
      <Grid container alignItems="center">
        <S.StyledLink to="/employees">
          <Typography variant="h5" color="primary">
            Employees
          </Typography>

          <Typography variant="body2" color="primary">
            Link to employees
          </Typography>
        </S.StyledLink>
      </Grid>
    </S.Container>
  );
};

export default Operations;
