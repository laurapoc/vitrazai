import React, { Component } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import classes from "./ImageSlide.module.css";

export default class ImageSlide extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://vitrazai.lt/wp-json/wp/v2/media").then((res) => {
      const posts = res.data;
      this.setState({ posts: posts });
    });
  }

  render() {
    // create image slide source object array from fetched data:
    let imageSources = this.state.posts.map((post) => {
      return { original: post.source_url };
    });

    return (
      <div className={classes.Imageslide}>
        <ImageGallery
          items={imageSources}
          autoPlay={true}
          showPlayButton={true}
          showThumbnails={false}
          showFullscreenButton={false}
          slideDuration={900}
          showNav={false}
        />
        ;
      </div>
    );
  }
}
