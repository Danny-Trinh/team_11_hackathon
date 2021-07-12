import React, { Component } from "react";
import Brian from "../img/IMG_9277.JPG";
import Justina from "../img/headshot.jpg";
import Sujata from "../img/Pro pic.JPG";
import Danny from "../img/square_headshot.jpg";
import Canyon from "../img/IMG_5711.JPG";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <h1> Developers:</h1>
        <div style={{ display: "flex", marginBottom: 0 }}>
          <img
            src={Brian}
            class="separator"
            style={{ marginRight: 0, height: 200, width: 250 }}
            alt=""
          />
          <h1
            class="separator"
            style={{ marginRight: 45, marginLeft: 20, height: 200, width: 300 }}
          >
            Hello! My name is Brian Akanwa. I am from Houston, TX and I attend
            Texas Tech University!
          </h1>

          <img
            src={Justina}
            class="separator"
            style={{ marginRight: 0, height: 200, width: 300 }}
            alt=""
          />
          <h1
            class="separator"
            style={{ marginRight: 45, marginLeft: 20, height: 200, width: 300 }}
          >
            Hi! My name is Justina Le and I'm from Tampa Florida and I go to
            University of South Florida.
          </h1>
          <img
            src={Sujata}
            class="separator"
            style={{ height: 200, width: 300 }}
            alt=""
          />
          <h1
            class="separator"
            style={{ marginRight: 45, marginLeft: 20, height: 200, width: 300 }}
          >
            Hi! My name is Sujata Duwal and I'm from San Marcos, Texas and, I go
            to Texas State University
          </h1>
        </div>
        <div style={{ display: "flex", marginBottom: 0 }}>
          <img
            src={Canyon}
            class="separator"
            style={{ height: 250, width: 300 }}
            alt=""
          />
          <h1
            class="separator"
            style={{ marginRight: 45, marginLeft: 20, height: 200, width: 300 }}
          >
            Hello! I'm Canyon Sembera. I am from San Antonio, TX and go to Texas
            A&M University.
          </h1>
          <img
            src={Danny}
            class="separator"
            style={{ height: 200, width: 300 }}
            alt=""
          />
          <h1
            class="separator"
            style={{ marginRight: 45, marginLeft: 20, height: 200, width: 300 }}
          >
            Last but not least! Wassup! My names Danny Trinh! I'm from Houston,
            TX and I attend the University of Texas.
          </h1>
        </div>
      </div>
    );
  }
}
