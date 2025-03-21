# EduLearn

## Project Overview
The **EduLearn** is a full-stack web application built with **MERN (MongoDB, Express.js, React, Node.js)** stack. This app allows users to browse books, sign up, log in, and purchase books. The frontend is developed using **React, Vite, Tailwind CSS**, while the backend is built with **Node.js, Express.js, and MongoDB**. Authentication is implemented using **bcrypt.js** for password hashing.

## Features
### Frontend
- [x] User Authentication (Signup, Login, Logout)
- [x] Responsive UI using **Tailwind CSS**
- [x] Dark Mode Support
- [x] Book Listing Page
- [x] Course Browsing Feature
- [x] API Integration with **Axios**
- [x] Client-side Routing using **React Router**

### Backend
- User Authentication (Signup & Login with Hashed Passwords using **bcrypt.js**)
- RESTful APIs for Books and Users
- MongoDB Database Integration with **Mongoose**
- CORS Enabled
- Environment Variables using **dotenv**

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (Download from: [https://nodejs.org/](https://nodejs.org/))
- **MongoDB** (Download from: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community))
- **Postman** (Download from: [https://www.postman.com/](https://www.postman.com/))

> [!TIP]
> Use **MongoDB Compass** to visually manage your database with ease.

### Backend Setup
1. Open a terminal and navigate to the `Backend/` directory:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```sh
   PORT=4001
   MongoDBURI="mongodb://localhost:27017/edulearn"
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
5. If everything is correct, the terminal should display:
   ```sh
   Server is listening on port 4001
   Connected to mongoDB
   ```

> [!WARNING]
> Ensure that **MongoDB** is running before starting the backend server to avoid connection errors.

### MongoDB Setup
- **For Local MongoDB:**
  1. Open **MongoDB Compass** or run MongoDB in the terminal:
     ```sh
     mongod
     ```
  2. Create a new database called `edulearn`.
  3. Add collections `users` and `books`.

#### Sample MongoDB Data
- **Users Collection**
  ```json
  {
    "fullname": "John Doe",
    "email": "johndoe@example.com",
    "password": "$2a$10$VbUJh1ZrXsE3/jgEmS0SOuO"
  }
  ```
- **Books Collection**
  ```json
  {
    "name": "The Great Gatsby",
    "price": 15.99,
    "category": "Fiction",
    "image": "gatsby.jpg",
    "title": "A classic novel by F. Scott Fitzgerald"
  }
  ```

> [!IMPORTANT]
> Use **bcrypt.js** to store passwords securely before inserting data into MongoDB.

### Postman API Testing
1. Open **Postman**.
2. Create a new **POST** request for user signup:
   - URL: `http://localhost:4001/user/signup`
   - Body (JSON):
     ```json
     {
       "fullname": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```
3. Click **Send** and verify the response.
4. Similarly, test login and book APIs.

> [!CAUTION]
> Do not share your **JWT tokens** or **API keys** publicly to maintain security.

### Frontend Setup
1. Open a terminal and navigate to the `Frontend/` directory:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
4. Open the browser and go to `http://localhost:5173/`.

## Project Structure
```
edulearn-app/
├── Backend/
│   ├── index.js
│   ├── .env
│   ├── controller/
│   │   ├── book.controller.js
│   │   ├── user.controller.js
│   ├── model/
│   │   ├── book.model.js
│   │   ├── user.model.js
│   ├── route/
│   │   ├── book.route.js
│   │   ├── user.route.js
│   ├── package.json
│   ├── package-lock.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── courses/
│   │   ├── home/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── .gitignore
│   ├── .eslintrc.cjs
├── README.md
```

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** bcrypt.js
- **API Testing:** Postman

## screenshot

| Home |
|------|
| ![Screenshot 2025-03-21 233822](https://github.com/user-attachments/assets/2ce7aa92-d19a-4e9e-891b-a3b05ef0d305) |

| Login | Signup |
| ------ | ----- |
| ![Screenshot 2025-03-22 001031](https://github.com/user-attachments/assets/58fc44d7-b7df-4e49-822a-eaecad70867a) | ![Screenshot 2025-03-22 000800](https://github.com/user-attachments/assets/9077dbcb-7df7-4af1-956d-7687ce81069a) |




