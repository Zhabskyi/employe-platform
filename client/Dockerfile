# NodeJS Version 20
FROM node:20.12-buster-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json files and install dependencies
COPY orchestrator/package.json ./orchestrator/package.json
COPY dashboard/package.json ./dashboard/package.json
COPY employee-app/package.json ./employee-app/package.json
RUN pnpm recursive install

# Bundle app source
COPY orchestrator/ ./orchestrator/
COPY dashboard/ ./dashboard/
COPY employee-app/ ./employee-app/

# Expose ports (3000 for orchestrator, 3001 for dashboard, 3002 for employee-app)
EXPOSE 3000 3001 3002

# Start all apps
CMD pnpm --prefix ./orchestrator start & pnpm --prefix ./dashboard start & pnpm --prefix ./employee-app start