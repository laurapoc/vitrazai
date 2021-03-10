import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MediaPost extends Component {
  render() {
    const { largeImagesource, title } = this.props;
    return (
      <div>
        <Link
          to={{
            pathname: `/media-post/${this.props.slug}`,
            state: { largeImageSource: largeImagesource, title: title },
          }}
        >
          <h3>{this.props.title}</h3>
        </Link>
        <img
          src={this.props.imageSource}
          alt={this.props.title}
          slug={this.props.slug}
        />
      </div>
    );
  }
}
