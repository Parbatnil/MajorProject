import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./Error404";
import ContactUs from "./components/ContactUs";
const DisplaySetup = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default DisplaySetup;
