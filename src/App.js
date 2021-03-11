import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { Suspense } from "react";

import "./App.css";
import MainContainer from "./containers/MainContainer";
import MediaPostList from "./components/posts/MediaPosts/MediaPostList";
import Navigation from "./components/navigation/Navigation";
import FullArticlePost from "./components/posts/fullArticlePost/FullArticlePost";
import FullMediaPost from "./components/posts/fullMediaPost/FullMediaPost";
import ArticlePostList from "./components/posts/articlePosts/ArticlePostList";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="/articles" exact component={ArticlePostList} />
      <Route path="/media-posts" exact component={MediaPostList} />
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
