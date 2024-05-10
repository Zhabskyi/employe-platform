import { API_STATUS } from "../../api/apiStatus";
import { getEmployeesAPI } from "../../api/departmentsAPI";
import { flow, Instance, types } from "mobx-state-tree";

export const Department = types.model({
  id: types.number,
  name: types.string
});

export type IDepartment = Instance<typeof Department>;

export const Departments = types
  .model({
    departments: types.array(Department),
    departmentsStatus: types.optional(types.enumeration(Object.values(API_STATUS)), API_STATUS.IDLE),
    departmentsError: types.optional(types.string, "")
  })
  .views((self) => ({
    get departmentsData() {
      return self.departments;
    },
    get departmentsStatusState() {
      return self.departmentsStatus;
    },
    get departmentErrorMessage() {
      return self.departmentsError;
    }
  }))
  .actions((self) => ({
    getEmployeesAPI: flow(function* getEmployees() {
      self.departmentsStatus = API_STATUS.LOADING;

      try {
        const data = yield getEmployeesAPI();
        self.departments = data.data;
        self.departmentsStatus = API_STATUS.SUCCESS;
      } catch (error) {
        self.departmentsError =
          error?.message || "An error occurred and we were unable to retrieve departments list. Please try again.";
        self.departmentsStatus = API_STATUS.ERROR;
      }
    })
  }));
