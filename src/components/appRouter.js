import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DashPage, {} from "./dash-page"
import AddPage, {} from "./add-page"
import EditPage, {} from "./edit-page"
import Header, {} from "./header"



const homePage = () => {
      return (
        <div>
             Hello from HomePage
        </div>

      );
}



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
              <Route path = "/" component = {homePage} exact={true}/>
              <Route path = "/add" component = {AddPage} />
              <Route path = "/dash" component = {DashPage} />
              <Route path = "/edit/:id" component = {EditPage} />
              <Route component = {notFoundPage} />
          </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
