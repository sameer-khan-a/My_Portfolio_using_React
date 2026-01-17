import React from "react";

function Card({ title, content, img, git, linkname }) {
  return (
    <div className="card custom-card h-100 text-white">
      <img src={img} className="card-img-top custom-card-img" alt={title} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{title}</h5>

        <p className="card-text flex-grow-1">{content}</p>

        <a
          href={git}
          target="_blank"
          rel="noreferrer"
          className="card-link mt-3 align-self-start"
        >
          {linkname}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M6.354 5.5H2.5A1.5 1.5 0 0 0 1 7v6A1.5 1.5 0 0 0 2.5 14h6A1.5 1.5 0 0 0 10 12.5V8.646" />
            <path d="M11 1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L3.146 8.146a.5.5 0 1 0 .708.708L10 2.707V6.5a.5.5 0 0 0 1 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
