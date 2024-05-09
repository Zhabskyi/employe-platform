import { RootModel, RootStoreContext } from "./Root";

export const rootStore = RootModel.create({
  employees: {
    allEmployees: []
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
