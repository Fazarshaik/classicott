import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Signup from './pages/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/home' element={<Home />} />
      <Route path='/das' element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
