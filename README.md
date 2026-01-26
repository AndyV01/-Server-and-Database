# Node.js Backend Server – Express & PostgreSQL

Backend server built with **Node.js** and **Express**, connected to a **PostgreSQL** database using **Sequelize ORM**.  
This project is part of a full-stack application and is currently used to apply and practice modern **CI/CD workflows**.

---

## Overview

This backend provides REST APIs to support an e-commerce platform, handling business logic, data persistence, and integration with a React frontend.

The project has been updated to include **Continuous Integration (CI)** using **GitHub Actions**, focusing on code quality, reliability, and professional development best practices.

---

## Tech Stack

- Node.js  
- Express  
- PostgreSQL  
- Sequelize ORM  
- JavaScript  
- ESLint  
- GitHub Actions (CI/CD)

---

## Project Structure
# Node.js Backend Server – Express & PostgreSQL

Backend server built with **Node.js** and **Express**, connected to a **PostgreSQL** database using **Sequelize ORM**.  
This project is part of a full-stack application and is currently used to apply and practice modern **CI/CD workflows**.

---

## Overview

This backend provides REST APIs to support an e-commerce platform, handling business logic, data persistence, and integration with a React frontend.

The project has been updated to include **Continuous Integration (CI)** using **GitHub Actions**, focusing on code quality, reliability, and professional development best practices.

---

## Tech Stack

- Node.js  
- Express  
- PostgreSQL  
- Sequelize ORM  
- JavaScript  
- ESLint  
- GitHub Actions (CI/CD)

---

## Project Structure
/src
├── routes
├── controllers
├── models
├── config
└── index.js

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all project dependencies.

---

### `npm start`

Runs the server in production mode.

The API will be available at:

http://localhost:4000

yaml
Copiar código

---

### `npm run dev`

Runs the server in development mode using **nodemon**.

---

### `npm run lint`

Runs **ESLint** to validate code quality and enforce coding standards.

---

### `npm test`

Runs basic test validation (reserved for future automated tests).

---

## CI/CD Pipeline

This project uses **GitHub Actions** to implement a **Continuous Integration (CI)** pipeline.

### Pipeline steps:

- Checkout repository
- Install dependencies (`npm install`)
- Run ESLint (`npm run lint`)
- Run tests
- Validate backend build and startup

### Pipeline triggers:

- Push to `main`
- Pull requests targeting `main`

This ensures code quality, prevents regressions, and validates backend stability before changes are merged.

---

## Frontend Integration

This backend is consumed by the React frontend application available at:

https://github.com/AndyV01/FrontEndReact

---

## Database

- PostgreSQL database
- Managed using **Sequelize ORM**
- Models and relationships defined within the project

---

## Project Status

🚧 Legacy backend project  
🔧 Actively maintained to practice **CI/CD**, backend architecture, and professional workflows.