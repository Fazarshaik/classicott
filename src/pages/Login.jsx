import React, { useState } from "react";
import { Eye, EyeOff, User, Lock, Film } from "lucide-react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [existingUserError, setExistingUserError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Email validation
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length !== 8) {
      errors.password = "Password must be exactly 8 characters";
    } else {
      const hasLower = /[a-z]/.test(password);
      const hasUpper = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecial = /[@$!%*?&]/.test(password);
      
      let missingRequirements = [];
      if (!hasLower) missingRequirements.push("lowercase letter");
      if (!hasUpper) missingRequirements.push("uppercase letter");
      if (!hasNumber) missingRequirements.push("number");
      if (!hasSpecial) missingRequirements.push("special character (@$!%*?&)");
      
      if (missingRequirements.length > 0) {
        errors.password = `Password must contain: ${missingRequirements.join(", ")}`;
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setExistingUserError("");

    if (!validateForm()) return;

    toast.success("Successfully logged in!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });

    setTimeout(() => navigate("/dashboard"), 2500);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <div className="film-strip left">
          {[...Array(6)].map((_, i) => (
            <div className="film-hole" key={i} />
          ))}
        </div>
        <div className="film-strip right">
          {[...Array(6)].map((_, i) => (
            <div className="film-hole" key={i} />
          ))}
        </div>

        <div className="auth-frame" />
        <div className="auth-frame-inner" />

        <div className="auth-content">
          <div className="auth-header">
            <div className="auth-header-top">
              <Film className="film-icon" />
              <h2 className="auth-title">Classic Cinema</h2>
            </div>
            <p className="auth-subtitle">Welcome back to the golden era</p>
            <div className="auth-divider" />
          </div>

          <form className="auth-form" onSubmit={handleLogin} noValidate>
            <div className="input-group">
              <label className="input-label">Email</label>
              <div className={`input-wrapper ${formErrors.email ? "input-error" : ""}`}>
                <User className="input-icon" />
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  placeholder="Enter your email"
                />
              </div>
              {formErrors.email && (
                <div className="input-error-message">
                  <span className="error-icon">!</span>
                  {formErrors.email}
                </div>
              )}
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className={`input-wrapper ${formErrors.password ? "input-error" : ""}`}>
                <Lock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-field"
                  value={password}
                  onChange={(e) => {
                    if (e.target.value.length <= 8) {
                      setPassword(e.target.value);
                    }
                  }}
                  placeholder="Enter your password (8 characters)"
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formErrors.password && (
                <div className="input-error-message">
                  <span className="error-icon">!</span>
                  {formErrors.password}
                </div>
              )}
            </div>

            {existingUserError && (
              <div className="auth-error">
                <span className="error-icon">!</span>
                {existingUserError}
              </div>
            )}

            <div className="auth-options">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="forgot-password-btn"
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>
          </form>

          <div className="social-login">
            <p className="social-text">Or sign in with:</p>
            <div className="social-buttons">
              <button
                className="social-button google"
                onClick={() =>
                  (window.location.href = "https://accounts.google.com/")
                }
                aria-label="Google"
              >
                <FaGoogle />
              </button>
              <button
                className="social-button facebook"
                onClick={() =>
                  (window.location.href = "https://www.facebook.com/login/")
                }
                aria-label="Facebook"
              >
                <FaFacebookF />
              </button>
              <button
                className="social-button twitter"
                onClick={() =>
                  (window.location.href = "https://twitter.com/i/flow/login")
                }
                aria-label="Twitter"
              >
                <FaTwitter />
              </button>
            </div>
          </div>

          <div className="auth-divider-icon">
            <div className="divider-line" />
            <Film className="divider-icon" size={16} />
            <div className="divider-line" />
          </div>

          <div className="auth-footer">
            Don't have an account?
            <span onClick={() => navigate("/")} className="signup-link">
              Sign Up
            </span>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;