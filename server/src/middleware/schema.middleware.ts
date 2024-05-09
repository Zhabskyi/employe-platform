import { HttpException } from '@/exceptions/HttpException';
import { EmployeeService } from '@/services/employee.service';
import { Response, Request, NextFunction } from 'express';
import * as Joi from 'joi';
import Container from 'typedi';

class SchemaMiddleware {
  static employee = Container.get(EmployeeService);

  public static async handle(req: Request, _res: Response, next: NextFunction, Validator: any) {
    try {
      if (Validator) {
        await Validator.validateAsync(req.body);
      }

      const { firstName, lastName } = req.body;
      const existingEmployee = await this.employee.findByNames(firstName, lastName);
      if (existingEmployee) {
        next(new HttpException(409, 'An employee with this fist and last name already exists.'));
      }
      return next();
    } catch (error: Joi.ValidationError | any) {
      if (error instanceof Joi.ValidationError) {
        next(new HttpException(400, error.details[0].message));
      } else {
        next(new HttpException(400, 'An unexpected error occurred'));
      }
    }
  }
}

export default SchemaMiddleware;
