import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DealsList from './deals-list'


//const apiHost = "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"
const apiHost = "http://localhost:8081"


class DealsListPage extends Component {

    constructor (props) {
        super(props)


        this.state = {
            target_entity_id:null,
            dealsResults: [],

         }
    } // constructor


    // // api call - transcations for entity
  componentDidMount() {
            const fetchURL = apiHost + "/api/getdeals/";
            console.log("TS get deals FETCH URL is  "+fetchURL)
            fetch(fetchURL)
            .then(results => results.json())
            .then(dealsResults => this.setState({ dealsResults})
            ) //ts
    }




    render() {
       //console.log("in TS - Target_Entity_ID is  "+this.state.target_entity_id)
        return (
          <div>
                 <DealsList dealsResults = {this.state.dealsResults}/>
          </div>

        ) //return
    } //render
} //class

export default DealsListPage;
