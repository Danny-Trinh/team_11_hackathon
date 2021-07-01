import React, { Component } from "react";

export default class BasicPage extends Component {
  render() {
    let example = "hello there";
    return (
      <div className="container">
          <h1 class="separator" style={{width: 200}}>This is a basic react component</h1>
          <h1 class="separator" style={{width: 200}}>This is a basic react component</h1>
        
        <p>I can add expresssions by using brackets like this: {example}</p>
      </div>
      
    );
  }
}
