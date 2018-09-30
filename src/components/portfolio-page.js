import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PortfolioDealComponent from './portfolio-deal-component';


import {formatCurrency, get_endpoint} from './ira-utils';

const apiHost = get_endpoint('API')


class PortfolioPage extends Component {

      constructor (props) {
          super(props)
          //let entity = (props.match) ? props.match.params.id : props.id

          this.state = {
                target_entity_id: null,
                portfolioDeals: [],
                totalInvestmentValue : 0,
                totalPortfolioValue :  0,
                totalDistributions :  0
         }
     }

    //  let totalInvestmentValue =  results[1]
    //  let totalPortfolioValue =  results[2]
    //  let totalDistributions =  results[3]*-1 //make it positive here
    //  let portfolioValueGain =  totalPortfolioValue-totalInvestmentValue
    //  let portfolioCashGain = portfolioValueGain+ totalDistributions
    //  let portfolioIRR = parseFloat(portfolioCashGain/totalInvestmentValue)*100







async componentDidMount ()  {

        //get entity id from route props (nid) or from URL param
        await this.setState({
          target_entity_id: this.props.match ? this.props.match.params.id : (this.props.nid ? this.props.nid : null)
        });

        const fetchURL_portfolio = apiHost + "/api/getportfolio/"+this.state.target_entity_id;


          fetch(fetchURL_portfolio)
           .then(results => results.json())
           .then(data => this.setState({
                    portfolioDeals:  data[0],
                    totalInvestmentValue: data[1],
                    totalPortfolioValue : data[2],
                    totalDistributions :  data[3]*-1
             }))
  } //CDM



  render() {

        const displayDealsList = this.state.portfolioDeals.map((deal) => {
               return (

                      <PortfolioDealComponent
                                deal={deal}
                                key = {deal.id}
                      />
               )
         });




        return (
                          <div>

                              {"totalInvestmentValue:  "+formatCurrency(this.state.totalInvestmentValue)}
                              <br/><br/>
                              {"totalPortfolioValue:  "+formatCurrency(this.state.totalPortfolioValue)}
                              <br/><br/>
                              {"Tot.Distributions:  "+formatCurrency(this.state.totalDistributions)}
                              <br/><br/>
                              {displayDealsList}
                          </div>



        ) //return
    } //render
} //class

// PortfolioPage.defaultProps = {
//    nid: 0
// }


export default PortfolioPage;

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
