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

import TransListShortComp from './t-list-short-comp'
import TransListComponent from './t-list-component'
import {formatCurrency, getStripedStyle} from './ira-utils'
//import 'typeface-roboto'

//const topbarColor = '#004d99'  //lighter version of #003366

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
              height: 30
          },

          // shortRow : {
          //     height: 32
          // },


          cellOne: {
            textAlign: 'left',
            padding: '0px 5px',
            textAlign: 'right',
          //  border: '5px solid blue',
        	},

        	cellTwo: {
            padding: '0px 5px 0px 0px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black',
          //  border: '5px solid yellow',
        	},

          cellThreeTop: {
            border: '5px solid blue',
            textAlign: 'left',
            padding: '0px 0px',
            textAlign: 'right',
            borderTopWidth: 2,
            borderColor: 'black',
            borderStyle: 'solid',
        	},


          cellTotal: {
            border: '3px solid white',
            padding: '0px 5px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black'
          },

          // cellTitle: {
          //       fontSize: 18,
          //       color: 'white',
          //       padding: 0,
          //       textAlign: 'center',
          //       background: topbarColor,
          // }


};



class PortfolioDealComponent extends Component {

      constructor (props) {
          super(props)

     }



render() {
  const { classes, deal } = this.props;


  return (
    <div>
            <Table className={classes.table}>
                    <colgroup>
                        <col width="2%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="40%" />
                        <col width="15%" />
                        <col width="2%" />
                    </colgroup>



                    <TableHead>
                      <TableRow className="short-row">
                        <TableCell colSpan="6" className="component-title">

                                      Investment {this.props.index} : {deal.investment_name}

                          </TableCell>
                        </TableRow>
                      </TableHead>



                  <TableBody >

                            <TableRow >
                                      <TableCell colSpan = '6' >
                                                <b>Transactions:</b>
                                                 <TransListShortComp transactions = {deal.transactionsForDeal}/>

                                      </TableCell>
                            </TableRow>



                            <TableRow  className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}> Current Cash in Deal: </TableCell>
                              <TableCell className={classes.cellTotal} > {formatCurrency(deal.totalCashInDeal)} </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>


                          <TableRow className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell colSpan="2" className={classes.cellTwo}> Estimated Valuation:</TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>


                           <TableRow className={classes.shortRow}>
                            <TableCell > &nbsp; </TableCell>
                            <TableCell className={classes.cellOne}></TableCell>
                            <TableCell className={classes.cellOne}></TableCell>
                             <TableCell className={classes.cellOne}>Deal Total Assets: </TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(deal.expandDeal.total_assets)}</TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>


                           <TableRow className={classes.shortRow}>
                            <TableCell > &nbsp; </TableCell>
                            <TableCell className={classes.cellOne}></TableCell>
                            <TableCell className={classes.cellOne}></TableCell>
                             <TableCell className={classes.cellOne}>In-Place Debt: </TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(deal.expandDeal.total_debt*-1)}</TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>




                            <TableRow className={classes.shortRow}>
                                     <TableCell > &nbsp; </TableCell>
                                     <TableCell className={classes.cellOne}></TableCell>
                                     <TableCell className={classes.cellOne}></TableCell>
                                      <TableCell className={classes.cellOne}>Deal Equity Valuation: </TableCell>
                                      <TableCell className={classes.cellTwo} >{formatCurrency(deal.expandDeal.deal_equity_value)}</TableCell>
                                      <TableCell > &nbsp; </TableCell>
                            </TableRow>



                            <TableRow className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                                 <TableCell className={classes.cellOne} > </TableCell>
                                 <TableCell className={classes.cellOne} > </TableCell>
                                 <TableCell className={classes.cellOne}>Investor&apos;s Total Investment: </TableCell>
                                 <TableCell className={classes.cellOne} >{formatCurrency(deal.totalInvestments_noRollover)}  </TableCell>
                                 <TableCell > &nbsp; </TableCell>
                             </TableRow>


                            <TableRow className={classes.shortRow}>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell className={classes.cellOne}></TableCell>
                              <TableCell className={classes.cellOne}></TableCell>
                              <TableCell className={classes.cellOne}>Investor&apos;s Deal Interest: </TableCell>
                              <TableCell className={classes.cellOne} >{deal.capital_pct}%</TableCell>
                              <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow className={classes.shortRow}>
                                     <TableCell > &nbsp; </TableCell>
                                     <TableCell className={classes.cellOne}></TableCell>
                                      <TableCell colSpan="2" className={classes.cellOne}>Investor&apos;s Deal Equity: </TableCell>
                                      <TableCell className={classes.cellTotal} >{formatCurrency(deal.investor_equity_value)}</TableCell>
                                      <TableCell > &nbsp; </TableCell>
                            </TableRow>

                            <TableRow className={classes.shortRow}>
                                    <TableCell > &nbsp; </TableCell>
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

PortfolioDealComponent.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(PortfolioDealComponent)


// <AppBar position="static">
//     <Toolbar>
//                 <Typography variant="title" color="inherit">
//
//                 </Typography>
//     </Toolbar>
// </AppBar>
