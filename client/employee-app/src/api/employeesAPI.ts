import { IEmployeeSchema } from "../models/Employees/Employees";
import { apiConfig } from "../config/api.config";
import { callAPI } from "./apiUtilities";

export const getEmployeesAPI = () => {
  return callAPI(`${apiConfig.employeesUrls}`, {
    method: "get"
  });
};

export const createEmployeeAPI = (body: IEmployeeSchema) => {
  return callAPI(`${apiConfig.employeesUrls}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(body)
  });
};

export const updateEmployeeAPI = (body: IEmployeeSchema, id: string) => {
  return callAPI(`${apiConfig.employeesUrls}/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "put",
    body: JSON.stringify(body)
  });
};

export const deleteEmployeeAPI = (id: number) => {
  return callAPI(`${apiConfig.employeesUrls}/${id}`, {
    method: "delete"
  });
};
