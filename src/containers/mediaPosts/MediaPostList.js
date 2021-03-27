import React, { Component } from "react";
import Post from "../../components/posts/mediaPost/MediaPost";
import { getData } from "../../services/data/data";

import classes from "./MediaPostList.module.css";

export default class MediaPostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    getData("media").then((posts) => this.setState({ posts: posts }));
  }

  render() {
    const postList = this.state.posts.map((post) => (
      <li key={post.id}>
        <Post
          title={post.title.rendered}
          imageSource={post.media_details.sizes.medium.source_url}
          largeImagesource={post.media_details.sizes.full.source_url}
          slug={post.slug}
          {...this.props}
        />
      </li>
    ));
    return (
      <div>
        <ul className={classes.MediaPostList}>{postList}</ul>
      </div>
    );
  }
}
