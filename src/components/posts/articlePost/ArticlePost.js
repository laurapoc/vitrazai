import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticlePost extends Component {
  static defaultProps = {
    maxLength: 250,
  };

  render() {
    const { title, content } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        {content.length > this.props.maxLength ? (
          <div>
            {`${content.substring(0, this.props.maxLength)}...`}

            <Link
              to={{
                pathname: "/full-article",
                state: { title: title, content: content },
              }}
            >
              Read more
            </Link>
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    );
  }
}
