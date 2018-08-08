import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"

const ConnectedExpenseLine = (props) => {


        const localDeleteExpense = (expense) => {
                      props.dispatch(
                            deleteExpense(expense)
                      );
                      console.log("deleted " + expense.description)


        }


          return (
              <div>
                        <table border = "0" width="100%">
                              <tbody>
                               <tr width ="100%">
                                  <td width="5%"> &nbsp;</td>
                                   <td align = "left" width="15%">{props.expense.description} </td>
                                   <td align = "center"  width="15%"> {props.expense.createdAt}</td>
                                   <td align = "center"  width="15%"> $ {props.expense.amount}</td>
                                  <td width="30%"> {props.expense.note}</td>
                                  <td width="20%"> <button onClick = {() => localDeleteExpense(props.expense)}>Delete Expense</button></td>
                                </tr>
                              </tbody>
                            </table>
              </div>

          )


} //stateless functional component




//this is the HOC - expenses being enhanced
// const mapStateToProps = (state) => {
//      // we return an OBJECT, notbJSX, with key-value pair
//          return {
//               expenses: state.expenses
//          };
// }



//you create  function, intio which you then need to call/pass the non-connected component
//passing it dash-list
//as arg, we pass in a function describing the data we want
//the Wrapped component will have access the data as props
//NOW Dashlist has accessto State as Props

//export the connected version
export default connect()(ConnectedExpenseLine);




// <ExpenseLine
//       key={expense.id}
//       expense = {expense}
// />
