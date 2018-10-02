import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const HomePage = () => (


              <div className="list-style">
              <center><b>HOME MENU</b></center>
                      <List component="nav">


                      <ListItem button component="a" href={"/investors"}  className="listButton">
                        <ListItemText primary={"> Investors"}  />
                      </ListItem>
                      <Divider />


                      <ListItem button component="a" href={"/deals"}  className="listButton">
                        <ListItemText primary={"> Deals"}  />
                      </ListItem>
                      <Divider />


                      <ListItem button component="a" href={"/transactions"}  className="listButton">
                        <ListItemText primary={"> Transactions"}  />
                      </ListItem>
                      <Divider />



                      <ListItem button component="a" href={"/newtrans"}  className="listButton">
                        <ListItemText primary={"> Add Transaction"}  />
                      </ListItem>
                      <Divider />


                      </List>

              </div>




)

export default HomePage;
