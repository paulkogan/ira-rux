import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header, {} from "./header"
import HomePage, {} from "./home-page.js"
import TransSearchPage, {} from "./trans-search-page"
import DealsListPage, {} from "./deals-list-page"
import DealDetailsPage, {} from "./deal-details-page"

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
              <Route path = "/deals" component = {DealsListPage} />
              <Route path = "/dealdetails/:id" component = {DealDetailsPage} />
              <Route component = {notFoundPage} />
          </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
