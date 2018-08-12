import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EntityPicklist from './entity_picklist'


//const apiHost = require("./index.js").apiHost;
//const apiHost = "http://localhost:8080";
const apiHost = "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"


class SearchBar extends Component{


constructor(props) {
    super(props);
    this.state = {
          searchText: "",
          entityResults:[],
          selectedEntity: props.selectedEntity
    };

}

onInputChange = (text) => {
    this.props.startNewEntitySearchCB()
    this.setState({searchText:text}, () => {
          console.log("SB - calling API for: "+this.state.searchText);
          this.componentDidMount()
    });
} //onInputchange


//this is the eventHandler, a method on the class - DOES NOT GET CALLED
// handleClick(e) {
//     console.log("button sent: "+this.state.searchText);
//     //this.props.doSearchCB(this.state.searchText);
//     this.componentDidMount()
//
// }




//gets list of entities results from API, assigns to State
componentDidMount() {
          const fetchURL = apiHost+"/api/searchentities/"+this.state.searchText;
          console.log("searchbar FETCH URL is  "+fetchURL)
          fetch(fetchURL)
           .then(results => results.json())
           .then(entities => this.setState({ entityResults: entities}))
  }


                //show entityPickList only if you dont have a selected Entity
                //the click happens on TransList, which then passes it up the chain to TS

  render () {
         return (
          <div >
                <div className="search-bar">
                    {"Search:    "}
                    <input size="40" value = {this.state.searchText}
                           onChange = {
                               (eventObj) => {this.onInputChange(eventObj.target.value)}

                            }
                    />
                </div>

                <div>
                    { (this.props.showEntityPicklist) && <EntityPicklist entityResults = {this.state.entityResults}
                                    onEntitySelectCB = {this.props.onEntitySelectCB}
                    />}
                </div>
            </div>

        );    

  }


} //class



export default SearchBar;



// <button className="button"
// onClick={
//   (e)=>{this.handleClick(e)}
//
// }>Search</button>
