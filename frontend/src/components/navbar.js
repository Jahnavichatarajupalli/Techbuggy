import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  });

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    setIsLoggedIn(false);
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="logo.jpg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-orange-500">TravelWorld</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "Destinations", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section: Login / Logout + Profile */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105"
            >
              Login
            </Link>
          )}
          <button onClick={() => navigate("/profile")}>
          <FaUserCircle className="text-gray-700 text-3xl cursor-pointer hover:text-orange-500 transition transform hover:scale-110" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
