import Wave1 from "../Wave/Wave1";
import Wave2 from "../Wave/Wave2";
import "./ContactMe.css";
import React from "react";

function ContactMe() {
  return (
    <>
      <Wave2 />
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
                  ></textarea>

                  <div className="invalid-feedback">
                    Please provide a valid message.
                  </div>
                </div>

                <div className="col-12 mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Send
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div className="imgContainer">
                            <img
                              src="https://cdn.memegenerator.es/imagenes/memes/full/28/60/28604983.jpg"
                              alt="Te la creiste we"
                            />
                          </div>
                          <h1 style={{ color: "red", textAlign: "center" }}>
                            Currently disabled!
                          </h1>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Wave1 />
    </>
  );
}

export default ContactMe;
