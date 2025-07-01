import React, { useState } from 'react';

import { Eye, EyeOff, User, Lock, Film } from 'lucide-react';

import '../css/Login.scss';

import { useNavigate } from 'react-router-dom';
 
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();
 
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
 
  const handleLogin = (e) => {

    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(

      (user) => user.email === email && user.password === password

    );
 
    if (matchedUser) {

      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

      navigate('/profile');

    } else {

      setError('Invalid email or password');

    }

  };
 
  return (
<div className="auth-overlay">
<div className="auth-modal">
<div className="film-strip left">

          {[...Array(6)].map((_, i) => <div className="film-hole" key={i} />)}
</div>
<div className="film-strip right">

          {[...Array(6)].map((_, i) => <div className="film-hole" key={i} />)}
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
<div className="input-wrapper">
<User className="input-icon" />
<input

                  type="email"

                  className="input-field"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  placeholder="Enter your email"

                  required

                />
</div>
</div>
 
            <div className="input-group">
<label className="input-label">Password</label>
<div className="input-wrapper">
<Lock className="input-icon" />
<input

                  type={showPassword ? 'text' : 'password'}

                  className="input-field"

                  value={password}

                  onChange={(e) => setPassword(e.target.value)}

                  placeholder="Enter your password"

                  required

                />
<button

                  type="button"

                  className="toggle-visibility"

                  onClick={togglePasswordVisibility}

                  aria-label="Toggle Password Visibility"
>

                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
</button>
</div>

              {error && <div className="auth-error">{error}</div>}
</div>
 
            <div className="auth-options">
<div className="remember-label" />
<button

                type="button"

                onClick={() => navigate('/forgot-password')}

                className="forgot-password-btn"
>

                Forgot Password?
</button>
</div>
 
            <button type="submit" className="auth-button">Login</button>
</form>
 
          <div className="auth-divider-icon">
<div className="divider-line" />
<Film className="divider-icon" size={16} />
<div className="divider-line" />
</div>
 
          <div className="auth-footer">

            Don’t have an account?
<span onClick={() => navigate('/')} className="signup-link">

              Sign Up
</span>
</div>
</div>
</div>
</div>

  );

};
 
export default Login;

 