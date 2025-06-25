import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Star, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password.length !== 8) {
      alert('Password must be exactly 8 characters.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      localStorage.setItem('classicUser', JSON.stringify({ name, email, password }));
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <div className="signup-branding">
          <img src="/assets/images/logo.png" alt="Classic OTT Logo" className="classic-logo" />
          <h1 className="logo-text">Classic Cinema</h1>
        </div>

        <div className="reel-frame">
          <img src="/images/casablanca.jpg" alt="Casablanca" />
          <img src="/images/gonewithwind.jpg" alt="Gone With the Wind" />
          
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-modal">
          
          <div className="signup-frame"></div>
          <div className="signup-frame-inner"></div>

          <div className="signup-content">
            <div className="signup-header">
              <div className="signup-header-top">
                
                <h2 className="signup-title">signup</h2>
              </div>
            
              <div className="signup-divider"></div>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label className="form-label">FULL NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <div className="form-input-wrapper">
                  <Mail className="form-icon" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">CREATE PASSWORD</label>
                <div className="form-input-wrapper">
                  <Lock className="form-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="8 characters only"
                    minLength={8}
                    maxLength={8}
                    required
                  />
                  <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">CONFIRM PASSWORD</label>
                <div className="form-input-wrapper">
                  <Lock className="form-icon" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Re-enter password"
                    minLength={8}
                    maxLength={8}
                    required
                  />
                  <span className="eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <EyeOff /> : <Eye />}
                  </span>
                </div>
              </div>

              <button type="submit" className="signup-button">Signup</button>
            </form>

            <div className="signup-divider-with-icon">
              <div className="divider-line"></div>
              <Star className="divider-icon" />
              <div className="divider-line"></div>
            </div>

            <div className="login-redirect">
              Already has login?{' '}
              <button onClick={() => navigate('/login')} className="login-link">
                Log In 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
