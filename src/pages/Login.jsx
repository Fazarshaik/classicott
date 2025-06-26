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
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('classicUser'));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      toast.success('🎬 Login successful!');
      // Redirect to profile page after successful login
      navigate('/profile');
    } else {
      toast.error('❌ Invalid email or password');
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        {/* Frame border layers */}
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
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">PASSWORD</label>
              <div className="form-input-wrapper password-wrapper">
                <Lock className="form-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
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
            </div>

            {/* Options */}
            <div className="login-options">
              <label className="remember-label">
          
              
              </label>
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
            <button onClick={() => navigate('/signup')} className="signup-link">
              Signup page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
