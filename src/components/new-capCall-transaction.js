import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


import EntitiesPulldown from './entities-pulldown'
import {formatCurrency, get_endpoint, getTodaysDate} from './ira-utils';


const apiHost = get_endpoint('API')


// const sampleNewTrans = {
// "trans_type":0,
// "investment_entity_id":72,
// "investor_entity_id":"6",
// "passthru_entity_id":"",
// "amount":"00.00",
// "own_adj":0,
// "wired_date":"2018-08-23",
// "notes":""
// }

const styles = {
              container: {
                display: 'flex',
                flexWrap: 'wrap',
              },
              textField: {
                marginLeft: 20,
                marginRight: 20,
              },
              dense: {
                marginTop: 16,
              },
              menu: {
                width: 200,
              },

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
              border: '1px solid blue',
              textAlign: 'left',
              padding: '0px 0px',
              textAlign: 'right',
          	},

            cellOneLeft: {
              border: '1px solid blue',
              textAlign: 'left',
              padding: '0px 20px',
              textAlign: 'left',
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
                  background: 'orange'
            }

};


const pickCapCall =

{     "id":0,
      "cc_name":" - ",
      "deal_entity_id":0,
      "target_amount": 0,
      "target_per_investor": 0,
      "name":"-- select --"
}


class NewCapCallTrans extends Component  {


constructor(props) {
    super(props);

    this.state = {
        amount: 0,
        notes: "",
        investors_4_picklist: [],
        selectedInvestor: 0,
        capcalls_4_picklist: [],
        selectedCapCall: 0,
        selectedCapCallObj: {},
        own_adj: 0,
        wired_date: getTodaysDate()

    };

    this.onSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.handleChange.bind(this);
}



  async componentDidMount() {
    //const encoded_deals_part=encodeURIComponent('params={"types":[1,3,4]}')
    //const fetchURL_deals = apiHost+"/api/getentitiesbytypes?"+encoded_deals_part

    const fetchURL_capcalls = apiHost + "/api/getcapitalcalls"

          const capcalls_results = await fetch( fetchURL_capcalls );
          const capcalls_4_picklist = await capcalls_results.json()
          await capcalls_4_picklist.splice(0, 0, pickCapCall)
          await this.setState({ capcalls_4_picklist })


  }


//set state for any number of input field changes
async handleChange(event) {
          //const target = event.target;
          //const value = target.type === 'checkbox' ? target.checked : target.value;
          const value = event.target.value;
          const name = event.target.name;

          await this.setState({
            [name]: value
          });
          console.log("just set "+name+"  to  "+value)


        if (name === "selectedCapCall") {


                      this.setState({
                        investors_4_picklist: this.props.investors
                      });
                      //assignement by Value!!!
                      let capCallsWorkingCopy = this.state.capcalls_4_picklist.slice();
                      let target = parseInt(this.state.selectedCapCall)
                      console.log("target  is "+target )
                      const selectedCapCallObj = capCallsWorkingCopy.find ((capCall) => {
                                     //console.log("property.id is "+property.id+"  and is of type "+typeof property.id)
                                    if (capCall.id === target)  return capCall

                      })
                      this.setState({  selectedCapCallObj });
                      console.log("Selected calCall  is "+JSON.stringify(selectedCapCallObj,null,4) )


        }


}



handleFormSubmit(event) {
      event.preventDefault();
      const fetchURL_sendtrans = apiHost + "/process_add_capital_call_trans";


      let newCCTransObject = {
            amount : this.state.amount,
            notes : this.state.notes,
            wired_date : this.state.wired_date,
            trans_type : 8,
            investment_entity_id : this.state.selectedCapCallObj.deal_entity_id,
            investor_entity_id : this.state.selectedInvestor,
            passthru_entity_id : null,
            own_adj : 0,
            capital_call_id: selectedCapCall
    }


      // About to insert new Cap Call transaction with {
      //     "investor_entity_id": "4",
      //     "investment_entity_id": "19",
      //     "passthru_entity_id": null,
      //     "amount": "555",
      //     "wired_date": "2018-10-17",
      //     "own_adj": 0,
      //     "trans_type": 8,
      //     "notes": "for CapCall: 633 St.M - Phase IV.  cal call 555",
      //
      // }



      console.log("Ready to submit new Cap Call Trans: "+JSON.stringify(newTCCransObject,null,4))

            fetch(fetchURL_sendtrans, {
                        method: "POST",
                        body: JSON.stringify(newCCTransObject),
                        headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                        }

            })
            .then( () => console.log("Posted new Trans  "))
            .then(this.props.history.push('/transactions'))




}  //handle form submit



  render() {

const { classes } = this.props;

        return (



          <TableBody>


          <TableRow >
                      <TableCell  className={classes.cellOne}>
                                      Capital Calls:
                      </TableCell>
                      <TableCell  className={classes.cellOneLeft}>
                                  <EntitiesPulldown
                                          itemList = {this.state.capcalls_4_picklist}
                                          selectedItem = {this.state.selectedCapCall}
                                          handleChangeCB = {this.onChange}
                                          target = {"selectedCapCall"}
                                  />
                      <br/>
                      </TableCell>
                      <TableCell  className={classes.cellOne}> </TableCell>
                      <TableCell  className={classes.cellOne}> Target Amount:</TableCell>
                      <TableCell  className={classes.cellOne}> {formatCurrency(this.state.selectedCapCallObj.target_amount)}</TableCell>
             </TableRow>



             <TableRow >

                         <TableCell  className={classes.cellOne}>
                                 Investor:
                         </TableCell>
                         <TableCell  className={classes.cellOneLeft}>
                                 <EntitiesPulldown
                                           itemList = {this.state.investors_4_picklist}
                                           selectedItem = {this.state.selectedInvestor}
                                           handleChangeCB = {this.onChange}
                                           target = {"selectedInvestor"}
                                   />
                         </TableCell>
                         <TableCell  className={classes.cellOne}> </TableCell>
                         <TableCell  className={classes.cellOne}> Target per Investor:</TableCell>
                         <TableCell  className={classes.cellOne}> {formatCurrency(this.state.selectedCapCallObj.target_per_investor)}</TableCell>
                </TableRow>




              <TableRow >
                          <TableCell  className={classes.cellOne}>
                                          Transaction Date:
                          </TableCell>
                          <TableCell  className={classes.cellOneLeft}>
                                        &nbsp;&nbsp;<TextField
                                           name="wired_date"
                                           label="  - date -"
                                           type="date"
                                           margin="normal"
                                           value={this.state.wired_date}
                                           onChange={this.onChange}
                                           style = {{width: 180, textAlign: 'center', background: "#99a6b2"}}
                                         />
                          </TableCell>
                          <TableCell  className={classes.cellOne}> </TableCell>
                          <TableCell  className={classes.cellOne}>
                                  Transaction Amount:
                          </TableCell>
                          <TableCell  className={classes.cellOneLeft}>
                                      $ <TextField
                                        name="amount"
                                        label="  - amount -"
                                        value={this.state.amount}
                                        onChange={this.onChange}
                                        autoComplete="transaction"
                                        variant="outlined"
                                        margin="normal"
                                        style = {{width: 150, textAlign: 'center', background: "#99a6b2"}}
                                      />
                          </TableCell>


              </TableRow>


                <TableRow >
                            <TableCell  className={classes.cellOne}>
                                    Notes:
                            </TableCell>
                            <TableCell  className={classes.cellOneLeft}>
                                    <input
                                          type="text"
                                          name="notes"
                                          size = "40"
                                          value={this.state.notes}
                                          onChange={this.onChange}
                                    />
                            </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>

                </TableRow>


                <TableRow >

                            <TableCell  className={classes.cellOne}>


                           </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>

                </TableRow>


                <TableRow >

                           <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}>
                                      <input className="nt-button" type="submit" value="Submit" />
                            </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>
                            <TableCell  className={classes.cellOne}> </TableCell>

                </TableRow>

                <TableRow className="short-row">
                  <TableCell colSpan="5" >



                  </TableCell>
                </TableRow>

            </TableBody>





          ) //return


   } //render



} //class



NewCapCallTrans.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewCapCallTrans);





//{JSON.stringify(this.state.capcalls_4_picklist)}


                     //
                    //  Investor:
                    //  <EntitiesPulldown
                    //          itemList = {this.state.investors_4_picklist}
                    //          selectedItem = {this.state.selectedInvestor}
                    //          handleChangeCB = {this.onChange}
                    //          target = {"selectedInvestor"}
                    //  />
                    //  <br/>
                     //









//splice(0, 0, noPassEnt)


    // fetch(fetchURL_ttypes)
    //  .then(results => results.json())
    //  .then(data =>  this.setState({
    //         ttypes_4_picklist: data
    //   }))
    //  .then( () => fetch(fetchURL_deals))
    //  .then(results => results.json())
    //  .then(data => this.setState({
    //         deals_4_picklist: data
    //  }))
    // //  .then( () => fetch(fetchURL_capcalls)  )
    // //  .then(results => results.json())
    // //  .then(data => this.setState({
    // //             deal_cap_calls: data
    // //   }))
    //   .then( () => fetch(fetchURL_investors)  )
    //   .then(results => results.json())
    //   .then(data => this.setState({
    //              investors_4_picklist: data
    //    }))
    //  .then( () => fetch(fetchURL_passthrus)  )
    //  .then(results => results.json())
    //  //.then(objList => objList.splice(0, 0, {id: 0, name: ' -- no Passthru -- ' }) )
    //  .then(data => this.setState({
    //             passthrus_4_picklist: data
    //   }))
