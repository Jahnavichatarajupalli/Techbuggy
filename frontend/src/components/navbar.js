import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        {/* Logo (clickable -> home) */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to="/" className="flex items-center space-x-2">
            <img src="logo.jpg" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-orange-500">TravelWorld</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <Link
                to={item.path}
                className="transition duration-300"
              >
                {item.name}
              </Link>
              {/* underline when active or hover */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 
                ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-6 py-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`font-medium ${
                location.pathname === item.path
                  ? "text-orange-500 font-bold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/profile");
            }}
          >
            <FaUserCircle className="text-gray-700 text-3xl cursor-pointer hover:text-orange-500 transition" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
