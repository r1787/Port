import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoStarFill } from "react-icons/go";
import { useTheme } from "../Component/ThemeContext ";

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Product Designer",
    text: "An absolutely wonderful experience! The design was modern, sleek, and exceeded all my expectations.",
    image: "https://i.pravatar.cc/100?img=11",
    rating: 5,
  },
  {
    name: "Liam Anderson",
    role: "Startup Founder",
    text: "Clean code, responsive design, and top-class creativity. Perfect for showcasing a professional portfolio.",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 4,
  },
  {
    name: "Olivia Martinez",
    role: "Creative Director",
    text: "The layout felt premium and smooth animations made it stand out. I’d definitely recommend it!",
    image: "https://i.pravatar.cc/100?img=13",
    rating: 5,
  },
  {
    name: "Emma Johnson",
    role: "Product Designer",
    text: "An absolutely wonderful experience! The design was modern, sleek, and exceeded all my expectations.",
    image: "https://i.pravatar.cc/100?img=11",
    rating: 5,
  },
  {
    name: "Liam Anderson",
    role: "Startup Founder",
    text: "Clean code, responsive design, and top-class creativity. Perfect for showcasing a professional portfolio.",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 4,
  },
  {
    name: "Olivia Martinez",
    role: "Creative Director",
    text: "The layout felt premium and smooth animations made it stand out. I’d definitely recommend it!",
    image: "https://i.pravatar.cc/100?img=13",
    rating: 5,
  },
];

export default function Testimonial() {
  const { dark } = useTheme();
  return (
    <section
      id="testimonial"
      className={`py-5 ${dark ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{
        minHeight: "100vh", // Full screen effect
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container fluid className="px-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            What <span className="text-primary">Clients Say</span>
          </h2>
          <p className={`${dark ? "text-secondary" : "text-muted"}`}>
            Real feedback from professionals I've worked with worldwide.
          </p>
        </div>

        {/* Testimonials */}
        <Row className="g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="d-flex align-items-stretch"
            >
              <div
                className={`p-4 rounded-4 shadow-lg w-100 ${
                  dark ? "bg-secondary bg-opacity-25" : "bg-white"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                }}
              >
                <p className="mb-4 fst-italic">“{item.text}”</p>
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle border border-3 border-primary me-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">{item.name}</h5>
                    <small className="text-muted">{item.role}</small>
                    <div className="mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <GoStarFill key={i} className="text-warning me-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
