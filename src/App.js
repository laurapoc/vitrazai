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

export default class App extends Component {

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
    return (
      <div className="App">
        <Navigation />
        <Suspense>{routes}</Suspense>
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
