import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { DepartmentController } from '@/controllers/department.controller';

export class DepartmentRoute implements Routes {
  public path = '/departments';
  public router: Router = Router();
  public departmentController = new DepartmentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.departmentController.getDepartments);
  }
}
