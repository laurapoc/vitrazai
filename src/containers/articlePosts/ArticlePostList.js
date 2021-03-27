import React, { Component } from "react";
import { getData } from "../../services/data/data";

import ArticlePost from "../../components/posts/articlePost/ArticlePost";
import classes from "./ArticlePostList.module.css";
import Spinner from "../../components/spinner/Spinner";

export default class ArticlePostList extends Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      getData("posts").then((posts) => this.setState({ posts: posts, loading: false }));
    });
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

    const showContent = this.state.loading ? (
      <Spinner />
    ) : (
      <div>
        <h1>Straipsniai</h1>
        <ul>{ArticlePostList}</ul>
      </div>
    );
    return <div className={classes.ArticlePostList}>{showContent}</div>;
  }
}
