import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DealFinancials from './deal-financials-component'


//const apiHost = "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"
const apiHost = "http://localhost:8081"

class DealDetailsPage extends Component {

    constructor (props) {
        super(props)


        this.state = {
              target_entity_id:props.match.params.id,
              deal_financials: {id:1001}
         }
    } // constructor



async componentDidMount() {
      const fetchURL = apiHost + "/api/getdealfinancials/"+this.state.target_entity_id;
      try {
              const response = await fetch(fetchURL);
              const json = await response.json();
              this.setState({deal_financials:json});
      } catch (error) {
              console.log("Error fetching DealFinancials" + error);
      }
    }





    render() {

        return (

                          <div>
                                The Payload is: {JSON.stringify(this.state.deal_financials)}
                                <br />  <br />
                                <DealFinancials entityID = {this.state.target_entity_id} dealFinancials = {this.state.deal_financials} />


                          </div>



        ) //return


    } //render
} //class

export default DealDetailsPage;
