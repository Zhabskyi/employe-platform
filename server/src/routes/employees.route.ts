import { Router, Response, Request, NextFunction } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { EmployeeController } from '@/controllers/employee.controller';
import SchemaMiddleware from '@/middleware/schema.middleware';
import EmployeeValidator from '@/validators/employee.validator';

export class EmployeeRoute implements Routes {
  public path = '/employees';
  public router: Router = Router();
  public employeeController = new EmployeeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.employeeController.getEmployees);
    this.router.post(this.path, this.handleEmployeeValidation, this.employeeController.createEmployee);
    this.router.put(`${this.path}/:id`, this.handleEmployeeValidation, this.employeeController.updateEmployee);
    this.router.delete(`${this.path}/:id`);
  }

  private handleEmployeeValidation(req: Request, res: Response, next: NextFunction) {
    SchemaMiddleware.handle(req, res, next, EmployeeValidator.employee());
  }
}
