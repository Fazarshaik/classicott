import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Star } from 'lucide-react';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
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

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

  const validate = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword } = formData;

    if (!name.trim()) newErrors.name = 'Full name is required.';
    if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Enter a valid email.';

    if (!passwordRegex.test(password)) {
      newErrors.password =
        'Must be exactly 8 chars with uppercase, lowercase, number & special char.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.some(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (emailExists) {
      toast.error('Email already registered!', { autoClose: 2000 });
    } else {
      const newUser = {
        name: formData.name,
        email: formData.email.toLowerCase(),
        password: formData.password,
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      toast.success('Signup successful! Redirecting to login...', {
        autoClose: 2000,
        onClose: () => navigate('/login'),
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
          <img src="/assets/images/Casablanca.jpeg" alt="Casablanca" />
          <img src="/assets/images/Titanic1.jpeg" alt="Titanic" />
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-modal">
          <div className="signup-frame"></div>
          <div className="signup-frame-inner"></div>

          <div className="signup-content">
            <div className="signup-header">
              <h2 className="signup-title">Signup</h2>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
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
                {errors.confirmPassword && (
                  <p className="error-message">{errors.confirmPassword}</p>
                )}
              </div>

              <button type="submit" className="signup-button">Signup</button>
            </form>

            <div className="signup-divider-with-icon">
              <div className="divider-line"></div>
              <Star className="divider-icon" />
              <div className="divider-line"></div>
            </div>

            <div className="social-login-section">
              <p className="social-text">Or sign up with:</p>
              <div className="social-icons">
                <button
                  className="social-icon google"
                  onClick={() => window.location.href = "https://accounts.google.com/"}
                >
                  <FaGoogle />
                </button>
                <button
                  className="social-icon facebook"
                  onClick={() => window.location.href = "https://www.facebook.com/"}
                >
                  <FaFacebookF />
                </button>
                <button
                  className="social-icon twitter"
                  onClick={() => window.location.href = "https://twitter.com/"}
                >
                  <FaTwitter />
                </button>
              </div>
            </div>

            <div className="signup-redirect">
              Already have login?{' '}
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
