import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
//<li className="list-group-item">
//{<a href = '/dealdetails/'+dealResult.id>{dealResult.name}+</a>}

const DealItem = (props) => {
      const dealResult = props.dealResult;
      //console.log("DealResult is "+JSON.stringify(dealResult))
      const dealLink = "/dealdetails/"+ props.dealResult.id
      return (

                <div>
                      <Link to={dealLink}> {dealResult.id+".  "} {dealResult.name} </Link>
                      <br/>
                </div>

      )

}


//component get props
const DealsList = (props) => {
  //create list of displayable dealactions
  const displayDeals = props.dealsResults.map(  (dealResult) => {
        return (
            <DealItem
                dealResult = {dealResult}
                key = {dealResult.id}
            />
        )
  });



return (
        <div>
          <ul>
              {displayDeals}
          </ul>
        </div>

      )
}

export default DealsList;
