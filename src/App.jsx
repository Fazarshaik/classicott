import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/Forgotpassword";
import Categories from "./pages/Categories";
import MoviesPage from "./pages/MoviesPage";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import VintageSubscriptionPage from "./pages/Subscription";
import PaymentPage from "./pages/Payment";
import VintageVideoPage from "./pages/Video";
import ClassicFooter from "./pages/Footer";
import Allmovies from "./pages/Allmovies";
import DownloadPage from "./pages/Download";
import VintageHistoryPage from "./pages/History";
import MovieFrame from "./components/MovieFrame";
import ProfilePage from "./pages/Profile";

const App = () => {
  return (
    <>
    <ToastContainer
      position="top-right"/>
    <Routes>
      
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/movies" element={<MoviesPage />} />

      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subscription" element={<VintageSubscriptionPage />} />
      <Route path="/payment" element={<PaymentPage />} /> 
      <Route path="/video" element={<VintageVideoPage />} />
      <Route path="/footer" element={<ClassicFooter />} />
      <Route path="/categories" element={<Categories />} />
      {/* <Route path="/moviepage" element={<MoviesPage />} />  */}
      <Route path="/allmovies" element={<Allmovies />} />

      <Route path="/download" element={<DownloadPage />} />
      <Route path="/history" element={<VintageHistoryPage />} />
      <Route path="/movieframe" element={<MovieFrame />} />
      <Route path="/movieframe/:movieId" element={<MovieFrame />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    </>
  );
};

export default App;
