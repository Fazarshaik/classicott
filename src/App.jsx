import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './components/Home';
import VintageSubscriptionPage from './pages/Subscription';
import PaymentPage from './pages/Payment';
import CricketVideoPage from './pages/Video';
import ClassicFooter from './pages/Footer';

function App() {
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
}

export default App;
