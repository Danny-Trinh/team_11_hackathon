import React, { Component } from "react";
import ResourcesHeader from '../img/ResourcesHeader.jpg'

export default class BasicPage extends Component {
  render() {
    let example = "hello there";
    return (
      <div className="container">
        <div style={{display:"flex"}}>
        <h1> developers </h1>
        <img src={ResourcesHeader} class="separator" style={{ height: 200}} alt=""/>
          <h1 class="separator" style={{width: 200, display:"inline-block"}}>This is a basic react component</h1>
          <h1 class="separator" style={{width: 200, display:"inline-block"}}>This is a basic react component</h1>
        </div>
        
        <p>I can add expresssions by using brackets like this: {example}</p>
      </div>
      
    );
  }
}
