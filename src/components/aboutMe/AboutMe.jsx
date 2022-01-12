import "./AboutMe.css";
import React from "react";

function AboutMe() {
  return (
    <div id="AboutMe">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div>
              <h2 className="text-center mb-4">
                <i className="fas fa-code"></i> About Me{" "}
                <i className="fas fa-code"></i>
              </h2>
            </div>

            <p>
              My name is Federico Trotta, I am 26 years old. On June of 2021, I
              finished a Coding Bootcamp at Hack Academy. Place where I learned
              about front-end web development and back-end web development
              because it was an intensive 3-month course with more than 600hs of
              practice, that enhanced my programming skills in technologies like
              HTML, CSS3, JavaScript (ES6+), React.js, Node.js, MySQL, MongoDB,
              etc.
            </p>
            <p>
              I define my self as an always motivated person to learn new
              things, not so fast learner but a persistent learner. I enjoy
              learning things that I can put in practice while I learn them,
              because that always helps me to a better understanding of things.
            </p>
            <p>
              On June of 2021, I joined Tata Consultancy Services as an IT
              trainee in a junior technician position and I am very happy for
              having my first IT experience and having the opportunity to put in
              practice all the learned in the Bootcamp. Also, I am looking
              forward to learn new things that help me improve as a developer.
            </p>

            <div
              id="littleIcons"
              className="text-center d-flex justify-content-around"
            >
              <i className="fab fa-html5"></i>
              <i className="fab fa-js-square"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-node"></i>
              <i className="fab fa-angular"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
