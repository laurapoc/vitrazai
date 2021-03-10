import React, { Fragment } from "react";


const FullMediaPost = (props) => {
  const { largeImageSource, title } = props.location.state;

  const buttonClickHandler = () => {
    props.history.goBack();
  };

  return (
    <Fragment>
      <div>
        <h1>{title}</h1>
        <img src={largeImageSource} alt="" />
      </div>

      <button onClick={buttonClickHandler}>Go Back</button>
    </Fragment>
  );
};

export default FullMediaPost;
