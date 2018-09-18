import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {getVersion} from './ira-utils';


import TopAppBar, {} from './appBar-top.js';




const Header = () => (
  <header className="header">

            <div>
  
                  <TopAppBar />

            </div>
  </header>

)

export default Header;
        //
        // <div className="center_container">
        // </div>

// <Link to="/" className="head-links" >
//         <img width="75" src={"../../static/GP_Prop_logo_1.png"}/>
//
// </Link>
//  &nbsp;IRA Mobile -- {getVersion()}
