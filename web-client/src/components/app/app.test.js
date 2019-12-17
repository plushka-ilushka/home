import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('check App input', () => {
    const appComponent = shallow(<App />);
    const input = appComponent.find("button[type='button']");
    input.simulate('click');
  });
});
