import React, { useState } from "react";
import "../css/Forgotpassword.scss";
import { Mail, Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);

    toast.info(`Your OTP is: ${otpCode}`, {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      toastId: "otp-toast",
    });

    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    if (otp.trim() === generatedOtp) {
      toast.dismiss("otp-toast");
      toast.success("OTP verified successfully");
      setStep(3);
    } else {
      toast.error("Incorrect OTP. Please try again.");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!newPassword.trim()) {
      validationErrors.newPassword = "Password is required";
    } else if (!passwordRegex.test(newPassword)) {
      validationErrors.newPassword =
        "Password must be exactly 8 characters with uppercase, lowercase, number, and special character";
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== newPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    toast.success("Password reset successfully!", { autoClose: 2000 });
    setTimeout(() => navigate("/login"), 2500);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Forgot Password</h2>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <label>Email Address</label>
            <div className="input-group">
              <Mail className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}
            <button type="submit" className="forgot-button">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <label>Enter 4-digit OTP</label>
            <div className="input-group">
              <ShieldCheck className="icon" />
              <input
                type="text"
                placeholder="Enter the OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
                maxLength="4"
              />
            </div>
            <button type="submit" className="forgot-button">
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <label>New Password</label>
            <div className="input-group">
              <Lock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                maxLength={8}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.newPassword && (
              <p className="error-text">{errors.newPassword}</p>
            )}

            <label>Confirm Password</label>
            <div className="input-group">
              <Lock className="icon" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                maxLength={8}
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}

            <button type="submit" className="forgot-button">
              Reset Password
            </button>
          </form>
        )}

        <div className="social-icons">
          <p className="social-text">Or sign in with:</p>
          <div className="icons">
            <button
              className="social-button google"
              aria-label="Google"
              onClick={() =>
                (window.location.href = "https://accounts.google.com/")
              }
            >
              <FaGoogle />
            </button>
            <button
              className="social-button facebook"
              aria-label="Facebook"
              onClick={() =>
                (window.location.href = "https://www.facebook.com/login/")
              }
            >
              <FaFacebookF />
            </button>
            <button
              className="social-button twitter"
              aria-label="Twitter"
              onClick={() =>
                (window.location.href = "https://twitter.com/i/flow/login")
              }
            >
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
