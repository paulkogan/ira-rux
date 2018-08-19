import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"

const ItemLine = (props) => {


        const localDeleteExpense = (expense) => {
                      props.dispatch(
                            deleteExpense(expense)
                      );
                      console.log("deleted " + expense.description)


        }


          return (
              <div>
                        <table border = "0"  >
                              <tbody>
                               <tr >
                                  <td > &nbsp;</td>
                                   <td align = "left" >{props.expense.description} </td>
                                   <td align = "center"> {props.expense.createdAt}</td>
                                   <td align = "center"> $ {props.expense.amount}</td>
                                  <td> {props.expense.note}</td>
                                  <td > <button onClick = {() => localDeleteExpense(props.expense)}>Delete Expense</button></td>
                                </tr>
                              </tbody>
                            </table>
              </div>

          )


} //stateless functional component



//just need access to actions to delete
export default connect()(ItemLine);
