import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';
import Categories from './pages/Categories';
import MoviePage from './pages/MoviesPage'; 
import Home from './components/Home';
import VintageSubscriptionPage from './pages/Subscription';
import PaymentPage from './pages/Payment';
import CricketVideoPage from './pages/Video';
import ClassicFooter from './pages/Footer';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/home' element={<Home />} />
      <Route path='/subscription' element={<VintageSubscriptionPage />} />
      <Route path='/payment' element={<PaymentPage/>} />
      <Route path='/video' element={<CricketVideoPage/>} />
      <Route path='/footer' element={<ClassicFooter/>} />
    </Routes>
    </>
  );
};

export default App;