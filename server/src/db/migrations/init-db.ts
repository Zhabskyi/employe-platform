import Helper from '../helper';

const queryDrop = `
DROP TABLE IF EXISTS employees;
`;

const queryCreate = `
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  department VARCHAR(255) NOT NULL,
  salary NUMERIC NOT NULL
);
`;

const querySeed = `
INSERT INTO employees (first_name, last_name, department, salary) VALUES
('Lewis', 'Burson', 'Sales', 40700),
('Ian', 'Malcolm', 'Marketing', 70000),
('Ellie', 'Sattler', 'HR', 102000),
('Dennis', 'Nedry', 'IT', 52000),
('John', 'Hammond', 'Finance', 89600),
('Ray', 'Arnold', 'Finance', 45000),
('Laura', 'Burnett', 'IT', 80000);
`;

const dropTable = async () => {
  try {
    const pool = Helper.pool();
    await pool.query(queryDrop);
    await pool.query(queryCreate);
    await pool.query(querySeed);
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

dropTable();
