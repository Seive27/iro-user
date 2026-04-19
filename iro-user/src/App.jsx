import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Adopt from "./pages/adopt.jsx";
import AboutUs from "./pages/aboutus.jsx";
import Contact from "./pages/contact.jsx";
import Donate from "./pages/donate.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

export default function App() {
  // Replace with actual Firebase auth state later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Pass login state and logout function to Navbar */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Pass isLoggedIn to Adopt page to trigger the "Login Required" modal */}
        <Route path="/adopt" element={<Adopt isLoggedIn={isLoggedIn} />} />
        
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}