import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const Profile = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await userService.getUser(match.params.id);
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [match.params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      {/* Display user posts */}
    </div>
  );
};

export default Profile;
