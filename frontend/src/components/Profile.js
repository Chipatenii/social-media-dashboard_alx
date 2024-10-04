import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const Profile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userId = match.params.userId;
    axios.get(`/api/users/${userId}`)
      .then(response => {
        setUser(response.data);
        return axios.get(`/api/users/${userId}/posts`);
      })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, [match.params.userId]);

  return (
    <div className="profile">
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      )}
      <h3>Posts</h3>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Profile;
