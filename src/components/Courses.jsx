import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";
function Certifications(props) {
  return (
    <div className="projects ">
      <Navbar />
      <h2 class="display-5 fw-normal" style={{ color: "orchid" }}>
        My Certifications
      </h2>
      <div class="row row-cols-1 row-cols-lg-4  mb-3 text-center skills">
        <Card
          title="Web Development Bootcamp by App Brewery - 2025"
          content="A comprehensive bootcamp covering essential web development skills.
                  Hands-on projects that guide learners through building real-world applications.
                          I became proficient in key web technologies, and improved my problem-solving and coding skills."
          img="app brewery.jpg"
          git="https://www.udemy.com/certificate/UC-adf8b9e6-8161-40f7-a7e6-0aa41f91c5ee/"
          linkname="View Certificate"
        />
        <Card
          title="Data structures and algorithms in python by jovian - 2023"
          content="Mastered data structures and algorithms in Python programming language through hands-on learning.
          Developed problem-solving skills with real-world algorithmic challenges.
          Applied knowledge to build optimized, scalable solutions in projects."
          img="dsa pyton.png"
          git="https://jovian.com/certificate/MFQTQMRYG4"
          linkname="View Certificate"
        />
        <Card
          title="Introduction to programming using python - 2023"
          content="Gained foundational knowledge of programming concepts using Python.
          Learned to write efficient Python code for solving problems and automating tasks.
          Developed hands-on experience with data structures, functions, and file handling."
          img="python programming.jpg"
          git="https://www.kaggle.com/learn/certification/sameerkhana/python"
          linkname="View Certificate"
        />
      </div>
      <Footer />
    </div>
  );
}
export default Certifications;
