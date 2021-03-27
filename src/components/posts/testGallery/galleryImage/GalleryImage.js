import React, { Component } from "react";
import classes from "./GalleryImage.module.css";

export default class GalleryImage extends Component {
  render() {
    const { title, imageSource, alt } = this.props;
    return (
      <div className={classes.GalleryImage}>
        <h3>{title}</h3>
        <img src={imageSource} alt={alt} />
      </div>
    );
  }
}
