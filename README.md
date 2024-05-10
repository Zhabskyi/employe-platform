# Employee Platform

Employee Table web application.

- Implemented the following CRUD operations
  - Edit an employee
    - The department field is dropdown, with its values pulled from the database
  - Delete an employee
  - Create a new employee
  - Validations added on server and client

## Getting Started

1. Navigate to the client directory:

```bash
cd client
```

2. Build the images and starts micro front-end app on port: 3000:

```bash
docker-compose up --build
```

3. From root navigate to the server directory:

```bash
cd server
```

4. Build the images and starts server app on port: 8080:

```bash
docker-compose up --build
```

5. App up and running on [http://localhost:3000](http://localhost:3000)

## Alternative way to start application

### Starting server using environment variables

1. Start locally pgAdmin4. You need to set up your local environment variables for development. Add the following configurations to `.env.development.local` file:

```plaintext
# DATABASE CONFIGURATION
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourPassword
DB_PORT=5432
DB_DATABASE=postgres
```

2. Install dependencies

```bash
pnpm install
```

3. Inside server folder run command:

```bash
pnpm run dev
```

### Starting client

1. Navigate to orchestrator repository

```bash
cd client/orchestrator
```

2. Install dependencies

```bash
pnpm install
```

3. Start the server on port 3000:

```bash
pnpm run start
```

## Client Dependencies

- React
- Material UI
- single-spa
- Ag-Grid
- React-Hook-Forms
- MobX
- react-router
- zod
- motion

## Server Dependencies

- Express
- Bcrypt
- Cors
- Helmet
- Dotenv
- Joi
- pg
- morgan
- typedi

### More information can be founded in README files in client and server repos accordingly
