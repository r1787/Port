// src/components/Contact.jsx
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Twitter, Dribbble } from "lucide-react";
import "../assets/Styles/Contact.css";
import { useTheme } from "../Component/ThemeContext ";

export default function Contact() {
  const { dark } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'success' | 'error' | 'sending'

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      return;
    }

    try {
      setStatus("sending");
      // === place here your API call to send form data ===
      // For template/demo we simulate a delay:
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`contact-section ${dark ? "dark" : "light"}`}
    >
      <div className="contact-wrapper">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-sub">
            Have a project, collaboration or just want to say hi? Fill the form
            or reach me directly via email or social channels.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <span className="icon">
                <MapPin />
              </span>
              <div>
                <h5>Location</h5>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="contact-card">
              <span className="icon">
                <Mail />
              </span>
              <div>
                <h5>Email</h5>
                <p>hello@gdportfolio.com</p>
              </div>
            </div>

            <div className="contact-card">
              <span className="icon">
                <Phone />
              </span>
              <div>
                <h5>Phone</h5>
                <p>+88 01XXXXXXXXX</p>
              </div>
            </div>
          </div>

          <div className="social-row">
            <a aria-label="LinkedIn" href="#" className="social">
              <Linkedin />
            </a>
            <a aria-label="Twitter" href="#" className="social">
              <Twitter />
            </a>
            <a aria-label="Dribbble" href="#" className="social">
              <Dribbble />
            </a>
          </div>

          {/* Small map placeholder (replace with embed) */}
          <div className="map-placeholder" aria-hidden="true">
            <div className="map-inner">
              <MapPin />
              <span>Map preview</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="form-title">Send a Message</h3>

          {status === "success" && (
            <Alert variant="success">Message sent — I'll reply soon!</Alert>
          )}
          {status === "error" && (
            <Alert variant="danger">
              Something went wrong. Try again later.
            </Alert>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="c_name">
              <Form.Label className="sr-only">Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="c_email">
              <Form.Control
                type="email"
                placeholder="Your email"
                name="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="c_subject">
              <Form.Control
                type="text"
                placeholder="Subject (optional)"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="c_message">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Write your message..."
                name="message"
                value={form.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="form-actions d-flex gap-3 align-items-center">
              <Button
                type="submit"
                className="btn-send"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
              <small className="form-note">
                Or email me at <strong>hello@gdportfolio.com</strong>
              </small>
            </div>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
