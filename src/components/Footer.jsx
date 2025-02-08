import React from "react";
var currentTime = new Date();
function Footer() {
  return (
    <div className="container footer ">
      <footer className="mt-0 pt-0 mb-0 pb-0 container-fluid ">
        <p className="d-flex footer-content fs-6">
          <span class="col-12">
            Copyright @ {currentTime.getFullYear()} Sameer Khan A
          </span>
        </p>
      </footer>
    </div>
  );
}
export default Footer;
