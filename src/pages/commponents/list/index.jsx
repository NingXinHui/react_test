import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Producthome from "./product/Producthome";
import Productadd from "./product/Productadd";

export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/home/product/list"} component={Producthome}></Route>
          <Route path={"/home/product/list/add"} component={Productadd}></Route>
        </Switch>
      </div>
    );
  }
}
