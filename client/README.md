# Employee Application

This project is a microfrontend application that utilizes Docker for running the micro front-ends.

## Prerequisites

Before running the application, make sure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

## Getting Started

To run the microfrontend application using Docker, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Zhabskyi/employee-platform
```

2. Navigate to the project directory:

```bash
cd client
```

3. Build the images and starts micro front-end app on port: 3000:

```bash
docker-compose up --build
```

4. To shut down the docker container:

```bash
docker-compose down
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the micro front-end application in action.

## Screenshots

Landing page dashboard, contain links to other micro front-ends

![dahsboard](/client/screenshots/dashboard.png)

Employees app landing page

![Screenshot 2](/client/screenshots/employee-app_1.png)

EEdit employee data

![Screenshot 2](/client/screenshots/employee-app_2.png)
