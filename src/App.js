import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";

import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/candy">
            <Candy />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
