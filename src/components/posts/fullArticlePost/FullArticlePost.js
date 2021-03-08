import React from "react";

const FullArticlePost = (props) => {
  //   const { title, content } = this.props;
  console.log("full article", props.location.state);

  const { title, content } = props.location.state;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default FullArticlePost;
