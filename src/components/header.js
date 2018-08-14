import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const Header = () => (
        <header >
                <h1>IRA Responsive UX</h1>
                 &nbsp;&nbsp;&nbsp;v.209 - capital call for Deals page
                 <br/>
                    <NavLink to="/" className="head-links" activeClassName="is-active"> Home </NavLink>
                  <br />
                  <br />
       </header>

)

export default Header;
