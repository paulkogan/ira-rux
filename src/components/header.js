import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const Header = () => (
        <header >
        <h1>IRA Responsive UX</h1>
         v.202
            <NavLink to="/" className="head-links" activeClassName="is-active"> Home </NavLink>
            <NavLink to="/transactions" className="head-links" activeClassName="is-active"> Transactions </NavLink>
            <br />
            <br />
       </header>

)

export default Header;
