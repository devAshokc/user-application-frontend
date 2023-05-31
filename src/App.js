import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import {UserDetails} from './components/UserDetails';

function App() {
  return <>
    <div className="App">
    <div className='routes-container'>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/users/signup' element={<Signup />} />
          <Route path='/UserDetails' element={<UserDetails />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  </>
}

export default App;
