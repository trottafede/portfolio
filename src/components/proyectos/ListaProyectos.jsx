import "./ListaProyectos.css";
import proyectos from "../../proyectos.js";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Proyecto from "./Proyecto";

function ListaProyectos() {
  console.log(proyectos);
  return (
    <div id="projects">
      <div className="container">
        <div>
          <h2 className="text-center">Projects</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          {proyectos &&
            proyectos.map((proyecto) => (
              <div key={uuidv4()} className="col">
                <Proyecto proyecto={proyecto} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ListaProyectos;
