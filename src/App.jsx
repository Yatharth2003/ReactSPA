import { useState } from 'react';
import './App.css';
import Navbar from './mycomponents/Navbar';
import Footer from './mycomponents/Footer';
import Home from './mycomponents/Home';
import About from './mycomponents/About';
import Help from './mycomponents/Help';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './mycomponents/Products';



function App() {
  return (
    <>
    <Navbar />
    <Products/>
    <Footer />
    </>
  )
}

export default App
