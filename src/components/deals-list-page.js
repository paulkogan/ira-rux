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

//     //      /api/searchentities/:term


// //use arrow functions to bind, call CDM as a CB funcion after SetState
//this is what you click on
// I want : when I click on an entity, hide entity pick list
//when I click in search bar, show entity pick list.

//   setEntityForTransSearchCB = (entityResult) => {
//             const entity_id = entityResult.id;
//             //switch display modes
//             this.setState ({showEntityPicklist:false});
//             this.setState ({target_entity_id:entity_id}, () => {
//                     console.log("TS Setting state CB: target_entity_id is "+this.state.target_entity_id)
//                     this.componentDidMount()
//
//
//             })
//       }
//
// //this is ugly - just to let this component know to switch display modes
// startNewEntitySearchCB = () => {
//             this.setState ({showEntityPicklist:true});
//
// }



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
