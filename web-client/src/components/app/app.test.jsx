import React from 'react';
import { mount } from 'enzyme';
import App from './app';

describe('App Component', () => {
  it('check App input', () => {
    expect(mount(<App />)).toMatchSnapshot();
  });
});
