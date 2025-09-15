// src/components/Service.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Component/ThemeContext ";
import { Card } from "react-bootstrap";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  PenTool,
  Camera,
} from "lucide-react";
import "../assets/Styles/Services.css";

export default function Services() {
  const { dark } = useTheme();
  const services = [
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      desc: "Modern, user-friendly designs that delight and engage audiences.",
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      desc: "High-performing websites built with clean and scalable code.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Design",
      desc: "Crafting beautiful mobile-first experiences for iOS & Android.",
    },
    {
      icon: <Globe size={32} />,
      title: "Brand Strategy",
      desc: "Unique branding that stands out and tells your story effectively.",
    },
    {
      icon: <PenTool size={32} />,
      title: "Graphic Design",
      desc: "Creative visuals, posters, and graphics tailored for your brand.",
    },
    {
      icon: <Camera size={32} />,
      title: "Photography",
      desc: "Professional photography services to capture your best moments.",
    },
  ];

  return (
    <section
      id="service"
      className={`service-section ${dark ? "dark" : "light"}`}
    >
      <div className="service-container px-3 px-lg-5">
        {/* Section Title */}
        <motion.div
          className="service-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            I help brands grow with creative design & development solutions.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`service-card ${dark ? "dark" : "light"}`}>
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
