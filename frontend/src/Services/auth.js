import axios from 'axios';

export const login = (email, password) => {
  return axios.post('/api/auth/login', { email, password });
};

export const signup = (name, email, password) => {
  return axios.post('/api/auth/signup', { name, email, password });
};