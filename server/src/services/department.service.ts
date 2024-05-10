import Helper from '@/db/helper';
import { Service } from 'typedi';

@Service()
export class DepartmentService {
  public async getAllDepartments(): Promise<any> {
    const sql = `SELECT * FROM departments`;
    const pool = Helper.pool();
    const { rows } = await pool.query(sql);
    return rows.length ? rows : null;
  }
}
