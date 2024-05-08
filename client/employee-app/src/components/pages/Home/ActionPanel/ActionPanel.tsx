import { Button, Grid } from "@mui/material";

const ActionPanel: React.FC = () => {
  return (
    <Grid container>
      <Button variant="contained" color="secondary">
        Add New Employee
      </Button>
    </Grid>
  );
};

export default ActionPanel;
