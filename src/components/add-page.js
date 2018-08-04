import React, {} from "react";
import ReactDOM, {} from "react-dom";



export default class AddPage extends React.Component {

      constructor (props) {
        super(props)
        this.state = {
              name: "Paul"
          }
      } // constructor

        //after game loades
      componentDidMount() {
                  console.log(" addPage did Mount");
      }

      render() {

            return (
                <div>
                     {"This is where you Add new Expenses, y'all."}
                </div>

              );

      } //render
}//class
