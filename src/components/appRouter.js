import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header, {} from "./header"
import HomePage, {} from "./home-page.js"
import TransSearchPage, {} from "./trans-search-page"
import DealsListPage, {} from "./deals-list-page"
import InvestorsListPage, {} from "./investors-list-page"
import DealDetailsPage, {} from "./deal-details-page"
import PortfolioPage, {} from "./portfolio-page"
import NewTransactionForm, {} from "./new-transaction-form"
import TopAppBar, {} from "./appBar-top"

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
          <div className="center_container">
          <br/>
          <Switch>

              <Route path = "/" component = {HomePage} exact={true}/>
              <Route path = "/transactions" component = {TransSearchPage} />
              <Route path = "/deals" component = {DealsListPage} />
              <Route path = "/investors" component = {InvestorsListPage} />
              <Route path = "/ddtest" render={  ()=>  <DealDetailsPage nid={20}/> } />
              <Route path = "/dealdetails/:id" component = {DealDetailsPage} />
              <Route path = "/portfolio/:id" component = {PortfolioPage} />
              <Route path = "/newtrans" component = {NewTransactionForm} />
              <Route path = "/appbar" component = {TopAppBar} />
              <Route component = {notFoundPage} />
          </Switch>
          </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;


    //              <Route path = "/dealdetails/:id" component = {DealDetailsPage} />
