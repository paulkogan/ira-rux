import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
//import {createStore, combineReducers} from "redux";
//import DashPage, {} from "./dash-page"
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"
import {store} from "../app.js"
import ConnectedDashList, {} from "./connected-dash-page.js"
import "../styles/style.scss";


import "../styles/style.scss";

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





//utlity becuase react not re-rendering
const just1Render = () => {
          ReactDOM.render(<StoreApp />, document.getElementById("root"));
          //console.log({ store.getState().expenses) })

}


const BuyButton = (props) => {



        const addOne = () => {
            store.dispatch(
                  addExpense({
                    amount: 10+Math.floor(Math.random()*90),
                    description: activities[parseInt(Math.random(activities.length)*activities.length)]
                  })
            );
            just1Render()

        }

        return (
              <div>
                  <button onClick = {addOne}>Buy Something</button>
              </div>

        )

}


const BasicMessage = (props) => (
  <div>
      This is a Basis Message
  </div>


)

const DeleteButtons = (props) => {

        const deleteFirst = () => {
          store.dispatch(
                deleteExpense(
                   store.getState().expenses[0]
                )
          );
          console.log("deleted first" )
          just1Render()

        }

        const deleteLast = () => {
          store.dispatch(
                deleteExpense(
                   store.getState().expenses[store.getState().expenses.length-1]
                )
          );
          console.log("deleted last")
          just1Render()

        }

        return (
              <div>
                  <button onClick = {deleteFirst}>Delete First</button>
                  <button onClick = {deleteLast}>Delete Last</button>
              </div>

        )

}


//HOC
const doAuthenticaton = (WrappedComponent) => {
    //here is where we return the HOC = a new stateless functional component
    //implicitly return some JSX
      return (props) => {

          return (
                  <div>
                              {props.isAuthenticated ? (
                                      <div className="authenticated">
                                            Thanks for Logging in {props.userName}, enabling Delete buttons.
                                            <WrappedComponent {...props} />
                                      </div>
                                    ) : (
                                      <div className="not-authenticated">
                                            Please login {props.userName} to enable Delete buttons.
                                      </div>


                                    )
                            }
                  </div>
          ) //end HOC being returned
   }
}

const AuthDeleteButtons = doAuthenticaton(DeleteButtons);




class StoreApp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
          isAuthenticated: true,
          userName: "Paul"
      }
  } // constructor


    render () {
      return (
            <div>
                <b>StoreTrack Redux Store</b>
                <br /><br />
                <BuyButton />
                <br/>
                <AuthDeleteButtons isAuthenticated = {this.state.isAuthenticated} userName = {this.state.userName}/>
                <br/>
            </div>

      )
    } //render

} //class

export default StoreApp



ReactDOM.render(<StoreApp />, document.getElementById("root"));
