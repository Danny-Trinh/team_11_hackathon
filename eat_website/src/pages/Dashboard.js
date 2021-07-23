import React, { Component } from "react";
import Services from "../json/services.json";
import Select from "react-select";

const disabilitiesOptions = [
  { value: "visual", label: "Blindness or blurry vision" },
  { value: "auditory", label: "Hearing Impairment" },
  { value: "mobility", label: "Mobility impairment" },
  { value: "migranes", label: "Migranes" },
  { value: "anxiety", label: "Anxiety" },
  { value: "addisons", label: "Addison's Disease" },
  { value: "autism", label: "Autism" },
  { value: "dyslexia", label: "Dyslexia" },
  { value: "add", label: "Attention Deficit Disorder (ADD)" },
  { value: "adhd", label: "Attention Deficit-Hyperactivity Disorder (ADHD)" },
];

export default class Dashboard extends Component {
  state = {
    disabilities: [disabilitiesOptions[0]],
  };

  renderTechnologies = () => {
    let result = [];
    let num = 1;
    this.state.disabilities.forEach((disability) => {
      Services[disability.value].forEach((value) => {
        result.push(
          <div className="my-3" key={num}>
            <div className="card h-100 border shadow-sm">
              <div className="card-body">
                <a className="custom-link" href={value.link}>
                  <h5 className="card-title">{value.name}</h5>
                </a>
                <p className="card-text ">{value.desc}</p>
              </div>
            </div>
          </div>
        );
        num++;
      });
    });
    Services["other"].forEach((value) => {
      result.push(
        <div className="my-3" key={num}>
          <div className="card h-100 border shadow-sm">
            <div className="card-body">
              <a className="custom-link" href={value.link}>
                <h5 className="card-title">{value.name}</h5>
              </a>
              <p className="card-text ">{value.desc}</p>
            </div>
          </div>
        </div>
      );
      num++;
    });
    return <div className="row row-cols-2 row-cols-md-3">{result}</div>;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row my-5">
            <div className="col-8 center">
              <div
                className="card border shadow-sm"
                style={{ backgroundColor: "#e8f4f8" }}
              >
                <div className="card-body">
                  <p>Name: John Doe</p>
                  <p>Resources Needed: </p>

                  <Select
                    // aria-labelledby="aria-label"
                    // ariaLiveMessages={{
                    //   onFocus,
                    // }}
                    isMulti
                    options={disabilitiesOptions}
                    value={this.state.disabilities}
                    onChange={(value) => this.setState({ disabilities: value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <h3>Your Assistive Technologies</h3>
          {this.renderTechnologies()}
        </div>
      </React.Fragment>
    );
  }
}
