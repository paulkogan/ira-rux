import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import TransList from './t-list';
import TransSearchBar from './t-search-bar';
import TransListComponent from './t-list-component'
import {formatCurrency, get_endpoint} from './ira-utils';
const apiHost = get_endpoint('API')


class TransSearchPage extends Component {

    constructor (props) {
        super(props)


        this.state = {
            target_entity_id: 0,
            transResults: [],
            showEntityPicklist: true,
         }
    } // constructor


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



//promises version
  componentDidMount ()  {
            const fetchURL = apiHost + "/api/transforentity/"+this.state.target_entity_id;
            console.log("transactions FETCH URL is  "+fetchURL)
            fetch(fetchURL)
             .then(results => results.json())
             .then(data =>  {
                    this.setState({transResults:data})
              })


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

            <br/>

            <br/>
            <div>
                   { (this.state.transResults.length >0) && <TransListComponent transactions = {this.state.transResults}/> }
            </div>
          </div>

        ) //return
    } //render
} //class

export default TransSearchPage;
// { ((!this.state.showEntityPicklist) &&
                // { ((!this.state.showEntityPicklist) && this.state.transResults) && <TransList transResults = {this.state.transResults}/> }
                //   Transactions Payload is   {JSON.stringify(this.state.transResults)}

                            //Transactions STATE is   {JSON.stringify(this.state.transResults)}
