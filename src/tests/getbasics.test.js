import React, {} from "react";
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DealDetailsPage, {} from "../components/deal-details-page"
import renderer from 'react-test-renderer';


// use: npm test -- -u`
it('renders Deal Page correctly', () => {
  const tree = renderer
    .create(<DealDetailsPage nid={20}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});




const add = (a,b) => a+b;
test("should add two numbers", () => {

          const result = add(3,4);
          expect(result).toBe(7);


});
