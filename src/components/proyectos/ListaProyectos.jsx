import "./ListaProyectos.css";
import proyectos from "../../proyectos.js";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Wave1 from "../Wave/Wave1";

function ListaProyectos() {
  return (
    <>
      <div id="projects">
        <div className="container">
          <div>
            <h2 className="text-center">Projects</h2>
          </div>

          <div className="row g-4 text-center">
            {proyectos &&
              proyectos.map((proyecto) => (
                <div
                  key={uuidv4()}
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 scale-up-center"
                >
                  <Link to={"/proyectos/" + proyecto.slug}>
                    <img
                      src={require("../../img/" + proyecto.image)}
                      alt={proyecto.imageAlt}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Wave1 />
    </>
  );
}

export default ListaProyectos;
