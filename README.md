# Login/Register Project
---
## Description
This is a full-stack **Login/Register web application** built with **Node.js**, **Express**, **MongoDB**, and a simple frontend using **HTML, CSS, and JavaScript**.  

It allows users to:
- Register with name, email, and password  
- Login with email and password  
- Securely store user data in MongoDB  

This project is ideal for learning **full-stack development** and showcasing in your portfolio.

---

## Features
- User Registration and Login  
- Password hashing using bcrypt  
- JWT-based authentication (optional)  
- MongoDB database storage  
- Responsive and simple frontend  

---

## Project Structure
login-app/
├─ backend/
│ ├─ config/
│ │ └─ db.js # MongoDB connection
│ ├─ controllers/
│ │ └─ authController.js # Login/Register logic
│ ├─ models/
│ │ └─ User.js # User schema
│ ├─ routes/
│ │ └─ authRoutes.js # API routes for authentication
│ ├─ package.json
│ ├─ package-lock.json
│ └─ server.js # Express server setup
├─ frontend/
│ ├─ index.html # Login/Register UI
│ └─ css/
│ └─ style.css # Frontend styling
├─ .gitignore # Ignore node_modules and .env
└─ README.md # Project documentation


---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/subhadipr/login-app.git
cd login-app/backend

2. Install dependencies
bash - npm install

3. Create .env file

Create a .env file in backend/ folder with the following content:

MONGO_URI=mongodb://127.0.0.1:27017/loginDB
PORT=5000
JWT_SECRET=your-secret-key

4. Run the server
bash - npm run dev

5. Open frontend

Open frontend/index.html in your browser.

--------------------

Technologies Used

Node.js

Express.js

MongoDB & Mongoose

HTML, CSS, JavaScript

bcrypt (for password hashing)

dotenv (for environment variables)

cors (Cross-Origin Resource Sharing)
-----------

Author

Subhadip Roy
GitHub: https://github.com/subhadipr
