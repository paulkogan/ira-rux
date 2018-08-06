import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"

const ConnectedDeleteButtons = (props) => {

        const deleteFirst = () => {
          props.dispatch(
                deleteExpense(
                   props.expenses[0]
                )
          );
          console.log("deleted first" )


        }

        const addOne = () => {
            props.dispatch(
                  addExpense({
                    amount: 10+Math.floor(Math.random()*90),
                    description: activities[parseInt(Math.random(activities.length)*activities.length)]
                  })
            );


        }


        const deleteLast = () => {
          props.dispatch(
                deleteExpense(
                   props.expenses[props.expenses.length-1]
                )
          );
          console.log("deleted last")


        }

        return (
              <div>
                  <button onClick = {deleteFirst}>Delete First</button>
                  <button onClick = {deleteLast}>Delete Last</button>
              </div>

        )

}




const mapStateToProps = (state) => {
     // we return an OBJECT, notbJSX, with key-value pair
         return {
              expenses: state.expenses
         };
}



export default connect(mapStateToProps)(ConnectedDeleteButtons)
