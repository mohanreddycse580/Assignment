import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddUser from "./user/AddUser";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/add" component={AddUser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
