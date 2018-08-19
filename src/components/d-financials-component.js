import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {formatCurrency} from './ira-utils'

//component get props
const DealFinancialsComponent  = (props) => {
  //const dealFinancials = props.dealFinancials;
  const {name, id, total_assets, total_debt, deal_equity_value, notes} = props.dealFinancials;

  return (

            <div className = "div-border">
                  <u> Deal Financials for  {name} </u><br/>
                   Entity_ID: {props.entityID}  <br/>
                   Deal_ID: {id}  <br/>
                   total_assets: {formatCurrency(total_assets)}  <br/>
                   total_debt: {formatCurrency(total_debt)}  <br/>
                   equity_value: {formatCurrency(deal_equity_value)}  <br/>
                   notes: {notes}  <br/>
                  <br/>

            </div>

  )

}
export default DealFinancialsComponent;
