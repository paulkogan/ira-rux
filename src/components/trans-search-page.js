import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TransList from './trans-list'
import TransSearchBar from './trans-search-bar'

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

async componentDidMount() {
          const fetchURL = apiHost + "/api/transforentity/"+this.state.target_entity_id;
          try {
                  const response = await fetch(fetchURL);
                  const json = await response.json();
                  this.setState({transResults:json});

          } catch (error) {
                  console.log("Error fetching Transaction Results" + error);
          }


  }  //cDM




// //use arrow functions to bind, call CDM as a CB funcion after SetState
//this is what you click on
// I want : when I click on an entity, hide entity pick list
//when I click in search bar, show entity pick list.

setEntityForTransSearchCB = (entityResult) => {
            const entity_id = entityResult.id;
            //switch display modes - you picked one, so hide the pick list
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

            <TransSearchBar
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
