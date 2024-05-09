import { toJS } from "mobx";
import { API_STATUS } from "../../api/apiStatus";
import { getEmployeesAPI } from "../../api/employeesAPI";
import { flow, Instance, types } from "mobx-state-tree";

export const Employee = types.model({
  id: types.number,
  firstName: types.string,
  lastName: types.string,
  department: types.string,
  salary: types.string
});

export type IEmployee = Instance<typeof Employee>;

export const Employees = types
  .model({
    employees: types.array(Employee),
    employeesStatus: types.optional(types.enumeration(Object.values(API_STATUS)), API_STATUS.IDLE),
    employeesError: types.optional(types.string, "")
  })
  .views((self) => ({
    get employeeData() {
      return self.employees;
    },
    get employeeStatus() {
      return self.employeesStatus;
    },
    get employeeError() {
      return self.employeesError;
    }
  }))
  .actions((self) => ({
    getEmployees: flow(function* getEmployees() {
      self.employeesStatus = API_STATUS.LOADING;

      try {
        const data = yield getEmployeesAPI();
        self.employees = data.data;
        self.employeesStatus = API_STATUS.SUCCESS;
      } catch (error) {
        // If we have error returned from API we can use it as well
        self.employeesError = "An error occurred and we were unable to retrieve employee list. Please try again.";
        self.employeesStatus = API_STATUS.ERROR;
      }
    })
  }));
