import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts/';

// Get all posts from the user's feed (posts of people they follow)
const getFeed = async () => {
  const res = await axios.get(API_URL + 'feed', {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Create a new post
const createPost = async (text) => {
  const res = await axios.post(API_URL, { text }, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Delete a post
const deletePost = async (postId) => {
  const res = await axios.delete(API_URL + postId, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Like a post
const likePost = async (postId) => {
  const res = await axios.post(API_URL + postId + '/like', {}, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

// Comment on a post
const commentOnPost = async (postId, commentText) => {
  const res = await axios.post(API_URL + postId + '/comment', { text: commentText }, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
  });
  return res.data;
};

const postService = {
  getFeed,
  createPost,
  deletePost,
  likePost,
  commentOnPost
};

export default postService;
