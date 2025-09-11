// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* HomePage with hero section */}
        <Route path="/" element={<HomePage />} />
        
        {/* Projects section / page */}
        <Route path="/projects" element={<Home />} />
        
        {/* Property details */}
        <Route path="/property/:id" element={<PropertyDetail />} />
        
        {/* About page */}
        <Route path="/about" element={<About />} />
        
        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
