import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import AboutPage from './pages/About';
import AlumDirectoryPage from './pages/AlumDirectory';
import UserProfilePage from './pages/UserProfile.js';
import './App.css';


function App() {
   return (
       <Router>
           <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/directory" element={<AlumDirectoryPage />} />
               <Route path="/profile/:id" element={<UserProfilePage />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/about" element={<AboutPage />} />
           </Routes>
       </Router>
   );
}

export default App;
