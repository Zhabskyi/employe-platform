const env = process.env.REACT_APP_ENV || "local";

interface URLs {
  rootUrl: string;
  employeesUrls: string;
  departmentsUrls: string;
}

/// in production with many env we would use:
/// `https://${env}api.prod-api.com`;
const baseUrl = env === "prod" ? "https://prod-api.com" : "http://localhost:8080";

const apiConfig: URLs = {
  rootUrl: baseUrl,
  employeesUrls: `${baseUrl}/employees`,
  departmentsUrls: `${baseUrl}/departments`
};

export { apiConfig };
