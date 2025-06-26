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
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleEmailSubmit = () => {
    const storedUser = JSON.parse(localStorage.getItem('classicUser'));
    if (storedUser?.email === email) {
      const otpCode = Math.floor(1000 + Math.random() * 9000).toString(); 

      setGeneratedOtp(otpCode);
      toast.success(`Your OTP is ${otpCode}`, { position: 'top-center' });
      setStep(2);
    } else {
      toast.error('Email not found. Please enter the registered email.');
    }
  };

  const handleOtpSubmit = () => {
    if (otp === generatedOtp) {
      setStep(3);
    } else {
      toast.error('Incorrect OTP');
    }
  };

  const handlePasswordReset = () => {
    if (newPassword.length !== 8) {
      toast.error('Password must be exactly 8 characters');
    } else if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      const user = JSON.parse(localStorage.getItem('classicUser'));
      const updatedUser = { ...user, password: newPassword };
      localStorage.setItem('classicUser', JSON.stringify(updatedUser));
      toast.success('Password reset successfully!');
      navigate('/login');
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Reset Your Password</h2>

        {step === 1 && (
          <>
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
            <button onClick={handleEmailSubmit} className="forgot-button">
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Enter OTP</label>
            <div className="input-group">
              <ShieldCheck className="icon" />
              <input
                type="text"
                placeholder="Enter the OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button onClick={handleOtpSubmit} className="forgot-button">
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label>New Password</label>
            <div className="input-group">
              <Lock className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
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
              <span className="eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button onClick={handlePasswordReset} className="forgot-button">
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
