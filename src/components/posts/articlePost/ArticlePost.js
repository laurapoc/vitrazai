import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticlePost extends Component {
  static defaultProps = {
    maxLength: 250,
  };


  render() {
    console.log(this.props) 
    const { title, content, id } = this.props;
    return (
      <div>
        <h3>{title.toUpperCase()}</h3>
        {content.length > this.props.maxLength ? (
          <div>
            {`${content.substring(0, this.props.maxLength)}...`}

            <Link
              to={{
                pathname: this.props.match.url +  `/${id}`,
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
