import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { observer } from "mobx-react-lite";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  Typography
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../../../theme/theme";
import { CreateEmployeeValues, EmployeeActionsFromUrl, PATHS } from "../../../utilities/constants";
import { formHandlers, validationSchema } from "../../../utilities/formHandlers";
import { useMst } from "../../../models/Root";
import { API_STATUS } from "../../../api/apiStatus";
import { useQuery } from "../../../hooks/useQuery";

const defaultValues = {
  firstName: "",
  lastName: "",
  department: "",
  salary: ""
};

const EmployeeForm: React.FC = () => {
  const {
    employees: {
      createEmployee,
      createEmployeeStatus,
      resetCreateEmployeeStatus,
      createEmployeeError,
      updateEmployee,
      updateEmployeeStatus,
      updateEmployeeError,
      resetUpdateEmployeeStatus
    },
    departments: { getDepartments, departmentsData }
  } = useMst();

  let query = useQuery();
  const { action } = useParams();
  const navigate = useNavigate();

  const isEditMode = action === EmployeeActionsFromUrl.Edit;

  const preloadedData = {
    firstName: query.get("firstName"),
    lastName: query.get("lastName"),
    department: query.get("department"),
    salary: query.get("salary")
  };

  const employeeId = query.get("id");

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(validationSchema),
    defaultValues
  });

  const isSubmitting = createEmployeeStatus === API_STATUS.LOADING || updateEmployeeStatus === API_STATUS.LOADING;
  const isError = createEmployeeStatus === API_STATUS.ERROR || updateEmployeeStatus === API_STATUS.ERROR;

  const setupView = async () => {
    await getDepartments();
  };

  useEffect(() => {
    setupView();
    return () => {
      resetCreateEmployeeStatus();
      resetUpdateEmployeeStatus();
    };
  }, []);

  useEffect(() => {
    if (isEditMode) {
      reset(preloadedData);
    }
  }, [isEditMode]);

  const backToHome = () => {
    navigate(`/${PATHS.HOME}`);
  };

  const onSubmit = async (data) => {
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      department: data.department,
      salary: data.salary
    };
    console.log("body", body);

    const response = isEditMode ? await updateEmployee(body, employeeId) : await createEmployee(body);
    if (response?.success) {
      navigate(`/${PATHS.HOME}`);
    }
  };

  return (
    <Grid container sx={{ margin: "48px" }}>
      {isError && (
        <Grid container width="100%">
          <Typography variant="h6" color="error">
            {createEmployeeError ? createEmployeeError : updateEmployeeError}
          </Typography>
        </Grid>
      )}
      <Typography variant="h3" color={theme.palette.text.primary}>
        Employee Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Typography variant="h6" color={theme.palette.text.primary}>
          {action === "create" ? "Create Employee" : "Edit Employee"}
        </Typography>
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
                      helperText={errors[CreateEmployeeValues.FIRST_NAME]?.message}
                      error={errors[CreateEmployeeValues.FIRST_NAME] ? true : false}
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
                      helperText={errors[CreateEmployeeValues.LAST_NAME]?.message}
                      error={errors[CreateEmployeeValues.LAST_NAME] ? true : false}
                    />
                  );
                }}
                control={control}
                name={CreateEmployeeValues.LAST_NAME}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {departmentsData.length === 0 ? (
                <Skeleton variant="rounded" width="100%" height="100%" />
              ) : (
                <Controller
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel>Department</InputLabel>
                        <Select
                          id="department"
                          value={field?.value ? field.value : ""}
                          label="Department"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            formHandlers(field)[CreateEmployeeValues.DEPARTMENT](e.target.value);
                          }}
                          error={errors[CreateEmployeeValues.DEPARTMENT] ? true : false}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {[...departmentsData].map((d) => (
                            <MenuItem key={d.id} value={d.name}>
                              {d.name}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText sx={{ color: theme.palette.error.main }}>
                          {errors[CreateEmployeeValues.DEPARTMENT]?.message}
                        </FormHelperText>
                      </FormControl>
                    );
                  }}
                  control={control}
                  name={CreateEmployeeValues.DEPARTMENT}
                />
              )}
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
                      helperText={errors[CreateEmployeeValues.SALARY]?.message}
                      error={errors[CreateEmployeeValues.SALARY] ? true : false}
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
                <Button sx={{ width: "125px" }} type="submit" variant="contained" color="primary">
                  {isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default observer(EmployeeForm);
