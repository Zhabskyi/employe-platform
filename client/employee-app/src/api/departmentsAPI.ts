import { apiConfig } from "../config/api.config";
import { callAPI } from "./apiUtilities";

export const getEmployeesAPI = () => {
  return callAPI(`${apiConfig.departmentsUrls}`, {
    method: "get"
  });
};
