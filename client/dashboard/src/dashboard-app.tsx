import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import Root from "./components/base/Root";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return <div>Error</div>;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
