import { HttpException } from '@/exceptions/HttpException';
import { replaceBackSlash } from '@/utilities/stringHelpers';
import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  public static handle(err: any, _req: Request, res: Response, _next: NextFunction): void {
    if (err instanceof HttpException) {
      res.status(err.status).json({ success: false, message: replaceBackSlash(err.message) });
    } else {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
}
