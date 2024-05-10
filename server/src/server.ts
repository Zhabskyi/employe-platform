import { App } from './app';
import { DepartmentRoute } from './routes/department.route';
import { ValidateEnv } from './utilities/validateEnv';
import { EmployeeRoute } from '@routes/employees.route';

ValidateEnv();

const app = new App([new EmployeeRoute(), new DepartmentRoute()]);

app.listen();
