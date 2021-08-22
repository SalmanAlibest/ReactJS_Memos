import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  generatePath,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "./routes";
import Posts from "./component/Posts";
import CreatePost from "./component/CreatePost";
import { getPosts } from "./data/actions";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPosts());
  });

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.POSTS} component={Posts} />
        <Route exact path={ROUTES.CREATE_POST} component={CreatePost} />
      </Switch>
    </Router>
  );
};

export default App;
