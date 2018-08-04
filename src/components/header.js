import React, {} from "react";
//import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const Header = () => (
        <header >
            <h1>SpendTrack</h1>
            <NavLink to="/" className="head-links" activeClassName="is-active" exact={true}> Home </NavLink>
            <br />
            <NavLink to="/dash" className="head-links" activeClassName="is-active"> Dashboard </NavLink>
             <br />
            <NavLink to="/add" className = "head-links" activeClassName="is-active"> Add Expenses </NavLink>
             <br />
             <br />
       </header>
)

export default Header;
