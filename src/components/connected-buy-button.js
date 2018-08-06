import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"

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



const ConnectedBuyButton = (props) => {



        const addOne = () => {
            props.dispatch(
                  addExpense({
                    amount: 10+Math.floor(Math.random()*90),
                    description: activities[parseInt(Math.random(activities.length)*activities.length)]
                  })
            );


        }

        return (
              <div>
                  <button onClick = {addOne}>Buy Something</button>
              </div>

        )

}



const mapStateToProps = (state) => {
     // we return an OBJECT, notbJSX, with key-value pair
         return {
              expenses: state.expenses
         };
}



export default connect(mapStateToProps)(ConnectedBuyButton)
