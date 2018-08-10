import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header, {} from "./header"
import HomePage, {} from "./home-page.js"
import AddPage, {} from "./add-page.js"
import ListPage, {} from "./list-page"
import TransSearchPage, {} from "./transsearch-page"


const notFoundPage = () => {
      return (
        <div>
                 404 -- Sorry, no such page!
                 <br />
        </div>

      );
}


const AppRouter = () => (
  <BrowserRouter>
    <div>
          <Header />
          <Switch>
              <Route path = "/" component = {HomePage} exact={true}/>
              <Route path = "/transactions" component = {TransSearchPage} />
              <Route component = {notFoundPage} />
          </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
