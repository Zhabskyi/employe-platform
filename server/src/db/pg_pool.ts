'use strict';

import pg from 'pg';
import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

const types = pg.types;
const timestamp_OID = 1114;

const parseDates = (val: string) => new Date(Date.parse(val + '+0000'));

types.setTypeParser(timestamp_OID, parseDates);

export default class PGPool {
  pool: pg.Pool;

  constructor() {
    this.pool = new pg.Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '5432'),
    });
  }

  async query(sqlText: string, params: any[] = []): Promise<pg.QueryResult<any>> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(sqlText, params);

      return result;
    } catch (e) {
      throw e;
    } finally {
      client.release();
    }
  }
}
