// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import BeforeAfterSlider from "./pages/BeforeAfterSlider";  // ✅ fixed import



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

        {/* ✅ Service page */}
        <Route path="/services" element={<ServicePage />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
        

        {/* ✅ Before/After page */}
        <Route path="/before-after" element={<BeforeAfterSlider />} />
      </Routes>
    </Router>
  );
}
