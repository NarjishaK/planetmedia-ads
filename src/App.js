
import React from 'react';
import Login from './components/login';
import Register from './components/register';
import Myaccount from './components/myaccount';
import Adview from './components/adview';
import Banner from "./components/banner";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myaccount" element={<Myaccount />} />
      <Route path="/addetails" element={<Adview />} />
      <Route path="/home" element={<Banner />} />
    </Routes>
  </Router>
  );
}

export default App;
