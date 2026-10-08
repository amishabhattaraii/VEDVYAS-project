# VEDVYAS - Student Management System

VEDVYAS is a full-stack Student Management System designed to manage students, teachers, courses, enrollments, and academic performance through a web-based application.

## Features

- User authentication and authorization
- Role-based access control
- Student registration and profile management
- Student dashboard
- Teacher management
- Course management
- Course enrollment
- Academic performance management
- Admin dashboard
- Protected routes
- RESTful backend APIs
- MongoDB database integration
- React-based frontend

## Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- JavaScript
- REST API

### Database
- MongoDB
- Mongoose


## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB or a MongoDB Atlas account
- Git

You can verify Node.js and npm with:

bash
node --version
npm --version


## Installation

### 1. Clone the repository

bash
git clone https://github.com/amishabhattaraii/VEDVYAS-project.git
cd VEDVYAS-project


### 2. Backend setup

Open a terminal in the project folder and run:

bash
cd backend
npm install


Create a `.env` file inside the `backend` folder:

env
MONGO_URI=your_mongodb_connection_string
PORT=5000


Replace `your_mongodb_connection_string` with your MongoDB connection string.

Then start the backend:

bash
node server.js


The backend will run at:

text
http://localhost:5000


You can also check the API root:

text
http://localhost:5000/


A successful response should indicate:

text
VedVyas API is running!


### 3. Frontend setup

Open a new terminal and return to the project root:

bash
cd frontend
npm install


Start the development server:

bash
npm run dev


Vite will provide a local URL, normally:

text
http://localhost:5173


Open that URL in your browser.

## Database Configuration

The backend uses Mongoose to connect to MongoDB through the `MONGO_URI` environment variable.

The database connection is configured in:

text
backend/config/db.js


The actual `.env` file is intentionally excluded from GitHub to protect database credentials.



## Running the Complete Application

Run the backend and frontend in separate terminals.

### Terminal 1

bash
cd backend
npm install
node server.js


### Terminal 2

bash
cd frontend
npm install
npm run dev


Then open the frontend URL provided by Vite.

## Security

Sensitive configuration such as MongoDB credentials is stored in environment variables and is not committed to the repository.

The project also uses authentication middleware and role-based middleware to protect restricted resources.

## Development

This project is currently configured for local development. Before production deployment, additional production configuration such as secure environment variables, deployment settings, HTTPS, and production database configuration can be added.

## Author

**VEDVYAS Project**

GitHub Repository:

https://github.com/amishabhattaraii/VEDVYAS-project
