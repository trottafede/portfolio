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
            <div className="ms-4 verticalAlign">
              <p>In 2021 I started Computer Engineer in ORT University</p>
              <p>
                I am still studying here and I would like to finish my career
                before my 30's
              </p>
            </div>
          </div>

          <div className="col-sm-12 myMarginTop myAlign">
            <div className="me-4">
              <p>In 2021 I stclearudyied in Hack Academy</p>
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
            />

            <div className="ms-4 verticalAlign2">
              <p>
                In 2021 also studyied in Plan Ceibal an introductiong to
                programming
              </p>
              <p>It was a brief introductiong to OOP, Ruby and Javascript</p>
              <p>I want to keep studying testing in a near future here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
