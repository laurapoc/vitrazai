import React, { Component } from "react";
import AboutAuthor from "../../components/aboutAuthor/AboutAuthor";
import ImageSlide from "../../components/imageSlide/ImageSlide";
import Spinner from "../../components/spinner/Spinner";

export default class MainContainer extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  render() {
    const showContent = this.state.loading ? (
      <Spinner />
    ) : (
      <div>
        <ImageSlide />
        <AboutAuthor />
      </div>
    );
    return <div>{showContent}</div>;
  }
}
