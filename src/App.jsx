import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './AuthContext';
import LoginedPage from './components/LoginedPage';
// import {NavBar} from './components/NavBar';
import {SignUp} from './components/SignUp'
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logined' element={<LoginedPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
