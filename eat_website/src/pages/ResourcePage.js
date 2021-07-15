import React, { Component } from "react";
import ResourcesHeader from "../img/ResourcesHeader.jpg";
import "../css/resource.css";
import Services from "../json/services.json";
import Migrate from "../img/dds__migrate.png";

export default class ResourcePage extends Component {
  renderResources = (value) => {
    let result = [];
    let num = 1;
    Services[value].forEach((value) => {
      result.push(
        <div
          class="card border-light ml-3 mb-3 center shadow-sm"
          style={{ maxWidth: "20rem", minHeight: "10rem" }}
          key={num}
        >
          <h5 class="card-header">
            {value.name}
            <a href={value.link}>
              <img
                src={Migrate}
                style={{ float: "right" }}
                alt="link to technology"
              />
            </a>
          </h5>
          <div class="card-body">
            <p class="card-text">{value.desc} </p>
          </div>
        </div>
      );
      num++;
    });
    return (
      <div class="separator row" style={{ marginTop: 5 }}>
        {result}
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <img
          src={ResourcesHeader}
          class="img-fluid, center"
          style={{ maxWidth: "75%" }}
          alt="Decorative header"
        />

        <h1>
          <center>Resources</center>
        </h1>
        <h2>
          <center>Assistive Technologies</center>
        </h2>
        <h4 className="header" style={{ marginBottom: 0 }}>
          Visual Accessibility Features
        </h4>
        {this.renderResources("visual")}

        <h4 className="header">Auditory Accessibility Features</h4>
        {this.renderResources("auditory")}
      </div>
    );
  }
}
