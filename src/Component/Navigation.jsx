import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "./ThemeContext ";
import "./Navigation.css";

const Navigation = () => {
  const { dark, setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "portfolio", href: "#portfolio" },
    { name: "Services", href: "#service" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${dark ? "dark" : ""}`}>
      <motion.h1
        className="logo"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3>
          <span>Brand Logo </span>
        </h3>
      </motion.h1>

      {/* Desktop Links */}
      <div className="nav-links">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            whileHover={{ scale: 1.1, color: "#38bdf8" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Theme & Menu Buttons */}
      <div className="nav-right">
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05, color: "#38bdf8" }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
