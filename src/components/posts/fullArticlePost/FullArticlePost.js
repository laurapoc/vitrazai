import React from "react";
import parse from "html-react-parser";
import classes from "./FullArticlePost.module.css";

const FullArticlePost = (props) => {
  const { title, content } = props.location.state;

  let parsingParams = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.href !== undefined) {
        domNode.attribs.href = "";
      } else if (domNode.name === "article") {
      }
    },
  };

  return (
    <div className={classes.FullArticlePost}>
      <h3>{title}</h3>
      {parse(`<p>${content}</p>`, parsingParams)}
    </div>
  );
};

export default FullArticlePost;
