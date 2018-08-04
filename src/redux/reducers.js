
//need to pass a function to cretaeStore, with default state
//1. reducer must be pure function
//2. never change State or Action ==> return the new State

const defaultExpensesState = [];
const defaultFilterState = {
      text: "",
      sortBy: "date",
      startDate: 1,
      endDate: 2
};



export const expensesReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
      case "ADD_EXPENSE" :
            return [...state, action.expense];


      case "DELETE_EXPENSE" :
            return state.filter( (expense) => expense.id != action.expense.id);


      case "RESET_EXPENSES" :
          return [];

      default :
           return state;

  } //switch
} //reducer function


export const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
      case "RESET_FILTERS" :
          return []
      default :
          return state;
  } //switch
} //reducer function
