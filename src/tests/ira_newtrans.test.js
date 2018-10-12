import React, {} from "react";
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DealDetailsPage, {} from "../components/deal-details-page"
import NewTransactionForm, {} from "../components/new-transaction-form"
import NTFtest, {} from "../components/NTF-test"
import renderer from 'react-test-renderer';
import {shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



//seems kinda simplistic
test('New Transaction Page Reneders without crashing', () => {
  const  wrapper = shallow(<NewTransactionForm />);
});




test('New Transaction Page has an EntitiesPulldown component', () => {
  const  wrapper = mount(<NewTransactionForm />);
  wrapper.find('EntitiesPulldown').simulate('click');
  // like, it exists
  expect(wrapper.find('EntitiesPulldown').length).toEqual(1)
});




test('NTP - form starts with one select component ', () => {
  const  wrapper = mount(<NewTransactionForm />);
  console.log("PROPS of SELECT -------")
  console.log(wrapper.find('select').first().props())
  expect(wrapper.find('select').length).toEqual(1)

});

it('NTP -  changing TType to 1 (Acquisition) re-renders form with 4 select components + button', () => {
  const wrapper = mount(<NewTransactionForm />);
  wrapper.find('select').simulate('change',{target: { name: 'selectedTType', value : 1}});
  expect(wrapper.update().find('select').length).toEqual(4)
  expect(wrapper.find('input[type="submit"]').length).toBe(1);

});

test('NTP -  changing TType to 8 (Cap Call) re-renders form with 3 select components', () => {
  const wrapper = mount(<NewTransactionForm />);
  wrapper.find('select').simulate('change',{target: { name: 'selectedTType', value : 8}});
  expect(wrapper.update().find('select').length).toEqual(3)


});


test('NTP - TType Status label starts with a code of 0', () => {
  const  wrapper = mount(<NewTransactionForm />);
  const ttype_label_before = wrapper.find('div.ttype-code').text()
  expect(ttype_label_before).toEqual('(0)')
});



test('NTP - changing TType updates page label ', () => {
  const  wrapper = mount(<NewTransactionForm />);
  const ttype_label_before = wrapper.find('div.ttype-code').text()
  expect(ttype_label_before).toEqual('(0)')
  wrapper.find('select').simulate('change',{target: {name: 'selectedTType', value : 6}});
  const ttype_label_after = wrapper.update().find('div.ttype-code').text()
  expect(ttype_label_after).toEqual('(6)')
});


test('NTP -  changing TType updates prop values of Select component', () => {
  const wrapper = mount(<NewTransactionForm />);
  wrapper.find('select').simulate('change',{target: { name: 'selectedTType', value : 2}});
  console.log("PROPS of SELECT after Change with simulate-------")
  console.log(wrapper.find('select').first().props())
  expect(wrapper.find('select').first().props().value).toEqual(2);
});




test('NTP  - STATE 1 - basic STATE configured properly ', () => {
  const  wrapper = mount(<NTFtest />);
  wrapper.setState({selectedInvestor:99})
  expect(wrapper.state('selectedTType')).toEqual(0);
  expect(wrapper.state('selectedInvestor')).toEqual(5);

});



test('NTP  - STATE 2 - onChange updates STATE (direct) ', () => {
   const  wrapper = mount(<NTFtest />);
   const wrapperInstance = wrapper.instance();
   expect(wrapper.state('selectedTType')).toEqual(0);
   wrapperInstance.onChange({target: { name: 'selectedTType', value : 8}});
   expect(wrapper.state('selectedTType')).toEqual(8);

});



test('NTP  - STATE 3 - onChange updates STATE (simulate) ', () => {
   const  wrapper = mount(<NTFtest />);
   expect(wrapper.state('selectedInvestor')).toEqual(5);
   wrapper.find('select').simulate('change',{target: { name: 'selectedInvestor', value : 7}});
   expect(wrapper.state('selectedInvestor')).toEqual(7);

});


//wont register asa change
test('NTP - SPY 10 -  Calls onChange - simulate ', () => {
  const wrapper = mount(<NTFtest />);
  const wrapperInstance = wrapper.instance();
  const spy = jest.spyOn(wrapperInstance, 'onChange')
  wrapperInstance.find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
  expect(spy).toHaveBeenCalled();
});



test('NTP -  SPY 11 - Calling onChange directly from Instance ', () => {
  const wrapper = mount(<NTFtest />);
  const wrapperInstance = wrapper.instance();
  const spy = jest.spyOn(wrapperInstance, 'onChange')
  wrapperInstance.onChange({target: { name: 'selectedTType', value : 4}});
  //wrapper.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
  expect(spy).toHaveBeenCalled();
});


//========  PUT ASIDE ===================================

// test('NTP -  SPY 7 -- Calling onChange by using ref and calling local', () => {
//   const wrapper = mount(<NTFtest onRef={ref => (this.child = ref)} />
//   );
//   const wrapperInstance = wrapper.instance();
//   const spy = jest.spyOn(child, 'onChange')
//   child.onChange({target: { name: 'selectedTType', value : 4}});
//   //wrapper.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   expect(spy).toHaveBeenCalled();
// });
//
// test('NTP -  SPY 8 -- Calling onChange by using ref and calling instance', () => {
//   const wrapper = mount(<NTFtest onRef={ref => (this.child = ref)} />
//   );
//   const wrapperInstance = wrapper.instance();
//   const spy = jest.spyOn(child, 'onChange')
//   wrapperInstance.onChange({target: { name: 'selectedTType', value : 4}});
//   //wrapper.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   expect(spy).toHaveBeenCalled();
// });
//
//




// test('NTP -  Calls onChange NO-SPY 5 - instance spy & call explicityly ', () => {
//   const wrapper = mount(<NTFtest />);
//   const wrapperInstance = wrapper.instance();
//   const spy = jest.spyOn(wrapperInstance , 'onChange').mockImplementaiton(jest.fn())
//   //jest.spyOn(wrapperInstance , 'onChange')
//   //wrapperInstance.componentDidMount();
//   //wrapperInstance.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//  //or call directly
//   wrapperInstance.onChange({target: { name: 'selectedTType', value : 8}});
//   console.log("PROPS of SELECT after change direct-------")
//   console.log(wrapperInstance.find('select').first().props())
//   //expect(NewTransactionForm.prototype.onChange).toHaveBeenCalled();
//   expect(wrapperInstance.onChange).toHaveBeenCalled();
//   //NewTransactionForm.prototype.onChange.mockRestore();
// });
//
//
//
// test('NTP -  Calls onChange SPY 6 - spy on func.prototype', () => {
//   const wrapper = mount(<NTFtest />);
//   const wrapperInstance = wrapper.instance();
//   //const spy = jest.spyOn(wrapperInstance , 'onChange').mockImplementaiton(jest.fn())
//   jest.spyOn(NewTransactionForm.prototype, 'onChange')
//   wrapperInstance.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   // console.log("PROPS of SELECT after Change with onChange-------")
//   // console.log(wrapperInstance.find('select').first().props())
//   expect(NewTransactionForm.prototype.onChange).toHaveBeenCalled();
//   NewTransactionForm.prototype.onChange.mockRestore();
// });









// test('NTP -  Calls onChange SPY 1 - mount & spy-wrapper & update', () => {
//   const wrapper = mount(<NewTransactionForm />);
//   const wrapperInstance = wrapper.instance();
//   const wrapperInstance = mount(<NewTransactionForm />);.instance();
//   const spy = jest.spyOn(wrapperInstance, 'onChange')
//
//
//   wrapperInstance.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   // console.log("PROPS of SELECT after Change with onChange-------")
//   // console.log(wrapperInstance.find('select').first().props())
//   expect(spy).toHaveBeenCalled();
// });
//
//
// test('NTP -  Calls onChange SPY 2 - mount & spy-prototype & update', () => {
//
//
//   const spy = jest.spyOn(NewTransactionForm.prototype, 'onChange')
//   const wrapper = mount(<NewTransactionForm />);
//   const wrapperInstance = wrapper.instance();
//   //wrapper.find('select').simulate('change');
//
//   wrapperInstance.update().find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   // console.log("PROPS of SELECT after Change with onChange-------")
//   // console.log(wrapperInstance.find('select').first().props())
//   expect(spy).toHaveBeenCalled();
// });
//
//
//
//
// test('NTP -  Calls onChange SPY 3 shallow - spy Instance', () => {
//
//   const wrapper = shallow(<NewTransactionForm />);
//   const wrapperInstance = wrapper.instance();
//   const spy = jest.spyOn(wrapperInstance, 'onChange')
//
//   wrapperInstance.find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   // console.log("PROPS of SELECT after Change with onChange-------")
//   // console.log(wrapperInstance.find('select').first().props())
//   expect(spy).toHaveBeenCalled();
// });
//
//
// test('NTP -  Calls onChange SPY 4 shallow - spy Prototype', () => {
//
//   const wrapper = shallow(<NewTransactionForm />);
//   const wrapperInstance = wrapper.instance();
//   const spy = jest.spyOn(NewTransactionForm.prototype, 'onChange')
//
//   wrapperInstance.find('select').simulate('change',{target: { name: 'selectedTType', value : 3}});
//   // console.log("PROPS of SELECT after Change with onChange-------")
//   // console.log(wrapperInstance.find('select').first().props())
//   expect(spy).toHaveBeenCalled();
// });
//
//
//
// test('NTP has one Select - show HTML ', () => {
//   const  wrapper = mount(<NewTransactionForm />);
//   wrapper.find('select').html()
//   expect(wrapper.find('select').length).toEqual(1)
//   //console.log("Here is select HTML :"+ wrapper.find('select').html())
//
// });
//
//
//
//
//
//










// test('NTP  - basic reads State through instance and Mount ', () => {
//   const  wrapper = mount(<NewTransactionForm />);
//    const wrapperInstance = wrapper.instance();
//    wrapperInstance.componentDidMount();
//   //componentInstance.componentWillMount();
//   //returning UNDEFINED - so how do you actually get state?????
//   console.log("Here is STATE with Instanece-------")
//     console.log(wrapperInstance.state())
//   expect(wrapperInstance.state.selectedInvestor).toEqual(5);
// });



// test('New Transaction Page  - Test reads State - mount & Instance', () => {
//   const  wrapper = mount(<NewTransactionForm />);
//   const wrapperInstance = wrapper.instance();
//   wrapperInstance.componentDidMount();
//   //componentInstance.componentWillMount();
//   //returning UNDEFINED - so how do you actually get state?????
//
//   expect(wrapperInstance.state('selectedInvestor')).toEqual(5);
// });



// test('New Transaction Page  - Instance State changes with Pulldown', () => {
//   const  wrapper = mount(<NewTransactionForm />);
//   const wrapperInstance = wrapper.instance();
//   //componentInstance.componentDidMount();
//   //componentInstance.componentWillMount();
//   //returning UNDEFINED - so how do you actually get state?????
//
//   expect(wrapperInstance.state.selectedTType).toEqual(0);
//   wrapper.find('select').simulate('change',{target: { value : 1}});
//   expect(wrapper.state.selectedTType).toEqual(1);
// });




// const wrapper = mount(<MyComponent />);
// expect(wrapper.state().foo).to.equal(10);
// expect(wrapper.state('foo')).to.equal(10);


// expect(wrapper.state().foo).to.equal(10);
// expect(wrapper.state('foo')).to.equal(10);




//===========

// test('New Transaction Page Has a Table', () => {
//
//   const  wrapper = shallow(<NewTransactionForm />);
//   expect( wrapper.contains(<Table></Table>)).to.equal(true);
//
//
// });
//
//
//
// test('New Transaction Page renders a TableCell', () => {
//
//   const  wrapper = shallow(<NewTransactionForm />);
//   expect(wrapper.containsAnyMatchingElements(
//     [
//         <TableCell>Transaction Type:</TableCell>
//     ]
//   )).to.equal(true);
//
//
// });



// // use: npm test -- -u`
// test('renders Deal Page correctly', () => {
//   const tree = renderer
//     .create(<DealDetailsPage nid={20}/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });





//  expect(newtransWrapper.find text()).toEqual('Off');
//  checkbox.find('input').simulate('change');
//  expect(checkbox.text()).toEqual('On');
