import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

const defaultValues = {
  firstName: "",
  lastName: "",
  department: "",
  salary: ""
};

const EmployeeForm: React.FC = () => {
  const { employeeId } = useParams();
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues
  });

  console.log("employeeId", employeeId);
  const onSubmit = (data) => console.log(data);

  return (
    <Grid container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => <TextField error id="outlined-error" label="Error" defaultValue="Hello World" />}
          control={control}
          name="firstName"
          defaultValue={defaultValues.firstName}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default EmployeeForm;
