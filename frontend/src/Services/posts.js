import axios from 'axios';

// Base URL for the backend API (adjust if necessary)
const API_URL = `${process.env.REACT_APP_API_URL}/posts`;

// Create a new post
export const createPost = async (postData, token) => {
  try {
    const response = await axios.post(API_URL, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error.response.data;
  }
};

// Get all posts from followed users (Feed)
export const getFeedPosts = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/feed`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching feed posts:", error);
    throw error.response.data;
  }
};

// Get a specific user's posts
export const getUserPosts = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error.response.data;
  }
};

// Like a post
export const likePost = async (postId, token) => {
  try {
    const response = await axios.post(`${API_URL}/${postId}/like`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error liking post:", error);
    throw error.response.data;
  }
};

// Comment on a post
export const commentOnPost = async (postId, commentData, token) => {
  try {
    const response = await axios.post(`${API_URL}/${postId}/comment`, commentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error commenting on post:", error);
    throw error.response.data;
  }
};

// Delete a post
export const deletePost = async (postId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error.response.data;
  }
};