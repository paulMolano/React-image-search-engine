import React, { Component } from "react";
import ImageCard from "../Image-card/ImageCard";
import Pagination from "../Pagination.js/Pagination";

export default class ImagesContainer extends Component {
  render() {
    const images = this.props.apiImages;
    return (
      <>
        <div className="col-12 p-5 row">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
        <div className="row justify-content-center">
          <Pagination next={this.props.next} prev={this.props.prev} />
        </div>
      </>
    );
  }
}
