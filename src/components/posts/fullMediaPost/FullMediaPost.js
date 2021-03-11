import classes from "./FullMediaPost.module.css";
import React, { Fragment } from "react";


const FullMediaPost = (props) => {
  const { largeImageSource, title } = props.location.state;

  const buttonClickHandler = () => {
    props.history.goBack();
  };

  return (
    <Fragment >
      <div className={classes.FullMediaPost}>
        <h1>{title}</h1>
        <img src={largeImageSource} alt="" />
      </div>

      <button className={classes.FullMediaPostButton} onClick={buttonClickHandler}>Grįžti į galeriją</button>
    </Fragment>
  );
};

export default FullMediaPost;
