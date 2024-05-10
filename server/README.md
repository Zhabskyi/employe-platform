TypeScript Express Postgres SQL app

## Getting Started

To run the server application using Docker, follow these steps:

1. Navigate to the project directory:

```bash
cd server
```

2. Build the images and starts server app on port: 8080:

```bash
docker-compose up --build
```

3. To shut down the docker container:

```bash
docker-compose down
```

4. All API calls directed to [http://localhost:3000](http://localhost:8080)

## Api

### Employees

`GET /employees`

Response

```json
{
  "data": [
    {
      "firstName": "Ian",
      "lastName": "Malcolm",
      "id": 2,
      "department": "Marketing",
      "salary": "70000"
    },
    {
      "firstName": "Ellie",
      "lastName": "Sattler",
      "id": 3,
      "department": "HR",
      "salary": "102000"
    }
  ],
  "message": "success",
  "success": true
}
```

`POST /employees`

Request body

```json
{
  "firstName": "Mark",
  "lastName": "Dow",
  "department": "Sales",
  "salary": 43222
}
```

Response

```json
{
  "data": {
    "firstName": "Mark",
    "lastName": "Dow",
    "id": 12,
    "department": "Sales",
    "salary": "43222"
  },
  "message": "success",
  "success": true
}
```

`PUT /employees/:id`

Request body

```json
{
  "firstName": "Mark",
  "lastName": "Dow",
  "department": "Sales",
  "salary": 43222
}
```

Response

```json
{
  "data": {
    "firstName": "Mike",
    "lastName": "Dow",
    "id": 12,
    "department": "Sales",
    "salary": "49222"
  },
  "message": "Employee updated",
  "success": true
}
```

`DELETE /employees/:id`

Response

```json
{
  "data": {
    "firstName": "Mike",
    "lastName": "Dow",
    "id": 12,
    "department": "Sales",
    "salary": "49222"
  },
  "success": true,
  "message": "Employee successfully deleted"
}
```

### Departments

`GET /departments`

Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "Finance"
    },
    {
      "id": 2,
      "name": "HR"
    },
    {
      "id": 3,
      "name": "IT"
    },
    {
      "id": 4,
      "name": "Marketing"
    },
    {
      "id": 5,
      "name": "Sales"
    }
  ],
  "message": "departments",
  "success": true
}
```
