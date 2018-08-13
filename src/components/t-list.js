import React, {Component} from 'react';
import {formatCurrency} from './ira-utils';

const TransItem = (props) => {
      const transResult = props.transResult;
      return (
                <li>
                <div>

                      {transResult.id+".  "}
                      {transResult.investor_name+" "}
                      {transResult.investment_name+" "}
                      { (transResult.passthru_name) ? transResult.passthru_name+" " : " No Passtru "}
                      {transResult.tt_name+" "}
                      {transResult.t_wired_date+" "}
                      {formatCurrency(transResult.t_amount)}

                </div>
                </li>
      )

}


//component get props
const TransList = (props) => {
      const displaytransactions = props.transResults.map(  (transResult) => {
                  return (
                      <TransItem
                          transResult = {transResult}
                          key = {transResult.id}
                      />
                  )
            });



return (
        <div>
          <ul className ="col-md-8 list-group">
              {displaytransactions}
          </ul>
        </div>

      )
}

export default TransList;
