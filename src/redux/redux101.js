import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {createStore} from "redux";


const initialState = {count:10};


//need to pass a function to cretaeStore, with default state
const reducer = (state, action) => {
  switch (action.type) {
      case "PLUS" :
          let incrementBy = (action.adjustment) ? action.adjustment : 1
          return {
            count: state.count +incrementBy
          };

      case "MINUS" :
          let decrementBy = (action.adjustment) ? action.adjustment : 1
          return {
            count: state.count - decrementBy
          };

      case "RESET" :
              return {
                count: 0
              };

      default :
          return state;
  } //switch
} //reducer function

const oneRender = () => {

          ReactDOM.render(<App />, document.getElementById("root"));

}

const store = createStore(reducer, initialState);


//objects you ca ndispatch
const plusObj = {
   type: "PLUS",
   adjustment: 1
}

const minusObj = {
   type: "MINUS",
   adjustment: 1
}
const resetObj = {
   type: "RESET"
}

const person = {
    name: "Paul",
    age:52,
    location: {
       city: "NYC",
       temp: 83
    }

}


const PersonInfo = (props) => {
      //destructuring
      const {name, age } =  props.Person
      const {city, temp:temperature = 'NOT SURE'} =  props.Person.location

      return (
        <div>
            {name} is {age}
            <br />
            And he lives in {city} where its {temperature} degrees
            <br />

        </div>

      )
}  //PersonInfo


const Buttons = (props) => {

        const addOne = () => {
            //console.log("Plus")
            store.dispatch(plusObj);
            console.log(store.getState())
            oneRender()

        }

        const subOne = () => {
            //console.log("Minus")
            store.dispatch(minusObj);
            console.log(store.getState())
            oneRender()

        }


        return (
              <div>
                  <button onClick = {addOne}>+</button>
                  <button onClick = {subOne}>-</button>
              </div>

        )

}


class App extends React.Component {

    constructor (props) {
      super(props)
   }


    render () {
      return (
            <div>
                Redux Store Counter
                <br />
                The count is {store.getState().count}
                  <br />
                <Buttons />
                <br/>
                <PersonInfo  Person={person} />
            </div>

      )
    } //render

} //class




ReactDOM.render(<App />, document.getElementById("root"));
