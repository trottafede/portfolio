import "./ListaProyectos.css";
import proyectos from "../../proyectos.js";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function ListaProyectos() {
  return (
    <div>
      <div id="projects">
        <div className="container">
          <div>
            <h2 className="text-center">Projects</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            {proyectos &&
              proyectos.map((proyecto) => (
                <div
                  key={uuidv4()}
                  className=" col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 "
                >
                  <Link to={"/proyectos/" + proyecto.slug}>
                    <img
                      src={require("../../img/" + proyecto.image)}
                      className="card-img-top"
                      alt={proyecto.imageAlt}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="myWave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ListaProyectos;
