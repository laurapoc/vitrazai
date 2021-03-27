import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { articlePostReplacer } from "../../../utility/replacers/replacers";
import classes from "./ArticlePost.module.css";

export default class ArticlePost extends Component {
  static defaultProps = {
    maxLength: 250,
  };

  render() {
    // Rreplace hrefs and headers into empty elements
    // otherwise links go to the external source
    let parsingParams = {
      replace: articlePostReplacer,
    };
    const { title, content, id } = this.props;
    return (
      <div className={classes.ArticlePost}>
        <h3>{title.toUpperCase()}</h3>
        {content.length > this.props.maxLength ? (
          <div>
            {/* Convert HTML string into React element */}
            {parse(`${content.substring(0, this.props.maxLength)}...`, parsingParams)}
            <Link
              to={{
                pathname: this.props.match.url + `/${id}`,
                state: { title: title, content: content },
              }}
            >
              Read more
            </Link>
          </div>
        ) : (
          // Convert HTML string into React element
          parse(`<p>${content}</p>`, parsingParams)
        )}
      </div>
    );
  }
}
