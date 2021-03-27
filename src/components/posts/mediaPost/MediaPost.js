import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./MediaPost.module.css";

export default class MediaPost extends Component {
  render() {
    const { largeImagesource, title, slug } = this.props;
    return (
      <div className={classes.MediaPost}>
        <Link style={{ textDecoration: 'none' }}
         exact to={{
            pathname: this.props.match.url + `/${slug}`,
            state: { largeImageSource: largeImagesource, title: title },
          }}
        >
          <h3>{this.props.title}</h3>
        </Link>
        <img src={this.props.imageSource} alt={this.props.title} slug={this.props.slug} />
      </div>
    );
  }
}
