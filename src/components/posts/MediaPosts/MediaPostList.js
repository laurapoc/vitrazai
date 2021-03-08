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
    // first time renders empty array. How to prevent it (or shoud I prevent this)?
    // console.log(this.state.posts);
    const postList = this.state.posts.map((post) => (
      <li key={post.id}>
        <Post
          title={post.title.rendered}
          imageSource={post.media_details.sizes.medium.source_url}
        />
      </li>
    ));
    return (
      <div>
        <h2>This is PostList.js component</h2>

        <ul className={classes.MediaPostList} style={{ listStyle: "none" }}>
          {postList}
        </ul>
      </div>
    );
  }
}
