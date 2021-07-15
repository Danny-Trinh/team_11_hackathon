// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

export default class Login extends Component {
  render() {
    return (
      <div className="container my-2 mx-5">
        <Formik
          initialValues={{
            login_email_addr: "",
            login_pwd: "",
          }}
          onSubmit={
            async (values) => {
              // TODO if schedule_repeats is false, do not schedule multiple cases
              alert("Successful log in user: ", document.getElementById("login_email_addr").value);
              // console.log("HELLO");
              
              window.location.href = "http://localhost:3000/Dashboard";
            }

            // console.log("Posted: " + JSON.stringify(values, null, 2));
            // Axios.post("http://127.0.0.1:5000/jobs", values)
            //   .then((res) => {})
            //   .catch((error) => {
            //     console.log(error);
            //   });

            // setTimeout(() => {
            //   this.props.history.push("/Jobs");
            // }, 1000);
          }
        >
          {(props) => (
            
            <Form>
              <div class="container">
                <div class="row align-items-start">
                  <div class="col">
                  <h2>Log In</h2>
                    <div className="mb-3">
                      <label for="email_addr" class="form-label">
                        Dell Email*
                      </label>
                      <Field
                        type="text"
                        class="form-control"
                        name="login_email_addr"
                        id="login_email_addr"
                      ></Field>
                    </div>
                    <div class="mb-3">
                      <label for="pwd" class="form-label">
                        Password*
                      </label>
                      <Field
                        type="password"
                        class="form-control"
                        name="login_pwd"
                        id="login_pwd"
                      ></Field>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Log In
                    </button>
                  </div>
                  <div class="col">
                  <h2>Create an Account</h2>
                    <div class="mb-3">
                      <label for="pwd" class="form-label">
                        First Name
                      </label>
                      <Field
                        type="text"
                        class="form-control"
                        name="login_pwd"
                        id="login_pwd"
                      ></Field>
                    </div>
                    <div class="mb-3">
                      <label for="pwd" class="form-label">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        class="form-control"
                        name="login_pwd"
                        id="login_pwd"
                      ></Field>
                    </div>
                    <div className="mb-3">
                      <label for="email_addr" class="form-label">
                        Dell Email*
                      </label>
                      <Field
                        type="text"
                        class="form-control"
                        name="login_email_addr"
                        id="login_email_addr"
                      ></Field>
                    </div>
                    <div class="mb-3">
                      <label for="pwd" class="form-label">
                        Password*
                      </label>
                      <Field
                        type="password"
                        class="form-control"
                        name="login_pwd"
                        id="login_pwd"
                      ></Field>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
