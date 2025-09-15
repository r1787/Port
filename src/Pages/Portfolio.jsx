// src/components/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Component/ThemeContext ";
import "../assets/Styles/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    img: "Images/balazs-ketyi-_x335IZXxfc-unsplash.jpg",
  },
  {
    id: 2,
    title: "Portfolio Design",
    img: "Images/campaign-creators-iEiUITs149M-unsplash.jpg",
  },
  {
    id: 3,
    title: "Landing Page",
    img: "Images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
  },
  {
    id: 4,
    title: "Mobile App UI",
    img: "Images/faizur-rehman-yapBRdPWxik-unsplash.jpg",
  },
  {
    id: 5,
    title: "Creative Website",
    img: "Images/domenico-loia-hGV2TfOh0ns-unsplash.jpg",
  },
  {
    id: 6,
    title: "Dashboard Design",
    img: "Images/balazs-ketyi-_x335IZXxfc-unsplash.jpg",
  },
  {
    id: 7,
    title: "Business Website",
    img: "Images/faizur-rehman-yapBRdPWxik-unsplash.jpg",
  },
  {
    id: 8,
    title: "Startup Landing",
    img: "Images/balazs-ketyi-_x335IZXxfc-unsplash.jpg",
  },
];

export default function Portfolio() {
  const { dark } = useTheme();
  return (
    <section
      id="portfolio"
      className={`portfolio-section ${dark ? "dark" : "light"}`}
    >
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            Some of my recent works that clients loved
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.img} alt={project.title} />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <button className="btn-view">View Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
