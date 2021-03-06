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
          },


          shortRow : {
              height: 24
          },



          cellOne: {
            textAlign: 'left',
            padding: '0px 20px',
            textAlign: 'right',
        	},

        	cellTwo: {
            padding: '0px 20px 0px 0px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black'
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
            padding: '0px 20px',
            textAlign: 'right',
            fontWeight: 600,
            color: 'black'
          },


};



class CapCallModule extends Component {

      constructor (props) {
          super(props)

     }


render() {
  const { classes } = this.props;
  const dealName = this.props.capCall[2].name;
  const {id, cc_name, deal_entity_id, target_amount, target_per_investor} = this.props.capCall[0];
  const totalRaised = this.props.capCall[3]
  const ccTransArray = this.props.capCall[1]


  return (
    <div>
            <Table className={classes.table}>
                    <colgroup>
                        <col width="2%" />
                        <col width="20%" />
                        <col width="25%" />
                        <col width="25%" />
                        <col width="20%" />
                        <col width="2%" />
                    </colgroup>



                      <TableHead>
                        <TableRow className="short-row">
                          <TableCell colSpan="6" className="component-title">
                                  Capital Call : {cc_name}
                          </TableCell>
                        </TableRow>
                      </TableHead>



                  <TableBody >

                           <TableRow >
                            <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}>Deal:</TableCell>
                             <TableCell className={classes.cellOne} >{dealName} </TableCell>
                             <TableCell className={classes.cellTwo}>Target Amount:</TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(target_amount)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>

                           </TableRow>



                           <TableRow >
                              <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}>Target per Investor: </TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(target_per_investor)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>




                           <TableRow >
                                     <TableCell colSpan = '6' >
                                                Transactions:
                                                <TransListComponent transactions = {ccTransArray}/>
                                     </TableCell>
                           </TableRow>


                           <TableRow >
                             <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}> Raised-to-Date: </TableCell>
                             <TableCell className={classes.cellTotal} > {formatCurrency(totalRaised)} </TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>

                      </TableBody>

                    </Table>
                    <br/>

          </div>

     ) //return
  } //render


} //component

CapCallModule.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(CapCallModule)
