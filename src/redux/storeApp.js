import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {createStore, combineReducers} from "redux";
import DashPage, {} from "../components/dash-page"
import {addExpense, deleteExpense} from "./actions.js"
import {expensesReducer, filtersReducer} from "./reducers.js"
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


export const store = createStore(
      combineReducers ({
          expenses: expensesReducer,
          filters: filtersReducer
      })

);


// store.subscribe(() => {
//       console.log(JSON.stringify(store.getState().expenses,null,4));
//
// });



//utlity becuase react not re-rendering
const just1Render = () => {
          ReactDOM.render(<App />, document.getElementById("root"));

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
      return (props) => (

        <div>

                    {props.isAuthenticated ? (
                            <div className="authenticated">
                                  Thanks for Logging in, enabling Delete buttons.
                                  <WrappedComponent />
                            </div>
                          ) : (
                            <div className="not-authenticated">
                                  Please login to enable Delete buttons.
                            </div>
                          )
                  }
        </div>
      )

}

const AuthDeleteButtons = doAuthenticaton(DeleteButtons);





class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
          isAuthenticated: false
      }
  } // constructor


    render () {
      return (
            <div>
                <b>StoreTrack Redux Store</b>
                <br /><br />
                <BuyButton />
                <br/>
                <AuthDeleteButtons isAuthenticated = {this.state.isAuthenticated}/>
                <DashPage expenses={store.getState().expenses} />
                <br/>
            </div>

      )
    } //render

} //class


//The State is { JSON.stringify(store.getState().expenses) }

ReactDOM.render(<App />, document.getElementById("root"));
