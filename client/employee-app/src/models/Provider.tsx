import { API_STATUS } from "../api/apiStatus";
import { RootModel, RootStoreContext } from "./Root";

export const rootStore = RootModel.create({
  employees: {
    employees: [],
    employeesStatus: API_STATUS.IDLE,
    createEmployeeStatus: API_STATUS.IDLE,
    updateEmployeeStatus: API_STATUS.IDLE,
    deleteEmployeeStatus: API_STATUS.IDLE,
    employeesError: "",
    createEmployeeError: "",
    updateEmployeeError: "",
    deleteEmployeeError: ""
  }
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: Props) => {
  return (
    <RootStoreContext.Provider
      value={{
        ...rootStore
      }}
      children={children}
    />
  );
};
