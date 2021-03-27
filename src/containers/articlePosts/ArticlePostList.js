import React, { Component } from "react";
import { getData } from "../../services/data/data";

import ArticlePost from "../../components/posts/articlePost/ArticlePost";
import classes from "./ArticlePostList.module.css";

export default class ArticlePostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    getData("posts").then((posts) => this.setState({ posts: posts }));
  }

  render() {
    const ArticlePostList = this.state.posts.map((post) => (
      <li key={post.id}>
        <ArticlePost
          title={post.title.rendered}
          content={post.content.rendered}
          shortContent={post.excerpt.rendered}
          id={post.id}
          {...this.props}
        />
      </li>
    ));

    return (
      <div className={classes.ArticlePostList}>
        <h1>Straipsniai</h1>
        <ul>{ArticlePostList}</ul>
      </div>
    );
  }
}
