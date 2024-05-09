import Helper from '@/db/helper';
import { Service } from 'typedi';

@Service()
export class EmployeeService {
  public async getAllEmployees(): Promise<any> {
    const sql = `SELECT * FROM employees`;
    const pool = Helper.pool();
    const query_results = await pool.query(sql);
    return query_results.rows;
  }

  public async createEmployee(employee: any): Promise<any> {
    const sql = `INSERT INTO employees 
    (first_name, last_name, department, salary) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *`;
    const pool = Helper.pool();
    const query_results = await pool.query(sql, [
      employee.firstName,
      employee.lastName,
      employee.department,
      employee.salary,
    ]);
    return query_results.rows[0];
  }
}
