import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Employee } from '@/interfaces/employee.interface';
import { EmployeeService } from '@/services/employee.service';

export class EmployeeController {
  public employee = Container.get(EmployeeService);

  public getEmployees = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllPosts: Employee[] = await this.employee.getAllEmployees();

      res.status(200).json({ data: getAllPosts, message: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employeeData: Employee = req.body;
      const createEmployeeData: Employee = await this.employee.createEmployee(employeeData);

      res.status(201).json({ data: createEmployeeData, message: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = parseInt(req.params.id);
      const employeeData: Employee = req.body;
      const updateEmployeeData: Employee = await this.employee.updateEmployee(employeeData, id);

      if (!updateEmployeeData) {
        res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json({ data: updateEmployeeData, message: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = parseInt(req.params.id);
      const updateEmployeeData = await this.employee.deleteEmployee(id);

      if (!updateEmployeeData) {
        res.status(404).json({ success: false, message: 'Employee not found' });
      }
      res.status(200).json({ data: updateEmployeeData, success: true, message: 'Employee successfully deleted' });
    } catch (error) {
      next(error);
    }
  };
}
