import React, {Component} from 'react';
import {formatCurrency} from './ira-utils';

const TransItem = (props) => {

      const {id, investor_name, investment_name, passthru_name, tt_name, t_wired_date, t_amount} = props.transResult;

      return (
        <div>
            <li>
                  {id+".  "}
                  {investor_name+" "}
                  {investment_name+" "}
                  {passthru_name+" "}
                  {tt_name+" "}
                  {t_wired_date+" "}
                  {formatCurrency(t_amount)}
              </li>
        </div>

      )

}


//component get props
const TransList = (props) => {
      const displaytransactions = props.transResults.map(  (transResult) => {
                  if (!transResult.passthru_name) transResult.passthru_name = " No Passthru "
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
