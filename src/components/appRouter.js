import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import EditPage, {} from "./edit-page"
import Header, {} from "./header"
import StoreApp, {} from "./storeApp"
import ConnectedDashList, {} from "./connected-dash-page"
import ConnectedStoreApp, {} from "./connected-storeApp"
import ConnectedAddPage, {} from "./connected-add-page"




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
              <Route path = "/" component = {ConnectedStoreApp} exact={true}/>
              <Route path = "/store" component = {ConnectedStoreApp} />
              <Route path = "/add" component = {ConnectedAddPage} />
              <Route path = "/dash" component = {ConnectedDashList} />
              <Route path = "/edit/:id" component = {EditPage} />
              <Route component = {notFoundPage} />
          </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;


//Route exact path="/dash" render={(props) => DashPage {...props} /}
