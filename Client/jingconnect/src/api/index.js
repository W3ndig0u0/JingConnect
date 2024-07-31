import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const createPosts = async (newPost) => {
  try {
    const response = await axios.post(url, newPost);
    console.log('Post created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(url);
    console.log('Fetched posts:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message); 
    throw error;
  }
};
