# Metro-Ticket-Booking-Backend

This is the backend for the Metro project, built using **Node.js, Express, and MongoDB**. It provides APIs for authentication, user management, and other functionalities.

## 🚀 Features
- User authentication (Signup & Login)
- JWT-based authentication
- MongoDB Atlas database integration
- Secure API routes
- Error handling & validation

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Token)

## 📂 Project Structure
```
📦 metro-backend
 ┣ 📂 models           # Mongoose models
 ┣ 📂 routes           # API routes
 ┣ 📂 controllers      # Business logic
 ┣ 📂 middleware       # Middleware functions
 ┣ 📂 config           # Database and server config
 ┣ 📄 server.js        # Main server file
 ┣ 📄 .env             # Environment variables (DO NOT SHARE)
 ┣ 📄 package.json     # Dependencies and scripts
 ┗ 📄 README.md        # Documentation
```

## 🏗️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/metro-backend.git
cd metro-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/metro_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```
Replace `username`, `password`, and `your_jwt_secret` with actual values.

### 4️⃣ Start the Server
#### Development Mode (with Nodemon)
```sh
npm run dev
```
#### Production Mode
```sh
npm start
```

## 🚀 Deployment
### 1️⃣ Push Code to GitHub
```sh
git add .
git commit -m "Initial commit"
git push origin main
```

### 2️⃣ Deploy on Render
- Go to [Render](https://render.com/)
- Click **New Web Service**
- Connect your GitHub repository
- Set **Build Command**: `npm install`
- Set **Start Command**: `npm start`
- Add **Environment Variables** (`MONGO_URI`, `JWT_SECRET`)
- Deploy! 🚀

## 🔗 API Endpoints
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| POST   | /api/auth/metro | Register a new user |
| POST   | /api/auth/auth  | Login user |
| POST   | /api/auth/book  | Login user |


## ✨ Author
- **Mastanvali** - [GitHub Profile](https://github.com/Mastan1432)

---

🚀 Enjoy coding & make your project live!

