import React, { Component } from "react";
import Brian from "../img/brian.jpg";
import Justina from "../img/justina.jpg";
import Sujata from "../img/sujata.jpg";
import Danny from "../img/danny.jpg";
import Canyon from "../img/canyon.jpg";

export const team = [
  {
    name: "Brian Akanwa",
    intro:
      "Hello! My name is Brian Akanwa. I am from Houston, TX and I attend Texas Tech University!",
    image: Brian,
  },
  {
    name: "Justina Le",
    intro:
      "Hi, my name is Justina Le! I'm from Tampa, Florida and I go to the University of South Florida",
    image: Justina,
  },
  {
    name: "Sujata Duwal",
    intro:
      "Hi! My name is Sujata Duwal and I'm from San Marcos, Texas and I go to Texas State University",
    image: Sujata,
  },
  {
    name: "Canyon Sembera",
    intro:
      "Hello! I'm Canyon Sembera. I am from San Antonio, TX and go to Texas A&M University.",
    image: Canyon,
  },
  {
    name: "Danny Trinh",
    intro:
      "Last but not least! Wassup! My names Danny Trinh! I'm from Houston, TX and I attend the University of Texas.",
    image: Danny,
  },
];

export default class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ margin: "10px" }}> Developers:</h1>
        <div style={{ display: "flex", marginBottom: 0 }}>
          {team.map((data, key) => {
            return (
              <div class="card" style={{ width: "16rem" }}>
                <img src={data.image} class="card-img-top" alt="" />
                <div class="card-body" key={key}>
                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">{data.intro}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
