// authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth'; // Update based on your backend setup

const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error('Registration failed.');
    }
};

export default { login, register };
