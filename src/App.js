import React, { Component } from "react";

import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { Suspense } from "react";

import "./App.css";
import MainContainer from "./containers/main/MainContainer";
import MediaPostList from "./containers/mediaPosts/MediaPostList";
import Navigation from "./components/navigation/Navigation";
import FullArticlePost from "./components/posts/fullArticlePost/FullArticlePost";
import FullMediaPost from "./components/posts/fullMediaPost/FullMediaPost";
import ArticlePostList from "./containers/articlePosts/ArticlePostList";
import GalleryImageList from "./containers/galleryImages/GalleryImageList";
import Spinner from "./components/spinner/Spinner";

export default class App extends Component {
  state = {
    loading: true,
  };

  async loadData() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }
  componentDidMount() {
    this.loadData();
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/articles" component={ArticlePostList} />
        <Route exact path="/media-posts" component={MediaPostList} />
        <Route exact path="/test-gallery" component={GalleryImageList} />
        <Route exact path="/articles/:id" component={FullArticlePost} />
        <Route exact path="/media-posts/:slug" component={FullMediaPost} />
        <Redirect to="/" />
      </Switch>
    );

    let showContent = this.state.loading ? (
      <Suspense>
        <Spinner />
      </Suspense>
    ) : (
      <Suspense>{routes}</Suspense>
    );

    return (
      <div className="App">
        <Navigation />
        {/* <Suspense>{routes}</Suspense> */}
        {showContent}
      </div>
    );
  }
}

// function App() {
//   let routes = (
//     <Switch>
//       <Route exact path="/" component={MainContainer} />
//       <Route exact path="/articles" component={ArticlePostList} />
//       <Route exact path="/media-posts" component={MediaPostList} />
//       <Route exact path="/test-gallery" component={GalleryImageList} />
//       <Route exact path="/articles/:id" component={FullArticlePost} />
//       <Route exact path="/media-posts/:slug" component={FullMediaPost} />
//       <Redirect to="/" />
//     </Switch>
//   );

//   return (
//     <div className="App">
//       <Navigation />
//       <Suspense>{routes}</Suspense>
//     </div>
//   );
// }

// export default App;
