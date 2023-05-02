import { NavBar, Notification } from 'components';
import About from 'pages/about/About';
import ContactUs from 'pages/contactUs/ContactUs';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
