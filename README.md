# Social Media Dashboard

## Overview
This is a social media dashboard where users can post updates, follow others, and view a feed. Users can like, comment, and create profiles.

## Features
- User authentication (signup/login)
- Post creation and deletion
- Follow other users
- Like and comment on posts
- View user profiles and updates
- Edit profiles

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Backend
1. Navigate to the `backend/` folder.
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
4. Run the backend: `npm run dev`

### Frontend
1. Navigate to the `frontend/` folder.
2. Install dependencies: `npm install`
3. Run the frontend: `npm start`

## API Endpoints

### Auth
- **POST /api/auth/signup** - Register a new user
- **POST /api/auth/login** - Login a user


social-media-dashboard_alx/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── Post.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Feed.js
│   │   │   ├── Post.js
│   │   │   ├── Profile.js
│   │   │   ├── Signup.js
│   │   │   ├── Login.js
│   │   └── services/
│   │   └── App.js
│   ├── public/
│   │   └── index.html
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
