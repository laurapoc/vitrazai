import React, { Component } from "react";
import Post from "../../components/posts/mediaPost/MediaPost";
import Spinner from "../../components/spinner/Spinner";
import { getData } from "../../services/data/data";

import classes from "./MediaPostList.module.css";

export default class MediaPostList extends Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      getData("media").then((posts) =>
        this.setState({ posts: posts, loading: false })
      );
    });
  }

  render() {
    console.log(this.state.posts);
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
    let showContent = this.state.loading ? (
      <Spinner />
    ) : (
      <ul className={classes.MediaPostList}>{postList}</ul>
    );
    return <div>{showContent}</div>;
  }
}
