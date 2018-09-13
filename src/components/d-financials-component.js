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
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'



import {formatCurrency} from './ira-utils'
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



class FinancialsComponent extends Component {

      constructor (props) {
          super(props)

     }


getStripedStyle(index) {
       //console.log("Index is "+index)
       return {
         background: index % 2 ? 'lightslategrey' : 'lightsteelblue'
       };
     }



render() {
  const { classes } = this.props;
  const {name, id, aggregate_value, cash_assets, total_assets, aggregate_debt, deal_debt, total_debt, deal_equity_value, notes} = this.props.dealFinancials;
  //<Table

  return (
    <div>
            <Table className={classes.table}>
                    <colgroup>
                        <col width="30%" />
                        <col width="15%" />
                        <col width="5%" />
                        <col width="30%" />
                        <col width="15%" />
                        <col width="5%" />
                    </colgroup>



                      <TableHead>
                        <TableRow>
                          <TableCell colSpan="6" style={{fontSize: 24, color: 'black', padding: 0, textAlign: 'center'}}>


                                         <AppBar position="static">
                                             <Toolbar>
                                                         <Typography variant="title" color="inherit">
                                                                       Financial Information for {name}
                                                         </Typography>
                                             </Toolbar>
                                         </AppBar>





                          </TableCell>
                        </TableRow>
                      </TableHead>



                  <TableBody >




                           <TableRow >
                             <TableCell className={classes.cellTwo}>Properties Value:</TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(aggregate_value)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}>Properties Debt/Loan:</TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(aggregate_debt)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>

                           <TableRow >
                             <TableCell className={classes.cellTwo}>Deal Cash and Assets:</TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(cash_assets)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}>Deal Debt/Loan:</TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(deal_debt)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>



                           <TableRow >
                             <TableCell className={classes.cellTwo} >Total Assets:</TableCell>
                             <TableCell className={classes.cellTotal} >{formatCurrency(total_assets)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}>Total Debt:</TableCell>
                             <TableCell className={classes.cellTotal} >{formatCurrency(total_debt)}  </TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>


                           <TableRow >
                             <TableCell className={classes.cellTwo}>Total Debt:</TableCell>
                             <TableCell className={classes.cellOne} >{formatCurrency(total_debt*-1)}   </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                           </TableRow>




                           <TableRow >
                             <TableCell className={classes.cellTwo}>Equity Value:</TableCell>
                             <TableCell className={classes.cellTotal} >{formatCurrency(deal_equity_value)}   </TableCell>
                              <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                             <TableCell > &nbsp; </TableCell>
                              <TableCell > &nbsp; </TableCell>
                           </TableRow>



                           <TableRow >
                              <TableCell > &nbsp; </TableCell>
                             <TableCell className={classes.cellTwo}>Notes:</TableCell>
                             <TableCell colSpan = '4' style={{color: 'black', padding: 0, textAlign: 'left'}} >  {notes}   </TableCell>
                           </TableRow>


                      </TableBody>

                    </Table>


          </div>

     ) //return
  } //render


} //component

FinancialsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};





export default withStyles(styles)(FinancialsComponent)
