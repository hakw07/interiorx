import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Interior from './pages/Interior';
import Construction from './pages/Construction';
import Contact from './pages/Contact';
import './App.scss';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectGallary from './pages/ProjectGallary';
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/interior' element={<Interior/>}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/project-gallary' element={<ProjectGallary/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;