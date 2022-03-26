import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import News from './pages/News';
import Services from './pages/Services';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/contact' element={ <Contact /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
