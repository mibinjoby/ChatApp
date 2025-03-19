import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { useAuthstore } from '../store/useAuthstore.js';
import { Loader } from 'lucide-react';

const App = () => {
  const { authUser, checkAuth, ischeckingAuth } = useAuthstore(); 

  useEffect(() => {
    checkAuth();
  }, [checkAuth]); 

  console.log(authUser);

  
  if (ischeckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className='size-10 animate-spin' />
      </div>
    );
  }

  return (
    <div className='text-red-500'>
      <Navbar />
      <Routes>
        <Route path="/home" element={authUser ? <Home />: <Navigate to="/login" />}/>
        <Route path="/signup" element={authUser ? <Signup />:<Navigate to="/home" />}} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;


