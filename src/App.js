import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Main from "./components/main";
import AllProjects from "./components/allprojects/allprojects";
import { Routes, Route } from "react-router-dom";


const app = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/allprojects' element={<AllProjects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default app;
