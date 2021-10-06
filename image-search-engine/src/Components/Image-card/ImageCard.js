import React, { Component } from "react";

export default class ImageCard extends Component {
  render() {
    const image = this.props.image;
    return (
      <div className="card">
        <img className="card-img-top" src={image.webformatURL} alt="" />
        <div className="card-body">
          <h4 className="card-title">{image.id}</h4>
          <p className="card-text">Some example text.</p>
        </div>
      </div>
    );
  }
}
