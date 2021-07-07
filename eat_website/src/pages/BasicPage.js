import React, { Component } from "react";

export default class BasicPage extends Component {
  render() {
    let example = "hello there";
    return (
      <div className="container">
        <div style={{display:"flex", justifyContent: "center"}}>
          <h1 class="separator" style={{width: 200, display:"inline-block"}}>This is a basic react component</h1>
          <h1 class="separator" style={{width: 200, display:"inline-block", marginLeft: 10}}>This is a basic react component</h1>
        </div>
        
        <p>I can add expresssions by using brackets like this: {example}</p>
      </div>
      
    );
  }
}
