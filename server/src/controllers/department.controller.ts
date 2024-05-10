import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { DepartmentService } from '@/services/department.service';
import { Department } from '@/interfaces/department.interface';

export class DepartmentController {
  public department = Container.get(DepartmentService);

  public getDepartments = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Department[] = await this.department.getAllDepartments();

      res.status(200).json({ data: data, message: 'departments', success: true });
    } catch (error) {
      next(error);
    }
  };
}
