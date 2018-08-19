import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TTypesPulldown from './ttypes-pulldown'

//const apiHost = require("./index.js").apiHost;
const apiHost = "http://localhost:8081";
const fetchURL_sendtrans = apiHost + "/process_add_transaction";
//const apiHost = "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"


const sampleNewTrans = {
"trans_type":1,
"investment_entity_id":72,
"investor_entity_id":"6",
"passthru_entity_id":"",
"amount":"36.00",
"own_adj":0,
"wired_date":"2018-08-23",
"notes":""
}


class NewTransactionForm extends Component  {


constructor(props) {
    super(props);
    this.state = {
        amount: 0,
        notes: "",
        transaction_types: [],
        selectedTType:1

    };


    this.onSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.handleChange.bind(this);
}


//http://localhost:8081/api/getentitiesbytypes?params={%22types%22:[1,3]}
//http://localhost:8081/api/gettransactiontypes


//gets list of entities results from API, assigns to State
// componentDidMount() {
//           const fetchURL_types = apiHost+"/api/gettransactiontypes";
//           //console.log("searchbar FETCH URL is  "+fetchURL)
//           fetch(fetchURL_types)
//            .then(results => results.json())
//            .then(async entities => await this.setState({transaction_types: entities}))
//            .then(console.log("got Trans Types:  "+JSON.stringify(this.state.transaction_types, null, 4)))
//   }


  async componentDidMount() {
    const fetchURL_types = apiHost+"/api/gettransactiontypes";
    const results = await fetch(fetchURL_types);
    const entities = await results.json()
    await this.setState({transaction_types: entities})
    //console.log("got Trans Types:  "+JSON.stringify(this.state.transaction_types, null, 4));
  }





handleChange(event) {
  const target = event.target;
  //const value = target.type === 'checkbox' ? target.checked : target.value;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
  console.log("just set "+name+"  to  "+value)


}





handleFormSubmit(event) {
      event.preventDefault();
      let newTransObject = sampleNewTrans;
      newTransObject.amount = this.state.amount;
      newTransObject.notes = this.state.notes;
      newTransObject.trans_type = this.state.selectedTType;
      console.log("Ready to submit new Transaction: "+JSON.stringify(newTransObject,null,4))

            fetch(fetchURL_sendtrans, {
                        method: "POST",
                        body: JSON.stringify(newTransObject),
                        headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                        }

            })
            .then( () => console.log("Post new Trans  "));

            // .then(response => response.json())
            // .then(message => console.log("Post new Trans got: "+ message));



}  //handle form submit



  render() {
        return (
             <div>
                <form onSubmit={this.onSubmit}>
                      <TTypesPulldown itemList = {this.state.transaction_types} selectedTType = {this.state.selectedTType} handleChangeCB = {this.onChange}/>
                      <label>
                            {(this.state.transaction_types >0) && <TTypesPulldown itemList = {this.state.transaction_types} />}
                      </label>

                      <label>
                        Amount :
                        <input type="text" name="amount" width="20" value={this.state.amount} onChange={this.onChange} />
                      </label>

                      <label>
                        Notes:
                        <input type="text" name="notes" value={this.state.notes} onChange={this.onChange} />
                      </label>

                      <input type="submit" value="Submit" />
                    </form>
            </div>



          );
   }



} //class



export default NewTransactionForm;
