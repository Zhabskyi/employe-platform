import { Employee, EmployeeClient } from '@/interfaces/employee.interface';

export const mapEmployeeData = (data: Employee[]): EmployeeClient[] => {
  return data.map((employee: Employee) => {
    const { first_name, last_name, ...rest } = employee;
    return {
      firstName: first_name,
      lastName: last_name,
      ...rest,
    };
  });
};

export const mapSingleEmployeeData = (data: Employee): EmployeeClient => {
  const { first_name, last_name, ...rest } = data;
  return {
    firstName: first_name,
    lastName: last_name,
    ...rest,
  };
};
