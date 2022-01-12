import React from "react";
import { useParams } from "react-router-dom";
import proyectos from "../../proyectos.js";

function SingleProyect() {
  let { slug } = useParams();

  const proyecto = proyectos.find((proyecto) => proyecto.slug === slug);
  return (
    <div id="ProyectInfo" className="container">
      {proyecto ? (
        <div className="row">
          <div className="col-xl-6">
            <div id="imgContainer">
              <img
                src={require("../../img/" + proyecto.image)}
                className="card-img-top"
                alt={proyecto.imageAlt}
              />
            </div>
          </div>

          <div className="col-xl-6">
            <h2>{proyecto.title}</h2>

            {proyecto.description ? (
              <p>{proyecto.description}</p>
            ) : (
              <p>No description available</p>
            )}

            <p>
              <a
                style={{ color: "blue" }}
                href={proyecto.vercel}
                target="_blank"
                rel="noreferrer"
                className="My-a-distance"
              >
                <i className="fas fa-laptop"> Visit</i>
              </a>
            </p>

            <p>
              <a
                href={proyecto.gitHubFront}
                target="_blank"
                rel="noreferrer"
                className="My-a-distance"
              >
                <i className="fab fa-github"> Front</i>
              </a>
            </p>

            {proyecto.gitHubBack && (
              <p>
                <a
                  href={proyecto.gitHubBack}
                  target="_blank"
                  rel="noreferrer"
                  class="My-a-distance"
                >
                  <i class="fab fa-github"> Back</i>
                </a>
              </p>
            )}
          </div>
        </div>
      ) : (
        <h1>No proyect found</h1>
      )}
    </div>
  );
}

export default SingleProyect;
