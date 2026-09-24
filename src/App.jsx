import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Analyse from './pages/Analyse';
import Contact from './pages/Contact';
import Footer from './components/navigation/Footer/Footer';
import ScrollToTop from './components/navigation/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analyse" element={<Analyse />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </Router>

    </>
  )
}

export default App
