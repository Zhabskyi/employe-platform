import { App } from './app';
import { ValidateEnv } from './utilities/validateEnv';

ValidateEnv();

const app = new App([]);

app.listen();
