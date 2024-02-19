import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter as router,
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


export default function App() {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/about',
        element: <AboutPage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
]);


  return (
    <div>
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">

        <Routes>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
      <HomePage/>
      <Footer/>
    </Router>
    </div>
  );
}

//export default App;
