import "./Education.css";
import React from "react";

function Education() {
  return (
    <div id="Education">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="text-center mb-4">Education</h2>
          </div>

          <div className="col-sm-12 myAlign">
            <img
              src={require("../../img/ort.jpg")}
              alt="Logo de Ort University"
            />
            <div className="ms-4 ">
              <p>In 2021 I started Computer Engineer in ORT University</p>
              <p>
                I am still studying here and I would like to finish my career
                before my 30's
              </p>
            </div>
          </div>

          <div className="col-sm-12 myMarginTop myAlign">
            <div className="me-4">
              <p>In 2021 I studyied in Hack Academy</p>
              <p>It was my first aproach to web development</p>
              <p>
                I did two courses there: Front end development and the coding
                bootcamp
              </p>
              <p>
                It was in the coding bootcamp that I really started feeling like
                I was a programer
              </p>
            </div>
            <img
              src={require("../../img/HackAcademy.png")}
              alt="Logo de Hack Academy"
            />
          </div>

          <div className="col-sm-12 myMarginTop myAlign">
            <img
              src={require("../../img/PlanCeibal.png")}
              alt="Logo de Hack Academy"
              className="me-4"
            />

            <div className="verticalAlign2">
              <p>2023 - Currently coursing Plan Ceibal Phase 2: Web Development</p>
            </div>
          </div>

          <div className="col-sm-12 myMarginTop myAlign">
            <div className="me-4">
              <p>2021 - B2 First</p>
              <p>2023 - Preparing C1 Advanced Exam</p>
            </div>
            <img
              src={require("../../img/Dickens.png")}
              alt="Logo de Hack Academy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
