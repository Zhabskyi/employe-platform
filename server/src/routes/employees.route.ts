import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { EmployeeController } from '@/controllers/employee.controller';

export class EmployeeRoute implements Routes {
  public path = '/employees';
  public router: Router = Router();
  public employee = new EmployeeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.employee.getEmployees);
    this.router.post(`${this.path}`);
    this.router.put(`${this.path}/:id`);
    this.router.delete(`${this.path}/:id`);
  }
}
