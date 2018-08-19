import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {formatCurrency} from './ira-utils'




//return [{foundCapCall}, capCallTransactions[], {dealEntity}, totalRaised]

//id": 375, "investor_entity_id": 6, "investment_entity_id": 19, "passthru_entity_id": null, "investor_name": "Emily Cohen", "investment_name": "633 St. Marks Place", "passthru_name": null, "tt_id": 8, "tt_name": "Capital Call", "cc_id": 18, "t_wired_date": "Jul 16 2018", "t_amount": 600000, "t_own_adj, t_notes":

const CCTransRow = (props) => {


            const {id, investor_name, investment_name, passthru_name, tt_name, t_wired_date, t_amount} = props.transaction;

            return (

                      <div>
                      <li>
                            {id+".  "}
                            {investor_name+" "}
                            {investment_name+" "}
                            {passthru_name+" "}
                            {tt_name+" "}
                            {t_wired_date+" "}
                            {formatCurrency(t_amount)}
                        </li>
                      </div>

            )
}




//return [{foundCapCall}, capCallTransactions[], {dealEntity}, totalRaised]
const CapCallModule  = (props) => {
            const dealName = props.capCall[2].name;
            const {id, cc_name, deal_entity_id, target_amount, target_per_investor} = props.capCall[0];
            const totalRaised = props.capCall[3]
            const ccTransArray = props.capCall[1]

            const ccTransactionsList = props.capCall[1].map((trans) => {
                    if (!trans.passthru_name) trans.passthru_name = " No Passthru ";
                    return (


                            <CCTransRow
                                transaction = {trans}
                                key = {trans.id}
                            />

                    )
            });



            return (
              <div>
                    <div className = "div-border-thin">
                            Capital Call : <font color= "white">{cc_name} </font><br/>
                            Deal: {dealName} <br/>
                            target_amount:  {formatCurrency(target_amount)} <br/>
                            target_per_investor: {formatCurrency(target_per_investor)} <br/>

                            <div>
                                  {ccTransactionsList}
                            </div>
                            Raised to-date: {formatCurrency(totalRaised)} <br/>
                    </div>
                    <br/>
              </div>

            )
  }

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
                    <u> Capital Calls Information </u><br />
                    {capCallsList}
            </div>

     )



}
export default CapCallsComponent;









// totalCapitalPct: {props.totalCapitalPct}<br/>
