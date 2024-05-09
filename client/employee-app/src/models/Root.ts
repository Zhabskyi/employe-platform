import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";

import { Employees } from "./Employees";

export const RootModel = types.model("RootModel", {
  employees: Employees
});

export interface RootInstance extends Instance<typeof RootModel> {}

export const RootStoreContext = createContext<null | RootInstance>(null);
RootStoreContext.displayName = "RootStoreContext";

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
