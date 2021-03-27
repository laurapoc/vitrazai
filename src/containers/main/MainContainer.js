import React, { Component } from "react";
import AboutAuthor from "../../components/aboutAuthor/AboutAuthor";
import ImageSlide from "../../components/imageSlide/ImageSlide";


export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <ImageSlide />
        <AboutAuthor />
      </div>
    );
  }
}
