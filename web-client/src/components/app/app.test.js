import React from 'react';
import App from '../app/app';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });
 
describe('App Component', () => {
    it("check App input", () => {
        const appComponent = shallow(<App />);
        const buttons = jest.fn();
        buttons();
        const input = appComponent.find("button[type='button']").simulate("click");
        expect(buttons).toBeCalled();
    });
  })