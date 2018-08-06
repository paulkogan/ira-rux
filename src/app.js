import React, {} from "react";
import ReactDOM, {} from "react-dom";
import AppRouter, {} from "./components/appRouter"
import DashPage, {} from "./components/dash-page"
import ConnectedDashList, {} from "./components/connected-dash-page"


import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import {addExpense, deleteExpense} from "./redux/actions.js"
import {expensesReducer, filtersReducer} from "./redux/reducers.js"

import "normalize.css/normalize.css"; //all browsers look the same
import "./styles/style.scss";


export const store = createStore(
      combineReducers ({
          expenses: expensesReducer,
          filters: filtersReducer
      })

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

store.dispatch(
      addExpense({
        amount: 10+Math.floor(Math.random()*90),
        description: "Cofeee"
      })
);

store.dispatch(
      addExpense({
        amount: 10+Math.floor(Math.random()*90),
        description: "Sandwitch"
      })
);

store.dispatch(
      addExpense({
        amount: 10+Math.floor(Math.random()*90),
        description: "A good book"
      })
);

//export default store;


ReactDOM.render(withStore, document.getElementById('root'));
