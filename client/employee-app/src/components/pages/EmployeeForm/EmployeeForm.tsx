import React from "react";
import { Controller, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { theme } from "../../../theme/theme";
import { CreateEmployeeValues, PATHS } from "../../../utilities/constants";
import { formHandlers } from "../../../utilities/formHandlers";
import { useMst } from "../../../models/Root";

const defaultValues = {
  firstName: "",
  lastName: "",
  department: "",
  salary: ""
};

const EmployeeForm: React.FC = () => {
  const {
    employees: { createEmployee }
  } = useMst();
  const { employeeId } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues
  });

  const backToHome = () => {
    navigate(`/${PATHS.HOME}`);
  };

  console.log("employeeId", employeeId);
  const onSubmit = async (data) => {
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      department: data.department,
      salary: data.salary
    };
    await createEmployee(body);
  };

  return (
    <Grid container sx={{ margin: "48px" }}>
      <Typography variant="h3" color={theme.palette.text.primary}>
        Employee Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Grid container justifyContent="center" marginTop="48px">
          <Grid container item spacing={3} sx={{ maxWidth: "960px" }}>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      id="firstName"
                      label="First Name"
                      value={field?.value ? field.value : ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formHandlers(field)[CreateEmployeeValues.FIRST_NAME](e.target.value)
                      }
                    />
                  );
                }}
                control={control}
                name={CreateEmployeeValues.FIRST_NAME}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      id="lastName"
                      label="Last Name"
                      value={field?.value ? field.value : ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formHandlers(field)[CreateEmployeeValues.LAST_NAME](e.target.value)
                      }
                    />
                  );
                }}
                control={control}
                name={CreateEmployeeValues.LAST_NAME}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="Department"
                      id="department"
                      label="Department"
                      value={field?.value ? field.value : ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formHandlers(field)[CreateEmployeeValues.DEPARTMENT](e.target.value)
                      }
                    />
                  );
                }}
                control={control}
                name={CreateEmployeeValues.DEPARTMENT}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="Salary"
                      id="salary"
                      label="Salary"
                      value={field?.value ? field.value : ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formHandlers(field)[CreateEmployeeValues.SALARY](e.target.value)
                      }
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                      }}
                    />
                  );
                }}
                control={control}
                name={CreateEmployeeValues.SALARY}
              />
            </Grid>

            <Grid container item xs={12} spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button variant="contained" color="secondary" onClick={backToHome}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default EmployeeForm;
