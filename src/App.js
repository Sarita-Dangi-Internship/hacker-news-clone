import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./constants/routes";
import "./styles/main.scss";
import TopStories from "./pages/topStories/index";
import BestStories from "./pages/bestStories/index";
import NewStories from "./pages/newStories/index";
import Comments from "./pages/comments/index";
import NavBar from "./components/NavBar/index";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="main-container">
            <NavBar />
            <Switch>
              <Route
                path={routes.index}
                render={() => <Redirect to={routes.topStories} />}
                exact={true}
              />
              <Route path={routes.topStories} component={TopStories} />
              <Route path={routes.bestStories} component={BestStories} />
              <Route path={routes.newStories} component={NewStories} />
              <Route path={routes.comments} component={Comments} exact={true} />
              <Route path={`${routes.comments}/:id`} component={Comments} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
