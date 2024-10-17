// ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/index.css';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/user'); // Replace with your API endpoint
                setUser(response.data);
            } catch (err) {
                setError('Failed to load profile data.');
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!user) {
        return <p>Loading...</p>; // Show loading message while data is being fetched
    }

    return (
        <div className="profile-container">
            <h2>{user.name}'s Profile</h2>
            <p>Email: {user.email}</p>
            <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
            {/* Add more profile fields as needed */}
        </div>
    );
};

export default ProfilePage;
