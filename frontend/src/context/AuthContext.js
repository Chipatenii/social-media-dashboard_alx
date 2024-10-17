// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to hold the authenticated user
    const [loading, setLoading] = useState(true); // State to manage loading status

    // Simulate user authentication status check (e.g., fetching user info from an API)
    useEffect(() => {
        const fetchUser = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem('user'));
            if (loggedInUser) {
                setUser(loggedInUser);
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    // Function to log in the user
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Save user info in localStorage
    };

    // Function to log out the user
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user info from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export the AuthContext for use in other components
export { AuthContext };
