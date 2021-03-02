import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import classes from "./ImageSlide.module.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default class ImageSlide extends Component {
  render() {
    return (
      <div className={classes.Imageslide}>
        <ImageGallery items={images} autoPlay={true} showPlayButton={true} showThumbnails={false} showFullscreenButton={false} additionalClass="PlayButton"/>;
      </div>
    );
  }
}
