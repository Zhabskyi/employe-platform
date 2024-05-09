import { apiConfig } from "../config/api.config";
import { callAPI } from "./apiUtilities";

export const getEmployeesAPI = () => {
  return callAPI(`${apiConfig.employeesUrls}`, {
    method: "get"
  });
};

export const createEmployeeAPI = (body: any) => {
  return callAPI(`${apiConfig.employeesUrls}`, {
    method: "post",
    body
  });
};
