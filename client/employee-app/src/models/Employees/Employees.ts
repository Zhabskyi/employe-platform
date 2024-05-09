import { flow, Instance, types } from "mobx-state-tree";

export const Employee = types.model({
  id: types.number,
  firstName: types.string,
  lastName: types.string,
  department: types.string,
  salary: types.number
});

export type IEmployee = Instance<typeof Employee>;

export const Employees = types
  .model({
    allEmployees: types.array(Employee)
  })
  .views((self) => ({
    get employeeData() {
      return self.allEmployees;
    }
  }))
  .actions((self) => ({}));
