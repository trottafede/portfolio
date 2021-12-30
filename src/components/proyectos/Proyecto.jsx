import React from "react";

function Proyecto({ proyecto }) {
  return (
    <div className="card">
      <a href={proyecto.vercel}>
        <img
          src={require("../../img/" + proyecto.image)}
          className="card-img-top"
          alt={proyecto.imageAlt}
          height="200"
        />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <a
              href={proyecto.gitHubFront}
              target="_blank"
              rel="noreferrer"
              className="My-a-distance"
            >
              <i className="fab fa-github"> Front</i>
            </a>
          </div>

          {proyecto.gitHubBack && (
            <div class="col">
              <a
                href={proyecto.gitHubBack}
                target="_blank"
                rel="noreferrer"
                class="My-a-distance"
              >
                <i class="fab fa-github"> Back-end</i>
              </a>
            </div>
          )}

          <div className="col">
            <a
              href={proyecto.vercel}
              target="_blank"
              rel="noreferrer"
              className="My-a-distance"
            >
              <i className="fas fa-laptop"> Deploy</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
