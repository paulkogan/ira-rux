import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EntitiesPulldown from './entities-pulldown'
import {formatCurrency, get_endpoint} from './ira-utils';
const apiHost = get_endpoint('API')


const sampleNewTrans = {
"trans_type":0,
"investment_entity_id":72,
"investor_entity_id":"6",
"passthru_entity_id":"",
"amount":"00.00",
"own_adj":0,
"wired_date":"2018-08-23",
"notes":""
}





class NewCapCallTrans extends Component  {


constructor(props) {
    super(props);

    this.state = {
        amount: 0,
        notes: "",
        investors_4_picklist: [],
        selectedInvestor: 5,
        capcalls_4_picklist: [],
        selectedCapCall: 5,
        own_adj: 0

    };

    this.onSubmit = this.handleFormSubmit.bind(this);
    this.onChange = this.handleChange.bind(this);
}



  async componentDidMount() {
    //const encoded_deals_part=encodeURIComponent('params={"types":[1,3,4]}')
    //const fetchURL_deals = apiHost+"/api/getentitiesbytypes?"+encoded_deals_part

    const fetchURL_capcalls = apiHost + "/api/getcapitalcalls"

          const capcalls_results = await fetch( fetchURL_capcalls );
          const capcalls_4_picklist = await capcalls_results.json()
          await this.setState({ capcalls_4_picklist })


  }


//set state for any number of input field changes
handleChange(event) {
          //const target = event.target;
          //const value = target.type === 'checkbox' ? target.checked : target.value;
          const value = event.target.value;
          const name = event.target.name;

          this.setState({
            [name]: value
          });
          console.log("just set "+name+"  to  "+value)

}



handleFormSubmit(event) {
      event.preventDefault();
      const fetchURL_sendtrans = apiHost + "/process_add_capital_call_trans";


      let newTransObject = sampleNewTrans;
      newTransObject.amount = this.state.amount;
      newTransObject.notes = this.state.notes;
      newTransObject.trans_type = this.state.selectedTType;
      newTransObject.investment_entity_id = this.state.selectedDeal;
      newTransObject.investor_entity_id = this.state.selectedInvestor;
      newTransObject.passthru_entity_id = this.state.selectedPassthru;

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


                Capital Calls:
                 <EntitiesPulldown
                         itemList = {this.state.capcalls_4_picklist}
                         selectedItem = {this.state.selectedCapCall}
                         handleChangeCB = {this.onChange}
                         target = {"selectedCapCall"}
                 />
                 <br/>


                      <div>
                                  Transaction Amount: &nbsp;
                                  $<input type="text" name="amount" size="8" value={this.state.amount} onChange={this.onChange} />
                                <br/>  <br/>
                        </div>






                                      <label>
                                        Notes: &nbsp; &nbsp;
                                        <input type="text" name="notes" value={this.state.notes} onChange={this.onChange} />
                                      </label>
                                      <br/>
                                      <input className="nt-button" type="submit" value="Submit" />
                                    </form>
                            </div>

          ) //return


   } //render



} //class



export default NewCapCallTrans ;


//{JSON.stringify(this.state.capcalls_4_picklist)}


                     //
                    //  Investor:
                    //  <EntitiesPulldown
                    //          itemList = {this.state.investors_4_picklist}
                    //          selectedItem = {this.state.selectedInvestor}
                    //          handleChangeCB = {this.onChange}
                    //          target = {"selectedInvestor"}
                    //  />
                    //  <br/>
                     //









//splice(0, 0, noPassEnt)


    // fetch(fetchURL_ttypes)
    //  .then(results => results.json())
    //  .then(data =>  this.setState({
    //         ttypes_4_picklist: data
    //   }))
    //  .then( () => fetch(fetchURL_deals))
    //  .then(results => results.json())
    //  .then(data => this.setState({
    //         deals_4_picklist: data
    //  }))
    // //  .then( () => fetch(fetchURL_capcalls)  )
    // //  .then(results => results.json())
    // //  .then(data => this.setState({
    // //             deal_cap_calls: data
    // //   }))
    //   .then( () => fetch(fetchURL_investors)  )
    //   .then(results => results.json())
    //   .then(data => this.setState({
    //              investors_4_picklist: data
    //    }))
    //  .then( () => fetch(fetchURL_passthrus)  )
    //  .then(results => results.json())
    //  //.then(objList => objList.splice(0, 0, {id: 0, name: ' -- no Passthru -- ' }) )
    //  .then(data => this.setState({
    //             passthrus_4_picklist: data
    //   }))
