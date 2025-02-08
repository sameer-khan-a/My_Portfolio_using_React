import React from "react";
import Navbar from "./Navbar";
import Card from "./card";
import Footer from "./Footer";
function Projects(props) {
  return (
    <div className="projects container-fluid">
      <Navbar />
      <h2 class="display-5 fw-normal" style={{ color: "orchid" }}>
        My Projects
      </h2>
      <div class="container skills d-flex ">
        <div class="col-4">
          <Card
            title="Book Basket - 2024"
            content=" Built a MERN Full Stack application with PostgreSQL that
                       showcases my books.Integrated multiple application programming interfaces to
                                       automatically fetch and display book covers based on book names.  Displayed ratings and reviews to help users discover useful and
                                                       interesting books."
            img="book basket.png"
            git="https://github.com/sameer-khan-a/Book-Basket"
            linkname="Github"
          />
        </div>
        <div class="col-4">
          <Card
            title="Karunadu Travel Agency Management - 2023"
            content="Engineered a Django-powered system for handling travel packages,
            bookings, and customer information.  Integrated features for seamless package exploration and booking
            organization.     Delivered a sleek black and gold interface."
            img="Karunadu travel agency management.jpg"
            git="https://github.com/sameer-khan-a/Karunadu_Travels_using_Django"
            linkname="Github"
          />
        </div>
        <div class="col-4">
          <Card
            title="Heropedia - 2024"
            content="Developed and designed a MERN Stack application using a public
            Superhero application programming interface.Initiated a clean, interactive interface to search and display
            superhero details.         Focused on responsiveness, user satisfaction and optimized
            application programming interface integration."
            img="heropedia.png"
            git="https://github.com/sameer-khan-a/Heropedia"
            linkname="Github"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
