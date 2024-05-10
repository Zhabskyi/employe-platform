import { apiConfig } from "../config/api.config";
import { callAPI } from "./apiUtilities";

export const getDepartmentsAPI = () => {
  return callAPI(`${apiConfig.departmentsUrls}`, {
    method: "get"
  });
};
