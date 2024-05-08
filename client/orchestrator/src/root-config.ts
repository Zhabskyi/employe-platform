import { registerApplication, start, LifeCycles, getAppNames } from "single-spa";
const appNames = getAppNames();

registerApplication(
  "@Zhabskyi/dashboard",
  () => System.import<LifeCycles>("@Zhabskyi/dashboard"),
  (location) => location.pathname === "/"
);

registerApplication(
  "Zhabskyi/employee-app",
  () => System.import<LifeCycles>("Zhabskyi/employee-app"),
  (location: Location) => location.pathname === "/employee-app"
);

start();
