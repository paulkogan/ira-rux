import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";



const ExpenseLine = ( {description, amount, id}) => {
          return (
              <div>        <table border = "0" width="100%">
                              <tbody>
                               <tr width ="100%">
                                  <td width="5%"> &nbsp;</td>
                                   <td align = "left" width="20%">{description} </td>
                                   <td align = "center"  width="20%"> $ {amount}.00</td>
                                  <td width="30%"> {id}</td>
                                  <td width="25%"> &nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
              </div>

          )
}

//regular unconnected component
const DashList = (props) => {

      const DashListOfLines = props.expenses.map( (expense) => {
                return (
                      <ExpenseLine {...expense} key={expense.id} />


                );
      });
            return (
                <div>
                            {DashListOfLines}
                </div>

              );
} //stateless functional component

//this is the HOC
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
