import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Film } from 'lucide-react';
import '../css/Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find((user) => user.email === email && user.password === password);

    if (matchedUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="film-strip left">
          {[...Array(6)].map((_, i) => <div className="film-hole" key={i} />)}
        </div>
        <div className="film-strip right">
          {[...Array(6)].map((_, i) => <div className="film-hole" key={i} />)}
        </div>

        <div className="login-frame" />
        <div className="login-frame-inner" />

        <div className="login-content">
          <div className="login-header">
            <div className="login-header-top">
              <Film className="film-icon" />
              <h2 className="login-title">Classic Cinema</h2>
            </div>
            <p className="login-subtitle">Welcome back to the golden era</p>
            <div className="login-divider" />
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="form-input-wrapper">
                <User className="form-icon" />
                <input
                  type="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="form-input-wrapper">
                <Lock className="form-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="eye-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label="Toggle Password Visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>

            <div className="login-options">
              <label className="remember-label">
                
              </label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="forgot-password-btn"
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="login-divider-with-icon">
            <div className="divider-line" />
            <Film className="divider-icon" size={16} />
            <div className="divider-line" />
          </div>

          <div className="signup-redirect">
            Don’t have an account?
            <span
              onClick={() => navigate('/')}
              className="signup-link"
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
