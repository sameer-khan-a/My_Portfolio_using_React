import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";
function Certifications(props) {
  return (
    <div
    style={{ background: "url('back.avif')", backgroundSize: "cover" ,gap:"100px"}}
    className="container-fluid ccontainer d-flex  flex-column"
  >

    <div className="projects gap-5 ">
      <Navbar />
      <h2 class="display-5 fw-normal" style={{ color: "orchid" }}>
        My Certifications
      </h2>
      <div class="text-center skills row-gap-5">
        <div className="row">

        <div class="col-8 col-md-4 ">

        <Card
          title="Web Development Bootcamp by App Brewery - 2025"
          content="A comprehensive bootcamp covering essential web development skills.
          Hands-on projects that guide learners through building real-world applications.
          I became proficient in key web technologies, and improved my problem-solving and coding skills."
          img="app brewery.jpg"
          git="https://www.udemy.com/certificate/UC-adf8b9e6-8161-40f7-a7e6-0aa41f91c5ee/"
          linkname="View Certificate"
          />
          </div>
          <div className="col-8 col-md-4 ">

        <Card
          title="Data structures and algorithms in python by jovian - 2023"
          content="Mastered data structures and algorithms in Python programming language through hands-on learning.
          Developed problem-solving skills with real-world algorithmic challenges.
          Applied knowledge to build optimized, scalable solutions in projects."
          img="dsa pyton.png"
          git="https://jovian.com/certificate/MFQTQMRYG4"
          linkname="View Certificate"
          />
          </div>
          <div className="col-8 col-md-4 ">

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
          </div>
      </div>
    </div>
    <div className="self-align-end">

      <Footer />
    </div>
          </div>
  );
}
export default Certifications;
