import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

// Register user
const register = async (name, email, password) => {
  const res = await axios.post(API_URL + 'register', { name, email, password });
  return res.data;
};

// Login user
const login = async (email, password) => {
  const res = await axios.post(API_URL + 'login', { email, password });
  
  if (res.data.token) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  return res.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Check if user is authenticated
const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user ? true : false;
};

const authService = {
  register,
  login,
  logout,
  isAuthenticated,
};

export default authService;
