import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";


const Header = () => (
  <header className="header">
        <div className="center_container">
                <h1  className="header__title">IRA Responsive UX </h1>
                <h2 className="header__subtitle">v.213 +Stable build with Add Trans - generic pulldown, ENV for api endpoint</h2>

                 <br/>
                    <NavLink to="/" className="head-links" activeClassName="is-active"> Home </NavLink>

        </div>
  </header>

)

export default Header;
