import React from 'react';
import App from '../app/app';
import { mount } from 'enzyme';
 
describe('App Component', () => {
    it("check App input", () => {
        expect(mount(<App />)).toMatchSnapshot();
    });
  })

