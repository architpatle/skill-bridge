import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Analysis from './pages/Analysis';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
