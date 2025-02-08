import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Resume() {
  return (
    <div
      class="projects"
      style={{ background: 'url("back.avif")', backgroundSize: "cover" }}
    >
      <Navbar />
      <embed src="resume.pdf" type="application/pdf" width="600" height="800" />
      <Footer />
    </div>
  );
}
export default Resume;
