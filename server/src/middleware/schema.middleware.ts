import { HttpException } from '@/exceptions/HttpException';
import { Response, Request, NextFunction } from 'express';
import * as Joi from 'joi';

class SchemaMiddleware {
  public static async handle(req: Request, _res: Response, next: NextFunction, Validator: any) {
    try {
      if (Validator) {
        await Validator.validateAsync(req.body);
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
