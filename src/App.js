import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { Suspense } from "react";

import "./App.css";
import MainContainer from "./containers/MainContainer";
import MediaPostList from "./components/posts/MediaPosts/MediaPostList";
import Navigation from "./components/navigation/Navigation";
import FullArticlePost from "./components/posts/fullArticlePost/FullArticlePost";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="/media-posts" component={MediaPostList} />
      <Route path="/full-article" component={FullArticlePost} />
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
