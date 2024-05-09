import Helper from '../helper';

const createTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS employees (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      department VARCHAR(255) NOT NULL,
      salary NUMERIC NOT NULL
    );
  `;

  try {
    const pool = Helper.pool();
    await pool.query(queryText);
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

const seedTable = async () => {
  const queryText = `
  INSERT INTO employees (first_name, last_name, department, salary) VALUES
  ('Lewis', 'Burson', 'Sales', 40700),
  ('Ian', 'Malcolm', 'Marketing', 70000),
  ('Ellie', 'Sattler', 'HR', 102000),
  ('Dennis', 'Nedry', 'IT', 52000),
  ('John', 'Hammond', 'Finance', 89600),
  ('Ray', 'Arnold', 'Finance', 45000),
  ('Laura', 'Burnett', 'IT', 80000);
  `;

  try {
    const pool = Helper.pool();
    await pool.query(queryText);
    console.log('Table data pre-populated successfully');
  } catch (err) {
    console.error('Error seeding data table:', err);
  }
};

createTable();
seedTable();
