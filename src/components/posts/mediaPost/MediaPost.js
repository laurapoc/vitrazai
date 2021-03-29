import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./MediaPost.module.css";

export default class MediaPost extends Component {

  state = {
    showImagePopUp: false,
  }

  handleImagePopUp = () => {
    console.log("image clicked");
    this.setState({showImagePopUp: true});
  };

  handlePopUpOff = () => {
    this.setState({showImagePopUp: false})
  }

  render() {
    const { largeImagesource, fullImagesource, title, slug } = this.props;
const {showImagePopUp} = this.state;

    return (
      <div className={classes.MediaPost}>
        {/* show image pop up */}
        <div className={!showImagePopUp ? classes.PopImageHide : classes.PopImageShow} onClick={this.handlePopUpOff}>
          <img src={fullImagesource} alt={title} />
        </div>
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
        <img src={this.props.imageSource} alt={this.props.title} slug={this.props.slug} onClick={this.handleImagePopUp} />
      </div>
    );
  }
}
