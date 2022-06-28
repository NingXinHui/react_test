import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"
//引入配置
import config from "./utils/routers/config";
import RouterView from "./utils/routers/RouterViews";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <RouterView Routes={config}></RouterView>
        </Router>
      </div>
    );
  }
}
