import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImagePopUp from "../../imagePopUp/ImagePopUp";
import classes from "./MediaPost.module.css";

export default class MediaPost extends Component {
  state = {
    showImagePopUp: false,
  };

  handleImagePopUp = () => {
    this.setState({ showImagePopUp: true });
  };

  handlePopUpOff = () => {
    this.setState({ showImagePopUp: false });
  };

  render() {
    const { largeImagesource, fullImagesource, title, slug } = this.props;
    const { showImagePopUp } = this.state;
    const PopImage = showImagePopUp ? <ImagePopUp {...this.props} {...this.state} clicked={this.handlePopUpOff} /> : null;

    return (
      <div>
        {/* show ImagePopUp component when showImagePopUp state is true */}
        {PopImage}
        <div className={classes.MediaPost}>
          {/* link to image description */}
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: this.props.match.url + `/${slug}`,
              state: { largeImageSource: largeImagesource, title: title, fullImagesource: fullImagesource },
            }}
          >
            <h3>{this.props.title}</h3>
          </Link>
          <img
            src={this.props.imageSource}
            alt={this.props.title}
            slug={this.props.slug}
            onClick={this.handleImagePopUp}
          />
        </div>
      </div>
    );
  }
}
