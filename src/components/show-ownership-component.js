import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";


//component get props

const OwnershipRow  = (props) => {

            const ownRow = props.ownRow;
            return (

                      <div>
                      <li>
                             {"  "+ownRow.id}
                             {"  "+ownRow.investor_name}
                             {"  "+ownRow.investment_name}
                             {"  "+ownRow.passthru_name? ownRow.passthru_name : "No Passthru"}
                             {"  "+ownRow.wired_date}
                             {"  "+ownRow.amount}
                             {"  "+ownRow.capital_pct+"%"}
                      </li>
                      </div>

            )

  }

const ShowOwnership= (props) => {
    const ownRowsList = props.ownRows.map((ownRow) => {
           return (
              <OwnershipRow
                  ownRow = {ownRow}
                  key = {ownRow.id}
              />
          )
     });






  return (
            <div>
                    <u> Ownership Information </u><br />
                    {ownRowsList}
                    <br />
                    Total Capital: {props.ownTotals.totalCapital}<br/>
                    Total Capital Pct: {props.ownTotals.totalCapitalPct} %<br/>
            </div>

     )



}
export default ShowOwnership;








// totalCapitalPct: {props.totalCapitalPct}<br/>
