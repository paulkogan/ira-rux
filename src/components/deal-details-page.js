import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DealFinancialsComponent from './d-financials-component'
import OwnershipComponent from './d-ownership-component'
import CapCallsComponent from './d-capcalls-component'

import {formatCurrency, get_endpoint} from './ira-utils';
const apiHost = get_endpoint('API')


class DealDetailsPage extends Component {

      constructor (props) {
          super(props)
          //let entity = (props.match) ? props.match.params.id : props.id

          this.state = {
                target_entity_id: null,
                deal_financials: {id:1001},
                deal_ownership: [],
                deal_own_totals: {},
                deal_cap_calls:[]
         }
     }


async componentDidMount ()  {

        //get entity id from route props (nid) or from URL param
        await this.setState({
          target_entity_id: this.props.match ? this.props.match.params.id : (this.props.nid ? this.props.nid : null)
        });

        const fetchURL_deal = apiHost + "/api/getdealfinancials/"+this.state.target_entity_id;
        const fetchURL_ownership = apiHost + "/api/getownership/"+this.state.target_entity_id;
        const fetchURL_capcalls = apiHost + "/api/getcapcallswithdetails/"+this.state.target_entity_id;
        //console.log("Fetch Deal URL is " + fetchURL_deal);


          fetch(fetchURL_deal)
           .then(results => results.json())
           .then(data =>  {
                  this.setState({ deal_financials: data})
            })
           .then( () => fetch(fetchURL_ownership))
           .then(results => results.json())
           .then(data => this.setState({
                  deal_ownership: data[0],
                  deal_own_totals: data[1]
           }))
           .then( () => fetch(fetchURL_capcalls)  )
           .then(results => results.json())
           .then(data => this.setState({deal_cap_calls: data}))


  } //CDM



  render() {
        return (
                          <div>
                                <DealFinancialsComponent
                                        entityID = {this.state.target_entity_id}
                                        dealFinancials = {this.state.deal_financials}
                                />
                                <br />

                                {(this.state.deal_ownership.length >0) && <OwnershipComponent
                                        entityID = {this.state.target_entity_id}
                                        ownRows = {this.state.deal_ownership}
                                        ownTotals = {this.state.deal_own_totals}

                                />}
                                  <br />

                                {(this.state.deal_cap_calls.length >0) && <CapCallsComponent
                                        dealCapCalls = {this.state.deal_cap_calls}

                                />}
                                <br />



                          </div>



        ) //return
    } //render
} //class

// DealDetailsPage.defaultProps = {
//    nid: 0
// }


export default DealDetailsPage;

// async fetchData () {
//       const fetchURL_deal = apiHost + "/api/getdealfinancials/"+this.state.target_entity_id;
//       const fetchURL_ownership = apiHost + "/api/getownership/"+this.state.target_entity_id;
//       try {
//               const response_d = await fetch(fetchURL_deal);
//               const json_d = await response_d.json();
//               this.setState({deal_financials:json_d});
//
//               const response_o = await fetch(fetchURL_ownership);
//               const json_o = await response_o.json();
//               this.setState({deal_ownership:json_o[0]});
//               this.setState({deal_own_totals:json_o[1]});
//
//       }  catch (error) {
//               console.log("Error fetching DealFinancials" + error);
//       }
// }










                //target_entity_id: props.match.params.id,

  //let entity = (props.match) ? props.match.params.id : props.id


    //                                    totalCapital = {this.state.deal_ownership[1].totalCapital}


  //      TotalCapital is this.state.deal_own_totals.totalCapital
//TotalCapital is {this.state.deal_own_totals.totalCapital}
//totalCapital = {this.state.deal_ownership[1].totalCapital}


      //                          Just the Totals is {JSON.stringify(this.state.deal_ownership[1])}

      // The Financials Payload is: {JSON.stringify(this.state.deal_financials)}
      // <br />  <br />



// <br />  <br /> <br />  <br />
//
//                              The OwnRows Array is: {JSON.stringify(this.state.deal_ownership)}
                            //  The OwnTotals object is: {JSON.stringify(this.state.deal_own_totals)}
