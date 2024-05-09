import { API_STATUS } from "../api/apiStatus";
import { RootModel, RootStoreContext } from "./Root";

export const rootStore = RootModel.create({
  employees: {
    employees: [],
    employeesStatus: API_STATUS.IDLE,
    employeesError: ""
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
