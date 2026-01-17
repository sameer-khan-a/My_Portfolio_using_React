import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Hero() {
  return (
    <>
      <div
        id="hero"
        className="container-fluid p-0"
        style={{
          background: "url('back.avif') center/cover no-repeat",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div className="container">
          <div className="row min-vh-100 align-items-center justify-content-center">
            <div className="col-12 text-center hero-content text-white">

              <h2 className="display-5 fw-normal mb-4">
                LET ME <span className="color">INTRODUCE</span> MYSELF,
              </h2>

              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead fw-normal about-me">
                  I am an aspiring Full Stack Developer with a strong passion for
                  <span className="color"> web development 💻</span>.
                </p>

                <p className="lead fw-normal about-me">
                  I build{" "}
                  <span className="color">
                    dynamic and high-performing web applications
                  </span>{" "}
                  while optimizing workflows through problem-solving and teamwork.
                </p>

                <p className="lead fw-normal about-me">
                  I have solid knowledge of{" "}
                  <span className="color">
                    C, C++, Java, Python, DSA, and Networking
                  </span>.
                </p>

                <p className="lead fw-normal about-me">
                  I’m eager to grow in environments where I can apply my{" "}
                  <span className="color">technical and soft skills</span>.
                </p>
              </div>

              {/* Socials */}
              <div className="mt-5">
                <h4 className="mb-2">FIND ME ON</h4>
                <p>
                  Feel free to <span className="color">connect</span> with me.
                </p>

                <ul className="nav justify-content-center gap-4 mt-3">
                  <li className="nav-item">
                    <a
                      href="https://www.linkedin.com/in/sameer-khan-a-/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854z" />
                      </svg>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      href="https://github.com/sameer-khan-a"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59z" />
                      </svg>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      href="https://www.hackerrank.com/profile/sameerkhan2003a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/160_Hackerrank-512.png"
                        height="28"
                        width="28"
                        alt="HackerRank"
                      />
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Hero;
