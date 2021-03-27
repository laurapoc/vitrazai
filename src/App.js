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

function App() {
  let routes = (
    <Switch>
      <Route path="/articles" exact component={ArticlePostList} />
      <Route path="/" exact component={MainContainer} />
      <Route path="/media-posts" exact component={MediaPostList} />
      <Route path="/test-gallery" exact component={GalleryImageList} />
      <Route path="/articles/:id" component={FullArticlePost} />
      <Route path="/media-posts/:slug" component={FullMediaPost} />
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

export default App;
