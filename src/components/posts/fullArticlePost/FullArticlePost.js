import React from "react";
import parse from "html-react-parser";
import classes from "./FullArticlePost.module.css";
import { fullArticlePostReplacer } from "../../../services/replacers/replacers";

const FullArticlePost = (props) => {
  const { title, content } = props.location.state;

  let parsingParams = {
    // Replace hrefs into empty elements
    replace: fullArticlePostReplacer,
  };

  return (
    <div className={classes.FullArticlePost}>
      <h3>{title}</h3>
      {/* Convert HTML string into React element */}
      {parse(`<p>${content}</p>`, parsingParams)}
    </div>
  );
};

export default FullArticlePost;
