import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {getVersion} from './ira-utils';
import NavBar, {} from './navBar-material.js';


const Header = () => (
  <header className="header">
        <div className="center_container">


                <Link to="/" className="head-links" >
                        <img width="75" src={"../../static/GP_Prop_logo_1.png"}/>

                </Link>
                 &nbsp;IRA Mobile -- {getVersion()}

        </div>





  </header>

)

export default Header;
