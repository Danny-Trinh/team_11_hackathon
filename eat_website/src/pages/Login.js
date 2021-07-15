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
            email: "",
            first_name: "",
            last_name: "",
            password: "",
          }}
          onSubmit={
            async (values) => {
              // TODO if schedule_repeats is false, do not schedule multiple cases
              // alert(
              //   `Successfully logged in with email: ${values.login_email_addr}${values.email}`
              // );
              // console.log("HELLO");

              // this.props.history.push("/Dashboard"); why this no work ;-;
              localStorage.setItem("loggedIn", true);
              this.props.setLoggedIn(true);
              if (window.location.href.indexOf("localhost") !== -1)
                window.location.href = "http://localhost:3000/Dashboard";
              else
                window.location.href =
                  "https://main.d256nnve9tolai.amplifyapp.com/Dashboard";
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
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">
                    <h2>Log In</h2>
                    <div className="mb-3">
                      <label for="email_addr" class="form-label">
                        Dell Email*
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="login_email_addr"
                        id="login_email_addr"
                      ></Field>
                    </div>
                    <div className="mb-3">
                      <label for="pwd" className="form-label">
                        Password*
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        name="login_pwd"
                        id="login_pwd"
                      ></Field>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Log In
                    </button>
                  </div>
                  <div className="col">
                    <h2>Create an Account</h2>
                    <div className="mb-3">
                      <label for="pwd" className="form-label">
                        First Name
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="first_name"
                      ></Field>
                    </div>
                    <div className="mb-3">
                      <label for="pwd" className="form-label">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="last_name"
                      ></Field>
                    </div>
                    <div className="mb-3">
                      <label for="email_addr" className="form-label">
                        Dell Email*
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                      ></Field>
                    </div>
                    <div className="mb-3">
                      <label for="pwd" className="form-label">
                        Password*
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        name="password"
                      ></Field>
                    </div>
                    <button type="submit" className="btn btn-primary">
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
