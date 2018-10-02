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

import {formatCurrency, getStripedStyle} from './ira-utils'
import OwnershipRowEx from './ownership-row-expand'
import TransListComponent from './t-list-component'
import TransListShortComp from './t-list-short-comp'

//import 'typeface-roboto'


//const topbarColor = '#004d99'  //lighter version of #003366

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

          // cellTitle: {
          //       fontSize: 18,
          //       color: 'white',
          //       padding: 0,
          //       textAlign: 'center',
          //       background: topbarColor,
          // }


};
// <TableRow key={index} style={{...getStripedStyle(index)}}>
//   <TableCell colSpan="2" className={classes.cellOne}>{ownRow.investor_name}</TableCell>
// </TableRow>
// <div>


class OwnershipComponent extends Component {

      constructor (props) {
          super(props)

     }

  //                              <OwnershipRowEx key = {index} index = {index} ownRow={ownRow} />


render() {
  const { classes } = this.props;

  //<Table
  //style={{fontSize: 24, padding: 0, color: 'black', textAlign: 'center'}}

  return (

            <Table className={classes.table}>
                    <colgroup>
                            <col width="5%" />
                            <col width="10%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="15%" />
                            <col width="15%" />
                    </colgroup>


                    <TableHead>
                      <TableRow className="short-row">
                        <TableCell colSpan="6" className="component-title">

                                    Ownership Information

                        </TableCell>
                      </TableRow>

                        <TableRow className="short-row">
                                  <TableCell className={classes.cellTwo}> </TableCell>
                                  <TableCell className={classes.cellTwo}>Investor</TableCell>
                                  <TableCell className={classes.cellTwo}>Investment</TableCell>
                                  <TableCell className={classes.cellTwo}>Date</TableCell>
                                  <TableCell className={classes.cellTwo}>Amt.</TableCell>
                                  <TableCell className={classes.cellTwo}>Percent</TableCell>

                        </TableRow>
                      </TableHead>



                  <TableBody >
                       {this.props.ownRows.map((ownRow,index) => {

                         return (


                           <TableRow  key = {index}>
                                     <TableCell colSpan = '6' >
                                                 <OwnershipRowEx key = {index} index = {index} ownRow={ownRow} />
                                     </TableCell>
                           </TableRow>







                               );
                            })
                      }




                           <TableRow className={classes.shortRow}>
                                    <TableCell colSpan="6">&nbsp; </TableCell>
                            </TableRow>



                            <TableRow >
                              <TableCell>  </TableCell>
                              <TableCell> Totals:</TableCell>
                              <TableCell> </TableCell>
                              <TableCell> </TableCell>
                              <TableCell className={classes.cellTwo} >{formatCurrency(this.props.ownTotals.totalCapital)}</TableCell>
                              <TableCell>{this.props.ownTotals.totalCapitalPct}%</TableCell>
                            </TableRow>
                      </TableBody>
                    </Table>

     ) //return
  } //render


} //component

OwnershipComponent.propTypes = {
  classes: PropTypes.object.isRequired
};





export default withStyles(styles)(OwnershipComponent)
