import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TransList from './trans_list'
import SearchBar from './search_bar'

const apiHost = "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"

class TransSearchPage extends Component {

    constructor (props) {
        super(props)


        this.state = {
            target_entity_id:null,
            transResults: [],
            showEntityPicklist: true,
         }
    } // constructor


    // // api call - transcations for entity
  componentDidMount() {
            const fetchURL = apiHost + "/api/transforentity/"+this.state.target_entity_id;
            console.log("TS transactions FETCH URL is  "+fetchURL)
            fetch(fetchURL)
            .then(results => results.json())
            .then(transactions => this.setState({ transResults: transactions })
            ) //ts
    }

//     //      /api/searchentities/:term


// //use arrow functions to bind, call CDM as a CB funcion after SetState
//this is what you click on
// I want : when I click on an entity, hide entity pick list
//when I click in search bar, show entity pick list.

  setEntityForTransSearchCB = (entityResult) => {
            const entity_id = entityResult.id;
            //switch display modes
            this.setState ({showEntityPicklist:false});
            this.setState ({target_entity_id:entity_id}, () => {
                    console.log("TS Setting state CB: target_entity_id is "+this.state.target_entity_id)
                    this.componentDidMount()


            })
      }

//this is ugly - just to let this component know to switch display modes
startNewEntitySearchCB = () => {
            this.setState ({showEntityPicklist:true});

}



    render() {
       console.log("in TS - Target_Entity_ID is  "+this.state.target_entity_id)
        return (
          <div>

            <SearchBar
                  selectedEntity = {this.state.target_entity_id}
                  showEntityPicklist = {this.state.showEntityPicklist}
                  startNewEntitySearchCB = {this.startNewEntitySearchCB}
                  onEntitySelectCB = {this.setEntityForTransSearchCB}
            />
            <div >
                 { (!this.state.showEntityPicklist) && <TransList transResults = {this.state.transResults}/> }
            </div>
          </div>

        ) //return
    } //render
} //class

export default TransSearchPage;
