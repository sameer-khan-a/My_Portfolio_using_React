import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";

function Certifications() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "url('back.avif') center/cover no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* Certifications Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-normal color">My Certifications</h2>
          <p className="text-muted mt-2">
            Structured learning. Verified progress. Zero fluff.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Web Development Bootcamp — App Brewery (2025)"
              content="Comprehensive bootcamp covering modern web development. Built real-world projects and strengthened full-stack fundamentals."
              img="app brewery.jpg"
              git="https://www.udemy.com/certificate/UC-adf8b9e6-8161-40f7-a7e6-0aa41f91c5ee/"
              linkname="View Certificate"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Data Structures & Algorithms in Python — Jovian (2023)"
              content="Hands-on mastery of core data structures and algorithms. Focused on problem-solving and writing optimized, scalable code."
              img="dsa pyton.png"
              git="https://jovian.com/certificate/MFQTQMRYG4"
              linkname="View Certificate"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Introduction to Programming Using Python — Kaggle (2023)"
              content="Strong foundation in programming concepts, Python syntax, data structures, and automation-focused problem solving."
              img="python programming.jpg"
              git="https://www.kaggle.com/learn/certification/sameerkhana/python"
              linkname="View Certificate"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Certifications;
