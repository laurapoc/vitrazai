import "./ImagePopUp.css";
import React, { Component } from "react";

export default class ImagePopUp extends Component {
  render() {
    const { fullImagesource, title } = this.props;
    return (
      <div className="PopUpImage" onClick={this.props.clicked}>
        <img src={fullImagesource} alt={title} />
      </div>
    );
  }
}
