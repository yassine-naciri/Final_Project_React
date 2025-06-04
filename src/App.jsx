import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import ErrorPage from './pages/error/ErrorPage';
import ShopPage from './pages/shop/shop';
import ContactPage from './pages/contact/contact';
import AboutPage from './pages/about/about';
import BlogPage from './pages/blog/blog';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Shop" element={<ShopPage />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Blog" element={<BlogPage />} />
        <Route path="Shop" element={<ShopPage />} />
        <Route path="signup" element={<SignUp />} />


      </Routes>

    </>
  );
};

export default App;
