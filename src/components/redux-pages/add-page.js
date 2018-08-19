import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
import {addExpense, deleteExpense} from "../redux/actions.js"
import {expensesReducer, filtersReducer} from "../redux/reducers.js"
import ItemList, {} from "./list-page.js"
import moment from 'moment';



class AddPage extends React.Component {

      constructor (props) {
        super(props)
        this.handleSubmit= this.handleSubmit.bind(this)

      } // constructor


      state = {
            description: "",
            amount: 0.00,
            note: "   "
        }


      //save all page-changes to state, then display from state
      onDescriptionChange = (e) => {
           const description = e.target.value
           this.setState(  () => ({description})  ) ;

      }


      onAmountChange = (e) => {
           const amount = e.target.value
           if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                      this.setState(   {amount}  ) ;

           }


      }

      onNoteChange = (e) => {
           const note = e.target.value
           this.setState({note}) ;

      }


      handleSubmit (e) {
                e.preventDefault();
                const now = moment()
                this.props.dispatch(
                     addExpense({
                            amount: parseFloat(this.state.amount),
                            description: this.state.description,
                            note:this.state.note,
                            createdAt: now.format('MMM Do, YYYY')
                      })
                );

      }





      render() {

            return (
                <div>
                    <form onSubmit={this.handleSubmit}>

                    <table border = "0" width="100%">
                          <tbody>
                           <tr width ="100%">
                              <td width="10%"> &nbsp;</td>
                               <td align = "right" width="20%">Description:</td>
                              <td width="5%"> </td>
                               <td align = "left"  width="40%">
                                   <input
                                       type="text"
                                       name="description"
                                       value={this.state.description}
                                       onChange={this.onDescriptionChange}
                                       autoFocus />
                              </td>
                              <td width="40%"> </td>
                            </tr>

                            <tr width ="100%">
                               <td width="10%"> &nbsp;</td>
                                <td align = "right" width="20%">Amount:</td>
                               <td width="5%"> </td>
                                <td align = "left"  width="40%">
                                <input
                                    type="number"
                                    name="amount"
                                    value={this.state.amount}
                                    onChange={this.onAmountChange}
                                />
                               </td>
                               <td width="40%"> </td>
                             </tr>


                        <tr width ="100%">
                           <td width="10%"> &nbsp;</td>
                            <td align = "right" width="20%">Notes:</td>
                           <td width="5%"> </td>
                            <td align = "left"  width="50%">
                            <textarea
                                cols ="50"
                                rows = "2"
                                value={this.state.note}
                                onChange={this.onNoteChange}
                            >  </textarea>

                           </td>
                           <td width="30%"> </td>
                         </tr>


                         <tr width ="100%">
                            <td width="10%"> &nbsp;</td>
                            <td width="10%"> &nbsp;</td>
                            <td width="5%"> </td>
                             <td align = "left"  width="40%">

                                <button>Add Expense</button>

                            </td>
                            <td width="30%"> </td>
                          </tr>


                      </tbody>
                    </table>

                    </form>
                    <br />
                    <ItemList />
                </div>

              );

      } //render
}//class




const mapStateToProps = (state) => {
     // we return an OBJECT, notbJSX, with key-value pair
         return {
              expenses: state.expenses
         };
}

//becuase we dont need to access store data, can connect without passing in MapStatetoProps
//we are just submitting to teh store
export default connect()(AddPage)
