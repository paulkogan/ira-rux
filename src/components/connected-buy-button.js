import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"
import moment from 'moment';

const activities = [
"Coffee",
"Cigs",
"Whiskey",
"Rice",
"Beans",
"JS Coding Book",
"Carrot Juice",
"Kale",
"Beyond Good & Evil 2 - 2019"
]


class ConnectedBuyButton extends React.Component {

  constructor (props) {
    super(props)
    this.handleSubmit= this.handleSubmit.bind(this)
    this.state = {
          error: null,

      }

  } // constructor



//
// handleChange (e) {
//                   console.log("IN CHANGE adding target "+ e.target.value)
//                   addExpense({
//                     amount: 10+Math.floor(Math.random()*90),
//                     description: "yo" + e.target.value
//                   })
//
//
// }

handleSubmit (e) {
          e.preventDefault();
          const data = new FormData(e.target);
          console.log("DATA is  "+ JSON.stringify(data))

          // fetch('/api/form-submit-url', {
          //   method: 'POST',
          //   body: data,
          // });

          console.log("IN SUBMIT e.target.newDescription.value"+ e.target.newDescription.value)
          const now = moment()

          this.props.dispatch(
               addExpense({
                      amount: (1000+Math.floor(Math.random()*9000))/100,
                      description: e.target.newDescription.value,
                      createdAt: now.format('MMM Do, YYYY')
                })
          );

}




makeSelect = (item) => {
      return <option key={Math.random(5)} value={item}>{item}</option>
}


render() {
        return (
              <div>
                  <form onSubmit={this.handleSubmit}>
                        <select name = "newDescription" >
                                  {activities.map(this.makeSelect)}

                                  <option value="Barley">Barley</option>
                                  <option value="Hops">Hops</option>
                        </select>

                        <button>ADD THIS</button>
                  </form>
              </div>

        )
} //render

} //class



const mapStateToProps = (state) => {
     // we return an OBJECT, notbJSX, with key-value pair
         return {
              expenses: state.expenses
         };
}

//becuase we dont need to access store data, can connect without passing in MapStatetoProps

export default connect()(ConnectedBuyButton)
