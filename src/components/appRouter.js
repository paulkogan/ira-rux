import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header, {} from "./header"
import AddPage, {} from "./add-page.js"
import ListPage, {} from "./list-page"
import EditPage, {} from "./edit-page"



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
              <Route path = "/" component = {ListPage} exact={true}/>
              <Route path = "/list" component = {ListPage} />
              <Route path = "/add" component = {AddPage} />
              <Route path = "/edit/:id" component = {EditPage} />
              <Route component = {notFoundPage} />
          </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
