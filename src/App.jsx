import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';
import Categories from './pages/Categories';
import MoviesPage from './pages/MoviesPage';
import Home from './components/Home';
import VintageSubscriptionPage from './pages/Subscription';
import PaymentPage from './pages/Payment';
import CricketVideoPage from './pages/Video';
import ClassicFooter from './pages/Footer';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/categories' element={<Categories />} />
      <Route path="/movies" element={<MoviesPage />} />

      <Route path='/home' element={<Home />} />
      <Route path='/subscription' element={<VintageSubscriptionPage />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/video' element={<CricketVideoPage />} />
      <Route path='/footer' element={<ClassicFooter />} />
    </Routes>
  );
};

export default App;
