import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <div>
                <a
                  href="https://twitter.com/ftrotta18"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/trottafede/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/trottafede"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/trottafede25/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md mt-3 mb-3">
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <p>Page made in 2021 by Federico Trotta</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
