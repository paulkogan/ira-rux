import React, {} from "react";
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import renderer from 'react-test-renderer';
import {shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DealDetailsPage, {} from "../components/deal-details-page"
import DealFinancialsComponent, {} from "../components/d-financials-component"

configure({ adapter: new Adapter() });


const testEntityID = 1
var deal_financials = [{value:0}]
var deal_ownership =  [{value:1}]


//console.log("Deal Financials are "+JSON.stringify(deal_financials,null,4))


// use: npm test -- -u`
test('DealsDetails Page tree reders correctly', () => {
    const tree = renderer
            .create(<DealDetailsPage nid={20}/>)
            .toJSON();
    expect(tree).toMatchSnapshot();
  });


//seems kinda simplistic
test('Financials Component shallow Reneders without crashing', () => {
          const  wrapper = shallow(
            <DealFinancialsComponent
                    entityID = {testEntityID}
                    dealFinancials = {deal_financials}
            />
          );
});




//  expect(newtransWrapper.find text()).toEqual('Off');
//  checkbox.find('input').simulate('change');
//  expect(checkbox.text()).toEqual('On');






// const dealsResults = () => {
//   const fetchURL_deal = apiHost + "/api/getdealfinancials/"+testEntityID;
//   const fetchURL_ownership = apiHost + "/api/getownership/"+testEntityID;
//
//
//     fetch(fetchURL_deal)
//      .then(results => results.json())
//      .then(data =>  {
//             deal_financials =  data
//       })
//      .then( () => fetch(fetchURL_ownership))
//      .then(results => results.json())
//      .then(data => {
//             deal_ownership = data[0]
//      })
//     // .then(return [deal_financials, deal_ownership])
//     //  .then( () => fetch(fetchURL_capcalls)  )
//     //  .then(results => results.json())
//     //  .then(data => this.setState({deal_cap_calls: data}))
//
//
// }
//
// dealResults();
