import React, { useState } from "react";
import { Eye, EyeOff, User, Lock, Film } from "lucide-react";
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
  const [touched, setTouched] = useState({ email: false, password: false });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }
     
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Must be 8 chars with uppercase, lowercase, number & special character";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setExistingUserError("");

    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setExistingUserError("User with this email already exists!");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

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

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <div
                className={`input-wrapper ${
                  formErrors.email && touched.email ? "input-error" : ""
                }`}
              >
                <User className="input-icon" />
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  placeholder="Enter your email"
                />
              </div>
              {touched.email && formErrors.email && (
                <div className="input-error-message">{formErrors.email}</div>
              )}
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div
                className={`input-wrapper ${
                  formErrors.password && touched.password ? "input-error" : ""
                }`}
              >
                <Lock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched({ ...touched, password: true })}
                  placeholder="Enter your password"
                   minLength={8}
                    maxLength={8}
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {touched.password && formErrors.password && (
                <div className="input-error-message">{formErrors.password}</div>
              )}
            </div>

            {existingUserError && (
              <div className="auth-error">{existingUserError}</div>
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

          <div className="auth-divider-icon">
            <div className="divider-line" />
            <Film className="divider-icon" size={16} />
            <div className="divider-line" />
          </div>

          <div className="auth-footer">
            Don’t have an account?
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
