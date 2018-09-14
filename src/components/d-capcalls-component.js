import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {formatCurrency} from './ira-utils'
import TransListComponent from './t-list-component'
import CapCallModule from './d-capcall-module'



const CapCallsComponent= (props) => {
    const capCallsList = props.dealCapCalls.map((capCall) => {
           return (
              <CapCallModule
                  capCall = {capCall}
                  key = {capCall[0].id}
              />
          )

     });




  return (
            <div className = "div-border">
                    {capCallsList}
            </div>

     )



}
export default CapCallsComponent;









// totalCapitalPct: {props.totalCapitalPct}<br/>
