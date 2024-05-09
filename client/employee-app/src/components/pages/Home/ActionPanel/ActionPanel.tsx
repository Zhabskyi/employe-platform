import { PATHS } from "../../../../utilities/constants";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  employeeId: string;
}

const ActionPanel: React.FC = ({ employeeId }: Props) => {
  const navigate = useNavigate();

  const addNewEmployee = () => {
    navigate(`/${PATHS.HOME}/${PATHS.CREATE_EMPLOYEE}`);
  };
  return (
    <Grid container>
      <Button variant="contained" color="secondary" onClick={addNewEmployee}>
        Add New Employee
      </Button>
    </Grid>
  );
};

export default ActionPanel;
