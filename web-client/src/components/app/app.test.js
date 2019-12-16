import React from 'react';
import App from '../app/app';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });
 
describe('App Component', () => {
    it("check App input", () => {
        const AppComponent = shallow(<App />),
            Input = AppComponent.find("button[type='button']");
        Input.simulate("click");
    });
  })