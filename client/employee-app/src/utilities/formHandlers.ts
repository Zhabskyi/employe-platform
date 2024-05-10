import { CreateEmployeeValues, DECIMAL_REGEX } from "./constants";
import { z } from "zod";

export const isValidNumber = (value: string | undefined | null) => {
  if (value === null || !value) return "";
  if (typeof value !== "string") return false;
  const matches = value.toString().match(DECIMAL_REGEX);
  return matches ? matches[0] : "";
};

export const formHandlers = (field: any) => {
  return {
    [CreateEmployeeValues.FIRST_NAME]: (value: string) => {
      field.onChange(value);
    },
    [CreateEmployeeValues.LAST_NAME]: (value: string) => {
      field.onChange(value);
    },
    [CreateEmployeeValues.DEPARTMENT]: (value: string) => {
      field.onChange(value);
    },
    [CreateEmployeeValues.SALARY]: (value: string) => {
      field.onChange(isValidNumber(value.trim()));
    }
  };
};

export const validationSchema = z.object({
  [CreateEmployeeValues.FIRST_NAME]: z.string().min(2, "First name must be at least 2 characters"),
  [CreateEmployeeValues.LAST_NAME]: z.string().min(2, "Last name must be at least 2 characters"),
  [CreateEmployeeValues.DEPARTMENT]: z.string().min(2, "Department must be at selected"),
  [CreateEmployeeValues.SALARY]: z.string().min(1, "Salary cannot be empty")
});

const defaultValues = {
  [CreateEmployeeValues.FIRST_NAME]: "",
  [CreateEmployeeValues.LAST_NAME]: "",
  [CreateEmployeeValues.DEPARTMENT]: "",
  [CreateEmployeeValues.SALARY]: ""
};
