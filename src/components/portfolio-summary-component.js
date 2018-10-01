import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


import TransListComponent from './t-list-component'
import {formatCurrency, getStripedStyle} from './ira-utils'
//import 'typeface-roboto'

const topbarColor = '#004d99'  //lighter version of #003366

const styles = {

          root : {
            width: '100%',
            marginTop: 30,
            fontSize: 48
          },

          table : {
              width: '100%',
              tableLayout: "auto",
              border: '2px solid black',
              padding: 0,
              background: '#99a6b2',
              height: 50
          },

          shortRow : {
              height: 32
          },


          cellOne: {
            textAlign: 'left',
            padding: '0px 5px',
            textAlign: 'right',
            //border: '0px solid blue',
        	},

        	cellTwo: {
            padding: '0px 5px 0px 0px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black',
          //  border: '5px solid yellow',
        	},



          cellThreeTop: {
            textAlign: 'left',
            padding: '0px 5px',
            textAlign: 'right',
            borderTop: '2px solid black',
            fontWeight: 600
          },



          cellFour: {
            padding: '0px 5px 0px 0px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black',
            fontSize: 20
        	},


          cellTotal: {
            border: '3px solid white',
            padding: '0px 5px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black'
          },

          cellTitle: {
                fontSize: 18,
                color: 'white',
                padding: 0,
                textAlign: 'center',
                background: topbarColor
          }


};


//  let totalDistributions =  results[3]*-1 //make it positive here
//  let portfolioValueGain =  totalPortfolioValue-totalInvestmentValue
//  let portfolioCashGain = portfolioValueGain+ totalDistributions
//  let portfolioIRR = parseFloat(portfolioCashGain/totalInvestmentValue)*100



class PortfolioSummaryComponent extends Component {

      constructor (props) {
          super(props)

     }


render() {
  const { classes, totalInvestmentValue, totalPortfolioValue, totalDistributions, numberOfDeals, investorName } = this.props;

  let portfolioValueGain =  totalPortfolioValue-totalInvestmentValue;
  let portfolioCashGain = portfolioValueGain+ totalDistributions;
  let portfolioROE = (parseFloat(portfolioCashGain/totalInvestmentValue)*100).toFixed(2)

  return (
    <div>
            <Table className={classes.table}>
                    <colgroup>
                        <col width="5%" />
                        <col width="30%" />
                        <col width="10%" />
                        <col width="20%" />
                        <col width="25%" />
                    </colgroup>



                    <TableHead>
                      <TableRow className="short-row">
                        <TableCell colSpan="5" className="component-title">

                                      Portfolio Investment Summary

                          </TableCell>
                        </TableRow>
                      </TableHead>



                  <TableBody >

                          <TableRow className={classes.shortRow}>
                                  <TableCell > &nbsp; </TableCell>
                                  <TableCell > &nbsp; </TableCell>
                                  <TableCell > &nbsp; </TableCell>
                                  <TableCell > &nbsp; </TableCell>
                                  <TableCell > &nbsp; </TableCell>
                          </TableRow>


                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Investor: </TableCell>
                              <TableCell colSpan="2"  className={classes.cellFour} > {investorName} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>


                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Number of Investments: </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne} > {numberOfDeals} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Total Portfolio Equity: </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne} > {formatCurrency(totalPortfolioValue)} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>


                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Total Cash Investment: </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne} > - {formatCurrency(totalInvestmentValue)} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>


                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Potential Growth in Portfolio Value: </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellTotal} > {formatCurrency(portfolioValueGain)} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow className={classes.shortRow}>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Investor Distributions and Cash Back: </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne} > +{formatCurrency(totalDistributions)} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Total Potential Return to Investor: </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellTotal} > {formatCurrency(portfolioCashGain)} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow className={classes.shortRow}>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Portfolio Return on Equity (ROE): </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellTwo} > {portfolioROE}% </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>


                            <TableRow className={classes.shortRow}>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                                    <TableCell > &nbsp; </TableCell>
                            </TableRow>




                      </TableBody>

                    </Table>
                    <br/>

          </div>

     ) //return
  } //render


} //component

PortfolioSummaryComponent.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(PortfolioSummaryComponent)


// <AppBar position="static">
//     <Toolbar>
//                 <Typography variant="title" color="inherit">
//
//                 </Typography>
//     </Toolbar>
// </AppBar>
