import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { Suspense } from "react";

import "./App.css";
import MainContainer from "./containers/MainContainer";
import PostList from "./components/posts/posts/PostList";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="/posts" component={PostList} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Suspense>{routes}</Suspense>
    </div>
  );
}

export default App;
