
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../AuthContext';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  }
  const message = () => alert('error');
  if(!user) {
    return (
    <div>
      <Navigate to="/login" message={message} />

    </div>
    )
  } else {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
}

export default Home;