export const DECIMAL_REGEX = /^[0-9]{1,12}\.[0-9]{0,2}|^[0-9]{1,12}/;

export enum PATHS {
  HOME = "employees",
  EMPLOYEE_FORM = "form",
  CREATE_EMPLOYEE = "form/create",
  EDIT_EMPLOYEE = "form/edit",
  ACTION = ":action"
}

export enum EmployeeActionsFromUrl {
  Create = "create",
  Edit = "edit"
}

export enum CreateEmployeeValues {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  DEPARTMENT = "department",
  SALARY = "salary"
}
