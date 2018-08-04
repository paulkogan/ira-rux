import React, {} from "react";
import ReactDOM, {} from "react-dom";



const EditPage = (props) => {

      return (
                <div>
                     I can see you editing Expense no. {props.match.params.id}
                </div>
      )

}
export default EditPage
