import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DealFinancials from './deal-financials-component'
import ShowOwnership from './show-ownership-component'

//get this from Store?
//const apiHost = "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"
const apiHost = "http://localhost:8081"






class DealDetailsPage extends Component {

    constructor (props) {
        super(props)


        this.state = {
              target_entity_id:props.match.params.id,
              deal_financials: {id:1001},
              deal_ownership: [],
              deal_own_totals: {}
    }

    //this.chainFetch2Data = this.chainFetch2Data.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);


} // constructor


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

componentDidMount ()  {
        const fetchURL_deal = apiHost + "/api/getdealfinancials/"+this.state.target_entity_id;
        const fetchURL_ownership = apiHost + "/api/getownership/"+this.state.target_entity_id;
          fetch(fetchURL_deal)
           .then(results => results.json())
           .then(data =>  {
                  this.setState({ deal_financials: data})
            })
           .then( () => fetch(fetchURL_ownership)     )
           .then(results => results.json())
           .then(data => this.setState({
                  deal_ownership: data[0],
                  deal_own_totals: data[1]
           }))

  }




// componentDidMount()  {
//
//         const fetchURL_ownership = apiHost + "/api/getownership/"+this.state.target_entity_id;
//           fetch(fetchURL_ownership)
//           .then(results => results.json())
//           .then(data => this.setState({
//                  deal_ownership: data[0],
//                  deal_own_totals: data[1]
//           }))
//
//   }








    render() {

        return (

                          <div>

                                <DealFinancials entityID = {this.state.target_entity_id} dealFinancials = {this.state.deal_financials} />
                                <br />
                                {this.state.deal_ownership && <ShowOwnership
                                        entityID = {this.state.target_entity_id}
                                        ownRows = {this.state.deal_ownership}
                                        ownTotals = {this.state.deal_own_totals}

                                />}
                                <br />




                          </div>



        ) //return


    } //render
} //class




export default DealDetailsPage;

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
