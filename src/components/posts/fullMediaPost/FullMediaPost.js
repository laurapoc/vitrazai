import classes from "./FullMediaPost.module.css";
import React, { Component, Fragment } from "react";

export default class FullMediaPost extends Component {
  buttonClickHandler = () => {
    this.props.history.goBack();
  };

  render() {
    const { largeImageSource, title } = this.props.location.state;
    return (
      <Fragment>
        <div className={classes.FullMediaPost}>
          <h1>{title}</h1>
          <img src={largeImageSource} alt={title} onClick={this.handleImagePopUp} />
        </div>

        <button className={classes.FullMediaPostButton} onClick={this.buttonClickHandler}>
          Grįžti į galeriją
        </button>
      </Fragment>
    );
  }
}

