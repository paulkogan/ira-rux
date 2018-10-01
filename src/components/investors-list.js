import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



//component get props
const InvestorsList = (props) => {
  //create list of displayable Investoractions
  const investorListItems= props.investorsResults.map(  (investorResult) => {
        const investorLink = "/portfolio/"+ investorResult.id
        return (
          <div  key = {investorResult.id}>
            <ListItem button component="a" href={investorLink}  className="listButton">
              <ListItemText primary={"> "+investorResult.name}  />
            </ListItem>
            <Divider />
          </div>

        )
  });



return (
        <div className="list-style">
        <center><b>INVESTORS</b></center>
                <List component="nav">
                        {investorListItems}
                </List>

        </div>

      )
}

export default InvestorsList;



// <InvestorItem
//     investorResult = {investorResult}
//     key = {investorResult.id}
// />



// const InvestorItem = (props) => {
//       const {investorResult} = props;
//       //console.log("DealResult is "+JSON.stringify(dealResult))
//       const investorLink = "/portfolio/"+ investorResult.id
//       return (
//
//                 <div>
//                       <Link to={investorLink }> {investorResult.id+".  "}
//                               {investorResult.name}
//                       </Link>
//                       <br/>
//                 </div>
//
//       )
//
// }
