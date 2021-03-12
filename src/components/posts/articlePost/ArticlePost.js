import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default class ArticlePost extends Component {
  static defaultProps = {
    maxLength: 250,
  };

  render() {
    let parsingParams = {
      replace: (domNode) => {
        if (domNode.attribs && domNode.attribs.href !== undefined) {
          domNode.attribs.href = "";
        } else if (domNode.name === "h1" || domNode.name === "h2") {
          return <></>;
        } else if (domNode.name === "p") {
        }
      },
    };
    const { title, content, id } = this.props;
    return (
      <div>
        <h3>{title.toUpperCase()}</h3>

        {content.length > this.props.maxLength ? (
          <div>
            {parse(
              `${content.substring(0, this.props.maxLength)}...`,
              parsingParams
            )}

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
          parse(`<p>${content}</p>`, parsingParams)
        )}
      </div>
    );
  }
}
