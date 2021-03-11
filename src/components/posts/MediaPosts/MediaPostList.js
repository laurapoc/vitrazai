import axios from "axios";
import React, { Component } from "react";
import Post from "../mediaPost/MediaPost";

import classes from "./MediaPostList.module.css";

export default class MediaPostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://vitrazai.lt/wp-json/wp/v2/media").then((res) => {
      const posts = res.data;
      this.setState({ posts: posts });
    });
  }

  render() {
    // console.log(this.state.posts);
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
