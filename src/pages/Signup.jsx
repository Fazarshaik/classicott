
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword } = formData;

    if (!name.trim()) newErrors.name = 'Full name is required.';
    if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Enter a valid email.';
    if (password.length !== 8) newErrors.password = 'Password must be exactly 8 characters.';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      localStorage.setItem('classicUser', JSON.stringify(formData));
      toast.success('Signup successful! Redirecting to login...', {
        onClose: () => navigate('/login'),
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="signup-container">
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

      <div className="signup-right">
        <div className="signup-modal">
          <div className="signup-frame"></div>
          <div className="signup-frame-inner"></div>

          <div className="signup-content">
            {/* ✅ Only this part was changed */}
            <div className="signup-header">
              <h2 className="signup-title">Signup</h2>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">FULL NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrors({ ...errors, name: '' });
                  }}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <div className="form-input-wrapper">
                  <Mail className="form-icon" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="form-group">
                <label className="form-label">CREATE PASSWORD</label>
                <div className="form-input-wrapper">
                  <Lock className="form-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      setErrors({ ...errors, password: '' });
                    }}
                    placeholder="8 characters only"
                    minLength={8}
                    maxLength={8}
                  />
                  <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label className="form-label">CONFIRM PASSWORD</label>
                <div className="form-input-wrapper">
                  <Lock className="form-icon" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => {
                      setFormData({ ...formData, confirmPassword: e.target.value });
                      setErrors({ ...errors, confirmPassword: '' });
                    }}
                    placeholder="Re-enter password"
                    minLength={8}
                    maxLength={8}
                  />
                  <span className="eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <EyeOff /> : <Eye />}
                  </span>
                </div>
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
              </div>

              <button type="submit" className="signup-button">Signup</button>
            </form>

            <div className="signup-divider-with-icon">
              <div className="divider-line"></div>
              <Star className="divider-icon" />
              <div className="divider-line"></div>
            </div>

            <div className="signup-redirect">
              Already has login?{' '}
              <button onClick={() => navigate('/login')} className="signup-link">
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
