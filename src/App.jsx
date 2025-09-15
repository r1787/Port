import React, { Suspense, lazy } from "react";
import Spinner from "react-bootstrap/Spinner";
import Navigation from "./Component/Navigation";
import { ThemeProvider } from "./Component/ThemeContext ";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Services = lazy(() => import("./Pages/Services"));
const Testimonial = lazy(() => import("./Pages/Testimonial"));
const Contact = lazy(() => import("./Pages/Contact"));
const Footer = lazy(() => import("./Pages/Footer"));

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <Suspense
        fallback={
          <Spinner
            animation="grow"
            variant="primary"
            className="text-center p-5"
          />
        }
      >
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Testimonial />
        <Contact />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
