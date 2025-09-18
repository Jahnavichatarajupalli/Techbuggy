import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login"
import Register from "./components/register"
import HeroCarousel from "./components/carousel";
import Destinations from "./components/destinations";
import DestinationDetails from "./components/destinationpage";
import Contact from "./components/contact"
import Profile from "./components/profile"

const Home = () => (
  <div>
    <HeroCarousel />
  </div>
)

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
