# User-Role-Permission Backend Service

This is a backend service built with **Express.js** and **MongoDB** to manage user, role, and permission records. It provides multiple API routes to perform CRUD (Create, Read, Update, Delete) operations on user, role, and permission data. The service is designed to be used as part of a larger application where user authentication and authorization are essential.

## Features

- **User Management**: Create, read, update, and delete user records.
- **Role Management**: Create, read, update, and delete user roles.
- **Permission Management**: Create, read, update, and delete permissions assigned to users and roles.
- **MongoDB**: Uses MongoDB as the database for storing data.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [API Routes](#api-routes)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Technologies Used

- **Node.js**: Runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Body-Parser**: Middleware to parse incoming request bodies.

## API Routes

### User Routes

- `POST /api/users`  
  Create a new user.

- `GET /api/users`  
  Retrieve all users.

- `GET /api/users/:id`  
  Retrieve a user by their ID.

- `PUT /api/users/:id`  
  Update a user by their ID.

- `DELETE /api/users/:id`  
  Delete a user by their ID.

### Role Routes

- `POST /api/roles`  
  Create a new role.

- `GET /api/roles`  
  Retrieve all roles.

- `GET /api/roles/:id`  
  Retrieve a role by its ID.

- `PUT /api/roles/:id`  
  Update a role by its ID.

- `DELETE /api/roles/:id`  
  Delete a role by its ID.

### Permission Routes

- `POST /api/permissions`  
  Create a new permission.

- `GET /api/permissions`  
  Retrieve all permissions.

- `GET /api/permissions/:id`  
  Retrieve a permission by its ID.

- `PUT /api/permissions/:id`  
  Update a permission by its ID.

- `DELETE /api/permissions/:id`  
  Delete a permission by its ID.

## Installation

To get started with this project locally, follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A MongoDB instance running locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/user-role-permission-service.git
   cd user-role-permission-service
   ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

- Create a .env file in the root directory and add the following:

    ```bash
    MONGODB_URI=<Mongodb_connection_string>
    PORT=5000
    ```

- Replace Mongodb_connection_string with the actual connection string of your MongoDB database.
- Set the port to whatever you prefer (default is 5000).

4. **Run the service:**

    ```bash
    npm start
    ```

- This will start the server at http://localhost:5000.

## Usage

Once the server is running, you can interact with the API using tools like Postman or [cURL].

Here is an example of how to create a new user via a POST request:

```bash
POST http://localhost:5000/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password",
  "role": "admin"
}
```
