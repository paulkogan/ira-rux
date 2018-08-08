import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"
import ConnectedExpenseLine, {} from "./connected-expense-line.js"




//regular unconnected component
const DashList = (props) => {

        const expensesTotal = props.expenses.reduce((a, b) => {
              return {amount: a.amount + b.amount}
        });



        console.log(expensesTotal.amount);

        const DashListOfLines = props.expenses.map( (expense) => {
                        return (
                              <ConnectedExpenseLine expense={expense} key={expense.id}/>

                        );
        });


          return (
                          <div className = "div-border">
                                      <div className="exp-total">
                                      Showing <font color="white">{props.expenses.length} expenses </font>
                                      for a total of <font color="white"> ${expensesTotal.amount.toFixed(2)}</font>
                                      <br/>
                                      </div>
                                      {DashListOfLines}
                          </div>

          );




} //stateless functional component




//this is the HOC - expenses being enhanced
const mapStateToProps = (state) => {
     // we return an OBJECT, notbJSX, with key-value pair
         return {
              expenses: state.expenses
         };
}



//you create  function, intio which you then need to call/pass the non-connected component
//passing it dash-list
//as arg, we pass in a function describing the data we want
//the Wrapped component will have access the data as props
//NOW Dashlist has accessto State as Props

//export the connected version
export default connect(mapStateToProps)(DashList);




// <ExpenseLine
//       key={expense.id}
//       expense = {expense}
// />
