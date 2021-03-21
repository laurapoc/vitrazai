import React, { Component } from "react";
import axios from "axios";
import GalleryImage from "../galleryImage/GalleryImage";

export default class GalleryImageList extends Component {
  state = {
    gallery: [],
  };

  async componentDidMount() {
    try {
      let response = await axios.get("http://localhost/vitrazai/wp-json/wp/v2/gallery");
        console.log(response.data);
      if (!response.data) {
        throw new Error("Something went wrong...");
      }
      this.setState({ gallery: response.data });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    console.log(this.state.gallery);
    const galleryItemList = this.state.gallery.map((item) => <GalleryImage key={item.id} title={item.title.rendered} imageSource={item.acf.image.sizes.medium} />);
    return (
      <div>
        <h2>TESTINĖ GALERIJA IŠ NAUJO WORDPRESSO</h2>
        {galleryItemList}
      </div>
    );
  }
}
