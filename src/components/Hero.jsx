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
                <p className="lead fw-normal">
                  I am an aspiring Full Stack Developer with a strong passion for
                  <span className="color"> web development 💻</span>.
                </p>

                <p className="lead fw-normal">
                  I build{" "}
                  <span className="color">
                    dynamic and high-performing web applications
                  </span>{" "}
                  while optimizing workflows through problem-solving and teamwork.
                </p>

                <p className="lead fw-normal">
                  I have solid knowledge of{" "}
                  <span className="color">
                    C, C++, Java, Python, DSA, and Networking
                  </span>.
                </p>

                <p className="lead fw-normal">
                  I’m eager to grow in environments where I can apply my{" "}
                  <span className="color">technical and soft skills</span>.
                </p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-5">
                <h4 className="mb-2">FIND ME ON</h4>
                <p>
                  Feel free to <span className="color">connect</span> with me.
                </p>

                <ul className="nav justify-content-center gap-4 mt-3">
                  {/* LINKEDIN */}
                  <li className="nav-item">
                    <a
                      href="https://www.linkedin.com/in/sameer-khan-a-/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146z" />
                        <path d="M4.943 12.248V6.169H2.542v6.079h2.401zM3.743 5.182c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zM13.458 12.248v-3.368c0-1.804-.962-2.643-2.246-2.643-1.036 0-1.495.57-1.755.971v-0.835H7.056c.03.553 0 6.079 0 6.079h2.401v-3.395c0-.181.013-.362.067-.49.147-.362.482-.737 1.045-.737.737 0 1.032.556 1.032 1.372v3.25h2.401z" />
                      </svg>
                    </a>
                  </li>

                  {/* GITHUB */}
                  <li className="nav-item">
                    <a
                      href="https://github.com/sameer-khan-a"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </li>

                  {/* HACKERRANK */}
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
