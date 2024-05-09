import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@mui/material";
import * as S from "./ActionButtons.css";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../../utilities/constants";
import { IEmployee } from "../../../../../models/Employees/Employees";

interface Props {
  data: IEmployee;
}

const ActionButtons: React.FC = ({ data }: Props) => {
  const values = { ...data };
  const navigate = useNavigate();

  const onEditClick = () => {
    navigate(
      `/${PATHS.HOME}/${PATHS.EDIT_EMPLOYEE}?firstName=${values.firstName}&lastName=${values.lastName}&department=${values.department}&salary=${values.salary}`
    );
  };
  return (
    <Grid container justifyContent="center" alignItems="center" height={"100%"}>
      <Grid item xs={6}>
        <S.StyledButton variant="outlined" color="info" onClick={onEditClick}>
          <EditIcon color="action" />
        </S.StyledButton>
      </Grid>
      <Grid item xs={6}>
        <S.StyledButton variant="outlined" color="info">
          <DeleteIcon color="error" />
        </S.StyledButton>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
