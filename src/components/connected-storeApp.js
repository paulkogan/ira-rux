import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {connect} from "react-redux";
//import {createStore, combineReducers} from "redux";
// import DashPage, {} from "./dash-page"
// import StoreApp, {} from "./storeApp"
// import {addExpense, deleteExpense} from "../redux/actions.js"
// import {expensesReducer, filtersReducer} from "../redux/reducers.js"
//import {store} from "../app.js"
import ConnectedDashList, {} from "./connected-dash-page.js"
import ConnectedBuyButton, {} from "./connected-buy-button.js"
import ConnectedDeleteButtons, {} from "./connected-delete-buttons.js"
import "../styles/style.scss";



//
// //utlity becuase react not re-rendering
// const just1Render = () => {
//           ReactDOM.render(<ConnectedStoreApp />, document.getElementById("root"));
//           //console.log({ store.getState().expenses) })
//
// }




// const BasicMessage = (props) => (
//   <div>
//       This is a Basis Message
//   </div>
//
//
// )



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

const AuthDeleteButtons = doAuthenticaton(ConnectedDeleteButtons);




class ConnectedStoreApp extends React.Component {

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
                <br /><br />
                <ConnectedBuyButton />
                <br/>
                <AuthDeleteButtons isAuthenticated = {this.state.isAuthenticated} userName = {this.state.userName}/>
                <ConnectedDashList />


                <br/>
            </div>

      )
    } //render

} //class

//this is the HOC
const mapStateToProps = (state) => {
     // we return an OBJECT, notbJSX, with key-value pair
         return {
              expenses: state.expenses
         };
}



export default connect(mapStateToProps)(ConnectedStoreApp)


  // DashPage expenses = {this.props.expenses} />
  //     ConnectedDashList />
