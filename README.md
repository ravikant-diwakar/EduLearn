# EduLearn

## Project Overview
The **EduLearn** is a full-stack web application built with **MERN (MongoDB, Express.js, React, Node.js)** stack. This app allows users to browse books, sign up, log in, and purchase books. The frontend is developed using **React, Vite, Tailwind CSS**, while the backend is built with **Node.js, Express.js, and MongoDB**. Authentication is implemented using **bcrypt.js** for password hashing.

## Features
### Frontend
- User Authentication (Signup, Login, Logout)
- Responsive UI using **Tailwind CSS**
- Dark Mode Support
- Book Listing Page
- Course Browsing Feature
- API Integration with **Axios**
- Client-side Routing using **React Router**

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
│   ├── model/
│   ├── route/
│   └── package.json
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── tailwind.config.js
│   ├── package.json
│   └── vite.config.js
```

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** bcrypt.js
- **API Testing:** Postman

## Conclusion
This **EduLearn** app is a complete full-stack project that helps users browse books, authenticate, and manage their accounts. It follows best practices for authentication, API handling, and UI/UX design.

For any queries, feel free to reach out. 🚀

