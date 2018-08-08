import React, {} from "react";
import ReactDOM, {} from "react-dom";
import AppRouter, {} from "./components/appRouter"


import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import {addExpense, deleteExpense} from "./redux/actions.js"
import {expensesReducer, filtersReducer} from "./redux/reducers.js"
import moment from 'moment';
import "normalize.css/normalize.css"; //all browsers look the same
import "./styles/style.scss";


export const store = createStore(
      combineReducers ({
          expenses: expensesReducer,
          filters: filtersReducer
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
      console.log(JSON.stringify(store.getState().expenses,null,4));

});

console.log("in APP.JS");

//this is a JSX variable
const withStore = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

//gettoday's date
const now = moment()

store.dispatch(
      addExpense({
        amount: (1000+Math.floor(Math.random()*9000))/100,
        description: "Cofeee",
        createdAt: now.format('MMM Do, YYYY')
      })
);

store.dispatch(
      addExpense({
        amount: (1000+Math.floor(Math.random()*9000))/100,
        description: "Sandwitch",
        note: "Fresh bread makes all the diff!",
        createdAt: now.format('MMM Do, YYYY')
      })
);

store.dispatch(
      addExpense({
        amount: (1000+Math.floor(Math.random()*9000))/100,
        description: "A good book",
        note: "Read Phillip Roth!",
        createdAt: now.format('MMM Do, YYYY')
      })
);

//export default store;


ReactDOM.render(withStore, document.getElementById('root'));
