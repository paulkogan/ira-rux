import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const Header = () => (
        <header >
            <h1>React Store with Router and Redux </h1>
            <p>v.9 </p>
            <NavLink to="/list" className="head-links" activeClassName="is-active"> List Items </NavLink>
              <br />
            <NavLink to="/add" className="head-links" activeClassName="is-active"> Add New </NavLink>
             <br />
            <NavLink to="/edit/768" className = "head-links" activeClassName="is-active"> View Item </NavLink>
             <br />
             <br />
       </header>
)

export default Header;
