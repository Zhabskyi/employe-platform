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
}
