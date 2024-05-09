import Helper from '@/db/helper';
import { Employee } from '@/interfaces/employee.interface';
import { Service } from 'typedi';

@Service()
export class EmployeeService {
  public async getAllEmployees(): Promise<any> {
    const sql = `SELECT * FROM employees`;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql);
    return rows.length ? rows : null;
  }

  public async createEmployee(employee: Employee): Promise<any> {
    const sql = `INSERT INTO employees 
    (first_name, last_name, department, salary) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *`;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql, [
      employee.firstName,
      employee.lastName,
      employee.department,
      employee.salary,
    ]);
    return rows.length ? rows[0] : null;
  }

  public async findByNames(firstName: string, lastName: string): Promise<any> {
    const sql = `
      SELECT * FROM employees WHERE first_name = $1 AND last_name = $2;
    `;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql, [firstName, lastName]);
    return rows.length ? rows[0] : null;
  }
}
