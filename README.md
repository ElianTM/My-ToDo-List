# 📝 To-Do List API

A RESTful API developed with Node.js for personal task management. The system features secure authentication via JWT, ensuring that each user manages their own tasks privately.

## 🚀 Technologies Used

- **Node.js** (Runtime)
- **Express** (Web Framework)
- **MongoDB & Mongoose** (NoSQL Database)
- **JWT (JsonWebToken)** (Authentication & Security)
- **Bcrypt** (Password Hashing)
- **Dotenv** (Environment Variable Management)

## ✨ Features

- [x] **User Registration:** Secure account creation with hashed passwords.
- [x] **Login & Authentication:** JWT generation for secure access.
- [x] **Task CRUD:** Create, Read, Update, and Delete tasks.
- [x] **Privacy:** Users can only view and edit their own tasks.
- [x] **Security:** Protected routes via Authentication Middleware.

---

## 🛠️ API Documentation (Routes)

### 🔐 Authentication (Public Access)

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/usuarios/cadastro` | Registers a new user. |
| `POST` | `/usuarios/login` | Authenticates user and returns a JWT Token. |

### 📝 Tasks (Protected - Requires JWT Token)
*Include the token in the request header: `Authorization: Bearer <your_token>`*

| Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/tarefas` | List all tasks for the logged-in user (Supports pagination). |
| `POST` | `/tarefas` | Create a new task for the logged-in user. |
| `PUT` | `/tarefas/:id` | Update an existing task (Only if owned by user). |
| `DELETE` | `/tarefas/:id` | Remove a task (Only if owned by user). |

---

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ElianTM/My-ToDo-List.git](https://github.com/ElianTM/My-ToDo-List.git)
