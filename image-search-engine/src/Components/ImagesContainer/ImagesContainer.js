import React, { Component } from "react";
import ImageCard from "../Image-card/ImageCard";

export default class ImagesContainer extends Component {
  render() {
    const images = this.props.apiImages;
    return (
      <div className="col-12 p-5 row">
        {images.map((image) => {
          return (
            <div key={image.id}>
              <ImageCard image={image} />
            </div>
          );
        })}
      </div>
    );
  }
}
