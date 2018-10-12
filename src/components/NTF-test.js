import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { withRouter } from 'react-router'
import compose from 'recompose/compose';

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
import NewCapCallTrans from './new-capCall-transaction'
import {formatCurrency, get_endpoint, getTodaysDate} from './ira-utils';

const apiHost = get_endpoint('API')


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
            }
};


const noPassEnt = {
  "id": 0,
  "entity_type": " ",
  "name": "-- No Passthru --",
  "taxid": "",
  "own_status": 0
}

const pickTType ={
  "id": 0,
  "type_num": 0,
  "name": "-- select --"
}


class NTFtest extends Component  {


constructor(props) {
    super(props);

    this.state = {
        amount: "0.00",
        notes: "",
        ttypes_4_picklist: [],
        selectedTType:0,
        deals_4_picklist: [],
        selectedDeal: 1,
        investors_4_picklist: [],
        selectedInvestor: 5,
        passthrus_4_picklist: [],
        selectedPassthru: 0,
        //capcalls_4_picklist: [],
        own_adj: "0.00",
        wired_date: getTodaysDate()

    };

    this.onSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);


} //constructor

  componentWillUnmount() {
    this.props.onRef(undefined)
  }


  async componentDidMount() {
    //pass refrence to this component down as a prop


    const fetchURL_ttypes = apiHost+"/api/gettransactiontypes";
    const fetchURL_deals = apiHost+"/api/getentitiesbytypes?params={%22types%22:[1,4]}"
    const fetchURL_investors = apiHost+"/api/getentitiesbytypes?params={%22types%22:[2,4]}"
    const fetchURL_passthrus = apiHost+"/api/getentitiesbytypes?params={%22types%22:[3]}"


          const tt_results = await fetch(fetchURL_ttypes);
          const ttypes_4_picklist = await tt_results.json()
          await ttypes_4_picklist.splice(0, 0, pickTType)
          await this.setState({ ttypes_4_picklist })

          const deal_results = await fetch(fetchURL_deals);
          const deals_4_picklist = await deal_results.json()
          await this.setState({ deals_4_picklist })

          const investor_results = await fetch(fetchURL_investors);
          const investors_4_picklist = await investor_results.json()
          await this.setState({ investors_4_picklist })

          // const capcalls_results = await fetch( fetchURL_capcalls );
          // const capcalls_4_picklist = await capcalls_results.json()
          // await this.setState({ capcalls_4_picklist })


          const passthru_results = await fetch(fetchURL_passthrus);
          const passthrus_4_picklist = await passthru_results.json()
          //console.log("P4P" + JSON.stringify(this.state.passthrus_4_picklist));
          await passthrus_4_picklist.splice(0, 0, noPassEnt)
          await this.setState({ passthrus_4_picklist })


    //console.log("got Trans Types:  "+JSON.stringify(this.state.transaction_types, null, 4));

          const onRef = () => this.props.onRef(this)
  }


//set state for any number of input field changes
onChange = (event) => {
          //const target = event.target;
          //const value = target.type === 'checkbox' ? target.checked : target.value;
          const value = event.target.value;
          const name = event.target.name;

          this.setState({
            [name]: value
          });
          console.log("just set "+name+"  to  "+value)
          //this.props.onChange();

}



handleFormSubmit(event) {
      event.preventDefault();
      const fetchURL_sendtrans = apiHost + "/process_add_transaction";

    //  let newTransObject = sampleNewTrans;
      let newTransObject = {
            amount : this.state.amount,
            notes : this.state.notes,
            wired_date : this.state.wired_date,
            trans_type : this.state.selectedTType,
            investment_entity_id : this.state.selectedDeal,
            investor_entity_id : this.state.selectedInvestor,
            passthru_entity_id : this.state.selectedPassthru,
            own_adj : parseFloat(this.state.own_adj)
    }

      console.log("Ready to submit new Transaction: "+JSON.stringify(newTransObject,null,4))

            fetch(fetchURL_sendtrans, {
                        method: "POST",
                        body: JSON.stringify(newTransObject),
                        headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                        }

            })
            .then( () => console.log("Posted new Trans  "))
            .then(this.props.history.push('/transactions'))




}  //handle form submit


render() {



    return (
      <form onSubmit={this.onSubmit}>

               <div>
                  <div className="ttype-select">
                        <EntitiesPulldown
                                itemList = {this.state.ttypes_4_picklist}
                                selectedItem = {this.state.selectedTType}
                                handleChangeCB = {this.onChange}
                                target = {"selectedTType"}
                        />
                  </div>

                  <div className="ttype-code">
                  ({this.state.selectedTType})
                  </div>

                  { (this.state.selectedTType > 0) && (
                    <div>
                            <div className="investor-select">
                            <EntitiesPulldown
                                      itemList = {this.state.investors_4_picklist}
                                      selectedItem = {this.state.selectedInvestor}
                                      handleChangeCB = {this.onChange}
                                      target = {"selectedInvestor"}
                              />
                             </div>
                             <div className="submit-button">
                                   <input className="nt-button" type="submit" value="Submit" />
                             </div>
                    </div>


                  )}



            </div>
        </form>

    ) //return
   } //render
} //component



export default NTFtest


NTFtest.propTypes = {
  classes: PropTypes.object.isRequired,
};


// export default compose(
//   withStyles(styles, {
//     name: 'NTFtest',
//   }),
//   NTFtest
// )(NTFtest);

//export default withStyles(styles)(NTFtest);


//
// //NewTransactionForm.defaultProps = { onChange: () => {} };
// export default withStyles(styles)(NewTransactionForm);


//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));



// <label>
//   Notes: &nbsp; &nbsp; <br/>
//   <input type="text" name="notes" size = "40" value={this.state.notes} onChange={this.onChange} />
// </label>
//
//
//
// ===========
//
// <TableRow >
//             <TableCell  className={classes.cellOne}>
//                             Transaction Date:
//             </TableCell>
//             <TableCell  className={classes.cellOne}>
//                           <TextField
//                             id="outlined-with-placeholder"
//                              name="wired_date"
//                              label="  - date -"
//                              type="date"
//                              value={this.state.wired_date}
//                              onChange={this.onChange}
//                              style = {{width: 180, textAlign: 'center', background: "#99a6b2"}}
//                            />
//             </TableCell>
//             <TableCell  className={classes.cellOne}> </TableCell>
//             <TableCell  className={classes.cellOne}> </TableCell>
//             <TableCell  className={classes.cellOne}> </TableCell>
// </TableRow>
//
//
//   <TableRow >
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}>
//                       Investor:
//               </TableCell>
//               <TableCell  className={classes.cellOne}>
//                       <EntitiesPulldown
//                                 itemList = {this.state.investors_4_picklist}
//                                 selectedItem = {this.state.selectedInvestor}
//                                 handleChangeCB = {this.onChange}
//                                 target = {"selectedInvestor"}
//                         />
//               </TableCell>
//
//   </TableRow>
//
//
//   <TableRow >
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}>
//                       Deal or Entity:
//               </TableCell>
//               <TableCell  className={classes.cellOne}>
//                       <EntitiesPulldown
//                               itemList = {this.state.deals_4_picklist}
//                               selectedItem = {this.state.selectedDeal}
//                               handleChangeCB = {this.onChange}
//                               target = {"selectedDeal"}
//                       />
//               </TableCell>
//
//   </TableRow>
//
//
//
//   <TableRow >
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}>
//                       Passthru:
//               </TableCell>
//               <TableCell  className={classes.cellOne}>
//
//                         <EntitiesPulldown
//                                 itemList = {this.state.passthrus_4_picklist}
//                                 selectedItem = {this.state.selectedPassthru}
//                                 handleChangeCB = {this.onChange}
//                                 target = {"selectedPassthru"}
//                         />
//               </TableCell>
//
//   </TableRow>
//
//
//   <TableRow >
//
//               <TableCell  className={classes.cellOne}>
//                       Notes:
//               </TableCell>
//               <TableCell  className={classes.cellOne}>
//                       <input
//                             type="text"
//                             name="notes"
//                             size = "40"
//                             value={this.state.notes}
//                             onChange={this.onChange}
//                       />
//               </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//
//   </TableRow>
//
//   <form onSubmit={this.onSubmit}>
//   <TableRow >
//
//              <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}>
//                         <input className="nt-button" type="submit" value="Submit" />
//               </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//               <TableCell  className={classes.cellOne}> </TableCell>
//
//   </TableRow>
//  </form>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ======
// ===========

  //className={classes.textField}
                                //
                                //   $<input type="text" name="amount" size="8" value={this.state.amount} onChange={this.onChange} />
                                // <br/>  <br/>



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
//
