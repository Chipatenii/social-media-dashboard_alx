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

## Project Architecture

```
social-media-dashboard_alx/
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Post.js
│   │   │   └── Comment.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── layouts/
│   │   │   └── MainLayout.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── ProfilePage.js
│   │   │   └── NotFoundPage.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── postService.js
│   │   │   └── userService.js
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Auth.css
│   │   │   ├── MainLayout.css
│   │   │   ├── HomePage.css
│   │   │   └── ProfilePage.css
│   │   ├── App.js
│   │   ├── config.js
│   │   ├── index.js
│   │   └── package.json
└── README.md

```

## Usage Guidelines

1. Register a new user or login with existing credentials.
2. Create, edit, or delete posts.
3. Follow other users to see their updates in your feed.
4. Like and comment on posts.
5. Edit your profile information.

