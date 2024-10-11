import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Get current user's profile
const getProfile = async () => {
  const res = await axios.get(API_URL + 'me', {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Get another user's profile by ID
const getUser = async (userId) => {
  const res = await axios.get(API_URL + userId, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Update current user's profile
const updateProfile = async (profileData) => {
  const res = await axios.put(API_URL + 'me', profileData, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Follow a user
const followUser = async (userId) => {
  const res = await axios.post(API_URL + userId + '/follow', {}, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Unfollow a user
const unfollowUser = async (userId) => {
  const res = await axios.post(API_URL + userId + '/unfollow', {}, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

const userService = {
  getProfile,
  getUser,
  updateProfile,
  followUser,
  unfollowUser
};

export default userService;
