import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



//component get props
const DealsList = (props) => {
  //create list of displayable dealactions
  const displayDeals = props.dealsResults.map(  (dealResult) => {

        const dealLink = "/dealdetails/"+ dealResult.id
        return (

                <div  key = {dealResult.id}>
                  <ListItem button component="a" href={dealLink}  className="listButton">
                    <ListItemText primary={"> "+dealResult.name}  />
                  </ListItem>
                  <Divider />
                </div>


        )
  });





return (
        <div className="list-style">
        <center><b>DEALS</b></center>
                <List component="nav">
                        {displayDeals}
                </List>

        </div>

      )
}


export default DealsList;
