import { CreateEmployeeValues, DECIMAL_REGEX } from "./constants";

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
