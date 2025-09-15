// src/components/Home.jsx
import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Design from "../assets/Image/Designer03h.jpg";
import { IoBagCheck } from "react-icons/io5";
import "../assets/Styles/Home.css";
import { useTheme } from "../Component/ThemeContext ";

export default function Home() {
  const { dark } = useTheme();

  return (
    <section id="home" className={`home-hero ${dark ? "dark" : "light"}`}>
      {/* Decorative Background Shapes */}
      <div className="hero-bg-shape shape1"></div>
      <div className="hero-bg-shape shape2"></div>
      <div className="hero-bg-shape shape3"></div>

      <div className="hero-content">
        {/* Left Side - Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="hero-tagline">✨ Welcome to My World</h5>
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">GD</span>
          </h1>
          <h2 className="hero-subtitle">
            Creative <span className="highlight">Designer</span> & Web Developer
          </h2>
          <p className="hero-desc">
            I craft stunning <strong>websites</strong> and engaging{" "}
            <strong>digital experiences</strong> that help brands stand out.
            Let's bring your ideas to life with passion and creativity.
          </p>

          <div className="hero-buttons d-flex gap-3 mt-4">
            <Button
              className={`btn-lg ${dark ? "btn-dark-primary" : "btn-primary"}`}
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              🚀 View Portfolio
            </Button>
            <Button
              className={`btn-lg ${
                dark ? "btn-dark-outline" : "btn-outline-light"
              }`}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IoBagCheck className="fs-4" />
              Hire Me
            </Button>
          </div>
        </motion.div>

        {/* Right Side - Hero Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <img src={Design} alt="Creative Hero" />
            <span className="img-glow"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
