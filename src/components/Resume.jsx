import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
function Resume() {
  return (
    <div style={{ background: "url('back.avif')", backgroundSize: "cover" }}
    className="container-fluid rcontainer"
  >

    <div
      class="resume"
      style={{ background: 'url("back.avif")', backgroundSize: "cover" }}
      >
      <Navbar />
      <embed src="resume.pdf" type="application/pdf" width="600" height="800" />
      <Footer />
    </div>
      </div>
  );
}
export default Resume;
