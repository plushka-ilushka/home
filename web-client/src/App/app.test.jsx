import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('check App input', () => {
    expect(mount(<App />)).toMatchSnapshot();
  });
});
