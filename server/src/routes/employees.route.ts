import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';

export class PostRoute implements Routes {
  public path = '/posts';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`);
    this.router.post(`${this.path}`);
    this.router.put(`${this.path}/:id`);
    this.router.delete(`${this.path}/:id`);
  }
}
