import uuid, {} from "uuid";

//ACTION GENERATORS

export const addExpense = (newExpense) => {
    //destructure is a bitch
          const  {
              amount =0,
              description = "",
              createdAt = 0,
              note=""
            } = newExpense;

    //explicitly return this object
          return {
              type: "ADD_EXPENSE",
              expense: {
                id: uuid(),
                amount,
                description,
                note,
                createdAt
              }
          }  //return object
} //addExpense function



export const deleteExpense = (expenseToDelete) => {
    //explicitly return
          return {
              type: "DELETE_EXPENSE",
              expense: expenseToDelete
          }

} //removeExpense function
