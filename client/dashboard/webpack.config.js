const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { EnvironmentPlugin } = require("webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zhabskyi",
    projectName: "dashboard-app",
    webpackConfigEnv,
    argv
  });

  return merge(defaultConfig, {
    plugins: [
      new EnvironmentPlugin({
        REACT_APP_ENV: "dev",
        REACT_APP_BASE_URL: "http://localhost:8080"
      })
    ]
  });
};
