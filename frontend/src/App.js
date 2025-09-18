import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login"
import Register from "./components/register"

import HeroCarousel from "./components/carousel";
import Destinations from "./components/destinations";
import DestinationDetails from "./components/destinationpage";

const Home = () => (
  <div>
    <HeroCarousel />
  </div>
)
const Services = () => <h1 className="text-3xl p-20">Our Services</h1>;
const Contact = () => <h1 className="text-3xl p-20">Contact Us</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
