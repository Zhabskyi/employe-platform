import Helper from '@/db/helper';
import { EmployeeClient } from '@/interfaces/employee.interface';
import { Service } from 'typedi';

@Service()
export class EmployeeService {
  public async getAllEmployees(): Promise<any> {
    const sql = `SELECT * FROM employees`;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql);
    return rows.length ? rows : null;
  }

  public async createEmployee(employee: EmployeeClient): Promise<any> {
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

  public async findByAllFields(employee: EmployeeClient): Promise<any> {
    const sql = `
      SELECT * FROM employees 
      WHERE first_name = $1 
      AND last_name = $2 
      AND department = $3 
      AND salary = $4
    `;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql, [
      employee.firstName,
      employee.lastName,
      employee.department,
      employee.salary,
    ]);
    return rows.length ? rows[0] : null;
  }

  public async updateEmployee(employee: EmployeeClient, id: number): Promise<any> {
    const sql = `
      UPDATE employees 
      SET first_name = $1, last_name = $2, department = $3, salary = $4
      WHERE id = $5
      RETURNING *;
    `;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql, [
      employee.firstName,
      employee.lastName,
      employee.department,
      employee.salary,
      id,
    ]);
    return rows.length ? rows[0] : null;
  }

  public async deleteEmployee(id: number): Promise<any> {
    const sql = `
      DELETE FROM employees 
      WHERE id = $1
      RETURNING *;
    `;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql, [id]);
    return rows.length ? rows[0] : null;
  }
}
