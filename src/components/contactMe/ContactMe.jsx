import "./ContactMe.css";
import React from "react";

function ContactMe() {
  return (
    <div>
      <div class="myWave2">
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

      <div id="ContactMe">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mb-4">
                <p>Write me an email and I will read it asap.</p>
              </div>

              <form className="row needs-validation" novalidate>
                <div className="col-md-4">
                  <label for="validationCustom01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4">
                  <label for="validationCustom02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4">
                  <label for="validationCustom03" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustom03"
                    placeholder="youremail@gmail.com"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-12 mt-2">
                  <label for="validationCustom05" className="form-label">
                    Write your message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    id="validationCustom05"
                    minlength="20"
                    required
                  ></textarea>

                  <div className="invalid-feedback">
                    Please provide a valid message.
                  </div>
                </div>

                <div className="col-12 mt-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" for="invalidCheck">
                      Agree receive message
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-2">
                  <button className="btn btn-outline-light" type="submit">
                    Send message
                  </button>
                </div>
              </form>
            </div>
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

export default ContactMe;
