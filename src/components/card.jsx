import React from "react";
function Card(props) {
  return (
    <div class="card-group container" style={{ borderRadius: "30%" }}>
      <div
        class="card"
        style={{
          height: "500px",
          width: "1250px",
          borderRadius: "30%",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <img
          src={props.img}
          class="card-img-top"
          alt="..."
          style={{ borderRadius: "50px 50px 0 0" }}
        />
        <div
          class="card-body"
          style={{
            borderRadius: "0 0 50px 50px",
          }}
        >
          <h5 class="card-title">
            {props.title}{" "}
            <p class="card-text hide">
              <a
                target="_blank"
                className="mx-5 link"
                href={props.git}
                style={{
                  color: "lightblue",
                  textDecoration: "none",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
                <h6>{props.linkname}</h6>
              </a>
            </p>
          </h5>
          <p class="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
