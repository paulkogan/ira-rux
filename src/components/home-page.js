import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const HomePage = () => (
        <div>
            <NavLink to="/transactions" className="head-links" activeClassName="is-active"> Transactions </NavLink>
              <br />
            <NavLink to="/deals" className="head-links" activeClassName="is-active"> Deals </NavLink>
                <br />
            <NavLink to="/add" className="head-links" activeClassName="is-active"> Add New </NavLink>
             <br />
            <NavLink to="/edit/768" className = "head-links" activeClassName="is-active"> View Item </NavLink>
             <br />
             <br />
       </div>
)

export default HomePage;
