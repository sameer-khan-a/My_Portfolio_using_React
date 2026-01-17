import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";

function Projects() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "url('back.avif') center/cover no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* Projects Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-normal color">My Projects</h2>
          <p className="text-muted mt-2">
            Real builds. Real stacks. No tutorial fluff.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Book Basket — 2024"
              content="MERN + PostgreSQL app to showcase books. APIs used to auto-fetch covers, ratings, and reviews for discovery-focused browsing."
              img="book basket.png"
              git="https://github.com/sameer-khan-a/Book-Basket"
              linkname="Github"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Karunadu Travel Agency — 2023"
              content="Django-based system for managing travel packages, bookings, and customers with a black–gold themed UI."
              img="Karunadu travel agency management.jpg"
              git="https://github.com/sameer-khan-a/Karunadu_Travels_using_Django"
              linkname="Github"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Heropedia — 2024"
              content="MERN app using a public Superhero API. Clean search, responsive UI, optimized API integration."
              img="heropedia.png"
              git="https://github.com/sameer-khan-a/Heropedia"
              linkname="Github"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;
