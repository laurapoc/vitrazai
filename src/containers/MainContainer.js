import React, { Component } from "react";
// import ImageSlide from '../components/imageSlide/imageSlide'
import ImageSlide from "../components/imageSlide/ImageSlide";
// import ArticlePostList from "../components/posts/articlePosts/ArticlePostList";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <ImageSlide />
        {/* <ArticlePostList /> */}
      </div>
    );
  }
}
