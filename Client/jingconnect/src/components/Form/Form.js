import React, { useState } from 'react';
import { createPosts } from '../../api';
import '../../styles.css';

const Form = () => {
  const [post, setPost] = useState({
    title: '',
    message: '',
    creator: '',
    selectedFile: '',
    likeCount: 0,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { ...post };
      await createPosts(newPost);
      setSuccess(true);
      setError(null);
      setPost({
        title: '',
        message: '',
        creator: '',
        selectedFile: '',
        likeCount: 0,
      });
    } catch (err) {
      setError('Failed to create post. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Create Post</h1>
        {success && <p className="success-message">Post created successfully!</p>}
        {error && <p className="error-message">{error}</p>}
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={post.title} 
            onChange={(e) => setPost({ ...post, title: e.target.value })} 
          />
        </div>
        <div>
          <label>Creator</label>
          <input 
            type="text" 
            value={post.creator} 
            onChange={(e) => setPost({ ...post, creator: e.target.value })} 
          />
        </div>
        <div>
          <label>Message</label>
          <textarea 
            value={post.message} 
            onChange={(e) => setPost({ ...post, message: e.target.value })} 
          />
        </div>
        <div>
          <label>Image URL</label>
          <input 
            type="text" 
            value={post.selectedFile} 
            onChange={(e) => setPost({ ...post, selectedFile: e.target.value })} 
          />
        </div>
        <div>
          <label>Likes</label>
          <input 
            type="number" 
            value={post.likeCount} 
            onChange={(e) => setPost({ ...post, likeCount: parseInt(e.target.value, 10) })} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
