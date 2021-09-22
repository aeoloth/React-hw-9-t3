import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory, useLocation } from "react-router-dom";
import About from "./About";
import App from "./App";
import "./index.css";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  }

  const atAboutPage = location.pathname.includes("/about")

  return atAboutPage && <button onClick={handleBackClick}>Back</button>;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about/:name" component={About} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
