import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const Header = () => (
        <header >
            <h1>SpendTrack </h1>
            <p>v.7 </p>
            <NavLink to="/store" className="head-links" activeClassName="is-active" exact={true}> Connected  StoreApp </NavLink>
              <br />
            <NavLink to="/dash" className="head-links" activeClassName="is-active"> Connected DashList </NavLink>
             <br />
            <NavLink to="/add" className = "head-links" activeClassName="is-active"> Add Expenses </NavLink>
             <br />
             <br />
       </header>
)

export default Header;
