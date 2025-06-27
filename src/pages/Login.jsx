import React, { useState } from 'react';
import { Film, Eye, EyeOff, Star, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.scss';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('classicUser'));
    let valid = true;

    setEmailError('');
    setPasswordError('');

    if (!storedUser || storedUser.email !== formData.email) {
      setEmailError('Invalid or unregistered email address');
      valid = false;
    }

    if (!storedUser || storedUser.password !== formData.password) {
      setPasswordError('Incorrect password');
      valid = false;
    }

    if (valid) {
      toast.success('🎬 Login successful!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-frame"></div>
        <div className="login-frame-inner"></div>

        <div className="login-content">
          {/* Header */}
          <div className="login-header">
            <div className="login-header-top">
              <Film className="film-icon" />
              <h2 className="login-title">WELCOME BACK</h2>
            </div>
            <p className="login-subtitle">Login</p>
            <div className="login-divider"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Field */}
            <div className="form-group">
              <label className="form-label">EMAIL ADDRESS</label>
              <div className="form-input-wrapper">
                <Mail className="form-icon" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
              {emailError && <p className="error-message">{emailError}</p>}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">PASSWORD</label>
              <div className="form-input-wrapper password-wrapper">
                <Lock className="form-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && <p className="error-message">{passwordError}</p>}
            </div>

            {/* Options */}
            <div className="login-options">
              <label className="remember-label"></label>
              <button
                type="button"
                className="forgot-password-btn"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          {/* Divider with icon */}
          <div className="login-divider-with-icon">
            <div className="divider-line"></div>
            <Star className="divider-icon" />
            <div className="divider-line"></div>
          </div>

          {/* Sign up Link */}
          <div className="signup-redirect">
            New to Login?
            <button onClick={() => navigate('/')} className="signup-link">
              Signup page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
