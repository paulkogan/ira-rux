import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
//<li className="list-group-item">
//{<a href = '/dealdetails/'+dealResult.id>{dealResult.name}+</a>}

const InvestorItem = (props) => {
      const {investorResult} = props;
      //console.log("DealResult is "+JSON.stringify(dealResult))
      const investorLink = "/portfolio/"+ investorResult.id
      return (

                <div>
                      <Link to={investorLink }> {investorResult.id+".  "} {investorResult.name} </Link>
                      <br/>
                </div>

      )

}


//component get props
const InvestorsList = (props) => {
  //create list of displayable Investoractions
  const displayInvestors = props.investorsResults.map(  (investorResult) => {
        return (
            <InvestorItem
                investorResult = {investorResult}
                key = {investorResult.id}
            />
        )
  });



return (
        <div>
          <ul>
              {displayInvestors}
          </ul>
        </div>

      )
}

export default InvestorsList;
