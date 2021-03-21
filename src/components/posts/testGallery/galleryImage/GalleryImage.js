import React, { Component } from "react";

export default class GalleryImage extends Component {
  render() {
    const { title, imageSource } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <img src={imageSource} alt="vitrazas" />
      </div>
    );
  }
}
