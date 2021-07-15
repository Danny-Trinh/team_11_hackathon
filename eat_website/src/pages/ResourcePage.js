import React, { Component } from "react";
import ResourcesHeader from "../img/ResourcesHeader.jpg";
import "../css/resource.css";
import Services from "../json/services.json";
import Migrate from "../img/dds__migrate.png";

export default class ResourcePage extends Component {
  renderResources = (value, title) => {
    let result = [];
    let num = 1;
    Services[value].forEach((value) => {
      result.push(
        <ul
          className="list-group list-group-flush"
          style={{ textAlign: "left" }}
          key={num}
        >
          <li className="list-group-item m-2">
            <a href={value.link}>
              <img
                src={Migrate}
                style={{ float: "right", display: "inline" }}
                alt="link to technology"
              />
            </a>
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text">{value.desc}</p>
          </li>
        </ul>
      );
      num++;
    });
    return (
      <center>
        <div
          className="card"
          style={{ width: "80%", marginTop: 25, marginBottom: 20 }}
        >
          <h2 className="card-header header">{title}</h2>
          {result}
        </div>
      </center>
    );
  };

  render() {
    return (
      <div className="container">
        <img
          src={ResourcesHeader}
          className="img-fluid, center"
          style={{ maxWidth: "65%", marginTop: 25 }}
          alt="Decorative header"
        />

        {this.renderResources("visual", "Visual Accessibility Features")}

        {this.renderResources("auditory", "Auditory Accessibility Features")}

        {this.renderResources("other", "Additional Accessibility Features")}
      </div>
    );
  }
}
