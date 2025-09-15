import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "../Component/ThemeContext ";

import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const { dark } = useTheme();
  return (
    <footer
      className={`pt-5 pb-3 ${
        dark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container>
        <Row className="gy-4">
          {/* Brand / About */}
          <Col md={4} className="text-center text-md-start">
            <h3 className="fw-bold">MyPortfolio</h3>
            <p className={`${dark ? "text-secondary" : "text-muted"} mt-2`}>
              A creative designer portfolio template for professionals and
              agencies. Modern, responsive, and built with love.
            </p>
          </Col>

          {/* Navigation */}
          <Col md={4} className="text-center">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#home"
                  className={`text-decoration-none ${
                    dark ? "text-light" : "text-dark"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`text-decoration-none ${
                    dark ? "text-light" : "text-dark"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`text-decoration-none ${
                    dark ? "text-light" : "text-dark"
                  }`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`text-decoration-none ${
                    dark ? "text-light" : "text-dark"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Social */}
          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-bold mb-3">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className={`${dark ? "text-light" : "text-dark"}`}
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={`${dark ? "text-light" : "text-dark"}`}
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`${dark ? "text-light" : "text-dark"}`}
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={`${dark ? "text-light" : "text-dark"}`}
              >
                <CiInstagram size={22} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className={`${dark ? "border-secondary" : "border-dark"} my-4`} />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
