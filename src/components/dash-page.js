import React, {} from "react";
import ReactDOM, {} from "react-dom";
//import {store} from "../st_store"


const ExpenseLine = (props) => {
          return (
              <div>        <table border = "0" width="100%">
                              <tbody>
                               <tr width ="100%">
                                  <td width="5%"> &nbsp;</td>
                                   <td align = "left" width="20%">{props.expense.description} </td>
                                   <td align = "center"  width="20%"> $ {props.expense.amount}.00</td>
                                  <td width="30%"> {props.expense.id}</td>
                                  <td width="25%"> &nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
              </div>

          )
}


const DashPage = (props) => {
      //const listOfExpenses = store.getState().expenses;
      const DashList = props.expenses.map( (expense) => {
                return (
                      <ExpenseLine
                            key={expense.id}
                            expense = {expense}
                      />
                );
      });




            return (
                <div>
                            {DashList}
                </div>

              );


} //stateless functional component

export default DashPage
