import React, { useState } from 'react';
import '../css/Forgotpassword.scss';
import { Mail, Lock, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('classicUser'));

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    if (storedUser?.email === email) {
      const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
      localStorage.setItem('classicOTP', otpCode);
      toast.info(`Your OTP is: ${otpCode}`, {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: true,
        toastId: 'otp-toast'
      });
      setStep(2);
    } else {
      toast.error('Email not found. Please enter the registered email.');
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const savedOtp = localStorage.getItem('classicOTP');

    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }

    if (otp.trim() === savedOtp) {
      toast.dismiss('otp-toast');
      toast.success('OTP verified successfully');
      localStorage.removeItem('classicOTP');
      setStep(3);
    } else {
      toast.error('Incorrect OTP. Please try again.');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    } else if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    } else {
      const user = JSON.parse(localStorage.getItem('classicUser'));
      if (user) {
        const updatedUser = { ...user, password: newPassword };
        localStorage.setItem('classicUser', JSON.stringify(updatedUser));
        toast.success('Password reset successfully!');
        navigate('/login');
      } else {
        toast.error('User not found. Please try again.');
      }
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Reset Your Password</h2>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <label>Email Address</label>
            <div className="input-group">
              <Mail className="icon" />
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="forgot-button">Send OTP</button>
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
                  setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))
                }
                maxLength="4"
              />
            </div>
            <button type="submit" className="forgot-button">Verify OTP</button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <label>New Password</label>
            <div className="input-group">
              <Lock className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter new password (min 8 characters)"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="input-group">
              <Lock className="icon" />
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button type="submit" className="forgot-button">Reset Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
