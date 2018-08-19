import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const HomePage = () => (
        <div>
            <NavLink to="/transactions" className="head-links" activeClassName="is-active"> Transactions </NavLink>
              <br />
            <NavLink to="/deals" className="head-links" activeClassName="is-active"> Deals </NavLink>
                <br />
            <NavLink to="/newtrans" className="head-links" activeClassName="is-active"> New Transaction </NavLink>
                    <br />


             <br />
       </div>
)

export default HomePage;
