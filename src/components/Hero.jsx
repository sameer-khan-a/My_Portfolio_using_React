import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
function Hero() {
  return (
    <>
      <div
        style={{ background: "url('back.avif')", backgroundSize: "cover" }}
        id="hero"
        class="container-fluid"
      >
        <Navbar />
        <div class="container-fluid hero d-sm-flex flex-wrap-reverse ">
          <div class="text-center my-5 hero-content">
            <h2 class="display-5 fw-normal">
              LET ME <span className="color">INTRODUCE</span> MYSELF,
            </h2>
            <div class="col-lg-6mx-auto mt-5">
              <p class="lead col-8 mx-auto mt-5 fw-normal about-me">
                <p>
                  I am an aspiring Full Stack Developer with a strong passion
                  for
                  <span className="color"> web development 💻</span>{" "}
                </p>
                <p>
                  My skills include building{" "}
                  <span className="color">
                    dynamic and high-performing web applications
                  </span>{" "}
                  while optimizing project workflows through effective
                  problem-solving and teamwork.
                </p>
                <p>
                  And i have a good knowledge of classics like{" "}
                  <span className="color">
                    C, C++, Java, Python, DSA and Networking.
                  </span>
                </p>
                <p>
                  I am eager to contribute and grow in an innovative environment
                  where I can apply my{" "}
                  <span className="color">technical and soft skills.</span>
                </p>
              </p>
            </div>
            <div className="justify-center align-center">
              {" "}
              <h1>FIND ME ON</h1>
              <p style={{ textAlign: "center" }}>
                Feel free to <span class="color">connect</span> with me.
              </p>{" "}
              <ul className="nav d-flex gap-5 justify-content-center align-items-center h-100 ">
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/in/sameer-khan-a-/"
                    target="_blank"
                    viewBox="0 0 16 16"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/sameer-khan-a"
                    target="_blank"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.hackerrank.com/profile/sameerkhan2003a"
                    target="_blank"
                    viewBox="0 0 16 16"
                  >
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/160_Hackerrank-512.png"
                      height="30"
                      width="30"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mx-auto d-flex flex-md-wrap">
            <img
              class=""
              src="sameer.png"
              alt="Image of Sameer"
              width="200"
              height="200"
            ></img>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Hero;
