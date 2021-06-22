// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

export default class Login extends Component {
  
  render() {
    return (
      <div className="container">
        <h1>This is the Login page</h1>
        <form action="/html/tags/html_form_tag_action.cfm">
        <div className="mb-3">
          <label for="email_addr" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email_addr"></input>
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Password</label>
          <input type="password" class="form-control" id="pwd"></input>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    );
  }

  // login() {
  //   return (
      
  //   );
  // }
}
