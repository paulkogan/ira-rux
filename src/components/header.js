import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const Header = () => (
        <header >
            <h1>SpendTrack </h1>
            <p>v.8 </p>
            <NavLink to="/store" className="head-links" activeClassName="is-active" exact={true}> Spending Dashboard </NavLink>
              <br />
            <NavLink to="/dash" className="head-links" activeClassName="is-active"> List of Expenses </NavLink>
             <br />
            <NavLink to="/add" className = "head-links" activeClassName="is-active"> Add new Expense </NavLink>
             <br />
             <br />
       </header>
)

export default Header;
