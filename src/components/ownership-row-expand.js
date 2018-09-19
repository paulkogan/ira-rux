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
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hamburger from '@material-ui/icons/Menu';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';



import {formatCurrency, getStripedStyle} from './ira-utils'
import TransListComponent from './t-list-component'
//import 'typeface-roboto'


const topbarColor = '#004d99'  //lighter version of #003366

const styles = {

          root : {
            width: '100%',
            marginTop: 30,
          },

          table : {
             width: '100%',
             tableLayout: "auto",
              border: '3px solid black',
              padding: 0,
              background: '#99a6b2'
          },


          shortRow : {
              height: 32
          },


          cellOne: {
            border: '0px solid blue',
            textAlign: 'left',
            padding: '0px 0px',
            textAlign: 'center',
        	},

        	cellTwo: {
            border: '0px solid yellow',
            padding: '0px 0px',
            textAlign: 'center',
            fontWeight: 600,
            color: 'black'
        	},

          cellTitle: {
                fontSize: 18,
                color: 'white',
                padding: 0,
                textAlign: 'center',
                background: topbarColor,
          }


};



class OwnershipRowEx extends Component {

      constructor (props) {
          super(props)

     }

//<TableRow key={index} style={{...getStripedStyle(index)}}>


// Transactions:
// <TransListComponent transactions = {ownRow.transactions}/>

     render() {
            const { classes, ownRow, index } = this.props;



return (
        <div>
            <ExpansionPanel >
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Table className={classes.table} >
                                        <colgroup>
                                            <col width="10%" />
                                            <col width="5%" />
                                            <col width="30%" />
                                            <col width="30%" />
                                            <col width="20%" />
                                            <col width="5%" />
                                        </colgroup>

                                         <TableBody >
                                            <TableRow >

                                                  <TableCell colSpan="2" className={classes.cellOne}>{ownRow.investor_name}</TableCell>
                                                  <TableCell className={classes.cellOne} >{ownRow.investment_name}</TableCell>
                                                  <TableCell className={classes.cellOne}>{ownRow.wired_date}</TableCell>
                                                  <TableCell className={classes.cellOne}>{formatCurrency(ownRow.amount)}</TableCell>
                                                  <TableCell className={classes.cellOne}>{ownRow.capital_pct.toFixed(2)+"%"}</TableCell>

                                            </TableRow>
                                        </TableBody>
                            </Table>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                              <TransListComponent transactions = {ownRow.transactions}/>
                    </ExpansionPanelDetails>

              </ExpansionPanel>
          </div>
  );

} //render


} //component

OwnershipRowEx.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(OwnershipRowEx)

//no panel
// <Table className={classes.table} key={index}>
//     <colgroup>
//         <col width="10%" />
//         <col width="5%" />
//         <col width="30%" />
//         <col width="30%" />
//         <col width="20%" />
//         <col width="5%" />
//     </colgroup>
//
//      <TableBody >
//
//
//                                <TableRow >
//                                  <TableCell colSpan="2" className={classes.cellOne}>{ownRow.investor_name}</TableCell>
//                                  <TableCell className={classes.cellOne} >{ownRow.investment_name}</TableCell>
//                                  <TableCell className={classes.cellOne}>{ownRow.wired_date}</TableCell>
//                                  <TableCell className={classes.cellOne}>{formatCurrency(ownRow.amount)}</TableCell>
//                                  <TableCell className={classes.cellOne}>{ownRow.capital_pct.toFixed(2)+"%"}</TableCell>
//                                </TableRow>
//
//                                <TableRow >
//                                          <TableCell colSpan = '6' >
//                                                 <TransListComponent transactions = {ownRow.transactions}/>
//                                          </TableCell>
//                                </TableRow>
//
//        </TableBody>
//     </Table>
//
        //
