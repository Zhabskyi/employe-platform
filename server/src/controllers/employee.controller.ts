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
}
