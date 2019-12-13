import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import App from '../app/app';
 
describe('ProductHeader Component', () => {
 
    it('has an h1 tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<App />);    
        var h1 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    });
   
    it('is wrapped inside a title class', () => {
        const component = ReactTestUtils.renderIntoDocument(<App />);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'title');
    })
  })