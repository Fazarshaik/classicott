import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/home' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
