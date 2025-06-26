import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';
import Categories from './pages/Categories';
import MoviePage from './pages/MoviesPage'; 
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import VintageSubscriptionPage from './pages/Subscription';
import PaymentPage from './pages/Payment';
import CricketVideoPage from './pages/Video';
import ClassicFooter from './pages/Footer';
import DownloadPage from './pages/Download';
import VintageHistoryPage from './pages/History';
import MovieFrame from './components/MovieFrame';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/home' element={<Home />} />
      <Route path='/das' element={<Dashboard />} />
      <Route path='/subscription' element={<VintageSubscriptionPage />} />
      <Route path='/payment' element={<PaymentPage/>} />
      <Route path='/video' element={<CricketVideoPage/>} />
      <Route path='/footer' element={<ClassicFooter/>} />
      <Route path='/download' element={<DownloadPage/>} />
      <Route path='/history' element={<VintageHistoryPage/>} />
      <Route path='/movieframe' element={<MovieFrame/>} />
    </Routes>
    </>
  );
};

export default App;

