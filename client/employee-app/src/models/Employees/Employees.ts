import { API_STATUS } from "../../api/apiStatus";
import { getEmployeesAPI, createEmployeeAPI } from "../../api/employeesAPI";
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
    createEmployeeStatus: types.optional(types.enumeration(Object.values(API_STATUS)), API_STATUS.IDLE),
    employeesError: types.optional(types.string, ""),
    createEmployeeError: types.optional(types.string, "")
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
    }),
    createEmployee: flow(function* createEmployee(body: any) {
      self.createEmployeeStatus = API_STATUS.LOADING;

      try {
        const data = yield createEmployeeAPI(body);
        self.employees.push(data.data);
        self.createEmployeeStatus = API_STATUS.SUCCESS;
        return data;
      } catch (error) {
        self.createEmployeeError = "An error occurred and we were unable to create employee. Please try again.";
        self.createEmployeeStatus = API_STATUS.ERROR;
      }
    }),
    resetCreateEmployeeStatus() {
      self.createEmployeeStatus = API_STATUS.IDLE;
      self.createEmployeeError = "";
    }
  }));
