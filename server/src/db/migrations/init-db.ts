import Helper from '../helper';

const queryDrop = `
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;
`;

const queryCreateEmployees = `
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  department VARCHAR(255) NOT NULL,
  salary NUMERIC NOT NULL
);
`;

const queryCreateDepartments = `
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
`;

const querySeedEmployees = `
INSERT INTO employees (first_name, last_name, department, salary) VALUES
('Lewis', 'Burson', 'Sales', 40700),
('Ian', 'Malcolm', 'Marketing', 70000),
('Ellie', 'Sattler', 'HR', 102000),
('Dennis', 'Nedry', 'IT', 52000),
('John', 'Hammond', 'Finance', 89600),
('Ray', 'Arnold', 'Finance', 45000),
('Laura', 'Burnett', 'IT', 80000);
`;

const querySeedDepartments = `
INSERT INTO departments (name) VALUES
('Finance'),
('HR'),
('IT'),
('Marketing'),
('Sales');
`;

const dropTable = async () => {
  try {
    const pool = Helper.pool();
    await pool.query(queryDrop);
    await pool.query(queryCreateEmployees);
    await pool.query(queryCreateDepartments);
    await pool.query(querySeedEmployees);
    await pool.query(querySeedDepartments);
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};

dropTable();
