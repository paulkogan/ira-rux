import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";


import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Typography from '@material-ui/core/Typography';

import {formatCurrency, getStripedStyle} from './ira-utils'
//import 'typeface-roboto'


const styles = {

          root : {
            width: '100%',
            marginTop: 30,
          },

          shortRow : {
              height: 30,

          },


          table : {
             width: '100%',
             tableLayout: "auto",
              border: '2px solid black',
              padding: 0,
          },

          cellOne: {
            border: '0px solid blue',
            textAlign: 'left',
            padding: '0px 0px',
            textAlign: 'center'
        	},

        	cellTwo: {
            border: '0px solid yellow',
            borderBottom: '2px solid black',
            color: 'black',
            padding: '0px 0px',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 14,

        	},

};



class TransListComponent extends Component {

      constructor (props) {
          super(props)

     }





render() {
  const { classes } = this.props;
  //const {id, investor_name, investment_name, passthru_name, tt_name, t_wired_date, t_amount} = this.props.transactions;



  return (

            <Table className={classes.table}>
                    <colgroup>
                        <col width="5%" />
                        <col width="15%" />
                        <col width="20%" />
                        <col width="15%" />
                        <col width="13%" />
                        <col width="15%" />
                        <col width="10%" />
                        <col width="2%" />
                    </colgroup>


                      <TableHead>


                        <TableRow className={classes.shortRow}>
                                  <TableCell className={classes.cellTwo}>ID</TableCell>
                                  <TableCell className={classes.cellTwo}>Investor</TableCell>
                                  <TableCell className={classes.cellTwo}>Investment</TableCell>
                                  <TableCell className={classes.cellTwo}>Passthru</TableCell>
                                  <TableCell className={classes.cellTwo}>Trans. Type</TableCell>
                                  <TableCell className={classes.cellTwo}>Date</TableCell>
                                  <TableCell className={classes.cellTwo}>Amt.</TableCell>
                                  <TableCell className={classes.cellTwo}>&nbsp;</TableCell>
                        </TableRow>
                      </TableHead>



                  <TableBody >
                       {this.props.transactions.map((trans,index) => {
                         return (
                                 <TableRow key={index} style={{...getStripedStyle(index)}}>
                                         <TableCell className={classes.cellOne}>{trans.id}</TableCell>
                                         <TableCell className={classes.cellOne}>{trans.investor_name.slice(0,20)}</TableCell>
                                         <TableCell className={classes.cellOne}>{trans.investment_name} </TableCell>
                                         <TableCell className={classes.cellOne}>{trans.passthru_name} </TableCell>
                                         <TableCell className={classes.cellOne}>{trans.tt_name} </TableCell>
                                         <TableCell className={classes.cellOne}>{trans.t_wired_date} </TableCell>
                                         <TableCell className={classes.cellOne}>{formatCurrency(trans.t_amount)}</TableCell>
                                         <TableCell className={classes.cellOne}>&nbsp;</TableCell>
                                 </TableRow>
                               );
                            })}
                      </TableBody>
                    </Table>
     ) //return
  } //render


} //component

TransListComponent.propTypes = {
  classes: PropTypes.object.isRequired
};





export default withStyles(styles)(TransListComponent)


// <TableRow>
//   <TableCell colSpan="8" style={{fontSize: 14, padding: 0, color: 'black', textAlign: 'center'}}>
//         Transactions
//   </TableCell>
// </TableRow>
