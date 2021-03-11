import React, { Component } from "react";
import axios from "axios";
import ArticlePost from "../articlePost/ArticlePost";
import classes from "./ArticlePostList.module.css";

export default class ArticlePostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://vitrazai.lt/wp-json/wp/v2/posts").then((res) => {
      const posts = res.data;
      console.log(posts);
      this.setState({ posts: posts });
    });
  }

  render() {
    const ArticlePostList = this.state.posts.map((post) => (
      <li key={post.id}>
        <ArticlePost
          title={post.title.rendered}
          // imageSource={post.media_details.sizes.medium.source_url}
          content={post.content.rendered}
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
