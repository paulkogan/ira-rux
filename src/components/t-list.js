import React, {Component} from 'react';
import {formatCurrency} from './ira-utils';




//component get props
const TransList = (props) => {
      const displaytransactions = props.transactions.map(  (transResult) => {
                  if (!transResult.passthru_name) transResult.passthru_name = " No Passthru "
                  return (
                      <TransItem
                          transResult = {transResult}
                          key = {transResult.id}
                      />
                  )
            });



return (
        <div className = "items-list">
          <ul>
              {displaytransactions}
          </ul>
        </div>

      )
}

export default TransList;
