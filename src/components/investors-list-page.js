import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DealsList from './deals-list'
import InvestorsList from './investors-list'

import {formatCurrency, getAPI_endpoint} from './ira-utils';
const apiHost = getAPI_endpoint()



class InvestorsListPage extends Component {

    constructor (props) {
        super(props)


        this.state = {
            target_entity_id:null,
            fetchResults: [],

         }
    } // constructor


    // // api call - transcations for entity
  componentDidMount() {
            const fetchURL = apiHost + "/api/getinvestors/";
            console.log("TS get investors FETCH URL is  "+fetchURL)
            fetch(fetchURL)
            .then(results => results.json())
            .then(fetchResults => this.setState({ fetchResults})
            ) //ts
    }




    render() {
       //console.log("in TS - Target_Entity_ID is  "+this.state.target_entity_id)
        return (
          <div>
                 <InvestorsList investorsResults = {this.state.fetchResults}/>
          </div>

        ) //return
    } //render
} //class

export default InvestorsListPage;
