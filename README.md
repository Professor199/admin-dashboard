# Admin Dashboard (Vite + React)

## Overview
This is an **Admin Dashboard** built with **Vite, React, React Router, Context API, Ant Design, Axios, and JSON Server**. It includes authentication, role-based access control (RBAC), and a user management system.

## Features
- 🔐 **Authentication (Login/Logout)** using Context API & JSON Server
- 🎨 **Admin Dashboard** with user-specific views
- 📜 **Private Routes** (only authenticated users can access)
- 🛠️ **Role-Based Access Control (RBAC)** for different user roles (Admin, User)
- 🏗️ **Built with Vite for fast development**

## Tech Stack
- **Frontend:** React, Vite, React Router, Context API, Ant Design
- **Backend:** JSON Server (Mock API)
- **State Management:** Context API
- **HTTP Requests:** Axios
- **Form Handling & Validation:** Formik & Yup
- **Notifications:** React Toastify

## Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the JSON Server (Mock Backend)
```sh
npx json-server --watch db.json --port 5000
```

### 4️⃣ Start the React App
```sh
npm run dev
```

## Project Structure
```
admin-dashboard/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
|   |   |---UserContext.jsx
│   ├── App.jsx
│   ├── main.jsx
├── db.json  # Mock database
├── README.md
```

## Authentication Flow
1. User logs in using **email/password**.
2. Credentials are validated against **JSON Server (db.json)**.
3. On successful login, the user is **redirected to the Dashboard**.
4. User session is stored in **localStorage** for persistence.
5. Logout clears the session and redirects to the **Login page**.

## Routes
| Path          | Component   | Access |
|--------------|------------|--------|
| `/login`     | Login      | Public |
| `/dashboard` | Dashboard  | Private |
| `/users`     | Users Page | Private (Admin) |

## Screenshots
### Login Page
![Login Page](https://via.placeholder.com/400)

### Dashboard
![Dashboard](https://via.placeholder.com/400)

## Contributors
- **Your Name** - [GitHub Profile](https://github.com/your-username)

## License
MIT License © 2025

