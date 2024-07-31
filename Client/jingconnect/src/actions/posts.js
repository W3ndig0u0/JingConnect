import * as api from '../api';

export const createPost = async (post) => {
  try {
    const { data } = await api.createPosts(post);
    return data;
  } catch (error) {
    console.error('Failed to create post:', error);
    throw error;
  }
};
