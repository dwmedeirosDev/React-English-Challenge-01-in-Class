import React, { Component } from "react";
import image from "./images/Titanic_poster.jpg";
import "./App.css"

export default class App extends Component {
  state = [
    {
      title: "Titanic"
    },
    {
      sinopse:
        "A poor man and a rich young woman meet and fall in love on the voyage of the Titanic, in 1912. It will be from the arrogant heir of a steel mill, a young challenger to his family and friends in search of true love."
    }
  ];

  render() {
    return (
      <div className="movie">
        <h1>{this.state[0].title}</h1>
        <p>{this.state[1].sinopse}</p>
        <img src={image} alt="aaaaa" />
      </div>
    );
  }
}