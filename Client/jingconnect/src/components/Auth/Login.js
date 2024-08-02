import React from 'react';
import './auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <div className="auth-input">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="auth-input">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-link">Don't have an account? <a href="/register">Register</a></p> {/* Link to Register */}
      </div>
    </div>
  );
};

export default Login;
