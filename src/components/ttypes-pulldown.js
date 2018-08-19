import React, {Component} from 'react';
import {formatCurrency} from './ira-utils';



//component get props
const TTypesPulldown = (props) => {

      const pullDownList = props.itemList.map(  (item) => {
                  return (
                      <option key={item.id*7} value={item.type_num}>{item.name}</option>

                  )
            });


return (
        <div >
          <select name = "selectedTType" value={props.selectedTType} onChange={props.handleChangeCB}>
              {pullDownList}
          </select>
        </div>

      )
}

export default TTypesPulldown;
