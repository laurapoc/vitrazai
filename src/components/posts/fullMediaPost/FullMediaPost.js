import classes from "./FullMediaPost.module.css";
import React, { Component, Fragment } from "react";

export default class FullMediaPost extends Component {
  buttonClickHandler = () => {
    this.props.history.goBack();
  };

  handleImagePopUp = () => {
    console.log("image clicked");
  };

  render() {
    const { largeImageSource, title } = this.props.location.state;

    return (
      <Fragment>
        <div className={classes.FullMediaPost}>
          <h1>{title}</h1>
          <img
            src={largeImageSource}
            alt={title}
            onClick={this.handleImagePopUp}
          />
        </div>
        <div className={classes.PopImage}>
          <img src={largeImageSource} alt={title} />
        </div>

        <button
          className={classes.FullMediaPostButton}
          onClick={this.buttonClickHandler}
        >
          Grįžti į galeriją
        </button>
      </Fragment>
    );
  }
}

// const FullMediaPost = (props) => {
//   const { largeImageSource, title } = props.location.state;

//   const buttonClickHandler = () => {
//     props.history.goBack();
//   };

//   return (
//     <Fragment >
//       <div className={classes.FullMediaPost}>
//         <h1>{title}</h1>
//         <img src={largeImageSource} alt="" />
//       </div>

//       <button className={classes.FullMediaPostButton} onClick={buttonClickHandler}>Grįžti į galeriją</button>
//     </Fragment>
//   );
// };

// export default FullMediaPost;
