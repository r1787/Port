// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { useTheme } from "../Component/ThemeContext ";
import AboutImg from "../assets/Image/christopher-gower-m_HRfLhgABo-unsplash.jpg";

import "../assets/Styles/About.css";

export default function About() {
  const { dark } = useTheme();
  return (
    <section id="about" className={`about-section ${dark ? "dark" : "light"}`}>
      <div className="about-container">
        {/* Left - Image with floating shapes */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-img-wrapper">
            <img src={AboutImg} alt="About Designer" className="about-img" />

            {/* Floating Shapes */}
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hi, I'm <strong>GD</strong>, a creative designer & web developer who
            loves turning ideas into impactful digital experiences. My mission
            is to design visuals that connect, inspire, and stand out in today’s
            crowded world.
          </p>

          <div className="about-highlights">
            <Card className={`highlight-card ${dark ? "dark" : "light"}`}>
              <h4>✨ 5+ Years Experience</h4>
              <p>Delivering world-class designs for global clients.</p>
            </Card>
            <Card className={`highlight-card ${dark ? "dark" : "light"}`}>
              <h4>🎨 100+ Projects</h4>
              <p>From branding to web apps, successfully executed.</p>
            </Card>
            <Card className={`highlight-card ${dark ? "dark" : "light"}`}>
              <h4>🚀 Creative & Modern</h4>
              <p>Always focused on unique and trend-setting design.</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
