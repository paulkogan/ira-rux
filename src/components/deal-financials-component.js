import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";


//component get props
const DealsFinancials = (props) => {
  const dealFinancials = props.dealFinancials;
  //const dealLink = "/dealdetails/"+ props.dealResult.id
  return (

            <div>

                   Entity_ID: {props.entityID}  <br/>
                   Deal_ID: {dealFinancials.id}  <br/>
                   Name: {dealFinancials.name}  <br/>
                   total_assets: {dealFinancials.total_assets}  <br/>
                   total_debt: {dealFinancials.total_debt}  <br/>
                   equity_value: {dealFinancials.equity_value}  <br/>
                   notes: {dealFinancials.notes}  <br/>
                  <br/>

            </div>

  )

}
export default DealsFinancials;
